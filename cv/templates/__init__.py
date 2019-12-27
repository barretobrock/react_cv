from flask import Flask
from .hello.views import hello_blueprint

app = Flask(__name__, static_folder='./public', template_folder='./static')

# Register the blueprints
app.register_blueprint(hello_blueprint)
