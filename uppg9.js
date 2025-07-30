

function uppg9 (){
    function sort(siffror){
        siffror.map(siffra => {
            if (siffra % 2 === 0){
            console.log(siffra,'jämt');
        } else {
            console.log(siffra,'udda');
        }
        } )
    }
    
    const numbers = [9, 8, 12, 87]
    sort(numbers);
}

module.exports = { uppg9 };