
//Displays dropdown
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  //Every click either shows or hides dropdown
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }