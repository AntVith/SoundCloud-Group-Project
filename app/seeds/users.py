from app.models import db, User, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name='DemoFName', last_name='DemoLName', username='Demoman', bio='A superstar',profile_photo='https://ih1.redbubble.net/image.3632767945.6866/st,small,845x845-pad,1000x1000,f8f8f8.u23.jpg', email='demo@aa.io', password='password')
    marnie = User(
       first_name='marnieFName', last_name='marnieLName',username='marnie', bio='One of the best of all time',profile_photo='https://m.media-amazon.com/images/M/MV5BMTYyNDE4MTc3MV5BMl5BanBnXkFtZTgwNjQzMTU3MTE@._V1_.jpg', email='marnie@aa.io', password='password')
    bobbie = User(
        first_name='bobbieFName', last_name='bobbieLName',username='bobbie', bio='Full of soul',profile_photo='https://static.onecms.io/wp-content/uploads/sites/6/2015/12/6c_2_20r.jpg', email='bobbie@aa.io', password='password')
    daft_punk4 = User(
        first_name='Daft', last_name='Punk',username='Daft Punk', bio='Legends',profile_photo='https://upload.wikimedia.org/wikipedia/commons/d/db/Daft_Punk_in_2013.jpg', email='daftpunk@aa.io', password='password')
    stevie_wonder5 = User(
        first_name='Stevie', last_name='Wonder',username='Stevie Wonder', bio='One of the all-time greats',profile_photo='https://i.scdn.co/image/c59faacbed7aa770266bad048660810eca204108', email='steviewonder@aa.io', password='password')
    aretha_franklin6 = User(
        first_name='Aretha', last_name='Franklin',username='Aretha Franklin', bio='One of the all-time great soul singers',profile_photo='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Aretha_Franklin_1968.jpg/800px-Aretha_Franklin_1968.jpg', email='arethafranklin@aa.io', password='password')
    otis_redding7 = User(
        first_name='Otis', last_name='Redding',username='Otis Redding', bio='One of the all-time great soul singers',profile_photo='https://wpr-public.s3.amazonaws.com/wprorg/articles/2017/12/1200px-otis-redding-2.png', email='otisredding@aa.io', password='password')
    temptations8 = User(
        first_name='Temptations', last_name='Temptations',username='The Temptations', bio='One of the all-time great soul groups',profile_photo='https://upload.wikimedia.org/wikipedia/commons/5/50/The-Temptations_%281964_publicity_photo_by_Kriegsmann%29.jpg', email='thetemptations@aa.io', password='password')
    jackie_wilson9 = User(
        first_name='Jackie', last_name='Wilson',username='Jackie Wilson', bio='One of the all-time great soul singers',profile_photo='https://cdn.britannica.com/33/115133-050-BCE87FCA/Jackie-Wilson.jpg', email='jackiewilson@aa.io', password='password')
    rolling_stones10 = User(
        first_name='Rolling Stones', last_name='Rolling Stones',username='Rolling Stones', bio='One of the all-time great rock groups',profile_photo='https://cdn.britannica.com/41/197341-050-4859B808/The-Rolling-Stones-Bill-Wyman-Keith-Richards-1964.jpg', email='rollingstones@aa.io', password='password')
    lcd_soundsystem11 = User(
        first_name='LCD Soundsystem', last_name='LCD Soundsystem',username='LCD Soundsystem', bio='Absolutely sensational artists',profile_photo='https://cdn.shopify.com/s/files/1/1932/2503/articles/lcd-soundsystem-album-logo-nina-egyptiana_1200x1200.jpg?v=1536678192', email='lcdsoundstystem@aa.io', password='password')
    arcade_fire12 = User(
        first_name='Arcade Fire', last_name='Arcade Fire',username='Arcade Fire', bio='Absolutely sensational artists',profile_photo='https://i.guim.co.uk/img/media/da207ed976e1b316bab8a8ae547b6dbdc992911f/504_0_4674_2805/master/4674.jpg?width=1200&quality=85&auto=format&fit=max&s=e5cf670587cee47a4c632382b95ba5ca', email='arcadefire@aa.io', password='password')
    spoon13 = User(
        first_name='Spoon', last_name='Spoon',username='Spoon', bio='Absolutely sensational artists',profile_photo='https://imengine.prod.srp.navigacloud.com/?uuid=D9FD5162-51C9-4F2B-8C25-8E99ACA38CF3&type=primary&q=72&width=1024', email='spoon@aa.io', password='password')
    m83_14 = User(
        first_name='M83', last_name='M83',username='M83', bio='Absolutely sensational artists',profile_photo='https://upload.wikimedia.org/wikipedia/commons/8/85/M83_performing_in_Boston%2C_2016.jpg', email='m83@aa.io', password='password')
    weeknd15 = User(
        first_name='The', last_name='Weeknd',username='The Weeknd', bio='Thrilling R&B superstar',profile_photo='https://www.theweeknd.com/files/2021/10/photo_202110_07_GENERAL-BRIANZIFF_THEWEEKND_800_1-WITH-BEAUTY-crop-1.jpeg', email='theweeknd@aa.io', password='password')
    miguel16 = User(
        first_name='Miguel', last_name='Miguel',username='Miguel', bio='Thrilling R&B superstar',profile_photo='https://vz.cnwimg.com/thumb-400x400/wp-content/uploads/2014/01/mig.jpg', email='miguel@aa.io', password='password')
    angelo17 = User(
        first_name='D\'angelo', last_name='D\'angelo',username='D\'angelo', bio='Thrilling R&B superstar',profile_photo='https://i.scdn.co/image/c69197fa9d01ec73e2617525b920e76b550ba2e2', email='d\'angelo@aa.io', password='password')
    labrinth18 = User(
        first_name='Labrinth', last_name='Labrinth',username='Labrinth', bio='Thrilling R&B superstar',profile_photo='https://i.pinimg.com/736x/f8/bc/0c/f8bc0c1cefee9e6836ac390e3fcf76c2.jpg', email='labrinth@aa.io', password='password')
    doja_cat19 = User(
        first_name='Doja', last_name='Cat',username='Doja Cat', bio='Thrilling R&B superstar',profile_photo='https://i.scdn.co/image/ab6761610000e5eb727a2ac15afe659be999beba', email='dojacat@aa.io', password='password')
    jay_z20 = User(
        first_name='Jay', last_name='Z',username='Jay Z', bio='Legendary Rapper',profile_photo='https://www.usnews.com/object/image/00000188-01d2-de4a-afed-21fe33cd0000/tag%3Areuters.com%2C2023%3Anewsml_LYNXMPEJ480SF%3A12023-05-09T184035Z_1_LYNXMPEJ480SF_RTROPTP_3_PEOPLE-DJ-KHALED-STAR.JPG?update-time=1683661046000&size=responsive640', email='jayz@aa.io', password='password')
    lil_wayne21 = User(
        first_name='Lil', last_name='Wayne',username='Lil Wayne', bio='Legendary Rapper',profile_photo='https://www.highsnobiety.com/static-assets/thumbor/vuxN-C4Q8FCy-ImfU27f5xNrq5Y=/1200x720/www.highsnobiety.com/static-assets/wp-content/uploads/2020/12/18123605/lil-wayne-drake-nicki-minaj-masters-sold-feature.jpg', email='lilwayne@aa.io', password='password')
    tribe22 = User(
        first_name='A Tribe', last_name='Called Quest',username='A Tribe Called Quest', bio='Legendary Rap Group',profile_photo='https://www.rollingstone.com/wp-content/uploads/2018/06/rs-233270-quest.jpg', email='atribecalledquest@aa.io', password='password')
    de_la_soul23 = User(
        first_name='De La', last_name='Soul',username='De La Soul', bio='Legendary Rap Group',profile_photo='https://www.uncut.co.uk/wp-content/uploads/2023/02/delasoul-getty.jpg', email='delasoul@aa.io', password='password')
    fat_tony24 = User(
        first_name='Fat', last_name='Tony',username='Fat Tony', bio='Legend in the making',profile_photo='https://upload.wikimedia.org/wikipedia/commons/3/31/Fat_Tony%2C_January_2013_%28Photo%2C_Jessica_Lehrman%29.jpg', email='fattony@aa.io', password='password')

    ugk25 = User(
        first_name='UGK', last_name='UGK',username='UGK', bio='Legendary Rap Group',profile_photo='https://static.wixstatic.com/media/ca8822_46af8cfe34b14972acb1357f82603284.jpg/v1/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ca8822_46af8cfe34b14972acb1357f82603284.jpg', email='ugk@aa.io', password='password')
    robyn26 = User(
        first_name='Robyn', last_name='Robyn',username='Robyn', bio='Pop perfection',profile_photo='https://images.squarespace-cdn.com/content/v1/58425081893fc0f82bd1c06d/1523905827213-7DL7EF06BZ663KCXOJ2Y/Hire+Robyn?format=1000w', email='robyn@aa.io', password='password')
    janet_jackson27 = User(
        first_name='Janet', last_name='Jackson',username='Janet Jackson', bio='Pop legend',profile_photo='https://hips.hearstapps.com/hmg-prod/images/janet-jackson-gettyimages-859235050.jpg', email='janetjackson@aa.io', password='password')
    madonna28 = User(
        first_name='Madonna', last_name='Madonna',username='Madonna', bio='Pop perfection',profile_photo='https://static.independent.co.uk/2023/02/07/16/GettyImages-1463282630.jpg', email='madonna@aa.io', password='password')
    miles_davis29 = User(
        first_name='Miles', last_name='Davis',username='Miles Davis', bio='Jazz legend',profile_photo='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Miles_Davis_by_Palumbo_cropped.jpg/1200px-Miles_Davis_by_Palumbo_cropped.jpg', email='milesdavis@aa.io', password='password')
    gary_bartz30 = User(
        first_name='Gary', last_name='Bartz',username='Gary Bartz', bio='Jazz legend',profile_photo='https://i.scdn.co/image/109edb6bb0dad7ecf99daccbce027bd8c3cff13b', email='garybartz@aa.io', password='password')
    crusaders31 = User(
        first_name='Jazz', last_name='Crusaders',username='The Jazz Crusaders', bio='Legendary group',profile_photo='https://i.discogs.com/yczLDrW1AUwb4BJw-qWWMScIiW5wmEgevmtfNsHoHtk/rs:fit/g:sm/q:90/h:679/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTYwNDUw/LTE1NzIzNTc0NzAt/MTQyOS5qcGVn.jpeg', email='thejazzcrusaders@aa.io', password='password')
    kamasi_washington32 = User(
        first_name='Kamasi', last_name='Washington',username='Kamasi Washington', bio='Future jazz legend',profile_photo='https://images.squarespace-cdn.com/content/v1/59beb55e18b27dca6237bb36/1586687448984-31S4S5X7RL57Z8PSOIS3/Kamasi_Heaven_and_Earth.jpg?format=1000w', email='kamasiwashington@aa.io', password='password')
    alfa_mist33 = User(
        first_name='Alfa', last_name='Mist',username='Alfa Mist', bio='Future jazz legend',profile_photo='https://www.loudandquiet.com/files/2021/04/Alfa_Mist_06-scaled.jpg', email='alfamist@aa.io', password='password')
    herbie_hancock34 = User(
        first_name='Herbie', last_name='Hancock',username='Herbie Hancock', bio='Amazing veteran performer',profile_photo='https://npr.brightspotcdn.com/legacy/sites/kwmu/files/201708/herbieHancock5_0.jpg', email='herbiehancock@aa.io', password='password')
    al_green35 = User(
        first_name='Al', last_name='Green',username='Al Green', bio='Amazing veteran soul/gospel performer',profile_photo='https://i.scdn.co/image/ab6761610000e5eb6a110df1130b922f46abad22', email='algreen@aa.io', password='password')
    marvin_gaye36 = User(
        first_name='Marvin', last_name='Gaye',username='Marvin Gaye', bio='Amazing veteran legend with gospel influences',profile_photo='https://upload.wikimedia.org/wikipedia/commons/0/03/Marvin_Gaye_%281973_publicity_photo%29.jpg', email='marvingaye@aa.io', password='password')
    congregation37 = User(
        first_name='The', last_name='Congregation',username='The Congregation', bio='Amazing gospel group',profile_photo='https://cst.brightspotcdn.com/dims4/default/5590d17/2147483647/strip/true/crop/1869x1246+0+33/resize/840x560!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FuRc430EsZX0jOvHYSILUGBZTHnI%3D%2F0x0%3A1869x1312%2F1869x1312%2Ffilters%3Afocal%28935x656%3A936x657%29%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F20043071%2F3_27_Lachat_blues_10.jpg', email='thecongregation@aa.io', password='password')
    kirk_franklin38 = User(
        first_name='Kirk', last_name='Franklin',username='Kirk Franklin', bio='Amazing veteran gospel performer',profile_photo='https://static.wixstatic.com/media/781eeb_28148a78afe44736b9b3320a14b1503b~mv2.jpg/v1/fill/w_2202,h_1015,al_c/781eeb_28148a78afe44736b9b3320a14b1503b~mv2.jpg', email='kirkfranklin@aa.io', password='password')
    prince39 = User(
        first_name='Prince', last_name='Prince',username='Prince', bio='The legend himself',profile_photo='https://hips.hearstapps.com/hmg-prod/images/prince-prince-performing-on-stage---purple-rain-tour-photo-by-richard-e-aaronredferns2.jpg?crop=1xw:0.75xh;center,top&resize=1200:*', email='prince@aa.io', password='password')
    isaac_hayes40 = User(
        first_name='Isaac', last_name='Hayes',username='Isaac Hayes', bio='Legendary career spanning over decades',profile_photo='https://m.media-amazon.com/images/I/41lXR7gfV9L._AC_UF894,1000_QL80_.jpg', email='isaachayes@aa.io', password='password')
    todd_terje41 = User(
        first_name='Todd', last_name='Terje',username='Todd Terje', bio='Innovative producer',profile_photo='https://i.scdn.co/image/451d489c1ec0418f18f6e58b4354823ad593b9c4', email='toddterje@aa.io', password='password')
    kool_and_the_gang42 = User(
        first_name='Kool', last_name='Gang',username='Kool and the Gang', bio='Incredible, timeless funk/disco group',profile_photo='https://i8.amplience.net/i/naras/kool-gang_1970_gettyimages-85237990.jpeg.jpg?w=821&sm=c', email='koolandthegang@aa.io', password='password')
    giorgio_moroder43 = User(
        first_name='Giorgio', last_name='Moroder',username='Giorgio Moroder', bio='Disco legend!',profile_photo='https://i.guim.co.uk/img/media/21fae28f4ea22ce02d5f225ef1925dbd5de8e924/0_273_3544_2127/master/3544.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=9237bfb7b382dc13b54da5755758174d', email='giorgiomoroder@aa.io', password='password')
    chic44 = User(
        first_name='Chic', last_name='Chic',username='Chic', bio='C\'est Chic!',profile_photo='https://www.liveabout.com/thmb/FurC5-lDYw859nHbC01msyO1muQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chic-56aeb7b45f9b58b7d011d12b.jpg', email='chic@aa.io', password='password')
    jayda_g45 = User(
        first_name='Jayda', last_name='G',username='Jayda G', bio='future house legend!',profile_photo='https://media.pitchfork.com/photos/5c7d79097741b65a56c6c0fc/1:1/w_600/JaydaG_SignificantChanges.jpg', email='jaydag@aa.io', password='password')
    chemical_brothers46 = User(
        first_name='Chemical', last_name='Brothers',username='The Chemical Brothers', bio='A listening experience that is out of this world!',profile_photo='https://www.udiscovermusic.com/wp-content/uploads/2019/10/Chemical-Brothers-Surrender-Press-Shot-25-CREDIT-Kevin-Westenberg.jpg', email='thechemicalbrothers@aa.io', password='password')
    seth_troxler47 = User(
        first_name='Seth', last_name='Troxler',username='Seth Troxler', bio='Tech-house legend!',profile_photo='https://i1.sndcdn.com/avatars-xh3FDbK1CtprjykK-rTIf7Q-t500x500.jpg', email='sethtroxler@aa.io', password='password')
    jeff_mills48 = User(
        first_name='Jeff', last_name='Mills',username='Jeff Mills', bio='Life-changing techno',profile_photo='https://static.ra.co/images/profiles/square/jeffmills.jpg?dateUpdated=1616415199940', email='jeffmills@aa.io', password='password')
    martinez_brothers49 = User(
        first_name='Martinez', last_name='Brothers',username='The Martinez Brothers', bio='Tech-house legends!',profile_photo='https://geo-static.traxsource.com/files/artists/3842.jpg', email='themartinezbrothers@aa.io', password='password')
    galantis50 = User(
        first_name='Galantis', last_name='Galantis',username='Galantis', bio='Get\'s the dance floor moving',profile_photo='https://d3vhc53cl8e8km.cloudfront.net/artists/1391/4f390c46-87d6-11ed-b991-0ee6b8365494.jpg', email='galantis@aa.io', password='password')
    purple_disco_machine51 = User(
        first_name='Purple', last_name='Disco Machine',username='Purple Disco Machine', bio='Disco lives',profile_photo='https://geo-media.beatport.com/image_size/500x500/1e8deaf1-ebc7-4b0f-ae18-a7ad12faa191.jpg', email='purplediscomachine@aa.io', password='password')
    deep_dish52 = User(
        first_name='Deep', last_name='Dish',username='Deep Dish', bio='Let the music do the talking',profile_photo='https://www.techno-livesets.com/wp-content/uploads/edd/2019/04/Deep-Dish-Dancing-Astronaut-LPacha-Ibiza-Part-2-03-04-2019-e1556057216525-300x300.jpg', email='deepdish@aa.io', password='password')



    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(daft_punk4)
    db.session.add(stevie_wonder5)
    db.session.add(aretha_franklin6)
    db.session.add(otis_redding7)
    db.session.add(temptations8)
    db.session.add(jackie_wilson9)
    db.session.add(rolling_stones10)
    db.session.add(lcd_soundsystem11)
    db.session.add(arcade_fire12)
    db.session.add(spoon13)
    db.session.add(m83_14)
    db.session.add(weeknd15)
    db.session.add(miguel16)
    db.session.add(angelo17)
    db.session.add(labrinth18)
    db.session.add(doja_cat19)
    db.session.add(jay_z20)
    db.session.add(lil_wayne21)
    db.session.add(tribe22)
    db.session.add(de_la_soul23)
    db.session.add(fat_tony24)
    db.session.add(ugk25)
    db.session.add(robyn26)
    db.session.add(janet_jackson27)
    db.session.add(madonna28)
    db.session.add(miles_davis29)
    db.session.add(gary_bartz30)
    db.session.add(crusaders31)
    db.session.add(kamasi_washington32)
    db.session.add(alfa_mist33)
    db.session.add(herbie_hancock34)
    db.session.add(al_green35)
    db.session.add(marvin_gaye36)
    db.session.add(congregation37)
    db.session.add(kirk_franklin38)
    db.session.add(prince39)
    db.session.add(isaac_hayes40)
    db.session.add(todd_terje41)
    db.session.add(kool_and_the_gang42)
    db.session.add(giorgio_moroder43)
    db.session.add(chic44)
    db.session.add(jayda_g45)
    db.session.add(chemical_brothers46)
    db.session.add(seth_troxler47)
    db.session.add(jeff_mills48)
    db.session.add(martinez_brothers49)
    db.session.add(galantis50)
    db.session.add(purple_disco_machine51)
    db.session.add(deep_dish52)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
