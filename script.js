// set variable for current time form dayJS
var currentHour = dayjs().hour()
// test
console.log("working")
// displays todays date from dayJS
$('#1a').text(dayjs().format('MMM D, YYYY'));
// click of save button triggers function 
// variables for value is the sibling of the class with "description" in it
// variable for hours comes from its parent div with an id tag in it.
$(".saveBtn").on("click", function () {
  var value = $(this).siblings(".description").val();
  var hours = $(this).parent().attr('id')
  console.log(hours)
  localStorage.setItem(hours, value);
})
// console log hours, and also setting hours and value variables to display in local storage
$("#hour-9 .description").val(localStorage.getItem('hour-9'));
$("#hour-10 .description").val(localStorage.getItem('hour-10'))
$("#hour-11 .description").val(localStorage.getItem('hour-11'))
$("#hour-12 .description").val(localStorage.getItem('hour-12'))
$("#hour-13 .description").val(localStorage.getItem('hour-13'))
$("#hour-14 .description").val(localStorage.getItem('hour-14'))
$("#hour-15 .description").val(localStorage.getItem('hour-15'))
$("#hour-16 .description").val(localStorage.getItem('hour-16'))
$("#hour-17 .description").val(localStorage.getItem('hour-17'))
// Made individual values for time blocks so they can appear in local storage sperately
function getcurrentHour() {
  $(".time-block").each(function () {
    var time = parseInt($(this).attr('id').split('-')[1]);
    if (time < currentHour) {
      $(this).addClass("past")
    }
   else if(time === currentHour) {
    $(this).removeClass("past")
    $(this).addClass("present")

  } else {
    $(this).removeClass("past")
    $(this).removeClass("present")
    $(this).addClass("future")

}
});
// Looks at current hour and compares it to the number we are designating as time.
// In order to do this, first you have to take out the "-" in the ID tag. I did this with a split.
// If time is less than curent hour, then add class past.
// ""   ""    "" the current hour, then remove past and add present.
// ""    ""    "" greater than current hour, remove both previous classes and add future.

}
getcurrentHour();
// makes it run function.