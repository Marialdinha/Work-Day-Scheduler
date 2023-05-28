// our variables
var todaysDate;
var currrentHour;


// Initialization
function init(){

   // Hidding message Appointment Added
  $("#appointment-added").hide();
  // get todays's date
  todaysDate = new dayjs().format("dddd, MMMM D YYYY");
  $('#currentDay').text(todaysDate);
  // get current hour and set hour color
  checkCurrentHour();
  // popuate calendar with existing events
  retrieveEvents();
  }


 // popuate calendar with existing events in localstorage
  function retrieveEvents(){

  if (localStorage !== null) {
    for(index = 0; index < localStorage.length; index++){
        var keyHour = localStorage.key(index);
        var message = localStorage.getItem(keyHour);
        $(`#hour-${keyHour}`).children("textarea").val(message);
    }}
  }


  // Function to save events to localstorage
  function saveEvents(buttonHour){

    var message =  $(`#hour-${buttonHour}`).children("textarea").val();

    if  (message === null || message === ""){
        localStorage.removeItem(buttonHour);  
    }else {
        localStorage.setItem(buttonHour, message);

        // Showing message Appointment Added (4 seconds)
        $("#appointment-added").show();
        setTimeout(() => {
           $("#appointment-added").hide();
        }, 4000);
    }
          
        // Refresh page wth new events
        retrieveEvents();

     
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


 // Seting event listener for each save button
 function setEventListeners(){

    $(".time-block").each(function(){
      $(this).children("button").on("click",function(event){
         event.preventDefault();
         var buttonHour = $(this).parent(".time-block").attr("id").substring(5);
         saveEvents(buttonHour, );
      })
})
}


// When document is ready, initialize functions
$(document).ready(function(){
    init();
    setEventListeners();
})