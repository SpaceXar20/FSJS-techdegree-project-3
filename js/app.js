$("#name").focus(); //Set focus on the first text field

//”Job Role” section, a text field will be revealed when the "Other" option is selected
 $(document).ready(function()
{
 $("#title").change(function()
 {
  if($(this).val() === "other")
  {
   $("#other-title").show();
  }
  else
  {
   $("#other-title").hide();
  }
 });
 $("#other-title").hide();
});

//T-Shirt Info” section
let $shirtDesign = $("#design");
let $shirtColor = $("#colors-js-puns");

//matching JS Puns theme with JS Puns shirts
$shirtColor.hide();
$shirtDesign.change(function(){
if($('#design option:selected').text()==="Theme - JS Puns"){
 $shirtColor.show();
 $("#color option[value = cornflowerblue]").show();
 $("#color option[value = darkslategrey]").show();
 $("#color option[value = gold]").show();
 $("#color option[value = tomato]").hide();
 $("#color option[value = steelblue]").hide();
 $("#color option[value = dimgrey]").hide();    
} else if ($("#design option:selected").text()==="Select Theme") {
  $shirtColor.hide();
  //Matching I♥ JS theme with I♥ JS shirts  
} else if ($("#design option:selected").text()===("Theme - I ♥ JS") )
  $shirtColor.show();
      $("#color option[value = tomato]").show();
      $("#color option[value = steelblue]").show();
      $("#color option[value = dimgrey]").show();
      $("#color option[value = cornflowerblue]").hide();
      $("#color option[value = darkslategrey]").hide();
      $("#color option[value = gold]").hide();


});




//Registering for Tech Workshops

//this variable represents the cost of each event
let totalCost = 0;
$('.activities').append('<p></p>'); //I append paragraphs  to the activities fieldset so prices can add and shown

//I add $100 to (totalCost) when js frameworks is selected
$("input[name='js-frameworks']").on("click", function(){
  if($(this).is(":checked")){
   totalCost = totalCost + 100; //$100 is added to variable
   $(".activities p").text("Total: $ " + totalCost);
   //Prevent conflict between JS Frameworks and Express Workshop
$("[name='express']").attr("disabled", "true").parent().css({"color":"#ce2121"});
} else {
  //take away $100 from totalCost
  totalCost = totalCost - 100;
  $(".activities p").text("Total: $ " + cost);
  $("[name='express']").removeAttr("disabled").parent().css({"color":"#54e565"});
 }
});

//The cost will be $100  when the user clicks on express
$("input[name='express']").on("click", function(){
  if($(this).is(":checked")){
    totalCost = totalCost + 100;
    $(".activities p").text("Total Cost: $ " + totalCost);
    //When the user chooses express workshop, the javascript frameworks workshop will be unavailable to avoid conflict
   $("[name='js-frameworks']").attr("disabled", "true").parent().css({"text-decoration":"line-through"});
  } else {
    //take away $100 
    totalCost = totalCost - 100;
    $(".activities p").text("Total Cost: $ " + totalCost);

    //if the user doesn't select express then other events will be available
    $("[name='js-frameworks']").removeAttr("disabled").parent().css({"color": "#54e565"});
  }
});

//Add cost to Javascript Libraries
$("input[name='js-libs']").on("click", function(){
  if($(this).is(":checked")){
    totalCost = totalCost + 100;
    $(".activities p").text("Total Cost: $ " + totalCost);
    //make a conflicting event unavailable
    $("[name='node']").attr("disabled", "true").parent().css({"text-decoration": "line-through"});
  } else {
    totalCost = totalCost - 100;
    $("activities p").text("Total Cost: $ " + totalCost);
    //if the user doesn't select JS libraries then other events will be available
    $("[name='node']").removeAttr("disabled").parent().css({"color": "#54e565"});
  }
});

//Add cost to NODE event
$("input[name='node']").on("click", function(){
  if($(this).is(":checked")){
    totalCost = totalCost + 100;
  $(".activities p").text("Total Cost: " + totalCost);
  //if the user chooses node, then the js libraries event won't be available
  $("[name='js-libs']").attr("disabled", "true").parent().css({"text-decoration": "line-through"});
  } else {
    totalCost = totalCost - 100;
    $(".activities p").text("Total Cost: $ " + totalCost);
    //if the user doesn't choose node, then other events will be available
    $("[name='js-libs']").removeAttr("disabled").parent().css({"color": "#54e565"});
  }
});

//adding total cost for events that don't conflict when a user chooses an event
//If the user chooses Builds tools workshop
$("input[name='build-tools']").on("click", function(){
  if($(this).is(":checked")){
    totalCost = totalCost + 100;
    $(".activities p").text("Total Cost: $ " + totalCost);
  } else {
    totalCost = totalCost - 100;
    $(".activities p").text("Total Cost: $ " + totalCost);
  }
});

//When the user chooses the npm workshop
$("input[name='npm']").on("click", function(){
  if($(this).is(":checked")){
    totalCost = totalCost + 100;
  } else {
    totalCost = totalCost - 100;
    $(".activities p").text("Total Cost: $ " + totalCost);
  }
});

//Adding cost when the user chooses the Main Conference
$("input[name='all']").on("click", function(){
  if($(this).is(":checked")){
    totalCost = totalCost + 200;
  } else {
    totalCost = totalCost - 200;
    $(".activities p").text("Total Cost: $ " + totalCost);
  }
});




