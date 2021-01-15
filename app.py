import csv
import requests
import random
import string

from flask_cors import CORS
from flask import Flask, redirect, render_template, request, make_response, jsonify

app = Flask(__name__)
CORS(app)


@app.route('/', methods=['GET'])
def create():
    if request.args.get('url'):
        url = request.args.get('url')

        try:
            r = requests.get('https://' + url)
        except Exception as e:
            return jsonify('Something is wrong with your URL')

        if r.status_code and r.status_code == 200:
            letters = string.ascii_lowercase + string.digits + string.hexdigits
            short = ''.join(random.choice(letters) for i in range(5))
            with open('data/urls.csv', 'a') as file:
                csvwriter = csv.writer(file)
                csvwriter.writerow([url, short])
            return jsonify('https://xd-url.com/' + short)

    else:
        return render_template('index.html')


@app.route('/<string:id>', methods=['GET'])
def redirectToUrl(id):
    with open('data/urls.csv', 'r') as file:
        for i in file.readlines():
            i = i.split(',')
            if i[1].strip('\n') == id:
                return redirect('https://' + i[0])
        return jsonify('There was an issue')
