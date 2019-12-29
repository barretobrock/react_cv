from flask import render_template, Blueprint

hello_blueprint = Blueprint('hello', __name__)


@hello_blueprint.route('/')
def index():
    return render_template('home.html')


@hello_blueprint.route('/about')
def about():
    return render_template('about.html')
