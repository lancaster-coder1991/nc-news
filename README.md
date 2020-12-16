# nc-news

NC News is a full stack project based around a news forum. The back and front ends are hosted separately - this repo is for the front end, which provides a React-based UI in the form of a news website, where the news data can be sorted through and commented on using HTTP requests and Axios.js. The [back end](https://github.com/lancaster-coder1991/be-nc-news-public) features the use of Knex.js to create tables on and seed test news article data to an SQL database, and Express.js and Supertest.js to set up and test a server to access this information.

## Running the app

Clone this repo to a local directory, ensuring that you have [Node.js](https://nodejs.org/en/download/) installed. Navigate to the nc-news-app directory and run the following commands in the terminal (in the order shown). These will first install the required dependencies for the application, and then open the app in a browser.

`npm i`

`npm start`

The app should automatically open in a web browser.

## Finding your way around

### Sorting through articles

The home page lists all articles by default, sorted by most recent first, and can always be returned to by clicking the logo in the top left hand corner of the screen. Pagination buttons are dusplayedbelow the article list. The sorting can be changed using the drop down menu above the article list. Filtering of a particular topic can be done using the NavBar options.

Each article can be voted upon on this screen, or on the article page itself.

### Article pages

Clicking on the title of an article takes you to the page for that article. This shows the article content, plus all of the comments relating to the article. The sorting logic and options for the comments is the same as for articles (minus the 'No. of comments' option present for the article list). As well as the article itslef, comments can be voted upon as well. At the botttom of the page, new comments can be added, and any comments added in your session can also be edited after they are submitted.
