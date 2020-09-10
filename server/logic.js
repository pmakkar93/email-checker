
const isWordPyramid = function(input_str, emails)
{
    gmailMatchFilter(emails);
    var charDict = {};
    flag = true
    input_str = input_str.replace( /\s/g, '');

    for (var i = 0; i<input_str.length; i++){
        if (input_str.charAt(i) in charDict){
            charDict[input_str.charAt(i)] += 1
        }
        else{
            charDict[input_str.charAt(i)] = 1
        }
    }
    var counts = Object.values(charDict).sort()
    for (var j = 1; j <= counts.length; j++){
        if (j!== counts[j-1]){
            flag = false;
            break;
        }
    }
    var isPW = flag ? ' is a Pyramid word' : ' is not a Pyramid Word';
    return {
        status : flag,
        message: input_str + isPW
    }
};

function gmailMatchFilter(emails) {
    let uniqueEmail = new Set();
    emails.forEach(email => {
        // Validate if its a true email address or not.
        const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (re.test(email)) {
            var name   = email.substring(0, email.lastIndexOf("@"));
            var domain = email.substring(email.lastIndexOf("@") +1);

            var filteredName = name.replace('.', '');
            var finalName =  filteredName.includes('+') ? filteredName.substring(0, filteredName.indexOf('+')) : filteredName;
            uniqueEmail.add(finalName + '@' + domain);
        }
    });
    console.log(uniqueEmail);
}

module.exports = {
    isWordPyramid
}
