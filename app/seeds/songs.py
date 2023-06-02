from app.models import db, Song, environment, SCHEMA

def seed_songs():
  demo_song = Song(
    user_id = 1, song_title='Melody', genre='Classical', cover_photo='https://soundcrook.s3.us-west-1.amazonaws.com/download.jpeg', song_file='https://soundcrook.s3.amazonaws.com/baf4dd2de4c44c518de7bc415ea9599c.mp3')
  demo_song2 = Song(
    user_id = 2, song_title='Ice Spice Freestyle', genre='Hip-Hop', cover_photo='https://soundcrook.s3.us-west-1.amazonaws.com/download.jpeg',song_file='https://soundcrook.s3.amazonaws.com/baf4dd2de4c44c518de7bc415ea9599c.mp3')
  demo_song3 = Song(
    user_id = 3, song_title='Guitar', genre='Instrumental', cover_photo='https://soundcrook.s3.us-west-1.amazonaws.com/download.jpeg',song_file='https://soundcrook.s3.amazonaws.com/baf4dd2de4c44c518de7bc415ea9599c.mp3')

  db.session.add(demo_song)
  db.session.add(demo_song2)
  db.session.add(demo_song3)
  db.session.commit()


def undo_songs():
  if environment == "production":
    db.session.execute(f"TRUNCATE table {SCHEMA}.songs RESTART IDENTITY CASCADE;")
  else:
    db.session.execute("DELETE FROM songs")

  db.session.commit()


  
