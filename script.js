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

  var diffTime = moment().diff(moment(firstTrainTime), "minutes");

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
    
     // The console was showing an error on the line below
   	 $("#train-table").append("<tr><td>" + Name + "</td><td" + destination + "</td><td>" + firstTrainTime + "</td><td>"+ frequency + "</td></tr>");
 


    // // First Time (pushed back 1 year to make sure it comes before current time)
    // var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");
    // console.log(firstTimeConverted);

    // // Current Time
    // var currentTime = moment();
    // console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // // Difference between the times
    // var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    // console.log("DIFFERENCE IN TIME: " + diffTime);

    // // Time apart (remainder)
    // var tRemainder = diffTime % tFrequency;
    // console.log(tRemainder);

    // // Minute Until Train
    // var tMinutesTillTrain = tFrequency - tRemainder;
    // console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // // Next Train
    // var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    // console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
})
