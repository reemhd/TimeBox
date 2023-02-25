# TimeBox
#### Video Demo: https://www.youtube.com/watch?v=NozSnJuk33M
#### Description:
I created a web-based application called 'TimeBox' using Flask. Timeboxing is a time management technique in which a fixed amount of time is allocated for a specific activity. The goal of TimeBox is create a sense of urgency for each task and allocating a time frame in which it should be completed. This allows for prioritising daily tasks ensuring everything that is important is completed.
I created a database that stores user's username and hash(passwords) using SQL. Once the user registers with a unique username, they will be taken to the homepage (/) where they can write their Top 3 Tasks for the day, they can also add 3 additional secondary tasks if needed. The date on the page is automatically updated everyday. I also added a 'brain dump' section which allows users to write down their thoughts or ideas from which they can extract important tasks that need to be prioritised.
Once the user completes writing, they can click the save button which then colour codes the time slot section with associated tasks. It adds a pop of colour to a minimilist design! The user can also choose to clear the page by clicking the clear button once they have completed their tasks.
Finally, I also added an 'Inspirational Quotes' section that generates random quotes to help keep the user motivated and productive! The user can then logout once they are done at the end of the day.
Technical Description:
I created 6 html files, layout.html contains all the html that then extends to other html pages, I used bootstrap to help with the design of my website, although I did add my own css file with additional tweaks. The 'get' method allows the users to see an. image that says 'Do more' very aggresively in an aesthetic manner before the user logs in or registers and the nav bar contains 'TimeBox' on the far left and 'Register' and 'Log In' on the far right, not on the political spectrum though. The main page is then replaced by the timebox content once the user logs in. The nav bar also changes to have 'Inpirational quote' on the left side and 'log out' on the right side, with 'TimeBox' in the centre. These are all clickable links allowing the user to navigate from one page to another.
Error.html contains an image that pops up if something goes wrong like if the user does not provide a username/password when logging in or not providing a username/password/confirmation when registering or if confirmation does not match the password or if the username already exists.
Quotes.html contains a div for random quote to be presented and button to generate it. The file also contains a script tag with JS in it with an array of quotes by inspiration people and the js function loops over the array and randomly picks a quote and presents it in the div for the user to see.
In index.html I used a for loop to loop over the time so that I can list it on the time-slot section as well as in the dropdown list. I created textboxes for users to write their top tasks, secondary tasks and brain dump on the page that uses JS to save to localStorage once the save button is clicked. The clear button then undoes that. I linked my CSS file to style the page to my liking by constantly tweaking everything till it aligned perfectly.
JS: This was the most fun part of the project, as it was where the magic happened. I first used a update date function to automatically update the day/date on the page. Then I used seperate functions to save the top 3 tasks, secondary and brain dump to the local storage adding an event listener of 'input' so the input is automatically saved even if the page is refreshed. I then used another function that fills the backgound of the time slots with the corresponding colours of the input tasks every time the save button was clicked. I then implemented the clear function that clears the local storage and reloads the window to refresh the page and allows the user to start again if needed.
Finally, my app.py contains the python code to configure my application, I used session so the web servers remembers information about each user that logs in. I imported a few additional functions like generate password hash so that the passwords stored in my database are cryptic, I also used a function called login required that made sure certain pages were only visible if the user is logged in. Some routes accepted both get and post methods such as register and log in while others such as quotes only needed get method.
