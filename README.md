# Prime-Numbers-API-server

This is a server made by using express. The server gives results about prime
numbers.

## About this project
Making a server using express, ejs for making views and cors as the result can be
used in an web application.

## Future works on this project.
* Using MongoDB or MySQL to have a database for prime numbers to make the server
to be faster.
* There are some others functions that added to make later, plot to make a plot of
any functions in a range and trigonometry to give trigonometry results of a degree
and make polar plots.
* Making a timer to check the speed of the pattern in comparing to the simple pattern for
finding prime numbers.
* Making better css using Bootstrap.

## Link to the app
#### [https://prime-numbers-api-server.herokuapp.com/](https://prime-numbers-api-server.herokuapp.com/)

## Link to a front-end application using this api
#### [https://prime-numbers-api-client.surge.sh/#/](https://prime-numbers-api-client.surge.sh/#/)

## Steps to make the server

### installing
* `npm init -y` : to have node.js
* `npm install express` : to have express
* `npm install ejs`: to have ejs files to make views
* making a directory named `views` as a part of express configuration
* `touch index.js`: the javascript file which contain all the command to make a server
* making a directory named `functions` which contains all different functions that the server
need when have a specific request. this has been done to make `index.js` to be cleaner.
* making a directory named `public` and inside it another directory named `css` which contain
the css file.

### index.js
* all the commands that a server need to tackle with a request has been written.
* a port has been defined.
* using cors as a server can make a connection with another web applications.
* different get requests for having different results on different requests about prime numbers.

### functions directory
* different functions to get different result about different prime numbers properties.
* the main function is `IsPrime` which written according to the pattern that i found.

## Techs and libraries
* javascript
* Node.js
* nodemon
* express
* ejs
* cors
