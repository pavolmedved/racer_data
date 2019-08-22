 // javascript promise

 /* a promise is an object that represents the eventual completion or failure of an asynchronous operation
 */

let myFirstPromise = new Promise((resolve, reject) => {
    // we will call resolve(...) when what we are doing asynchronously is succesful
    // also we we call reject if that faild
    setTimeout(function() {
        resolve('Success We got bananas!!! YAAAAAAAAAAYA');
    }, 250)


})

myFirstPromise.then((Successmessage) => {
    // successmessage here
    console.log('Yay we have naners' + Successmessage);
}).catch((Failmessage) => {
    console.log("We don't have no grapes")
})

function myAasyncFunc(url) {
   return new Promise ((resolve,reject) => {
       const xhttp = new XMLHttpRequest();
       xhttp.open("Get", url);
       xhttp.onload = () => resolve(xhttp.responseText)
       xhttp.onerror = () => reject(xhttp.statusText);
       console.log("Working on data...")
       xhttp.send()
   })
}
//workking example
console.log(myAasyncFunc('https://images.unsplash.com/photo-1515524738708-327f6b0037a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80').then(() => {
   console.log("We have data now")
})
)

// not working example
console.log(myAasyncFunc('http://nowmusic.man').then(() => {
   console.log("We have data now")
})
.catch(() => {
   console.log("This does not work anymore")
})
)


// switch statement
switch (new Date().getDay()) {
   case 0:
     day = "Sunday";
     break;
   case 1:
     day = "Monday";
     break;
   case 2:
      day = "Tuesday";
     break;
   case 3:
     day = "Wednesday";
     console.log(day)
     break;
   case 4:
     day = "Thursday";
     break;
   case 5:
     day = "Friday";
     break;
   case 6:
     day = "Saturday";
   default:
       console.log("We are out of time... God mode")
 }

 // document object model --- AKA THE DOM
 document.getElementById('hello').innerText = "  What a wonderful world ...for JavaScript"

 function changeColor() {
     $('body').css('background-color','red')
 }

 function onSubmit() {
     let name = $("#submit-form input[name=full-name]").val()
     console.log(name)
 }
