// our vqriables
var eachHour = [];
var todaysDate;
var currrentHour;


// Initialization
function init(){

  // get todays's date
  todaysDate =  dayjs().format("dddd, MMMM D YYYY");
  $('#currentDay').text(todaysDate);
  // get current hour
  checkCurrentHour();
  // popuate calendar with existing events
  retrieveEvents();
  }


 // popuate calendar with existing events
  function retrieveEvents(){

      // eachHour = [];
  // var toDoEvents = JSON.parse(localStorage.getItem("allEvents")) || [];
  
  // if (toDoEvents.length > 0) {
  
  //   var hour = 9;
  //   for(index = 0; index < toDoEvents.length; index++){
  //     $(`#hour-${hour}`).text(toDoEvents[index]);
  //     hour++;
  // }
     
  // }
  }

  // function saveEvents(event){

  // }


  // Function to set color to each hour
 function checkCurrentHour(){
  currrentHour = new dayjs().format("HH");

  $(".time-block").each(function(){
      calendarHour = $(this).attr("id").substring(5)
      if (calendarHour === currrentHour){
         $(this).addClass("present")
      }else if(calendarHour < currrentHour){
         $(this).addClass("past") 
      }else {
        $(this).addClass("future")
      }
  })
 }

 function setEventListeners(){

  
}


$(document).ready(function(){

  init();
  setEventListeners();
})





// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.



// $(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
// });
