// callback function
function myCallBack(text) {
    console.log('inside myCallBack ' + text);
}
function callingFunction(initialText, callBack) {
    callBack(initialText);
}
callingFunction('myText', myCallBack);
export {};
