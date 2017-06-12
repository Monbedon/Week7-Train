var config = {
    apiKey: "AIzaSyAhc33OiXzjADGf7gXi86bCBtaFUligkqk",
    authDomain: "train-1b19c.firebaseapp.com",
    databaseURL: "https://train-1b19c.firebaseio.com",
    projectId: "train-1b19c",
    storageBucket: "train-1b19c.appspot.com",
    messagingSenderId: "491374573223"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

  var tFrequency = 30;

  var firstTime ="08:00";

  var currentTime = moment();

  $("#add-train-btn").on("click",function(event){
  	event.preventDefault();

  	var name = $("#name-input").val().trim();
  	var destination = $("#destination-input").val().trim();
  	var firstTrainTime = moment($("#firstTrain-input").val().trim(),"hh:mm").format("x");
  	var frequency = $("#frequency-input").val().trim();
  	

  	var trainUser ={
  		name:name,
  		destination: destination,
  		firstTrainTime: firstTrainTime,
  		frequency: frequency
  	};
  	
  	database.ref().push(trainUser);
  	

   database.ref().on("value", function(snapshot){
   	 console.log(snapshot.val());
   	 console.log(snapshot.val().name);
   	 console.log(snapshot.val().destination);
   	 console.log(snapshot.val().firstTrainTime);
   	 console.log(snapshot.val().frequency);

   	 $("#name-input").html(snapshot.val().name);
   	 $("#destination-input").html(snapshot.val().destination);
   	 $("#firstTrain-input").html(snapshot.val().firstTrain-input);
   	 $("#frequency-input").html(snapshot.val().frequency);

})