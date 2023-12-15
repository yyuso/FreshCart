//english button
var swiper = new Swiper(".mySwiper", {});

//hover div


//slider
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}  
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function toggleCategory(categoryId) {
  var category = document.getElementById(categoryId);
  var allCategories = document.querySelectorAll('div[id^="category"]');

  allCategories.forEach(function(cat) {
      if (cat === category) {
          if (cat.style.display === 'none') {
              cat.style.display = 'block';
          } else {
              cat.style.display = 'none';
          }
      } else {
          cat.style.display = 'none';
      }
  });
}
function updateTitle(value) {
  const ilkBaslik = document.getElementById('ilkBaslik');

  // İlk başlık değeri aralık değeriyle, ikinci başlık ise maksimumdan aralık değeriyle güncellenir
  ilkBaslik.textContent = value;
}

