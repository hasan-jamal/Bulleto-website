// Start dropdown
$(document).ready(function () {
  $(".dropdown-top").on("click", function () {
    var dropdownContent = $(this).siblings(".dropdown-top-menu");
    dropdownContent.toggle();
    event.stopPropagation();
  });

  $(document).on("click", function (event) {
    var dropdownContent = $(".dropdown-top-menu");
    var target = $(event.target);
    if (
      !target.closest(".dropdown-top-menu").length &&
      !target.hasClass("dropdown-top")
    ) {
      dropdownContent.hide();
    }
  });
});
// end dropdown
// Start dropdown
$(document).ready(function () {
  $(".dropdown-cost").on("click", function () {
    var dropdownContent = $(this).siblings(".dropdown-cost-menu");
    dropdownContent.toggle();
    event.stopPropagation();
  });

  $(document).on("click", function (event) {
    var dropdownContent = $(".dropdown-cost-menu");
    var target = $(event.target);
    if (
      !target.closest(".dropdown-cost-menu").length &&
      !target.hasClass("dropdown-cost")
    ) {
      dropdownContent.hide();
    }
  });
});
// end dropdown
