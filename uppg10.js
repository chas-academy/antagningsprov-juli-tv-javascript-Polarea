function uppg10(){
    const numbers = [5, 12, 7, 10, 20, 9, 11];
  
    const bigEven = [];
    const smallOdd = [];
    const other = [];

    numbers.map(number => {
      if (number > 10 && number % 2 === 0){
        bigEven.push(number);
      }
      else if (number < 10 && number % 2 != 0){
        smallOdd.push(number);
      } else {
        other.push(number);
      }
    });
    
    const result = {bigEven, smallOdd, other}
    return result;
  
  }
  
  module.exports = { uppg10 };
  