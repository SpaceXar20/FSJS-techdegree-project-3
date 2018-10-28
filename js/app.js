$("#name").focus(); //Set focus on the first text field

//JOB ROLE SECTION
// a text field will be revealed when the "Other" option is selected
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

//T-SHIRT INFO SECTION 
let $shirtDesign = $("#design");
let $shirtColor = $("#colors-js-puns");

//matching JS Puns theme with JS Puns shirts
$shirtColor.hide();
$shirtDesign.change(function(){
  if($('#design option:selected').text()==="Theme - JS Puns"){
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




//REGISTERING FOR WORKSHOPS

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
      //make a conflicting event unavailable
      $("[name='node']").attr("disabled", "true").parent().fadeOut("slow");
      $("[name='npm']").attr("disabled", "true").parent().fadeOut("slow");
    } else {
      totalCost = totalCost - 100;
      $(".activities p").text("Total Cost: $ " + totalCost);
    
    
    //if the user doesn't select JS libraries then other events will be available
    $("[name='node']").removeAttr("disabled").parent().toggle()
    $("[name='npm']").removeAttr("disabled").parent().toggle()
    }
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

//PAYMENT INFO SECTION

//Display payment sections based on the payment option chosen in the select menu.

//The "Credit Card" payment option is the default option when the page loads
$("#payment").val("credit card").show();
$(".paypal").focus();

//hide the "PayPal" and "Bitcoin" information./
$(".paypal").hide();
$(".bitcoin").hide();

//Payment option in the select menu should match the payment option displayed on the page.
//When a user selects the "PayPal" payment option, the PayPal information should display, and the credit card and “Bitcoin” information should be hidden.
let $paymentMethod = $("#payment");
$paymentMethod.change(function(){
  if($("#payment option:selected").text()==="PayPal"){
  $(".paypal").toggle(1000); 
  $(".bitcoin").hide();
  $("#credit-card").hide();
  
  // If the user selects "Bitcoin" option, its info should display,and credit card and “PayPal” information should be hidden.
  } else if ($("#payment option:selected").text()==="Bitcoin") {
    $(".bitcoin").toggle("fast");
    $(".paypal").hide();
    $("#credit-card").hide();
    
    //if the user selects credit card, then bitcoin and paypal will be unavailable
  } else if ($("#payment option:selected").text()==="Credit Card") {
    $("#credit-card").slideToggle(2000);
    $(".paypal").hide();
    $(".bitcoin").hide();
    
    //the user needs to make a payment!,no freebies allowed!!!
  } else if ($("#payment option:selected").text()==="Select Payment Method") {
    //$('.payRequired').append('<p></p>'); 
    $("#payment").val("credit card").show();
    //$(".payRequired p").html("<h2>You cannot proceed until a payment method has been chosen!</h2>").show().css({"color":"red"});
    $(".selectMethod").fadeOut()
  } 
});

//FORM VALIDATIONS
//If any of the following validation errors exist, prevent the user from submitting the form:

//Name field can't be blank,otherwise the page won't submit
$("form").submit(function(event){
  if ( $( "input:first" ).val() === "" ) {
     alert("Please type your name on the form.You must have a name right?")
    return false;
 }
});

//The form will not submit if the user does not type an email
$("form").submit(function(event){ 
  if ( $( "input[name='user_email']" ).val() === "" ) {
     alert("Please type a valid email!")
    return false;
 }
});

//Email field must be a validly formatted e-mail address
const emailInput = document.getElementById("email"); //Since I found regex to be really challenging, I had to revisit the project we did in the regex videos and some notes I took in order to complete this challenge in doing that,  I am beginning to understand regex a little better
function isValidEmail(email) {
  return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
  }

  // show element when show is true, hide when false
  function showOrHideTip(show, element) {
    
    if (show) {
      element.style.display = "inherit";
    } else {
      element.style.display = "none";
    }
  }
//set up event 
  function createListener(validator) {
    return e => {
      const text = e.target.value;
      const valid = validator(text);
      const showTip = text !== "" && !valid;
      const tooltip = e.target.nextElementSibling;
      showOrHideTip(showTip, tooltip);
    };
  }

  emailInput.addEventListener("input", createListener(isValidEmail));

//User must select at least one checkbox under the "Register for Activities" section of the form in order to submit
$(document).submit(function(event){ 
  if($('#checkBoxes input[type="checkbox"]:checked').length !== 0){
    alert("You\'re going to an event? Awesome!!");
  }else{
    alert('Please register to at least one workshop before submitting');
    return false
  }
});

//MAKING sure the user has supplied a Credit Card number, a Zip Code, and a 3 number CVV value before submission
 
//The form will not submit if the user does not type a card number
$("form").submit(function(event){ 
  if ( $( "input[name='user_cc-num']" ).val() === "" ) {
     alert("A credit card or debit card is needed to process your payment!")
    return false;
 }
});

//The credit card field should only accept a number between 13 and 16 digits
//const creditCardInput = document.getElementById("cc-num");
//function isValidEmail(email) {
  //return / /i.test(cc-num);
  //}

  //The form will not submit if the user does not type a zip code
$("form").submit(function(event){ 
  if ( $( "input[name='user_zip']" ).val() === "" ) {
     alert("You cannot submit the form without a zip code number!")
    return false;
 }
});

//The form will not submit if the user does not type a CVV number
$("form").submit(function(event){ 
  if ( $( "input[name='user_cvv']" ).val() === "" ) {
     alert("You cannot submit the form without a CVV number!")
    return false;
 }
});