# TimeBox
#### Video Demo: https://www.youtube.com/watch?v=NozSnJuk33M
#### Description:
For my final project for CS50, I created a web-based application called 'TimeBox' using Flask. Timeboxing is a time management technique in which a fixed amount of time is allocated for a specific activity. The goal of TimeBox is to create a sense of urgency for each task and allocate a time frame in which it should be completed. This allows for prioritising daily tasks to ensure everything important is completed.

I created a database that stores users' usernames and hashed passwords using sqlite3. Once the user registers with a unique username, they will be taken to the homepage (/) where they can write their top 3 tasks for the day. They can also add three additional secondary tasks if needed. The date on the page is automatically updated every day. I also added a 'brain dump' section that allows users to write down their thoughts or ideas from which they can extract important tasks that need to be prioritised.

Once the user completes writing, they can click the save button, which then color-codes the time-slot section with associated tasks. The user can also choose to clear the page by clicking the clear button once they have completed their tasks.

Finally, I added an 'Inspirational Quotes' section that generates random quotes to help keep the user motivated and productive! The user can then logout once they are done at the end of the day.

More information:
I created six HTML files. layout.html contains all the HTML that extends to other HTML pages. I used Bootstrap to help with the design of my website, although I did add my own CSS file with additional tweaks. The 'get' method allows users to see an image that says 'Do more' very aggressively in an aesthetic manner before the user logs in or registers. The nav bar contains 'TimeBox' on the far left and 'Register' and 'Log In' on the far right, not on the political spectrum though. The main page is then replaced by the timebox content once the user logs in. The nav bar also changes to have 'Inspirational Quote' on the left side and 'Log Out' on the right side, with 'TimeBox' in the center. These are all clickable links allowing the user to navigate from one page to another.

Error.html contains an image that pops up if something goes wrong, like if the user does not provide a username/password when logging in or does not provide a username/password/confirmation when registering, or if the confirmation does not match the password, or if the username already exists.

Quotes.html contains a div for random quotes to be presented and a button to generate it. The file also contains a script tag with JS in it with an array of quotes by inspirational people. The JS function loops over the array and randomly picks a quote and presents it in the div for the user to see.

In index.html, I used a for loop to loop over the time so that I can list it on the time-slot section as well as in the dropdown list. I created text boxes for users to write their top tasks, secondary tasks, and brain dump on the page that uses JS to save to local storage once the save button is clicked. The clear button then undoes that. I linked my CSS file to style the page to my liking by constantly tweaking everything until it aligned perfectly.

JS: This was the most fun part of the project, as it was where the magic happened. I first used an update date function to automatically update the day/date on the page. Then I used separate

Finally, in my app.py file, I wrote the Python code to configure my application. I used sessions so that the web server remembers information about each user that logs in. I also imported a few additional functions, such as generate_password_hash, to ensure that the passwords stored in my database are encrypted. Additionally, I used a function called login_required that ensured that certain pages were only visible if the user was logged in. Some routes accepted both GET and POST methods, such as register and log in, while others, such as quotes, only needed a GET method.
