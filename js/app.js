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
 $("#color").val("cornflowerblue")
 $("#color option[value = cornflowerblue]").show();
 $("#color option[value = darkslategrey]").show();
 $("#color option[value = gold]").show();
 $("#color option[value = tomato]").hide();
 $("#color option[value = steelblue]").hide();
 $("#color option[value = dimgrey]").hide();    
} else if ($("#design option:selected").text()==="Select Theme") {
  $shirtColor.hide();  
}
});

//Matching I♥ JS theme with I♥ JS shirts

$shirtDesign.change(function() {
    if ($("design option:selected").val() === "heart js") {
      $shirtColor.show();
      $("#color").val("tomato");
      $("#color option[value = tomato]").show();
      $("#color option[value = steelblue]").show();
      $("#color option[value = dimgrey]").show();
      $("#color option[value = cornflowerblue]").hide();
      $("#color option[value = darkslategrey]").hide();
      $("#color option[value = gold]").hide();
  
    }
});
