

$(document).ready(function(){
  setDatePicker();
  setDateRangePicker(".startdate", ".enddate");
  setMonthPicker();
  setYearPicker();
  setYearRangePicker(".startyear", ".endyear");
});

$(document).ready(()=>{
  const ket = document.querySelector(".keterangandong");
  ket.innerHTML="lebar layar "+innerWidth+" px";
 
});

$(document).ready(function(){
$("form").delay(3000).fadeIn("slow");

});


// $(function() {
//   $("form").animate({ opacity: 1 }, { duration: 1200, queue: false });
//   $("form").animate({ "margin-top": "0px" }, { duration: 1200, queue: false });
// });