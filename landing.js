$(".welcome").html("Welcome to Color Match. <br><p>How many players would you like.</p>");

$(".players").hide();
$(".submitName").hide();

$("#playerOneButton").click(function() {

  $("#playerOne").show();
  $(".submitName").show();
  $("#playerTwo").hide();
});

$("#playerTwoButton").click(function(){
  $(".players").show();

});

 $(".submitName").click( function() {

   var playerOne = $("#playerOne").val();
   var playerTwo = $("#playerTwo").val();

   localStorage.setItem("NamePlayerOne", playerOne);
   localStorage.setItem("NamePlayerTwo", playerTwo);

 });
