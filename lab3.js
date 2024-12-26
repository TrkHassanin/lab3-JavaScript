function alphabet_position(s){
    // convert the string to lowecase
    s = s.toLowerCase();

    // split the input string into an array 
    var result = s.split('');
    
    // loop over the array a filter non-alphabetical chars
    for(var i = (result.length - 1); i >=  0 ; i--)
    {
        if (result[i] < 'a' || result[i] > 'z')
            result.splice(i,1); 
    }

    // map each character of in the array to its number in the alphabet using ASCII values (a --> 97)
    for(var i = 0 ; i < result.length ; i++)
        result[i] = result[i].charCodeAt(0) - 96; 

    // Joining the array and return the string of alphabet positions
    return result.join(' ');
}

// var str = "The sunset sets at twelve o' clock.";
// console.log(alphabet_position(str));

function sort_string(s){
    // split the input string into an array
    result = s.split(' ');
    
    // sort according the numbers in the wors using regex
    result.sort(
                function(a, b) {
                    return a.match(/\d/) - b.match(/\d/); // match only digits
                }    
            )

    return result.join(' ');
}

// console.log(sort_string("is2 Thi1s T4est 3a"));



function product(a, b){
    if (arguments.length == 2){
        return a*b;
    }
    else
    {
        return function(b){
            return a*b;
        }
    }
}

    

// console.log(product(2));
// console.log(product(2)(2));


function guessingGame(amount){
    console.log("Guess a number between 0 and 10");
    var answer = Math.floor( Math.random() * (9-1) ) + 1;
    var guesses = 0;

    return function (guess) {
        if (guesses === (amount - 1))
            return `No more guesses the answer was ${answer}`;

        guesses++;
        
        if (guess === answer)
            return "You got it!";
            
        else if (guess > answer)
            return "Your guess is too high!";
            
        else
            return "Your guess is too low!";
    }
}

// var game1 = guessingGame(3);
// var game2 = guessingGame(1);
