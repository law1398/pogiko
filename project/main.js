$(document).ready(function() {
    $(".skills-button").click(function() {
        $("#skillsContainer").fadeIn(1800);
        $("#aboutContainer").fadeOut();
        $("#educationContainer").fadeOut();
    });

    $(".about-button").click(function() {
        $("#aboutContainer").fadeIn(1800);
        $("#skillsContainer").fadeOut();
        $("#educationContainer").fadeOut();
    });


    $(".education-button").click(function() {
        $("#educationContainer").fadeIn(1800);
        $("#aboutContainer").fadeOut();
        $("#skillsContainer").fadeOut();
    });

    $(".likes , .hobbies , .weakness").click(function() {
        var obj = $(this);
        $('.section100').animate({
            width: "50%"
        }, 600);
        $(".sectiono").animate({
            width: "49.8%"
        }, 600, function() {
            $(".likes_info").fadeOut();
            $(".hobbies_info").fadeOut();
            $(".weakness_info").fadeOut();
            if ($(obj).hasClass('likes')) {
                $(".likes_info").fadeIn(600);
            } else if ($(obj).hasClass('hobbies')) {
                $(".hobbies_info").fadeIn(600);
            } else if ($(obj).hasClass('weakness')) {
                $(".weakness_info").fadeIn(600);
            }

        });
    });
});