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


    // --- 3. PROJECT PAGE (Mini-Sliders) ---

    $(".project-image-slider").each(function(){
        // Store the current index (0) on the filmstrip itself
        $(this).find(".slider-filmstrip").data("index", 0);
    });

    // --- Next Button Click ---

    $(".project-next-btn").on("click", function(){
        
        let $slider = $(this).closest(".project-image-slider");
        let $filmstrip = $slider.find(".slider-filmstrip");
        let $images = $filmstrip.find(".slider-image");
        
        let currentIndex = $filmstrip.data("index");
        
        currentIndex++;
        if (currentIndex >= $images.length) {
            currentIndex = 0; // Loop back to the start
        }
        
        $filmstrip.data("index", currentIndex);
        
        let imageWidth = $slider.width();
        let newOffset = -currentIndex * imageWidth;
        
        $filmstrip.css("transform", "translateX(" + newOffset + "px)");
    });

    $(".project-prev-btn").on("click", function(){
        
        let $slider = $(this).closest(".project-image-slider");
        let $filmstrip = $slider.find(".slider-filmstrip");
        let $images = $filmstrip.find(".slider-image");
        
        let currentIndex = $filmstrip.data("index");
        
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = $images.length - 1; // Loop back to the end
        }
        
        $filmstrip.data("index", currentIndex);
        
        let imageWidth = $slider.width();
        let newOffset = -currentIndex * imageWidth;
        
        $filmstrip.css("transform", "translateX(" + newOffset + "px)");
    });

    $(window).on("resize", function() {
    $(".slider-filmstrip").each(function(){
        let currentIndex = $(this).data("index") || 0;
        let $slider = $(this).closest(".project-image-slider");
        let newOffset = -currentIndex * $slider.width();
        $(this).css("transform", "translateX(" + newOffset + "px)");
    });
    });


    if ($("#contactForm").length > 0) {
        
        function validateName() {
            let $name = $("#name");
            let $errorSpan = $name.next(".error-message");
            
            if ($name.val().trim().length < 2) {
                $errorSpan.text("Please enter your full name.").show();
                $name.addClass("input-error");
                return false;
            } else {
                $errorSpan.hide();
                $name.removeClass("input-error");
                return true;
            }
        }
        
        function validateEmail() {
            let $email = $("#email");
            let $errorSpan = $email.next(".error-message");
            let emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
            
            if (!emailPattern.test($email.val())) {
                $errorSpan.text("Please enter a valid email address.").show();
                $email.addClass("input-error");
                return false;
            } else {
                $errorSpan.hide();
                $email.removeClass("input-error");
                return true;
            }
        }
        
        function validateMessage() {
            let $message = $("#message");
            let $errorSpan = $message.next(".error-message");
            
            if ($message.val().trim().length < 10) {
                $errorSpan.text("Please enter a message (at least 10 characters).").show();
                $message.addClass("input-error");
                return false;
            } else {
                $errorSpan.hide();
                $message.removeClass("input-error");
                return true;
            }
        }
        
        $("#name").on("blur", validateName);
        $("#email").on("blur", validateEmail);
        $("#message").on("blur", validateMessage);

        $("#message").on("input", function() {
            this.style.height = "auto";
            this.style.height = this.scrollHeight + "px";
        });

        
        $("#contactForm").on("submit", function(event) {
            
            event.preventDefault(); 
            
            let isNameValid = validateName();
            let isEmailValid = validateEmail();
            let isMessageValid = validateMessage();
            
            if (isNameValid && isEmailValid && isMessageValid) {

                $(this).fadeOut(300, function() {
                    $("#form-success").fadeIn(300);
                });
            } else {
            }
        });
    }

});