"""create owners table

Revision ID: db287c546368
Revises:
Create Date: 2023-01-15 22:10:15.333114

"""
from alembic import op
import sqlalchemy as sa
import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")


# revision identifiers, used by Alembic.
revision = 'db287c546368'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(length=50), nullable=False),
    sa.Column('last_name', sa.String(length=50), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('bio', sa.String(length=2000), nullable=True),
    sa.Column('profile_photo', sa.String(length=1000), nullable=True),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    if environment == "production":
        op.execute(f"ALTER TABLE users SET SCHEMA {SCHEMA};")
    op.create_table('songs',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('song_title', sa.String(length=255), nullable=False),
    sa.Column('genre', sa.String(length=255), nullable=False),
    sa.Column('cover_photo', sa.String(length=255), nullable=True),
    sa.Column('song_file', sa.String(length=255), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    if environment == "production":
        op.execute(f"ALTER TABLE songs SET SCHEMA {SCHEMA};")
    op.create_table('comments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('song_id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=100), nullable=False),
    sa.Column('comment', sa.String(length=500), nullable=True),
    sa.ForeignKeyConstraint(['song_id'], ['songs.id'], ondelete='CASCADE'),
    sa.ForeignKeyConstraint(['username'], ['users.username'], ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('id')
    )
    if environment == "production":
        op.execute(f"ALTER TABLE comments SET SCHEMA {SCHEMA};")
    op.create_table('likes',
    sa.Column('users', sa.Integer(), nullable=False),
    sa.Column('songs', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['songs'], ['songs.id'], ondelete='CASCADE'),
    sa.ForeignKeyConstraint(['users'], ['users.id'], ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('users', 'songs')
    )
    if environment == "production":
        op.execute(f"ALTER TABLE likes SET SCHEMA {SCHEMA};")
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('likes')
    op.drop_table('comments')
    op.drop_table('songs')
    op.drop_table('users')
    # ### end Alembic commands ###