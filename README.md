# Pyramid word
Pyramid Word RESTful API 

Problem statement: Accept a string as input and return a response indicating whether a word is a pyramid word.  A word is a ‘pyramid’ word if you can arrange the letters in increasing frequency, starting with 1 and continuing without gaps and without duplicates.

Examples:

banana is a pyramid word because you have 1 'b', 2 'n's, and 3 'a's.

bandana is not a pyramid word because you have 1 'b' and 1 'd'.

For Executing this project, first we need to install our dependencies from npm:
```bash
npm install
```

Now we should be all set! Run the application:
```bash
npm start
```

If we want to run application under development mode:
```bash
npm run dev
```
This will reflect any changes made to the application. 

Your application should now be running at [http://localhost:8080](http://localhost:8080).

For initiating request: Please enter following URL on your Client
```bash
GET http://localhost:8080/pyramidWord/<input_word> 
```
eg: http://localhost:8080/pyramidWord/banana <br>
    http://localhost:8080/pyramidWord/bandana

This will return a json response stating the status of pyramid word with a message. 
If word is pyramid word then status will be true; otherwise false. 
