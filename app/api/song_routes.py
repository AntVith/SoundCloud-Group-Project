from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Song, Comment, likes, db, User
from ..forms.song_form import SongForm
from ..forms.comment_form import CommentForm
from ..forms.like_form import LikeForm

song_routes = Blueprint('songs', __name__)
# get all songs for homepage
@song_routes.route('/')
def all_songs():
    songs = Song.query.all()
    #print(list(songs))

    return {'songs' :[song.to_dict() for song in songs]} , 200


#create a song
@song_routes.route('/', methods = ['POST'])
def new_song():
    form = SongForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_song = Song()
        form.populate_obj(new_song)

        db.session.add(new_song)
        db.session.commit()
        return new_song.to_dict(), 201

    if form.errors:
        return {
            "errors": form.errors
        }, 400



# get all comments based on songID for sond detials page
@song_routes.route('/<int:id>/comments')
def all_comments(id):
    comments = Comment.query.filter(Comment.song_id == id)

    return {'comments' :[comment.to_dict() for comment in comments]} , 200


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
