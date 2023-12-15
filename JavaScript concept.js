function register(cb){
  // setTimeout(function() {
  //   console.log("register End");
  //   cb();
  // }, (2000));
  let i=0;
  while(i<10000){
    i++
  }
   cb();
   console.log("register End >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  
  
}
function sendmail(){
  
   setTimeout(function() {
    console.log("sendmail end");
  }, (10));
}
function login(){
  setTimeout(function() {
    console.log("login end");
  }, (10));
}
function userDetails(){
 setTimeout(function() {
    console.log("userDetails end");
  }, (10));
}



3 )   ------------------------------------------------------------------------- output based question  --------------------------------------------
var a = [1,7,8,4,2,12,75,45];
console.log(a.join(''))
console.log(a.toString())





4 ) console.log((3+4+ +'2'));    out of this

5) console.log(typeof(null));   output of this



console.log("other things works")


-------------------------------------------------------------------------------------------------------------------------


1) --- let myJSON = {
    "Boss" : "John",
    "Department" : "Finance",
    "Department id": 3,
    "employees":[
        {
            "name":"Shaun",
            "age": 30
        },
        {
            "name":"Paul",
            "age" : 27
        }
    ]
};
console.log(myJSON.employees[0].name)

2 )--------const arr=[1,2,3,[4,3],8,9];
let arr1= arr[3];
arr.splice(3,1)
let arr2= arr;
let final=[...arr1,...arr2]
console.log(final)
console.log([... new Set(final)])



----------------------------------------------------------------------------------------------------------------------------

3) HTML5 Features 

Semantic Elements
Audio and Video Support
Canvas Elements
Geolocation API
Local Storage
Responsive Images
Web Workers
Drag and Drop API
Form Enhancements
Web Sockets
Micro Data
Cross Document Messaging





4 )-----------------------------------------------------------------------------------------------------------------------------------


   map vs foreach diffrence

5 )--------------------------------------
   
      Array to string conversion




6 )------------------------------------------------------------------------------------------------------------------------------------


What is the purpose of React Fiber?
Improved performance

React Fiber is aimed at improving the perceived performance for complex React applications. It does so by allowing React to break the limits of the call stack. This lets it pause or start rendering work whenever required.
Better suitability for advanced UI

React Fiber also increases the suitability of the React library to create animations, layouts, and gestures.
Control over the "priority" of work

Through its feature of incremental rendering, React Fiber lets developers split rendering work into smaller chunks and distribute it over multiple frames. This allows users to essentially control the "priority" of work.
For example, React Fiber could help you prioritise functions that originate from user actions while delaying logic of less-important background or offscreen functions to avoid frame rate drops.



7)-------------------------------------------------------

                                 -what is promise ?

8 )-------------------------------what is protyping in react js.

9) -------------------------------shift and unshift

10 )------------------------------Bubbling and capturing and progation.

11) ------------------------------Disadvantage of react(Not fixed libray in version upgrade, Seo, reutrun  jsx)

12 )------------------------------Webpack and bundling and spiliting.

13 )------------------------------Media query with only operater.

14 ) -----------------------------How to make items at center.

15 ) ---------------------------- What is the Promise.all().

16 )----------------------------- What is farword ref.

17)-------------------------------What isn IIFE.


18) what are genraters. vs Object.entries.


19) ----------------------output ?? 3+ "3"= ?    , "3"+"3"=?  ,  "3"-2=? ,  "3" - "3"= ?








