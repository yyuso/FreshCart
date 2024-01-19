var s1 = new Swiper(".mymainslider", {
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    1920: {
      slidesPerView: 5,
      spaceBetween: 2
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 2
    },
  }
});

var swiper = new Swiper(".ImageSlider", {
  loop: true,
  spaceBetween: 1,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".ImageSlider2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".ImageSlider-button-next",
    prevEl: ".ImageSlider-button-prev",
  },
  breakpoints: {  
    '480': {
      slidesPerView: 1,
      spaceBetween: 2,},
  },
  thumbs: {
    swiper: swiper,
  },
});

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
function toggleSelectedCategory(selectedCategoryId) {
  var selectedCategory = document.getElementById(selectedCategoryId);
  var allCategoriess = document.querySelectorAll('div[id^="category-item"]');

  allCategoriess.forEach(function(category) {
      if (category === selectedCategory) {
          if (category.style.display === 'none') {
              category.style.display = 'block';
          } else {
              category.style.display = 'none';
          }
      } else {
          category.style.display = 'none';
      }
  });
}
function nav(navId) {
  var selectedCategory = document.getElementById(navId);
  var allCategoriess = document.querySelectorAll('div[id^="nav-item"]');

  allCategoriess.forEach(function(category) {
      if (category === selectedCategory) {
          if (category.style.display === 'none') {
              category.style.display = 'block';
          } else {
              category.style.display = 'none';
          }
      } else {
          category.style.display = 'none';
      }
  });
}
function updateTitle(value) {
  const ilkBaslik = document.getElementById('ilkBaslik');

  // İlk başlık değeri aralık değeriyle, ikinci başlık ise maksimumdan aralık değeriyle güncellenir
  ilkBaslik.textContent = value;
}
// Get the modal
var addressModal = document.getElementById("addressModal");

// Get the button that opens the modal
var btn = document.getElementById("checkout-main-section-category-button1-address");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("addressclose")[0];
var span2 = document.getElementsByClassName("addressModal-content-input-group-button-cancel")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  addressModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  addressModal.style.display = "none";
}
span2.onclick = function() {
  addressModal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == addressModal) {
    addressModal.style.display = "none";
  }
}
function openCity(day) {
  var i;
  var x = document.getElementsByClassName("day");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(day).style.display = "block";
}
function opennavbar() {
  var navbar = document.getElementById("navbar");
  if (navbar.style.display === "flex") {
      navbar.style.display = "none";
      console.log("none");
  }
  else {
    navbar.style.display = "flex";
      console.log("flex");
  }
}


function openNav() {
  document.getElementById("YanMenu").style.width = "250px";
}
function closeNav() {
  document.getElementById("YanMenu").style.width = "0";
}