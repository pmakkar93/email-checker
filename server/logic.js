
const isWordPyramid = function(input_str)
{
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
        if (j!= counts[j-1]){
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


module.exports = {
    isWordPyramid
}