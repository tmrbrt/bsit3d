function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}
document.addEventListener("DOMContentLoaded", function() {
    const popup = document.querySelector('.popup');
    const overlay = document.querySelector('.popup .overlay');
    const closeBtn = document.querySelector('.popup .close-btn');

    function openPopup() {
        popup.classList.add('active');
        document.body.style.overflow = 'hidden'; // Disable scrolling
    }

    function closePopup() {
        popup.classList.remove('active');
        document.body.style.overflow = ''; // Enable scrolling
    }

    overlay.addEventListener('click', closePopup);
    closeBtn.addEventListener('click', closePopup);

    closeBtn.addEventListener('scroll', function(event) {
        event.preventDefault();
        event.stopPropagation();
    });

  
});

function slideInAd() {
    document.getElementById('adContainer').style.right = '0';
}


function closeAd() {
    document.getElementById('adContainer').style.right = '-300px';
}


setTimeout(slideInAd, 10000);



 function displayPopup() {
    document.getElementById('popup').classList.add('show');
    document.getElementById('overlay').classList.add('show');
}

function closePopup() {
    document.getElementById('popup').classList.remove('show');
    document.getElementById('overlay').classList.remove('show');
}

setTimeout(displayPopup, 5000);

document.addEventListener("DOMContentLoaded", function() {
    var adContainer = document.getElementById("ad-containerleft");
    var closeButton = document.getElementById("button");
    
    setTimeout(function() {
      adContainer.style.left = "10px";
    }, 1000);
    
  
    closeButton.addEventListener("click", function() {
      adContainer.style.left = "-400px"; 
    });
  });

  window.addEventListener('load', function() {
    // Set a 2-second timer
    setTimeout(function() {
        // Hide the loader
        const loaderWrapper = document.getElementById('loader-wrapper');
        loaderWrapper.style.display = 'none';

        // Show the main content
        const container = document.querySelector('.container');
        container.style.display = 'block';
    }, 1500); // 2000 milliseconds = 2 seconds
});
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Load saved dark mode preference
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        toggle.checked = true;
    }

    toggle.addEventListener('change', function() {
        if (this.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});