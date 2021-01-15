## XD URL Shortener
### [Link](https://xd-url.com/)

<br>

I built this in a couple hours.


#### If for some reason you want to run this locally. 

1. git clone https://github.com/XzavierDunn/urlshortener
2. python3 -m venv venv
3. activate venv
    win: .\venv\Scripts\activate
    not win: . ./venv/bin/activate
4. pip install -r requirements.txt
5. set environ var
    win: $env:FLASK_APP=app.py
    not win: export FLASK_APP=app.py
6. flask run
