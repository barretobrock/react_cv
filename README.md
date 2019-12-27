# React-Fueled Personal Site
My attempt at refactoring my personal website to a Flask + React setup

## Installation
NOTE: Installation Guide I followed was [here](https://itnext.io/a-template-for-creating-a-full-stack-web-application-with-flask-npm-webpack-and-reactjs-be2294b111bd)
NOTE: Learning how to setup on DO-side was from [here](https://www.freecodecamp.org/news/i-built-this-now-what-how-to-deploy-a-react-app-on-a-digitalocean-droplet-662de0fe3f48/)

### Dependency Installs
#### Python Virtual env
 - Make a venv with `virtualenv -p python3 react-cv`
    - For this, I `cd`'d into my `venv` directory
- `source` into that venv and `pip install Flask`
#### Node + npm
 - Install Node 12
```bash
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt install -y nodejs
```
 - npm should be installed above, but just to make sure
`sudo apt install npm`
