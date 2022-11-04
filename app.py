from flask import Flask, render_template, url_for, send_from_directory

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('welcome.html')

@app.route("/circlepack")
def circlepack():
    return render_template('circlepack.html')

@app.route("/tripp-filter")
def trippfilter():
    return render_template('tripp-filter.html')

@app.route('/static/<path:path>')
def send_static(path):
    return send_from_directory('static', path)

if __name__ == "__main__":
    app.run(debug=True)