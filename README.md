# React-Fueled Personal Site
My attempt at refactoring my personal website to a Nginx + Gunicorn + Flask + React setup :)

## Installation Sources
Below are the sources I used to piece together the setup of this site
- [Flask/React with webpack guide](https://itnext.io/a-template-for-creating-a-full-stack-web-application-with-flask-npm-webpack-and-reactjs-be2294b111bd)
- [Nginx Setup with SSL certs](https://coderrocketfuel.com/article/deploy-a-create-react-app-website-to-digitalocean)
- [Gunicorn + NginX setup](https://www.digitalocean.com/community/tutorials/how-to-serve-flask-applications-with-gunicorn-and-nginx-on-ubuntu-18-04)
- [More info on NginX](https://www.patricksoftwareblog.com/how-to-configure-nginx-for-a-flask-web-application/)
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

## Update protocol
 - `push` changes to server
 - restart the Gunicorn instance (`sudo systemctl <cmd> reactcv.service`)