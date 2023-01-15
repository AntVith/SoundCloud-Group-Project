from app.models import db, Comment, environment, SCHEMA


# Adds a comment1 user, you can add other users here if you want
def seed_comments():
    comment1 = Comment(
        song_id=1,  username= 'Demo', comment = 'Amazing song')
    comment2 = Comment(
        song_id=2,  username= 'marnie', comment = 'Just terrible')
    comment3 = Comment(
        song_id=3,  username= 'boobie', comment = 'Pretty average')
    comment4 = Comment(
        song_id=3,  username= 'boobie', comment = 'Changed my mind, terrible')
    comment5 = Comment(
        song_id=3,  username= 'marnie', comment = 'Didn\'t listen')

    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.add(comment4)
    db.session.add(comment5)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_comments():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM comments")

    db.session.commit()
