// Main Script File
(() => {

  // ----------- Header Section ----------- //

  // Scroll -- Header BG Changes
  (function ($) {
    $(document).ready(function () {
      let hasScrolledDown = false;

      // Initial animation
      $("header, .Header-top").addClass("HdrInitialSlide");

      // When Scrolled above 100 Pixels
      function HdrScrollPosition() {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          if (!hasScrolledDown) {
            $("header, .Header-top").removeClass("HdrInitialSlide").addClass("HdrScrollSlide");
            $("header").addClass("Header-scrolled Scrolled-Weblogo");
            $(".ScrollTop-Section").addClass("ScrollTop-Active");
            hasScrolledDown = true;
          }
        }
        else {
          if (hasScrolledDown) {
            $("header, .Header-top").removeClass("HdrScrollSlide");
            $("header").removeClass("Header-scrolled Scrolled-Weblogo");
            $(".ScrollTop-Section").removeClass("ScrollTop-Active");
            hasScrolledDown = false;
          }
        }
      }

      // Initial check after the Page reloads
      HdrScrollPosition();

      // Bind the Scroll Event
      $(window).scroll(function () {
        HdrScrollPosition();
      });

    });
  })(jQuery);


  // Header Mobile Menu
  // const Toggle = document.querySelector('#Primary-menu-toggle');
  // const Navbar = document.querySelector('#Primary-menu');
  // const MobileMenuAnchor = document.querySelectorAll('.Menu-Close');

  // Toggle.addEventListener('click', () => {
  //   Navbar.classList.toggle('slide');
  //   Navbar.classList.toggle('open');
  //   Toggle.classList.toggle('cross');
  // });

  // MobileMenuAnchor.forEach(anchor => {
  //   anchor.addEventListener("click", function () {
  //     Navbar.classList.remove('slide', 'open');
  //     Toggle.classList.remove('cross');
  //   });
  // });

  // window.onclick = function (event) {
  //   if (event.target == Navbar) {
  //     Navbar.classList.remove('slide', 'open');
  //     Toggle.classList.remove('cross');
  //   }
  // };

  // Header Mobile Menu
  const Toggle = document.querySelector('#Primary-menu-toggle');
  const HdrLogoHide = document.querySelector('.Web-Logo');
  const MblNavbar = document.querySelector('.Mobile-Header');
  const MobileMenuAnchor = document.querySelectorAll('.Menu-Close');
  const MblHdrOverlay = document.querySelector('.Hdr-Overlay');
  const BodyOverflow = document.body;
  const HtmlOverflow = document.documentElement;

  // Closing All Functions and Dropdowns
  function ClosingHeader() {
    MblNavbar.classList.remove('Hdr-slide');
    Toggle.classList.remove('Toggle-cross');
    MblHdrOverlay.classList.remove('HdrOverlay-Open');
    BodyOverflow.classList.remove('Hdr-Noscroll');
    HtmlOverflow.classList.remove('Hdr-Noscroll');
    HdrLogoHide.classList.remove('Hdr-Logohide');
    CloseAllDropdowns();
  }

  // Script for Toggle 
  if (Toggle) {
    Toggle.addEventListener('click', () => {
      MblNavbar.classList.toggle('Hdr-slide');
      Toggle.classList.toggle('Toggle-cross');
      MblHdrOverlay.classList.toggle('HdrOverlay-Open');
      BodyOverflow.classList.toggle('Hdr-Noscroll');
      HtmlOverflow.classList.toggle('Hdr-Noscroll');
      HdrLogoHide.classList.toggle('Hdr-Logohide');

      // Close dropdowns if the menu is closed
      if (!MblNavbar.classList.contains('Hdr-slide')) {
        CloseAllDropdowns();
      }
    });
  }

  // Close Header on Clicking Anchor links
  MobileMenuAnchor.forEach(anchor => {
    anchor.addEventListener("click", function () {
      ClosingHeader();
    });
  });

  // Close Header on Clicking Outside
  window.addEventListener('click', (event) => {
    if (!MblNavbar.contains(event.target) && !Toggle.contains(event.target)) {
      ClosingHeader();
    }
  });

  // Close all dropdowns
  function CloseAllDropdowns() {
    document.querySelectorAll('.Mblmenu-item').forEach(item => {
      item.classList.remove('Mblmenu-active');
      const dropdownContent = item.nextElementSibling;
      if (dropdownContent) {
        dropdownContent.classList.remove('Mblmenu-collapsed');
        dropdownContent.style.maxHeight = null;
      }
    });
  }

  // Dropdown functionality
  document.querySelectorAll('.Mblmenu-item').forEach(item => {
    item.addEventListener('click', function (event) {
      event.stopPropagation();

      // Check Dropdown is already active
      const isActive = this.classList.contains('Mblmenu-active');

      // Closing all Dropdowns
      CloseAllDropdowns();

      // If Dropdown was not already active
      if (!isActive) {
        this.classList.add('Mblmenu-active');
        const dropdownContent = this.nextElementSibling;
        if (dropdownContent) {
          dropdownContent.classList.add('Mblmenu-collapsed');
          dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
        }
      }
    });
  });

  // Close Header on ESC Key
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && MblNavbar.classList.contains('Hdr-slide')) {
      ClosingHeader();
    }
  });

  // Reseting Header When Window Resized
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1100) {
      ClosingHeader();
    }
  });


  // ----------- Scroll to Top ----------- //

  // This script was previously combined with the header script.
  // The functionality below is specifically for scrolling to the top of the page.
  // The visibility actions will be managed in the header script:
  // - $(".ScrollTopBtn").addClass("ScrollTopBtn-Active"); (See in the If condition)
  // - $(".ScrollTopBtn").removeClass("ScrollTopBtn-Active"); (See in the Else condition)

  const ScrollTopBtn = document.querySelector('.ScrollTop-Section');
  if (ScrollTopBtn) {
    ScrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Note: This script contains the complete script for the Scroll to Top functionality.
  // If you need the full script for Scroll to Top, the script below will be suitable:

  // !!! Important !!!
  // If you decide to use a separate script for the Scroll to Top functionality, 
  // simply uncomment the full script below and comment out the above current animation script.
  // Make sure to remove the visibility actions from the existing header script 
  // (refer the If and Else conditions in the header script).

  // document.addEventListener("DOMContentLoaded", function () {
  //   const ScrollTopBtn = document.querySelector('.ScrollTop-Section');

  //   if (ScrollTopBtn) {
  //     let hasScrollToTop = false;

  //     // After Clicking Scroll top icon
  //     ScrollTopBtn.addEventListener('click', function () {
  //       window.scrollTo({
  //         top: 0,
  //         behavior: 'smooth'
  //       });
  //     });

  //     // When Scrolled above 100 Pixels
  //     function scrollTopPosition() {
  //       const scrollToTop = window.scrollY;

  //       if (scrollToTop > 100) {
  //         if (!hasScrollToTop) {
  //           ScrollTopBtn.classList.add('ScrollTop-Active');
  //           hasScrollToTop = true;
  //         }
  //       } else {
  //         if (hasScrollToTop) {
  //           ScrollTopBtn.classList.remove('ScrollTop-Active');
  //           hasScrollToTop = false;
  //         }
  //       }
  //     }

  //     // Initial check when the page loads
  //     scrollTopPosition();

  //     // Bind the scroll event
  //     window.addEventListener('scroll', scrollTopPosition);
  //   }
  // });


  // SideBar Scroll to Top

  // Note: This script only handles the scroll action, (not button visibility - Because Initially Button was visible)
  // It works for multiple buttons using the same class, allowing each one to scroll the page to the top when clicked.
  const scrolltoTopBtn = document.querySelectorAll('.ScrolltoTopBtn');

  if (scrolltoTopBtn) {
    scrolltoTopBtn.forEach(scrollTopButton => {
      scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    });
  }


  // ----------- Wow Animation ----------- //

  document.addEventListener('DOMContentLoaded', function () {
    new WOW().init();
  });


  // ----------- Image Protfolio Effect GLightbox ----------- //

  // Initialize GLightbox for elements with the own custom class like 'certifi-lightbox'
  (function ($) {

    "use strict";
    const portfolioLightbox = GLightbox({
      selector: '.certifi-lightbox'
    });

  })(jQuery);

  // ----------- Home Page ----------- //

  // Jquery Whole Syntax
  (function ($) {

    // Home Counter Section Without Hover Effect IIFE
    $(document).ready(function () {
      // Function to start counter animation
      function startCounterAnimation($counter) {
        var initial = $counter.data('initial') || 0; // Get the initial value or default to 0
        var target = $counter.data('target'); // Get the target value from the data attribute

        // Set the initial value on the counter element
        $counter.text(initial);

        // Initialize the custom Homecounter property
        $counter.prop('Homecounter', initial).animate(
          { Homecounter: target },
          {
            duration: 3000, // Animation duration
            easing: 'swing', // Easing function
            step: function (now) {
              // Update the text with the current value of Homecounter
              $counter.text(Math.ceil(now));
            },
            complete: function () {
              // Ensure the final value is set to the target
              $counter.text(target);
            }
          }
        );
      }

      // IntersectionObserver callback
      function onIntersection(entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var $counter = $(entry.target); // jQuery element for the intersecting target
            startCounterAnimation($counter);
            observer.unobserve(entry.target); // Stop observing after animation starts
          }
        });
      }

      // Create an IntersectionObserver instance
      var observer = new IntersectionObserver(onIntersection, { threshold: 0.5 });

      // Observe all elements with the class 'Counter'
      $('.HashCounter, .SevEdition-Counter, .SevEdition-BnrCounter').each(function () {
        observer.observe(this);
      });
    });


    // Dynamically update content from Speaker-item to modal using a single Bootstrap modal
    $(document).ready(function () {
      // Check if the modal element exists and initialize it
      var $modalElement = $('#SpeakerModal');
      if ($modalElement.length) {
        var modal = new bootstrap.Modal($modalElement[0]);

        // Event delegation to handle dynamically added Speaker-item elements
        $(document).on('click', '.Speaker-item', function () {
          // Extract information from the clicked Speaker-item
          var $this = $(this);
          var name = $this.find('h3').html();
          var lead = $this.find('.Spkr-lead').html();
          var company = $this.find('.Spkr-company').html();
          var imageSrc = $this.find('img').attr('src');
          var description = $this.find('.Spkr-description').html();

          // Update modal content
          $('#SpkrMdl-name').html(name);
          $('#SpkrMdl-lead').html(lead);
          $('#SpkrMdl-company').html(company);
          $('#Spkr-ModalImg').attr('src', imageSrc);
          $('#SpkrMdl-description').html(description);

          // Show the modal
          modal.show();
        });
      }
    });

  })(jQuery);

  // Home Page - Counter Section With Hover Effect
  // When hovering over a counter, the count resets and reloads dynamically
  const section = document.getElementById('counterSection');
  const counters = [
    { id: 'counter1', start: 4990, hoverTarget: 5000 },
    { id: 'counter2', start: 90, hoverTarget: 100 },
    { id: 'counter3', start: 140, hoverTarget: 150 },
    { id: 'counter4', start: 40, hoverTarget: 50 },
  ];

  const animationDuration = 1.5; // Duration in seconds
  const counterHeight = 4.5; // Height of each counter line in rem


  function animateCounter(id, from, to) {
    const element = document.getElementById(id)

      ;
    const range = Array.from({ length: Math.abs(to - from) + 1 }, (_, i) => from < to ? from + i : from - i);
    const slideContainer = document.createElement('div');

    slideContainer.style.position = 'relative';
    slideContainer.style.display = 'flex';
    slideContainer.style.flexDirection = 'column';

    range.forEach(value => {
      const div = document.createElement('div');
      div.textContent = value;
      div.style.width = 'fit-content';
      div.style.height = `${counterHeight}rem`;
      div.style.lineHeight = `${counterHeight}rem`;
      slideContainer.appendChild(div);
    });

    element.innerHTML = '';
    element.appendChild(slideContainer);

    const slideDistance = -(range.length - 1) * counterHeight;

    gsap.to(slideContainer, {
      y: `${slideDistance}rem`,
      duration: animationDuration,
      ease: 'power1.inOut',
    });
  }

  section.addEventListener('mouseenter', () => {
    counters.forEach(({ id, start, hoverTarget }) => {
      animateCounter(id, start, hoverTarget);
    });
  });

  section.addEventListener('mouseleave', () => {
    counters.forEach(({ id, start, hoverTarget }) => {
      animateCounter(id, hoverTarget, start);  // Reverse the direction on unhover
    });
  });


  // ----------- Countdown ----------- //

  // Set Date 
  const endDateStr = "21 May 2025 11:30:00";
  // Convert end date string to Date object
  const endDate = new Date(endDateStr);
  const countDownItems = Array.from(document.querySelectorAll('.Count-timer'));

  // Only proceed if countdown items exist
  if (countDownItems.length > 0) {
    function updateCountdown() {
      const now = new Date();
      const timeDiffInSeconds = (endDate - now) / 1000;

      if (timeDiffInSeconds > 0) {
        // Calculate Days, Hours, Minutes, and Seconds
        const Countdays = Math.floor(timeDiffInSeconds / 3600 / 24);
        const Counthours = Math.floor(timeDiffInSeconds / 3600) % 24;
        const Countminutes = Math.floor(timeDiffInSeconds / 60) % 60;
        const Countseconds = Math.floor(timeDiffInSeconds % 60);

        // Update the countDownItems content
        if (countDownItems[0]) countDownItems[0].innerHTML = Countdays;
        if (countDownItems[1]) countDownItems[1].innerHTML = Counthours;
        if (countDownItems[2]) countDownItems[2].innerHTML = Countminutes;
        if (countDownItems[3]) countDownItems[3].innerHTML = Countseconds;
      } else {
        // Clear interval if countdown is finished
        clearInterval(countdownInterval);

        // Set all items to zero when coundown time is over
        if (countDownItems.length > 0) {
          countDownItems.forEach(item => {
            item.innerHTML = "0";
          });
        }
      }
    }
    // Update countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Initial call to update the countdown immediately
    updateCountdown();
  }

})();



