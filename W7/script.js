$(document).ready(function(){

    // --- 1. Interactive Tag ---
    const $tags = $(".tool-list span, .hobby-list span");

    $tags.on("mouseenter", function(){
        $(this).addClass("tag-hovered");
    });

    $tags.on("mouseleave", function(){
        $(this).removeClass("tag-hovered");
    });
    
    
    // --- 2. Interactive Experience Cards ---
    const $expEntries = $(".experience .entry");

    $expEntries.on("mouseenter", function(){
        $(this).addClass("experience-hovered");
    });

    $expEntries.on("mouseleave", function(){
        $(this).removeClass("experience-hovered");
    });

});