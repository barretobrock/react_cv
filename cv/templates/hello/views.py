import os
import dotenv
from flask import render_template, Blueprint
from slackeventsapi import SlackEventAdapter

dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
dotenv.load_dotenv(dotenv_path)
slack_signing_secret = os.environ['SLACK_SIGNING_SECRET']

hello_blueprint = Blueprint('hello', __name__)


@hello_blueprint.route('/')
def index():
    return render_template('home.html')


@hello_blueprint.route('/about')
def about():
    return render_template('about.html')


@hello_blueprint.route('/cv')
def cv():
    return render_template('cv.html')


@hello_blueprint.route('/projects')
def projects():
    return render_template('projects.html')


@hello_blueprint.route('/contact')
def contact():
    return render_template('contact.html')


@hello_blueprint.route('/tools')
def tools():
    return render_template('tools.html')


@hello_blueprint.route('/', subdomain='okr')
def okr_main():
    return render_template('okr_home.html')


sea = SlackEventAdapter(slack_signing_secret, "/vikapi/events", hello_blueprint)


@sea.on('reaction_added')
def reaction_added(event_data):
    emoji = event_data['event']['reaction']
    print(emoji)