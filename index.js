const myArray = [];
function writeCards(myNames, events){
    for (let index = 0; index < myNames.length; index++) {
        myArray[index] = `Thank you, ${myNames[index]}, for the wonderful ${events} gift!`
    }
    return myArray 
}

function countDown(myNumber){
    if (myNumber >= 0) {
        while (myNumber >= 0) {
            console.log(myNumber)
            myNumber--;
        }
    }else{
        console.log("That number isn't above Zero.")
    }
}