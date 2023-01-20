from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Song, Comment, likes, db, User
from ..forms.song_form import SongForm
from ..forms.comment_form import CommentForm
from ..forms.like_form import LikeForm
from flask_login import current_user
from app.aws_functionality import (
    upload_file_to_s3, allowed_file, get_unique_filename)

song_routes = Blueprint('songs', __name__)
# get all songs for homepage
@song_routes.route('/')
def all_songs():
    songs = Song.query.all()
    #print(list(songs))

    return {'songs' :[song.to_dict() for song in songs]} , 200


#create a song
@song_routes.route('/', methods = ['POST'])
@login_required
def new_song():
    form = SongForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print('made it here')


    if "songfile" not in request.files:
        print('song file took an L')
        return {"errors": "song required"}, 400

    if "coverphoto" not in request.files:
        print("!!!!", request.files)
        print('cover photo took an L')
        return {"errors": "photo required"}, 400

    print('hello')
    coverphoto = request.files["coverphoto"]
    songfile = request.files["songfile"]

    if not allowed_file(songfile.filename):
        return {"errors": "file type not permitted"}, 400

    if not allowed_file(coverphoto.filename):
        return {"errors": "file type not permitted"}, 400

    print('pre validation--------')

    if form.validate_on_submit():
        print('past validation--------')
        coverphoto.filename = get_unique_filename(coverphoto.filename)
        songfile.filename = get_unique_filename(songfile.filename)

        # print('str version' , str(songfile))
        # print('file', songfile)
        upload2 = upload_file_to_s3(coverphoto)
        upload = upload_file_to_s3(songfile)
        print('upload--------', upload)
        if "url" not in upload:
            # if the dictionary doesn't have a url key
            # it means that there was an error when we tried to upload
            # so we send back that error message
            return upload, 400

        url = upload["url"]
        url2 = upload2["url"]
        # flask_login allows us to get the current user from the request
        new_song = Song()
        form.populate_obj(new_song)
        new_song.song_file = url
        new_song.cover_photo = url2

        db.session.add(new_song)
        db.session.commit()
        return new_song.to_dict(), 201
    if form.errors:
        return {
            "errors": form.errors
        }, 400




    # if form.validate_on_submit():
    #     new_song = Song()
    #

    #     db.session.add(new_song)
    #     db.session.commit()
    #     return new_song.to_dict(), 201

    # if form.errors:
    #     return {
    #         "errors": form.errors
    #     }, 400



# get all comments based on songID for song detials page
@song_routes.route('/<int:id>/comments')
def all_comments(id):
    comments = Comment.query.filter(Comment.song_id == id)

    return {'comments' :[comment.to_dict() for comment in comments]} , 200

#post comment
@song_routes.route('/<int:id>/comments/new', methods=['POST'])
@login_required
def post_comment(id):

    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        new_comment = Comment()
        form.populate_obj(new_comment)

        db.session.add(new_comment)
        db.session.commit()

        return new_comment.to_dict(), 200


    if form.errors:
        return {
            "errors": form.errors
        }, 400


    # else:
    #     return form.errors


#update comment
@song_routes.route('/comments/<int:comment_id>', methods=['PUT'])
@login_required
def update_comment(comment_id):


    old_comment = Comment.query.get(comment_id)
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        form.populate_obj(old_comment)

        db.session.add(old_comment)
        db.session.commit()
        return old_comment.to_dict(), 201
    else:
        return form.errors



#delete comment
@song_routes.route('/comments/<int:comment_id>', methods=['DELETE'])
@login_required
def delete_comment(comment_id):

    print('comment_id', comment_id)
    comment = Comment.query.get(comment_id)
    print('comment------------', comment)

    db.session.delete(comment)
    db.session.commit()

    return {"message": 'successfully deleted'}




#get a song by ID for song details page
@song_routes.route('/<int:id>')
def song_by_ID(id):

    current_song = Song.query.get(id)

    if not current_song:
        return {"errors": "Song not found"}, 404

    print(current_song)
    return {'song': current_song.to_dict()} , 200


# get all likes for a song by song-id
@song_routes.route('/<int:id>/likes')
def all_likes(id):
    all_likes = db.session.execute(db.select(likes)).fetchall()

    filtered = filter(lambda like: like[1] == id, all_likes)

    # turns filtered data to a dict
    dict_version = dict(filtered)

    #gets the values from that dict, view object only tho
    valuesI = dict_version.values()

    # turns the view object to a list then sums the length(which is total amount of likes)
    total_likes = len(list(valuesI))
    return {'likes': total_likes}, 200


# update song by id
@song_routes.route('/<int:song_id>', methods=['PUT'])
@login_required
def update_song(song_id):

    current_song = Song.query.get(song_id)
    form = SongForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        form.populate_obj(current_song)
        db.session.add(current_song)
        db.session.commit()
        return current_song.to_dict(), 201

# create like for a song by song-id
@song_routes.route('/<int:id>/likes', methods=['POST'])
def post_like(id):
    form = LikeForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():

        user_id = form.users.data
        song_id = form.songs.data

        selected_song = Song.query.get(song_id)
        selected_user = User.query.get(user_id)

        if selected_user in selected_song.song_likes:
            selected_song.song_likes.remove(selected_user)
            db.session.commit()
            return all_likes(id)
        else:
            selected_song.song_likes.append(selected_user)
            db.session.commit()
            return all_likes(id)

# delete song by id
@song_routes.route('/<int:song_id>', methods=['DELETE'])
@login_required
def delete_song(song_id):
    deleted_song = Song.query.get(song_id)
    db.session.delete(deleted_song)
    db.session.commit()

    return {"message": 'successfully deleted'}
