from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Song

song_routes = Blueprint('songs', __name__)

song_routes.route('/')
def all_songs():
    songs = Song.query.all()
    print(songs)

    return {"songs": [song.to_dict()] for song in songs}
