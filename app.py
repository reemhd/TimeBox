from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session
from flask_session import Session
from werkzeug.security import check_password_hash, generate_password_hash
import datetime
from functools import wraps

# Configure application
app = Flask(__name__)

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# Configure CS50 Library to use SQLite database
db = SQL("sqlite:///database.db")

@app.after_request
def after_request(response):
    """Ensure responses aren't cached"""
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response

def login_required(f):
    """
    Decorate routes to require login.

    http://flask.pocoo.org/docs/0.12/patterns/viewdecorators/
    """
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if session.get("user_id") is None:
            return redirect("/login")
        return f(*args, **kwargs)
    return decorated_function


@app.route("/")
@login_required
def index():
    times = [
         "06:00","07:00",
            "08:00",
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
            "23:00",
            "00:00",
            "01:00",
            "02:00",
            "03:00",
            "04:00",
            "05:00"
    ]
    return render_template("index.html", times=times)


@app.route("/register", methods=["GET", "POST"])
def register():
    """Register user"""
    if request.method == "GET":
        return render_template("/register.html")

    # post method
    else:
        username = request.form.get("username")
        password = request.form.get("password")
        confirmation = request.form.get("confirmation")

    # errors
    if not username or not password or not confirmation or password != confirmation:
        message = "Something went wrong, please try again"
        return render_template("error.html", message=message)

    if len(db.execute("SELECT username FROM users WHERE username = ?", username)) > 0:
        message = "Username already exists"
        return render_template("error.html", message=message)

    hash = generate_password_hash(password)

  # add new user
    db.execute("INSERT INTO users (username, hash) VALUES(?, ?)", username, hash)

  # query database for user
    rows = db.execute("SELECT * FROM users WHERE username = ?", username)

  # remember the user
    session["user_id"] = rows[0]["user_id"]

  # return to homepage
    return redirect("/")


@app.route("/login", methods=["GET", "POST"])
def login():
    """Log user in"""

    # Forget any user_id
    session.clear()

    # User reached route via POST (as by submitting a form via POST)
    if request.method == "POST":

        # Ensure username was submitted
        if not request.form.get("username"):
            message = "Enter username"
            return render_template("error.html", message=message)

        # Ensure password was submitted
        elif not request.form.get("password"):
            message = "Enter password"
            return render_template("error.html", message=message)

        # Query database for username
        rows = db.execute("SELECT * FROM users WHERE username = ?", request.form.get("username"))

        # Ensure username exists and password is correct
        if len(rows) != 1 or not check_password_hash(rows[0]["hash"], request.form.get("password")):
            message = "Invalid username and/or password"
            return render_template("error.html", message=message)

        # Remember which user has logged in
        session["user_id"] = rows[0]["user_id"]

        # Redirect user to home page
        return redirect("/")

    # User reached route via GET (as by clicking a link or via redirect)
    else:
        return render_template("login.html")


@app.route("/logout")
def logout():
    """Log user out"""

    # Forget any user_id
    session.clear()

    # Redirect user to login form
    return redirect("/")

@app.route("/quotes.html")
def quotes():
    return render_template("/quotes.html")




