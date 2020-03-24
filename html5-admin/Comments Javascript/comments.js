// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDE-MjuF2PEURC-rQVNCrWOkd4F-27V7I4",
    authDomain: "sw-project1-coronavirus.firebaseapp.com",
    databaseURL: "https://sw-project1-coronavirus.firebaseio.com",
    projectId: "sw-project1-coronavirus",
    storageBucket: "sw-project1-coronavirus.appspot.com",
    messagingSenderId: "475105567752",
    appId: "1:475105567752:web:8f72f9bf0f26121dfaddbd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Database Variable
var database = firebase.database();

var postComment = function() {
    var name = document.getElementById("name").value,
        location = document.getElementById("location").value,
        comment = document.getElementById("comment").value;

    if (name && location && comment) {
        database.ref().push({
            name: name,
            location: location,
            comment: comment
        });
    }
    document.getElementById("name").value = '';
    document.getElementById("location").value = '';
    document.getElementById("comment").value = '';
};

database.ref().on("child_added", function(snapshot) {
    var comment = snapshot.val();
    addComment(comment.name,
        comment.location,
        comment.comment);
});

var addComment = function(name, location, comment) {
    var comments = document.getElementById("comments");
    comments.innerHTML = "<hr><h4>" + name + " from " + location + " says:</h4><p>" + comment + "</p>" + comments.innerHTML;
};