from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Song, Comment, likes, db

song_routes = Blueprint('songs', __name__)
# get all songs for homepage
@song_routes.route('/')
def all_songs():
    songs = Song.query.all()
    #print(list(songs))

    return {'songs' :[song.to_dict() for song in songs]} , 200
# get all comments based on songID for sond detials page
@song_routes.route('/<int:id>/comments')
def all_comments(id):
    comments = Comment.query.filter(Comment.song_id == id)

    return {'comments' :[comment.to_dict() for comment in comments]} , 200
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
