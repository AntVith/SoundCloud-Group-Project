from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField
from wtforms.validators import DataRequired

class CommentForm(FlaskForm):
    song_id = IntegerField('Song Id', validators=[DataRequired()])
    user_id = StringField('User Id', validators=[DataRequired()])
    comment = StringField('Comment', validators=[DataRequired()])
