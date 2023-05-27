// our vqriables
var eachHour = [];
var todaysDate;
var currrentHour;


// Initialization
function init(){

  // get todays's date
  todaysDate = new dayjs().format("dddd, MMMM D YYYY");
  $('#currentDay').text(todaysDate);
  // get current hour and set hour color
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

  function saveEvents(buttonHour){

    // var newEvent = {
    //     eventHour: XXXXXXXXXX,
    //     message: XXXXXXXXXXXX,  
    // }
  }

  // Function to set color to each hour
 function checkCurrentHour(){
  currrentHour = new dayjs().format("HH");

  $(".time-block").each(function(){
      var calendarHour = $(this).attr("id").substring(5);
      if (calendarHour === currrentHour){
         $(this).addClass("present");
      }else if(calendarHour < currrentHour){
         $(this).addClass("past") ;
      }else {
        $(this).addClass("future");
      }
  })
 }


 // Seting event listener for eacj save button
 function setEventListeners(){

    $(".time-block").each(function(){
      $(this).children("button").on("click",function(event){
         event.preventDefault();
         var calendarHour = $(this).parent(".time-block").attr("id").substring(5);
         saveEvents(calendarHour);
      })
})
}


// When document is ready, initialize functions
$(document).ready(function(){
    init();
    setEventListeners();
})



// $(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
// });
