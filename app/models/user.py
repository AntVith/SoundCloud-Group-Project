from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .like import likes


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    username = db.Column(db.String(40), nullable=False, unique=True)
    bio = db.Column(db.String(2000))
    profile_photo = db.Column(db.String(1000))
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    comments = db.relationship("Comment", cascade='all, delete-orphan', back_populates='user')
    songs = db.relationship("Song", back_populates='user' )
    user_likes = db.relationship(
        "Song",
        secondary=likes,
        back_populates='song_likes'
    )
    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            "last_name": self.last_name,
            'username': self.username,
            "bio": self.bio,
            'profile_photo': self.profile_photo,
            'email': self.email,
        }
