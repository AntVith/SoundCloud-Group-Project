from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class CommentForm(FlaskForm):
    song_id = IntegerField('Song Id', validators=[DataRequired()])
    username = StringField('User Name', validators=[DataRequired()])
    comment = StringField('Comment', validators=[DataRequired()])
