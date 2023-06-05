from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class UserForm(FlaskForm):
  bio = StringField('Bio')
  email = StringField('Email', validators=[DataRequired()])
  first_name = StringField('First Name', validators=[DataRequired()])
  last_name  = StringField('Last Name', validators=[DataRequired()] )
  profile_photo = StringField('Profile Photo')
  username = StringField('Username', validators=[DataRequired()])
