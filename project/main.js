$(document).ready(function() {
    $(".skills-button").click(function() {
        $("#skillsContainer").fadeIn();
        $("#aboutContainer").hide();
        $("#educationContainer").hide();
    })

    $(".about-button").click(function() {
        $("#aboutContainer").fadeIn();
        $("#skillsContainer").hide();
        $("#educationContainer").hide();
    })


    $(".education-button").click(function() {
        $("#educationContainer").fadeIn();
        $("#aboutContainer").hide();
        $("#skillsContainer").hide();
    })
    });
  


