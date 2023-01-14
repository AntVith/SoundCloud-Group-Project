from app.models import db, Song, environment, SCHEMA

def seed_songs():
  demo_song = Song(
    username='Demo', song_title='song_title1', genre='genre1', cover_photo='cover_photo1', song_file='song_file1')
  demo_song2 = Song(
    username='marnie', song_title='song_title2', genre='genre2', cover_photo='cover_photo2',song_file='song_file2')
  demo_song3 = Song(
    username='bobbie',song_title='song_title3', genre='genre3', cover_photo='cover_photo3',song_file='song_file3')

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
