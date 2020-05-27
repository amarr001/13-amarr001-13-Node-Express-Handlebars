// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-data").on("click", function(event) {
      let id = $(this).data("id");
      let newDevour = $(this).data("devoured");
  
      let newDevoured = {
        devoured: newDevour
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevoured
      }).then(
        function() {
          console.log("changes burger status to", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#createburger").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Added new burger!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });