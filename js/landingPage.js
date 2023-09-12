// Start dropdown
$(document).ready(function () {
  $(".dropdown-lang").on("click", function () {
    var dropdownContent = $(this).siblings(".dropdown-menu-lang");
    dropdownContent.toggle();
    event.stopPropagation();
  });

  $(document).on("click", function (event) {
    var dropdownContent = $(".dropdown-menu-lang");
    var target = $(event.target);
    if (
      !target.closest(".dropdown-menu-lang").length &&
      !target.hasClass("dropdown-lang")
    ) {
      dropdownContent.hide();
    }
  });
});
// end dropdown
$(document).ready(function () {
  $(".tab-links a").click(function (e) {
    e.preventDefault();
    var tabId = $(this).attr("href");
    $(".tab").removeClass("active");
    $(".tab-links li").removeClass("active");
    $(this).parent().addClass("active");
    $(tabId).addClass("active");
  });

  // Activate the first tab on page load
  $(".tab-links li:first-child").addClass("active");
  $(".tab:first-child").addClass("active");
});

$(document).ready(function () {
  $(".tab-technology a").click(function (e) {
    e.preventDefault();
    var tabId = $(this).attr("href");
    $(".technology").removeClass("active");
    $(".tab-technology li").removeClass("active");
    $(this).parent().addClass("active");
    $(tabId).addClass("active");
  });

  // Activate the first tab on page load
  $(".technology li:first-child").addClass("active");
  $(".technology:first-child").addClass("active");
});
function toggleText(element) {
  var textElement = element.nextElementSibling; // Get the next sibling element
  var imageElement = element.querySelector("img"); // Get the img element within the toggle-item

  // Toggle the visibility of the text element
  if (textElement.style.display === "block") {
    textElement.style.display = "none";
    imageElement.src = "./images/plus-circle.svg"; // Change the image to plus-circle.svg
  } else {
    textElement.style.display = "block";
    imageElement.src = "./images/min-circle.svg"; // Change the image to min-circle.svg
  }
}

$(document).ready(function () {
  // Open the chooseModal when clicking the first button
  $('#loginModal button[data-bs-target="#chooseModal"]').on(
    "click",
    function () {
      $("#loginModal").modal("hide");
      $("#setupModal").modal("hide");
      $("#chooseModal").modal("show");
    }
  );

  // Open the setupModal when clicking the second button
  $('#chooseModal button[data-bs-target="#setupModal"]').on(
    "click",
    function () {
      $("#loginModal").modal("hide");
      $("#setupModal").modal("show");
      $("#chooseModal").modal("hide");
    }
  );

  // Remove the modal backdrop when a modal is closed
  $(".modal").on("hidden.bs.modal", function () {
    $(".modal-backdrop").remove();
  });
});

$(".modal").on("show.bs.modal", function () {
  $("html").css("overflow", "hidden");
});
$(".modal").on("hidden.bs.modal", function () {
  $("html").css("overflow", "auto");
});
