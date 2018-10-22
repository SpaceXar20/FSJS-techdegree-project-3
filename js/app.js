$("#name").focus(); //Set focus on the first text field

//Include a text field that will be revealed when the "Other" option is selected from the "Job Role" drop down menu.
 $('#other-title').hide();
 $(document).ready(function()
{
 $("#other-title").change(function()
 {
  if($(this).val() == "Other")
  {
   $("#other-title").show();
  }
  else
  {
   $("other-title").hide();
  }
 });
 $("other-title").hide();
});