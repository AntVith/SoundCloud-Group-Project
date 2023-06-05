from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class SongForm(FlaskForm):
  user_id = IntegerField('User Id', validators=[DataRequired()])
  song_title = StringField('Title', validators=[DataRequired()])
  genre = StringField('Genre', validators=[DataRequired()])
  cover_photo  = StringField('Cover Photo')
  song_file = StringField('Song File')
