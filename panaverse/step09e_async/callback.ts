// callback function

function myCallBack(text: string) {
    console.log('inside myCallBack ' + text);
    
}


function callingFunction(initialText: string, callBack: (text: string) => void) {
    callBack(initialText);
}

callingFunction('myText', myCallBack);