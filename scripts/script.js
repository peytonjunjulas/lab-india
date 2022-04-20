
function clearHamock(){
  $('input:radio[name=hamockType]').attr('checked', false);
}

function clearKayak(){
  $('input:radio[name=kayakType]').attr('checked', false);
}

function clearCanoe(){
  $('input:radio[name=canoeType]').attr('checked', false);
}

//Array for pick up times and their key 
let pickupTimes = [
  ["morning", ["8:00 am", "9:00 am", "10:00 am", "11:00 am"]],
  ["midDay", ["12:00 pm", "1:00 pm"]],
  ["afternoon", ["2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm"]],
  ["evening", ["6:00 pm", "7:00 pm", "8:00 pm"]]
];

//fucntion structure for flow 
$("#timeFrame").on("change", function(e) {
  $("#pickupTime").prop("disabled", false);

  let inputVal = this.value;

  $.each(pickupTimes, function (key, value){

    if (inputVal === value[0]){

      console.log(
        "value[0]:" + value[0] + ", key:" + key + "value: " + value
      );

      $.each(value, function (nestKey, nestValue){

        switch (nestKey){
          case 0:
            $("label[for=pickupTime]").text(nestValue);
            $("#pickupTime").empty();
            $("#pickupTime").append(
              $("<option>").text(`select a ${nestValue} `)
            );
            break;
          case 1: 
            $.each(nestValue, function (nameKey, nameValue){
              console.log(nameKey, nameValue);
              $("#pickupTime").append(
                $("<option>").val(nameValue).text(nameValue)
              );
            });
            break;
        }
      });
    }
  });
});

//Gets the values of all the fields specified below and spits them to a modal 
$("#submitFormRental").click(function(){

var fName = $("#fName").val();
$("#customerArea").append("First Name: " + fName);

$("#customerArea").append("<br>");

var lName = $("#lName").val();
$("#customerArea").append("Last Name: " + lName);

$("#customerArea").append("<br>");

var phoneNumber = $("#pNumber").val();
$("#customerArea").append("Phone Number: " + phoneNumber);

$("#customerArea").append("<br>");

var email = $("#email").val();
$("#customerArea").append("Email: " + email);

$("#customerArea").append("<br>");

var bDay = $("#DOB").val();
$("#customerArea").append("Birthdate: " + bDay);

$("#customerArea").append("<br>");

$("#customerArea").append("Payment Information: ");

$("#customerArea").append("<br>");

var cardFName = $("#cardFName").val();
var cardMName = $("#middle").val();
var cardLName = $("#cardLName").val();
$("#customerArea").append("Name on card: " + cardFName + " " + cardMName + " " + cardLName);

$("#customerArea").append("<br>");

var cardNumber = $("#cardNumber").val();
$("#customerArea").append("Card number: " + cardNumber);

$("#customerArea").append("<br>");

var expDate = $("#expDate").val();
$("#customerArea").append("Exp. Date: " + expDate);

$("#customerArea").append("<br>");

var cvvNumber = $("#cvvNumber").val();
$("#customerArea").append("CVV: " + cvvNumber);

});