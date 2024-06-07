
document.addEventListener("DOMContentLoaded", function () {

  window.addEventListener('scroll', function () {


    if (window.scrollY > 50) {
      document.getElementById('navbar_top').classList.add('fixed-top');
      // add padding top to show content behind navbar
      navbar_height = document.querySelector('.navbar').offsetHeight;
      document.getElementById('navbar_top').style.backgroundColor = '#fff';
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
      document.getElementById('navbar_top').classList.remove('fixed-top');
      // remove padding top from body
      document.body.style.paddingTop = '0';
    }

  });
});

// DOMContentLoaded  end




/*
document.addEventListener("DOMContentLoaded", function () {
  let navbarTop = document.getElementById('navbar_top');
  let navbar = document.querySelector('.navbar');
  let product = document.getElementById('productSubmenu')

  console.log(product);

  function subMenu() {
    // Inside this event listener, the modal-backdrop class should be ready
    let modalBackdrops = document.getElementsByClassName('modal-backdrop');
    console.log(modalBackdrops.length);
    // Check if the modal-backdrop class exists
    if (modalBackdrops.length === 0) {
      // Apply your desired style changes
      navbarTop.classList.add('fixed-top');
      navbar_height = navbar.offsetHeight;
      navbarTop.style.backgroundColor = '#fff';
      modalBackdrops[0].style.zIndex = '100';
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
      console.log("Modal backdrop not ready");
    }
  }

  // Attach event listener to the button that triggers the modal
  product.addEventListener('click', subMenu);
  // document.getElementById('partner').addEventListener('click', subMenu);

  // Additional code for scrolling behavior, if needed
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbarTop.classList.add('fixed-top');
      navbar_height = navbar.offsetHeight;
      navbarTop.style.backgroundColor = '#fff';
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
      navbarTop.classList.remove('fixed-top');
      document.body.style.paddingTop = '0';
    }
  });
});


*/