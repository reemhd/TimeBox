# TimeBox

## Description
For my final project for CS50, I created a web-based application called 'TimeBox' using Flask. Timeboxing is a time management technique in which a fixed amount of time is allocated for a specific activity. 

## Tech Stack
- Python
- Flask
- Jinga
- HTML/CSS/JavaScript
- Bootstrap
- SQLite

## Getting Started
1. Download Python and Flask
2. Installations
```
pip install cs50
pip install flask
pip install flask-session
```
3. Run the application
```
flask run
```

I created a database that stores users' usernames and hashed passwords using SQLite database.  

The user can register with a unique username and password.
![Screenshot 2023-02-26 at 20 13 52](https://user-images.githubusercontent.com/113103959/221435009-6ff44fc3-ffa3-4b53-babc-6100a4cc77a1.png)

They will be taken to the homepage (/) where they can write their tasks for the day. Once the user completes writing, they can click the save button, which then color-codes the time-slot section with associated tasks. The user can also choose to clear the page by clicking the clear button once they have completed their tasks.
![Screenshot 2023-02-26 at 20 15 25](https://user-images.githubusercontent.com/113103959/221435050-4d0be522-3a7e-4b51-9afc-0cb5bef0bd7f.png)

Finally, I added an 'Inspirational Quotes' section that generates random quotes to help keep the user motivated and productive! The user can then logout once they are done at the end of the day.
![Screenshot 2023-02-26 at 20 15 55](https://user-images.githubusercontent.com/113103959/221435072-9ce89c0f-4e0e-4fe4-b643-44260cb087e4.png)

## Implementation details:

I created six HTML files. The 'layout.html' file contains all the HTML that extends to other HTML pages. I used Bootstrap to help with the design of my website, although I added my own CSS file with additional tweaks. The 'get' method allows users to see an image that says 'Do more' very aggressively in an aesthetic manner before the user logs in or registers.

'Error.html' contains an image that pops up if something goes wrong, such as if the user does not provide a username/password when logging in or does not provide a username/password/confirmation when registering, or if the confirmation does not match the password, or if the username already exists.

'Quotes.html' contains a div for random quotes to be presented and a button to generate it. The file also contains a script tag with JS in it and an array of quotes by inspirational people. The JS function loops over the array and randomly picks a quote to present in the div for the user to see.

In 'index.html', I used a for loop to loop over the time so that I can list it on the time-slot section as well as in the dropdown list. I created text boxes for users to write their top tasks, secondary tasks, and brain dump on the page that uses JS to save to local storage once the save button is clicked. The clear button then undoes that. I linked my CSS file to style the page to my liking by constantly tweaking everything until it aligned perfectly.

In the JS file, I first used an update date function to automatically update the day/date on the page. Finally, in my 'app.py' file, I wrote the Python code to configure my application. I used sessions so that the web server remembers information about each user that logs in. I also imported a few additional functions, such as 'generate_password_hash', to ensure that the passwords stored in my database are encrypted. Additionally, I used a function called 'login_required' that ensured that certain pages were only visible if the user was logged in. Some routes accepted both GET and POST methods, such as 'register' and 'log in', while others, such as 'quotes', only needed a GET method.

#### [Video Demo](https://www.youtube.com/watch?v=NozSnJuk33M)
