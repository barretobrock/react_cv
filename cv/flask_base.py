import os
import dotenv
from flask import render_template, Flask
from slackeventsapi import SlackEventAdapter


key_path = os.path.join(os.path.expanduser('~'), 'keys')
keys = ['viktor', 'cah', 'dnd']
keys_dict = {}
for k in keys:
    with open(os.path.join(key_path, f'{k.upper()}_SLACK_SIGNING_SECRET')) as f:
        keys_dict[k] = f.read().strip()

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


# Viktor boi
viktor_events = SlackEventAdapter(keys_dict['viktor'], "/vikapi/events", app)
# # Wizzy boi
# cah_events = SlackEventAdapter(cah_sss, "/cahapi/events", app)
# # DND boi
# dnd_events = SlackEventAdapter(dnd_sss, "/dndapi/events", app)


@viktor_events.on('reaction_added')
def reaction_added(event_data):
    emoji = event_data['event']['reaction']
    print(emoji)
