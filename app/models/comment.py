from .db import db, environment, SCHEMA, add_prefix_for_prod

class Comment(db.Model):
    __tablename__='comments'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    song_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('songs.id'),ondelete='CASCADE'),  nullable=False)
    username = db.Column(db.String(100), db.ForeignKey(add_prefix_for_prod('users.username'),ondelete='CASCADE'),  nullable=False)
    comment = db.Column(db.String(500))

    song = db.relationship('Song', back_populates='comments')
    user = db.relationship('User', back_populates='comments')

    def to_dict(self):
        return{
            "id": self.id,
            "song_id": self.song_id,
            "username": self.username,
            "comment": self.comment
        }
