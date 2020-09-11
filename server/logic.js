
const emailChecker = function(body)
{
    if (Object.keys(body).length === 0) {
        throw 'Empty request body';
    }
    if (!body.hasOwnProperty('input')) {
        throw 'No input property';
    }
    let emails = body.input;
    if (emails.length === 0) {
        return {
            result: 0,
            message: 'No Email Address provided in input'
        }
    }
    let result = getUniqueEmailCount(emails);
    let flag = result !== -1
    return {
        result: result,
        message: flag ? 'Unique Email address' : 'Contains an invalid email address'
    }
};

function getUniqueEmailCount(emails) {
    let uniqueEmail = new Set();
    let invalidFlag = false;

    for (let i = 0; i < emails.length; i++) {
        let email = emails[i];
        // Validate if its a true email address or not.
        const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (re.test(email)) {
            var name   = email.substring(0, email.lastIndexOf("@"));
            var domain = email.substring(email.lastIndexOf("@") +1);

            var filteredName = name.replace('.', '');
            var finalName =  filteredName.includes('+') ? filteredName.substring(0, filteredName.indexOf('+')) : filteredName;
            uniqueEmail.add(finalName + '@' + domain);
        }
        else{
            // console.log('Not a Valid email: ' + email);
            invalidFlag = true;
            break;
        }
    }
    return invalidFlag ? -1 : uniqueEmail.size;
}

module.exports = {
    emailChecker
}
