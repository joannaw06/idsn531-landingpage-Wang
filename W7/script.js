// Wait for the document to be fully loaded
$(document).ready(function(){

    // --- 1. INDEX PAGE: Interactive Tag ---
    const $tags = $(".tool-list span, .hobby-list span");
    if ($tags.length > 0) {
        $tags.on("mouseenter", function(){
            $(this).addClass("tag-hovered");
        });
        $tags.on("mouseleave", function(){
            $(this).removeClass("tag-hovered");
        });
    }
    
    // --- 2. INDEX PAGE: Interactive Experience Cards ---
    const $expEntries = $(".experience .entry");
    if ($expEntries.length > 0) {
        $expEntries.on("mouseenter", function(){
            $(this).addClass("experience-hovered");
        });
        $expEntries.on("mouseleave", function(){
            $(this).removeClass("experience-hovered");
        });
    }


    // --- 3. UPDATED: PROJECT PAGE (Mini-Sliders) ---
    // This logic now creates a smooth horizontal slide

    // We need to initialize each slider
    $(".project-image-slider").each(function(){
        // Store the current index (0) on the filmstrip itself
        $(this).find(".slider-filmstrip").data("index", 0);
    });

    // --- Next Button Click ---
    $(".project-next-btn").on("click", function(){
        
        // 1. Find the slider this button belongs to
        let $slider = $(this).closest(".project-image-slider");
        let $filmstrip = $slider.find(".slider-filmstrip");
        let $images = $filmstrip.find(".slider-image");
        
        // 2. Get the current index
        let currentIndex = $filmstrip.data("index");
        
        // 3. Calculate the next index
        currentIndex++;
        if (currentIndex >= $images.length) {
            currentIndex = 0; // Loop back to the start
        }
        
        // 4. Store the new index
        $filmstrip.data("index", currentIndex);
        
        // 5. Calculate the new position
        // Get the width of the container
        let imageWidth = $slider.width();
        // The new position is the index * the width
        let newOffset = -currentIndex * imageWidth;
        
        // 6. Animate the filmstrip to the new position
        $filmstrip.css("transform", "translateX(" + newOffset + "px)");
    });

    // --- Previous Button Click ---
    $(".project-prev-btn").on("click", function(){
        
        // 1. Find the slider this button belongs to
        let $slider = $(this).closest(".project-image-slider");
        let $filmstrip = $slider.find(".slider-filmstrip");
        let $images = $filmstrip.find(".slider-image");
        
        // 2. Get the current index
        let currentIndex = $filmstrip.data("index");
        
        // 3. Calculate the previous index
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = $images.length - 1; // Loop back to the end
        }
        
        // 4. Store the new index
        $filmstrip.data("index", currentIndex);
        
        // 5. Calculate the new position
        let imageWidth = $slider.width();
        let newOffset = -currentIndex * imageWidth;
        
        // 6. Animate the filmstrip
        $filmstrip.css("transform", "translateX(" + newOffset + "px)");
    });

});