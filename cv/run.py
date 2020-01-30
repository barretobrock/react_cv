import os
import dotenv
from flask import render_template, Flask
from slackeventsapi import SlackEventAdapter


dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
dotenv.load_dotenv(dotenv_path)
slack_signing_secret = os.environ['SLACK_SIGNING_SECRET']

app = Flask(__name__, static_folder='./templates/public', template_folder='./templates/static')


@app.route('/')
def index():
    return render_template('home.html')


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/cv')
def cv():
    return render_template('cv.html')


@app.route('/projects')
def projects():
    return render_template('projects.html')


@app.route('/contact')
def contact():
    return render_template('contact.html')


@app.route('/tools')
def tools():
    return render_template('tools.html')


@app.route('/', subdomain='okr')
def okr_main():
    return render_template('okr_home.html')


sea = SlackEventAdapter(slack_signing_secret, "/vikapi/events", app)


@sea.on('reaction_added')
def reaction_added(event_data):
    emoji = event_data['event']['reaction']
    print(emoji)


if __name__ == '__main__':
    # Load this config object for development mode
    app.config.from_object('configurations.DevelopmentConfig')
    app.config['SERVER_NAME'] = 'localhost:5000'
    app.run()
