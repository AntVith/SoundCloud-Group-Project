from app.models import db, Song, environment, SCHEMA

def seed_songs():
  demo_song = Song(
    user_id = 1, song_title='Melody', genre='Instrumental', cover_photo='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/rap-mixtape-cover-art-design-template-ca79baae8c3ee8f1112ae28f7bfaa1e0_screen.jpg?ts=1635176249', song_file='https://soundcrook.s3.amazonaws.com/baf4dd2de4c44c518de7bc415ea9599c.mp3')
  demo_song2 = Song(
    user_id = 2, song_title='Marnie\'s Masterpiece', genre='Instrumental', cover_photo='https://mir-s3-cdn-cf.behance.net/project_modules/hd/602f4731226337.5646928c3633f.jpg',song_file='https://soundcrook.s3.amazonaws.com/baf4dd2de4c44c518de7bc415ea9599c.mp3')
  demo_song3 = Song(
    user_id = 3, song_title='Guitar', genre='Instrumental', cover_photo='https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1607362705516-R5Q22H4FVIVPNMW8OWD7/SamSpratt_KidCudi_ManOnTheMoon3_AlbumCover_Web.jpg?format=1500w',song_file='https://soundcrook.s3.amazonaws.com/baf4dd2de4c44c518de7bc415ea9599c.mp3')
  demo_song4 = Song(
    user_id = 1, song_title='Classical Melody', genre='Classical', cover_photo='https://thefader-res.cloudinary.com/private_images/w_760,c_limit,f_auto,q_auto:best/jj_tde_absoul_selection_002_RETOUCHED_v1__yqlnqq/ab-soul-unveils-herbert-cover-art-and-tracklist.jpg', song_file='https://soundcrook.s3.amazonaws.com/baf4dd2de4c44c518de7bc415ea9599c.mp3')
  demo_song5 = Song(
    user_id = 2, song_title='Marnie\'s Masterpiece', genre='Classical', cover_photo='https://mir-s3-cdn-cf.behance.net/project_modules/hd/602f4731226337.5646928c3633f.jpg',song_file='https://soundcrook.s3.amazonaws.com/baf4dd2de4c44c518de7bc415ea9599c.mp3')
  demo_song6 = Song(
    user_id = 3, song_title='Guitar', genre='Classical', cover_photo='https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1607362705516-R5Q22H4FVIVPNMW8OWD7/SamSpratt_KidCudi_ManOnTheMoon3_AlbumCover_Web.jpg?format=1500w',song_file='https://soundcrook.s3.amazonaws.com/baf4dd2de4c44c518de7bc415ea9599c.mp3')
  demo_song7 = Song(
    user_id = 4, song_title='Get Lucky', genre='Disco', cover_photo='https://upload.wikimedia.org/wikipedia/en/7/71/Get_Lucky.jpg',song_file='Daft Punk - Get Lucky (Official Audio) ft. Pharrell Williams, Nile Rodgers.mp3')
  demo_song8 = Song(
    user_id = 4, song_title='Get Lucky Remix', genre='EDM', cover_photo='https://upload.wikimedia.org/wikipedia/en/7/71/Get_Lucky.jpg',song_file='Daft Punk - Get Lucky (Official Audio) ft. Pharrell Williams, Nile Rodgers.mp3')
  demo_song9 = Song(
    user_id = 1, song_title='New Melody', genre='Instrumental', cover_photo='https://cdn.ebaumsworld.com/2022/07/28/105904/87226199/bear.jpg', song_file='https://soundcrook.s3.amazonaws.com/baf4dd2de4c44c518de7bc415ea9599c.mp3')
  demo_song10 = Song(
    user_id = 2, song_title='Marnie\'s Newest', genre='Instrumental', cover_photo='https://cdn.ebaumsworld.com/2022/07/28/105856/87226198/baz.jpg',song_file='https://soundcrook.s3.amazonaws.com/baf4dd2de4c44c518de7bc415ea9599c.mp3')
  demo_song11 = Song(
    user_id = 3, song_title='Guitar Again', genre='Instrumental', cover_photo='https://i.pinimg.com/236x/33/0f/f1/330ff1481dbc3f0dfe1fa7e7710bd213.jpg')
  demo_song12 = Song(
    user_id = 1, song_title='New Classical Melody', genre='Classical', cover_photo='https://pbs.twimg.com/media/FYrhdfqX0AImAaB?format=jpg&name=large', song_file='https://soundcrook.s3.amazonaws.com/baf4dd2de4c44c518de7bc415ea9599c.mp3')
  demo_song13 = Song(
    user_id = 2, song_title='Newest Classic', genre='Classical', cover_photo='https://cdn.ebaumsworld.com/2022/07/28/105856/87226198/baz.jpg',song_file='https://soundcrook.s3.amazonaws.com/baf4dd2de4c44c518de7bc415ea9599c.mp3')
  demo_song14 = Song(
    user_id = 3, song_title='Classical Guitar Again', genre='Classical', cover_photo='https://pleated-jeans.com/wp-content/uploads/2023/05/pictures-that-could-be-album-covers-reddit-3.jpg',song_file='https://soundcrook.s3.amazonaws.com/baf4dd2de4c44c518de7bc415ea9599c.mp3')
  demo_song15 = Song(
    user_id = 1, song_title='Sonata', genre='Instrumental', cover_photo='https://preview.redd.it/md0e6id405g61.jpg?auto=webp&s=ec118d3354b560f80e1a4a8c7ac2654a666e0a58', song_file='https://soundcrook.s3.amazonaws.com/baf4dd2de4c44c518de7bc415ea9599c.mp3')
  demo_song16 = Song(
    user_id = 1, song_title='Classical Sonata', genre='Classical', cover_photo='https://cdn.ebaumsworld.com/2022/07/28/105921/87226203/cra.jpg', song_file='https://soundcrook.s3.amazonaws.com/baf4dd2de4c44c518de7bc415ea9599c.mp3')
  demo_song17 = Song(
    user_id = 2, song_title='Liminal', genre='Instrumental', cover_photo='https://i.pinimg.com/236x/84/13/07/841307884e22ced3cd2d5df91165759a.jpg',song_file='https://soundcrook.s3.amazonaws.com/baf4dd2de4c44c518de7bc415ea9599c.mp3')
  demo_song18 = Song(
    user_id = 2, song_title='Liminal', genre='Classical', cover_photo='https://i.pinimg.com/236x/84/13/07/841307884e22ced3cd2d5df91165759a.jpg',song_file='https://soundcrook.s3.amazonaws.com/baf4dd2de4c44c518de7bc415ea9599c.mp3')
  demo_song19 = Song(
    user_id = 3, song_title='Wowzers', genre='Classical', cover_photo='https://i.redd.it/ac2d9zazuee91.jpg',song_file='https://soundcrook.s3.amazonaws.com/baf4dd2de4c44c518de7bc415ea9599c.mp3')
  demo_song20 = Song(
    user_id = 3, song_title='Wowzers Instrumental', genre='Instrumental', cover_photo='https://i.redd.it/ac2d9zazuee91.jpg',song_file='https://soundcrook.s3.amazonaws.com/baf4dd2de4c44c518de7bc415ea9599c.mp3')
  demo_song21 = Song(
    user_id = 1, song_title='Dril Demo', genre='Drill', cover_photo='https://cdn.ebaumsworld.com/2022/07/28/110045/87226213/red.jpg', song_file='https://soundcrook.s3.amazonaws.com/baf4dd2de4c44c518de7bc415ea9599c.mp3')
  demo_song22 = Song(
    user_id = 2, song_title='Marnie\'s Dril', genre='Drill', cover_photo='https://cdn.ebaumsworld.com/2022/07/28/110156/87226221/star.jpg',song_file='https://soundcrook.s3.amazonaws.com/baf4dd2de4c44c518de7bc415ea9599c.mp3')
  demo_song23 = Song(
    user_id = 3, song_title='Peach', genre='Drill', cover_photo='https://i.pinimg.com/236x/b0/e9/dc/b0e9dce6e6992a59d101950e6735d2bf.jpg',song_file='https://soundcrook.s3.amazonaws.com/baf4dd2de4c44c518de7bc415ea9599c.mp3')
  demo_song24 = Song(
    user_id = 1, song_title='Drillin\'', genre='Drill', cover_photo='https://pleated-jeans.com/wp-content/uploads/2023/05/pictures-that-could-be-album-covers-reddit-5.jpg', song_file='https://soundcrook.s3.amazonaws.com/baf4dd2de4c44c518de7bc415ea9599c.mp3')
  demo_song25 = Song(
    user_id = 2, song_title='Liminal Drill', genre='Drill', cover_photo='https://i.pinimg.com/236x/84/13/07/841307884e22ced3cd2d5df91165759a.jpg',song_file='https://soundcrook.s3.amazonaws.com/baf4dd2de4c44c518de7bc415ea9599c.mp3')
  demo_song26 = Song(
    user_id = 3, song_title='Forgot My Sunglasses', genre='Drill', cover_photo='https://i.pinimg.com/736x/d2/a6/a2/d2a6a2b62488f99ff5fee22bc4f7ac07.jpg',song_file='https://soundcrook.s3.amazonaws.com/baf4dd2de4c44c518de7bc415ea9599c.mp3')
  demo_song27 = Song(
    user_id = 3, song_title='Pulse', genre='Drill', cover_photo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVtt106AAY2hI3QlrwSNN9rfIWQMAz_ejFHg&usqp=CAU',song_file='https://soundcrook.s3.amazonaws.com/baf4dd2de4c44c518de7bc415ea9599c.mp3')



  db.session.add(demo_song)
  db.session.add(demo_song2)
  db.session.add(demo_song3)
  db.session.add(demo_song4)
  db.session.add(demo_song5)
  db.session.add(demo_song6)
  db.session.add(demo_song7)
  db.session.add(demo_song8)
  db.session.add(demo_song9)
  db.session.add(demo_song10)
  db.session.add(demo_song11)
  db.session.add(demo_song12)
  db.session.add(demo_song13)
  db.session.add(demo_song14)
  db.session.add(demo_song15)
  db.session.add(demo_song16)
  db.session.add(demo_song17)
  db.session.add(demo_song18)
  db.session.add(demo_song19)
  db.session.add(demo_song20)
  db.session.add(demo_song21)
  db.session.add(demo_song22)
  db.session.add(demo_song23)
  db.session.add(demo_song24)
  db.session.add(demo_song25)
  db.session.add(demo_song26)
  db.session.add(demo_song27)
  db.session.commit()


def undo_songs():
  if environment == "production":
    db.session.execute(f"TRUNCATE table {SCHEMA}.songs RESTART IDENTITY CASCADE;")
  else:
    db.session.execute("DELETE FROM songs")

  db.session.commit()
