// script.js
      function toggleDropdown(event) {
        event.preventDefault();
        var dropdown = document.getElementById("dropdownHome");
        dropdown.style.display =
          dropdown.style.display === "block" ? "none" : "block";
      }
      window.onclick = function (event) {
        if (!event.target.matches(".dropbtn-home")) {
          var dropdowns = document.getElementsByClassName(
            "dropdown-content-home"
          );
          for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
              openDropdown.style.display = "none";
            }
          }
        }
      };