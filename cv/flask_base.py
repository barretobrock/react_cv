import os
from flask import render_template, Flask, request, jsonify


key_path = os.path.join(os.path.expanduser('~'), 'keys')
keys = ['viktor', 'cah', 'dnd']
keys_dict = {}
for k in keys:
    for t in ['SIGNING_SECRET', 'XOXB_TOKEN', 'XOXP_TOKEN', 'VERIFY_TOKEN']:
        key_dict = {}
        with open(os.path.join(key_path, f'{k.upper()}_SLACK_{t}')) as f:
            key_dict[t.lower()] = f.read().strip()
    keys_dict[k] = key_dict

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


# # Viktor boi
# viktor_events = SlackEventAdapter(keys_dict['viktor'], "/vikapi/events", app)
# # Wizzy boi
# cah_events = SlackEventAdapter(cah_sss, "/cahapi/events", app)
# # DND boi
# dnd_events = SlackEventAdapter(dnd_sss, "/dndapi/events", app)

@app.route('/vikapi/events', methods=['POST'])
def viktor_events():
    if request.form['token'] != keys_dict['viktor']:
        # Token submitted not the same as what's expected. Don't do anything
        return

    event_data = request.form['event']
    if event_data['type'] == 'reaction_added':
        payload = {
            'text': f'Test was successful. Reaction detected: {event_data["reaction"]}',
            'channel': event_data['item']['channel']
        }
        return jsonify(payload)


@app.route('/cahapi/events', methods=['POST'])
def cah_events():
    if request.form['token'] != keys_dict['cah']:
        # Token submitted not the same as what's expected. Don't do anything
        return

    event_data = request.form['event']
    if event_data['type'] == 'reaction_added':
        payload = {
            'text': f'Test was successful. Reaction detected: {event_data["reaction"]}'
        }
        return jsonify(payload)
