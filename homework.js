const sum = function(num){
    if(typeof(num) !== "number")
        return "Only Number";
    num = Math.abs(num);
    let total = 0;
    for(let i = 1; i <= num; i++)
        total += i;

    return total
}


const sumOfeven = function(num){
    if(typeof(num) !== "number")
        return "Only Number";
        num = Math.abs(num);
    let total = 0;
    for(let i = 2; i <= num; i++)
        if(i % 2 === 0)
            total += i;
    return total;
}


const ave = function(arrOfNum){
    let total = 0;
    for(const num of arrOfNum){
        if(typeof(num) !== "number")
        return "Only Number";
        total += Math.abs(num);
    }

    return total / arrOfNum.length;
    
}

const reverse = function(arrOfStr){
    let str = [];
    for(let i = arrOfStr.length - 1; i >= 0; i--)
        str[str.length] = arrOfStr[i];
  return str;
}

const addDashes = function(arr){
    str = arr[0];
    for(let i = 1; i < arr.length; i++)
        str += "-" + arr[i] 
    return str;

}

const countUpAndDown = function(num){
    str = ""
    for(let i = 1; i <= num; i++)
        str += i.toString() + " ";
    for(let i = num - 1 ; i >= 1; i--)
        str += i.toString() + " "
  return str;
}


const wordsWithA = function(arr){
    let arrWithA = [];
    for(let i = 0; i < arr.length; i++)
        for(let c = 0; c < arr[i].length; c++)
            if(arr[i][c] === "a"){
                arrWithA.push(arr[i])
                break;
            }
    return arrWithA;
}


const wordsWithLetter = function(letter, arr){
    let arrWithLetter = [];
    for(let i = 0; i < arr.length; i++)
        for(let c = 0; c < arr[i].length; c++)
            if(arr[i][c] === letter){
                arrWithLetter.push(arr[i])
                break;
            }
    return arrWithLetter;
}


const longestWord = function(str){
    let maxStr = "";
    str += " ";
    let compareStr = "";
    for(let i = 0; i < str.length; i++){
      if(str[i] === " "){
        if(maxStr.length < compareStr.length)
          maxStr = compareStr;
        compareStr = "";
        continue;
      }
      compareStr += str[i];
    }
    return maxStr;
  }
  
  const largestEvenNumber = function(arrOfNum){
    let maxEven = arrOfNum[0];
    for(const num of arrOfNum)
        if(maxEven < num)
            maxEven = num;
    return maxEven;
}