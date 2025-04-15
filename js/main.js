// A $( document ).ready() block.

$(document).ready(function () {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "vertical",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });

  // CONTACT FORM
  // $("#signupForm").validate({
  //   rules: {
  //     Name: "required",
  //     Phone: "required",
  //     Name: {
  //       required: true,
  //       minlength: 2,
  //     },
  //   },
  //   messages: {
  //     Name: "Please enter your firstname",
  //     Phone: "Please enter your lastname",
  //     Name: {
  //       required: "Please enter a username",
  //       minlength: "Your username must consist of at least 2 characters",
  //     },
  //   },
  // });
  // $(".service_involved_details-list").css("display", "none");

  $(".menu-icon").click(function () {
    console.log(1);
    $(".nav-container_responsive").css("display", "block");
    console.log(2);

    $("body").css("overflow-y", "hidden");
    console.log(3);
  });

  $(".responsive_nav-close ").click(function () {
    $(".nav-container_responsive").css("display", "none");
    $("body").css("overflow-y", "scroll");
  });

  var idFromUrl = window.location.hash;

  // Check if there is an ID in the URL
  if (idFromUrl) {
    console.log(idFromUrl);
    // Scroll to the element with that ID
    $("html, body").animate(
      {
        scrollTop: $(idFromUrl).offset().top,
      },
      1000
    ); // Adjust duration as needed
    idFromUrl = "";
  }

  // TIME DELAY
  function delay_close() {
    setTimeout(function () {
      $(".nav-container_responsive").css("transition", "0.5s");
      $(".nav-container_responsive").css("display", "none");
      $("body").css("overflow-y", "scroll");
    }, 200);
  }

  $(".contact_form_submit")
    .off("click")
    .on("click", function (e) {
      e.preventDefault(); // Prevent default button behavior
      console.log("Form submission triggered");

      var access_key = "66b452e8-2510-43d7-8e60-ecb5777044a7";

      // Get form values
      var name = $("input[placeholder='Name']").val().trim();
      var phone = $("input[placeholder='Phone']").val().trim();
      var email = $("input[placeholder='Email']").val().trim();
      var message = $("textarea").val().trim();
      var isAgreed = $("input[type='checkbox']").is(":checked");

      // Validate if required fields are filled
      if (name === "" || phone === "" || email === "") {
        alert("Please fill in all required fields.");
        return;
      }

      // Disable button to prevent double submission
      $(".contact_form_submit").prop("disabled", true);

      // Create JSON data
      let data = {
        access_key: access_key,
        name: name,
        email: email,
        message: message,
        phone: phone,
        agree_status: isAgreed,
      };

      console.log("Sending data:", data);

      // AJAX request
      $.ajax({
        url: "https://api.web3forms.com/submit",
        type: "POST",
        dataType: "json",
        contentType: "application/json", // Set correct content type
        data: JSON.stringify(data), // Convert object to JSON string
        success: function (response) {
          console.log("Success", response.message);
          $("#contact_form")[0].reset(); // Reset form after success
          $(".contact_form_submit").prop("disabled", false); // Re-enable button
          // data-toggle="modal" data-target="#exampleModal"
          $("#exampleModalCenter").modal("toggle");
          $("#SomeDiv").html(response);
          $("#success_modal").modal("show");

          // Close the modal after 4 seconds (4000 ms)
          setTimeout(function () {
            $("#success_modal").modal("hide");
          }, 4000);
        },
        error: function (xhr, status, error) {
          console.error("Error:", xhr, status, error);
          $(".contact_form_submit").prop("disabled", false); // Re-enable button
        },
      });
    });

  $(".nav-container_responsive .close_after_click").click(function () {
    delay_close();
  });

  function fadeInOnScroll() {
    $(".fade-in").each(function () {
      var elementTop = $(this).offset().top;
      var windowBottom = $(window).scrollTop() + $(window).height();

      if (elementTop < windowBottom - 50) {
        $(this).addClass("visible");
      }
    });
  }

  const cards = document.querySelectorAll(".card");

  function updateActiveCard(activeCard) {
    cards.forEach((card) => {
      if (card === activeCard) {
        card.setAttribute("active", "");
      } else {
        card.removeAttribute("active");
      }
    });
  }

  $(window).on("scroll", fadeInOnScroll);
  fadeInOnScroll();
  // });

  // PROJECT
  $(".service_involved-icon").click(function () {
    let val = $(this).data("val");
    // console.log(val);
    // $(".service_involved_details-list").css("display", "none");
    $(".service_involved_details-list").css("display", "none");
    if (val == 1) {
      $(".service_involved-first").css("display", "block");
    } else if (val == 2) {
      $(".service_involved-second").css("display", "block");
    } else if (val == 3) {
      $(".service_involved-third").css("display", "block");
    } else if (val == 4) {
      $(".service_involved-forth").css("display", "block");
    } else if (val == 5) {
      $(".service_involved-fifth").css("display", "block");
    }
  });

  // $("#animated-thumbnails-gallery").justifiedGallery({
  //   rowHeight: 150,
  //   margins: 5,
  // });
  console.log(
    typeof lgZoom !== "undefined" ? "lgZoom is loaded" : "lgZoom is NOT loaded"
  );

  document.addEventListener("DOMContentLoaded", function () {
    lightGallery(document.getElementById("my-gallery"), {
      plugins: [lgZoom], // ✅ Include the zoom plugin
      speed: 500,
      zoom: true,
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.getElementById("animated-thumbnails-gallery");

  if (gallery) {
    lightGallery(gallery, {
      plugins: [lgZoom], // ✅ Ensure Zoom plugin is included
      speed: 500,
      zoom: true, // ✅ Enable zoom
      actualSize: true, // ✅ Ensure actual size feature is enabled
      scale: 1.5, // ✅ Set zoom scale
      mode: "lg-fade", // ✅ Smooth transition effect
    });
  }
});
