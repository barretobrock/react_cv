from flask import render_template, Flask


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

