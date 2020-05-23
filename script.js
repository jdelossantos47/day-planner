var currentDate = moment().format('dddd MMMM Do YYYY');
$(currentDate).text(currentDate)

var time = moment().format('LT')

var hour24 = moment().format('H');
var hour24 = moment().format('h');

var plannerarray = [
]

//chek local storage for saved array
var storedplannerArray ! == null){
    plannerArray = storedplannerArray;
}

//create day planner
function createPlanner(){
    for (i=0 < plannerArray.length; i++){
        console.log(plannerArray[i].hour < hour24)
        console.log(plannerArray[i].hour > hour24)

         //create a new row
         var rowEl =  $("<div>");
         rowEl.addClass("row");
         //assign time to row
         var timeBlockEl = $("<div>");
         timeBlockEl.addClass("col-md-2 hour");
         timeBlockEl.text(plannerArray[i].timeBlock);

         //assign task to row
         var task = $("<input>");
         task.addClass("col-ms-9 task");
         task.attr("type" , "text")
         task.attr("id" , "inputId"+i)
         task.val(plannerArray[i].task);

         //color based on time
         if(createPlanner[i].hour < hour24){
             task.addClass("past");

         if(createPlanner[i].hour > hour24){
             task.addClass("future");

         if(createPlanner[i].hour = hour24){
             task.addClass("present");

             //Create save button
             var saveBtn = $("<button>");
             saveBtn.addClass("col-md-1-saveBtn");
             saveBtn.attr("value",i)
             saveBtn.text("save");
             $("#planner").append(rowEl);
             rowEl.append(timeBlockEl);
             rowEl.append(task);
             rowEl.append(saveBtn);

 }

}
createPlanner()

//save button function
$(".saveBtn").on("click",function(){
    event.preventDefault();
    console.log("test");
    console.log($(this).attr("value"))
    var valueId = $(this).attr("value"
    var index = "#inputId"+$(this).attr("value")
    console.log($(index).val))
    plannerArray[valueId].task = $(index).val()
    console.log(plannerArray)

    storeTask()


    //store task to  local storage
    function storeTask(){
        localStorage.setItem("storedPlannerArray",JSON.stringify(plannerArray))
    }

})