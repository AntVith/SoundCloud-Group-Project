from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Song, Comment

song_routes = Blueprint('songs', __name__)

@song_routes.route('/')
def all_songs():
    songs = Song.query.all()
    #print(list(songs))

    return {'songs' :[song.to_dict() for song in songs]} , 200

@song_routes.route('/<int:id>/comments')
def all_comments(id):
    comments = Comment.query.filter(Comment.song_id == id)

    return {'comments' :[comment.to_dict() for comment in comments]} , 200

@song_routes.route('/<int:id>')
def song_by_ID(id):

    current_song = Song.query.get(id)

    if not current_song:
        return {"errors": "Song not found"}, 404

    print(current_song)
    return {'song': current_song.to_dict()} , 200
