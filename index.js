//Script that fade-ins all elements with the "fadein" class at a random speed

$(".fadein").each(function(){
    $( this ).css("animation-duration", (Math.random()*2).toString()+"s");
});


