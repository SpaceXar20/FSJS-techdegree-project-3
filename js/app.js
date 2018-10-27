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
  if($('#design option:selected').text()==="Theme - JS Puns"){ //$(‘#design’).val()
 $shirtColor.show();
 $("#color").val("cornflowerblue").show();
 $("#color option[value = cornflowerblue]").show();
 $("#color option[value = darkslategrey]").show();
 $("#color option[value = gold]").show();
 $("#color option[value = tomato]").hide();
 $("#color option[value = steelblue]").hide();
 $("#color option[value = dimgrey]").hide();    
} else if ($("#design").val()==="Select Theme") {
  $shirtColor.hide();
  //Matching I♥ JS theme with I♥ JS shirts  
} else if ($("#design option:selected").text()==="Theme - I ♥ JS") { 
  $shirtColor.show();
  $("#color").val("tomato").show();
      $("#color option[value = tomato]").show();
      $("#color option[value = steelblue]").show();
      $("#color option[value = dimgrey]").show();
      $("#color option[value = cornflowerblue]").hide();
      $("#color option[value = darkslategrey]").hide();
      $("#color option[value = gold]").hide();

 }
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


   //Prevent conflict between JS Frameworks and other events that are at the same time
$("[name='express']").attr("disabled", "true").parent().fadeOut("slow");
$("[name='build-tools']").attr("disabled", "true").parent().fadeOut("slow");
} else {
  //take away $100 from totalCost
  totalCost = totalCost - 100;
  $(".activities p").text("Total: $ " + totalCost);
  //return the deleted events back if the user chooses not to go to JavaScript Frameworks Workshop 
  $("[name='express']").removeAttr("disabled").parent().toggle()
  $("[name='build-tools']").removeAttr("disabled").parent().toggle()
 }
});

//The cost will be $100  when the user clicks on express
$("input[name='express']").on("click", function(){
  if($(this).is(":checked")){
    totalCost = totalCost + 100;
    $(".activities p").text("Total Cost: $ " + totalCost);
    //When the user chooses express workshop, the javascript frameworks  and build tools workshop will be unavailable to avoid conflict
   $("[name='js-frameworks']").attr("disabled", "true").parent().fadeOut("slow");
   $("[name='build-tools']").attr("disabled", "true").parent().fadeOut("slow");
  } else {
    //take away $100 
    totalCost = totalCost - 100;
    $(".activities p").text("Total Cost: $ " + totalCost);

    //if the user doesn't select express then other events will be available
    $("[name='js-frameworks']").removeAttr("disabled").parent().toggle()
    $("[name='build-tools']").removeAttr("disabled").parent().toggle()
  }
});

//Add cost to Javascript Libraries
 $("input[name='js-libs']").on("click", function(){
    if($(this).is(":checked")){
      totalCost = totalCost + 100;
      $(".activities p").text("Total Cost: $ " + totalCost);
    } else {
      totalCost = totalCost - 100;
      $(".activities p").text("Total Cost: $ " + totalCost);
    }
    //make a conflicting event unavailable
    $("[name='node']").attr("disabled", "true").parent().fadeOut("slow");
    $("[name='npm']").attr("disabled", "true").parent().fadeOut("slow");
    //if the user doesn't select JS libraries then other events will be available
    $("[name='node']").removeAttr("disabled").parent().toggle()
    $("[name='npm']").removeAttr("disabled").parent().toggle()
});

//Add cost to NODE event
$("input[name='node']").on("click", function(){
  if($(this).is(":checked")){
    totalCost = totalCost + 100;
  $(".activities p").text("Total Cost: " + totalCost);
  //if the user chooses node, then other conflicting events won't be available 
  $("[name='js-libs']").attr("disabled", "true").parent().fadeOut("slow");
  $("[name='npm']").attr("disabled", "true").parent().fadeOut("slow");
  } else {
    totalCost = totalCost - 100;
    $(".activities p").text("Total Cost: $ " + totalCost);
    //if the user doesn't choose node, then other events will be available
    $("[name='js-libs']").removeAttr("disabled").parent().toggle()
    $("[name='npm']").removeAttr("disabled").parent().toggle()
  }
});


//If the user chooses Builds tools workshop add cost
$("input[name='build-tools']").on("change", function(){
  if($(this).is(":checked")){
    totalCost = totalCost + 100;
    $(".activities p").text("Total Cost: $ " + totalCost);
    //prevent other events from conflicting with build tools workshop
    $("[name='js-frameworks']").attr("disabled", "true").parent().fadeOut("slow");
   $("[name='express']").attr("disabled", "true").parent().fadeOut("slow");
  } else {
    totalCost = totalCost - 100;
    $(".activities p").text("Total Cost: $ " + totalCost);
    
    //if the user doesn't select "build tools" then other events will be available
    $("[name='js-frameworks']").removeAttr("disabled").parent().toggle()
  $("[name='express']").removeAttr("disabled").parent().toggle()
  }
});

//When the user chooses the npm workshop
$("input[name='npm']").on("click", function(){
  if($(this).is(":checked")){
    totalCost = totalCost + 100;
    $(".activities p").text("Total Cost: $ " + totalCost);
    //prevent conflicts with other events
    $("[name='js-libs']").attr("disabled", "true").parent().fadeOut("slow");
    $("[name='node']").attr("disabled", "true").parent().fadeOut("slow");
  } else {
    totalCost = totalCost - 100;
    $(".activities p").text("Total Cost: $ " + totalCost);
    
    //if the user doesn't select "npm workshop" then other events will be available
    $("[name='js-libs']").removeAttr("disabled").parent().toggle()
    $("[name='node']").removeAttr("disabled").parent().toggle()
  }
});

//Adding cost when the user chooses the Main Conference
$("input[name='all']").on("click", function(){
  if($(this).is(":checked")){
    totalCost = totalCost + 200;
    $(".activities p").text("Total Cost: $ " + totalCost);
  } else {
    totalCost = totalCost - 200;
    $(".activities p").text("Total Cost: $ " + totalCost);
  }
});




