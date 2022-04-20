

$("#loadJson").click(function(){
  console.log("clicked");

  let jsonURL = "favorites.json";

  //let jsonURL = **GITHUB link for JSON DATA**;

  $.ajax({
      url: jsonURL,
      dataType: "json",
      success: function (data){
          $("#fName").val(data.fName);
          $("#lName").val(data.lName);
          $("#pNumber").val(data.pNumber);
          $("#email").val(data.email);
          $("#DOB").val(data.DOB);
          $("#cardFName").val(data.cardFName);
          $("#middle").val(data.cardMName);
          $("#cardLName").val(data.cardLName);
          $("#cardNumber").val(data.cardNumber);
          $("#expDate").val(data.expDate);
          $("#cvvNumber").val(data.CVV);
      },

      failure: function (data){
          alert("didnt work lol");
      }
  })


});