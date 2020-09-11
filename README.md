# Email Checker
Email Checker RESTful API 

Problem statement: Accept a list of email addresses and return an integer indicating the number of unique email addresses. Where "unique" email addresses means they will be delivered to the same account using Gmail account matching. Specifically: Gmail will ignore the placement of "." in the username. And it will ignore any portion of the username after a "+".

Examples:

test.email@gmail.com, test.email+spam@gmail.com and testemail@gmail.com will all go to the same address, and thus the result should be 1.

For Executing this project, first we need to install our dependencies from npm:
```bash
npm install
```

Now we should be all set! Run the application:
```bash
npm start
```

Your application should now be running at [http://localhost:8080](http://localhost:8080).

For initiating request: Please enter following URL on your Client
```bash
GET http://localhost:8080/email-check
```

Email Check API Request Structure: (body)
{
    "input": [email-id1,email-id2,email-id3]					// string array of email address 
}

Email Check API Response Structure:
{
    "result": integer                                       // number of unique email addresses after filtering,
    "message": string                                       // a string message
}

eg: http://localhost:8080/email-check
    Request body: 
    {
        "input": ["test.email@gmail.com", "test.email+spam@gmail.com","testemail@gmail.com", "hda+233.3232@yahoo.co.in"]
    }
    Response:
    {
        "result": 2,
        "message": "Unique Email address"
    }

If input contains any invalid email address, then result will be -1 with an appropriate error message. 
