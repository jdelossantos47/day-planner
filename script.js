//  difining variables
// HH format for a 24hr clock
let currentTime = moment().format("HH");
// parse the current time 
let currentTimeInt = parseInt(currentTime);
let saveBtn = $(".saveBtn");

// set data attributes for each hour input elemen
$("#hour9").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
$("#hour10").attr("data-time", moment("10:00 am", "h:mm a").format("HH"));
$("#hour11").attr("data-time", moment("11:00 am", "h:mm a").format("HH"));
$("#hour12").attr("data-time", moment("12:00 pm", "h:mm a").format("HH"));
$("#hour1").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));
$("#hour2").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));
$("#hour3").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
$("#hour4").attr("data-time", moment("4:00 pm", "h:mm a").format("HH"));
$("#hour5").attr("data-time", moment("5:00 pm", "h:mm a").format("HH"));


$(document).ready(function () {

    // call the function to show the input values with stored data
    renderPlans();


    //  add current day to the top 

    // set variable to current day. 
   let currentDay = moment().format("dddd, MMMM Do");
    // set text of p tag as current day
    $("#currentDay").text(currentDay);


    // change box color based on time of the day

    // set variable imputTime to show the block's corresponding time with a for loop
    for (let s = 1; s <= 12; s++) {
       let inputTime = $("#" + s + "row").attr("data-time");
       let inputTimeInt = parseInt(inputTime);
        console.log(inputTimeInt);

        // color style based on comparisons between the currentTimeInt and the inputTimeInt
        if (currentTimeInt === inputTimeInt){
            $("#" + s + "row").addClass("present");
            
        }

        if (currentTimeInt > inputTimeInt){
            $("#" + s + "row").addClass("past");
        }

        if (currentTimeInt < inputTimeInt){
            $("#" + s + "row").addClass("future");
        }

    }

   // hover button
    saveBtn.on("mouseenter", function () {
        $(this).addClass('hover');
    });

    saveBtn.on("mouseleave", function () {
        $(this).removeClass('hover');
    });
        //  click button
        saveBtn.on("click", function () {
        // set a variable to select the clicked-on-button's data-hour attribute which we set in the HTML
       let hour = $(this).attr("time-data");

        // set a variable for selecting value of user's "plan" (input) at a particular hour
        let plan = $("#" + hour + "row").val();

        // save data to local storage
        localStorage.setItem(hour , plan);

    });


    //  Function to retrieve stored user inputs from local storage and show the hour's input value 
    function renderPlans() {
       
        for (let i = 1; i <= 12; i++) {
            // select the 
            $("#" + i + "row").val(localStorage.getItem(i));
        }
    }


});
