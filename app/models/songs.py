from .db import db, environment, SCHEMA, add_prefix_for_prod


class Song(db.Model):
  __tablename__ = 'songs'

  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
  song_title = db.Column(db.String(255), nullable=False)
  genre = db.Column(db.String(255), nullable=False)
  cover_photo = db.Column(db.String(255), nullable=True)
  song_file = db.Column(db.String(255), nullable=True)

  comments = db.relationship("Comment", back_populates='song')
  user = db.relationship('User', back_populates='songs')

  def to_dict(self):
    return {
      'id': self.id,
      'user_id': self.user_id,
      'song_title': self.song_title,
      'genre': self.genre,
      'cover_photo': self.cover_photo,
      'song_file': self.song_file
  }
