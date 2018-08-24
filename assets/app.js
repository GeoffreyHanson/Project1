// Initialize Firebase
var config = {
    apiKey: "AIzaSyBblANmtIQuZTTvQaTZ44ukGKn3WkzVcuE",
    authDomain: "baseline-project-one.firebaseapp.com",
    databaseURL: "https://baseline-project-one.firebaseio.com",
    projectId: "baseline-project-one",
    storageBucket: "",
    messagingSenderId: "471965093855"
  };

firebase.initializeApp(config);

// Creating a variable to reference the database.
var database = firebase.database();


// User clicks photo upload button

$("#photoUploadButton").on("click", function uploadePicturePopUp () {

    // This on click event will create a pop up of the user's computer files so that they can find their picture file and upload it into the application.

});

// Function for grabbing user's input photo and putting it on our browser

function handleFiles (files) {

    var file = fileInput.files[0]

    if (!file.type.startsWith('image/')){ continue }

    var img = document.createElement("img");
    img.classList.add("obj");
    img.file = file;
    preview.appendChild(img); // Assuming that "preview" is the div output where the content will be displayed




}


$("#formSubmitButton").on("click", function grabUserSubmission(event) {

    event.preventDefault();

    var userName = $("#userName").val.trim;
    var lookingSelect1
    var userCommentsText = $("#userCommentsText").val.trim;


    // Store user information in firebase
    database.ref().push({
    UserName: userName,
    JobSeeking: lookingSelect1,
    UserComments: userCommentsText
    });
    


});


// An AJAX request is sent to Face ++ and the results are shown in the results div
function showResults() {

    var userPicture = $("img");
    var queryURL 

    // Empty the results div before putting new results each time the function gets called
    $("#results-appear-here").empty();

    // Send out an AJAX call to Face ++ using the user input's upload
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        // Find out which parameters are needed from the Face ++ response (i.e. confidence, beauty, happiness etc)

        var results = response.data;

        var confidence = results.confidence.rating;
        var beauty = results.beauty.rating;
        var happiness = results.happiness.rating;

        $("#results-appear-here").append(confidence, beauty, happiness);

        }

    )};

     /// LinkedIn Photo upload
     api_key =  "78kyu7q93daep2";
     onLoad =  OnLinkedInFrameworkLoad;
     authorize = true;
    
    
    function onLinkedInLoad() {

    };
    
    // submit photo to linkedin profile
    function OnLinkedInFrameworkLoad() {
     IN.Event.on(IN, "auth", OnLinkedInAuth);
   }
   // if authorized bring to linkedIn profile
   function OnLinkedInAuth() {
     IN.API.Profile("me").result(ShowProfileData);
 };
 //show user linkedin profile
 function ShowProfileData(profiles) {
   var member = profiles.values[0];
   var id=member.id;
   var firstName=member.firstName;
   var lastName=member.lastName;
   var photo=member.pictureUrl;
   var headline=member.headline;

   //use information captured above
   console.log(member)
};

// Get the file element
let fileInput = document.querySelector('#image-file');

fileInput.addEventListener('change', function() {
    let file = fileInput.files[0];

    // Create a new File Reader
    let fileReader = new FileReader();
    
    // Set the 'onload' callback.
    fileReader.onload = function (event) {
        let processedFile = event.target.result;

        // Console the base 64 string
        console.log(processedFile);
    
        $("#userPhoto").html("<img id='Picture'>");
        $("#Picture").attr({
            'src': processedFile,
            'width':'100%'});

        // Put into firebase storage.
       
    };
    
    // Read the file, which triggers the callback after the file is compete.
    fileReader.readAsDataURL(file);
});

