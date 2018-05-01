$(document).ready(function () {
$(".btn-subscribe").on("click",function () {
	console.log("Clicked");
     var emailAddress = $("#Email").val();
     alert("**" + emailAddress +" has been successfully added to our email list.Thank you. **") 
});
});