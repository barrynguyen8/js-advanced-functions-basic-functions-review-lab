function saturdayFun(string1="roller-skate") {
    return `This Saturday, I want to ${string1}!`
}

function mondayWork(string2="go to the office"){
    return `This Monday, I will ${string2}.`
}

mondayWork();
function wrapAdjective(string3="*"){
    return function(string4="special") {
        return `You are ${string3}${string4}${string3}!`}
}

let Calculator = {add:function(){return 1+3;}, subtract:function(){return 1-3;}, multiply:function(){return 1*3;}, divide:function(){return 10/5;}};



const arrayOfFunctions = [function(a){return a*2}, function(a){return a+1000}, function(a){return a%7}];

function actionApplyer(startInt, arrayOfFunctions){
    let a= startInt;
    for (let i = 0; i < arrayOfFunctions.length;  i++) {
        a = arrayOfFunctions[i](a)
}
    return a;
}   




