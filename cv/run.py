from templates import app


@app.route('/')
def hello():
    return 'Hello to the World of Flask!'


if __name__ == '__main__':
    # Load this config object for development mode
    app.config.from_object('configurations.DevelopmentConfig')
    app.config['SERVER_NAME'] = 'localhost:5000'
    app.run()
