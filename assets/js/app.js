let mybutton = document.getElementById("btn-back-to-top");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
      scrollFunction();
    };
    
    function scrollFunction() {
      if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    // When the user clicks on the button, scroll to the top of the document
    mybutton.addEventListener("click", backToTop);
    
    function backToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
  if(entry.isIntersecting){
    entry.target.classList.add('show');
  } else{
    entry.target.classList.remove('show');
  };   
  })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));

// document.addEventListener("DOMContentLoaded", function(){
//   // make it as accordion for smaller screens
//   if (window.innerWidth > 992) {
  
//     document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
  
//       everyitem.addEventListener('mouseover', function(e){
  
//         let el_link = this.querySelector('a[data-bs-toggle]');
  
//         if(el_link != null){
//           let nextEl = el_link.nextElementSibling;
//           el_link.classList.add('show');
//           nextEl.classList.add('show');
//         }
  
//       });
//       everyitem.addEventListener('mouseleave', function(e){
//         let el_link = this.querySelector('a[data-bs-toggle]');
  
//         if(el_link != null){
//           let nextEl = el_link.nextElementSibling;
//           el_link.classList.remove('show');
//           nextEl.classList.remove('show');
//         }
  
  
//       })
//     });
  
//   }
//   // end if innerWidth
//   }); 

$(function() {

  $('.custom-dropdown').on('show.bs.dropdown', function() {
    // $(this).find('.dropdown-menu').first().stop(false, false).slideDown();
     // $(this).find('.dropdown-menu').addClass('active');
     var that = $(this);
    setTimeout(function(){
        that.find('.dropdown-menu').addClass('active');
    }, 100);
    

  });
  $('.custom-dropdown').on('hide.bs.dropdown', function() {
    $(this).find('.dropdown-menu').removeClass('active');
  });

});
