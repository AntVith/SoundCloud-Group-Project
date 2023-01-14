from app.models import db, User, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name='DemoFName', last_name='DemoLName', username='Demo', bio='Bio for Demo',profile_photo='demo.url', email='demo@aa.io', password='password')
    marnie = User(
       first_name='marnieFName', last_name='marnieLName',username='marnie', bio='Bio for marnie',profile_photo='marnie.url', email='marnie@aa.io', password='password')
    bobbie = User(
        first_name='bobbieFName', last_name='bobbieLName',username='bobbie', bio='Bio for bobbie',profile_photo='bobbie.url', email='bobbie@aa.io', password='password')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
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
