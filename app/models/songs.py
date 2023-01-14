from .db import db, environment, SCHEMA, add_prefix_for_prod


class Song(db.Model):
  __tablename__ = 'songs'

  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  username = db.Column(db.String, db.ForeignKey(add_prefix_for_prod('users.username')), nullable=False)
  song_title = db.Column(db.String(255), nullable=False)
  genre = db.Column(db.String(255), nullable=False)
  cover_photo = db.Column(db.String(255), nullable=True)
  song_file = db.Column(db.String(255), nullable=True)

  comments = db.relationship("Comment", back_populates='song')
  user = db.relationship('User', back_populates='songs')

  def to_dict(self):
    return {
      'id': self.id,
      'username': self.username,
      'song_title': self.genre,
      'genre': self.genre,
      'cover_photo': self.cover_photo,
      'song_file': self.song_file
  }
