document.addEventListener("DOMContentLoaded", function () {
  // Original like functionality for reviews
  document.querySelectorAll(".like-icon").forEach((icon) => {
    icon.addEventListener("click", function () {
      this.classList.toggle("fas");
      this.classList.toggle("far");

      const likeCountSpan = this.nextElementSibling;
      let likeCount = parseInt(
        likeCountSpan.textContent.replace(/,/g, "").split(" ")[0]
      );

      if (this.classList.contains("fas")) {
        likeCount++;
      } else {
        likeCount--;
      }

      likeCountSpan.textContent = likeCount.toLocaleString() + " likes";
    });
  });

  // Quotes like functionality
  const likeButtons = document.querySelectorAll(".quote-card .like-btn");
  console.log("Found like buttons:", likeButtons.length);

  likeButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      const heartIcon = this.querySelector("i");
      const likeCountSpan = this.querySelector(".like-count");

      if (heartIcon.classList.contains("far")) {
        heartIcon.classList.remove("far");
        heartIcon.classList.add("fas");
        heartIcon.style.color = "#ff6b6b";
      } else {
        heartIcon.classList.remove("fas");
        heartIcon.classList.add("far");
        heartIcon.style.color = "#765040";
      }

      let count = parseInt(likeCountSpan.textContent.replace(/,/g, ""));
      count = heartIcon.classList.contains("fas") ? count + 1 : count - 1;
      likeCountSpan.textContent = count.toLocaleString();
    });
  });
});

// Books carousel functionality
if (document.querySelector(".books-container")) {
  const track = document.querySelector(".books-container");
  const books = Array.from(track.children);
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

  const booksPerPage = 4;
  let currentIndex = 0;

  function updateBooks() {
    books.forEach((book, index) => {
      if (index >= currentIndex && index < currentIndex + booksPerPage) {
        book.style.display = "block";
      } else {
        book.style.display = "none";
      }
    });
  }

  if (rightArrow) {
    rightArrow.addEventListener("click", () => {
      if (currentIndex + booksPerPage < books.length) {
        currentIndex += booksPerPage;
        updateBooks();
      }
    });
  }

  if (leftArrow) {
    leftArrow.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex -= booksPerPage;
        updateBooks();
      }
    });
  }

  // Initialize the view
  updateBooks();
}

// Dropdown functionality
document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector(".browse-btn");
    if (button) {
      button.addEventListener("click", function (e) {
        // Close all other dropdowns
        dropdowns.forEach((d) => {
          if (d !== dropdown) {
            d.classList.remove("active");
            const btn = d.querySelector(".browse-btn");
            if (btn) btn.classList.remove("active");
          }
        });

        // Toggle current dropdown
        dropdown.classList.toggle("active");
        this.classList.toggle("active");
      });
    }
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown")) {
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("active");
        const btn = dropdown.querySelector(".browse-btn");
        if (btn) btn.classList.remove("active");
      });
    }
  });
});

// Reviews like functionality
document.addEventListener("DOMContentLoaded", function () {
  const reviewLikeIcons = document.querySelectorAll(".review-card .like-icon");

  reviewLikeIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      this.classList.toggle("fas");
      this.classList.toggle("far");

      const likeCountSpan = this.nextElementSibling;
      let likeCount = parseInt(
        likeCountSpan.textContent.replace(/,/g, "").split(" ")[0]
      );

      if (this.classList.contains("fas")) {
        likeCount++;
      } else {
        likeCount--;
      }

      likeCountSpan.textContent = likeCount.toLocaleString() + " likes";
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Theme switcher functionality
  const themeButtons = document.querySelectorAll(".theme-btn");

  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  // Update active button state
  themeButtons.forEach((btn) => {
    if (btn.dataset.theme === savedTheme) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Theme switch event listeners
  themeButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const theme = this.dataset.theme;

      // Update active state
      themeButtons.forEach((button) => button.classList.remove("active"));
      this.classList.add("active");

      // Apply theme
      document.documentElement.setAttribute("data-theme", theme);

      // Save preference
      localStorage.setItem("theme", theme);
    });
  });

  // Books carousel functionality (if present)
  if (document.querySelector(".books-container")) {
    const track = document.querySelector(".books-container");
    const books = Array.from(track.children);
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    const booksPerPage = 4;
    let currentIndex = 0;

    function updateBooks() {
      books.forEach((book, index) => {
        if (index >= currentIndex && index < currentIndex + booksPerPage) {
          book.style.display = "block";
        } else {
          book.style.display = "none";
        }
      });
    }

    if (rightArrow) {
      rightArrow.addEventListener("click", () => {
        if (currentIndex + booksPerPage < books.length) {
          currentIndex += booksPerPage;
          updateBooks();
        }
      });
    }

    if (leftArrow) {
      leftArrow.addEventListener("click", () => {
        if (currentIndex > 0) {
          currentIndex -= booksPerPage;
          updateBooks();
        }
      });
    }

    // Initialize the view
    updateBooks();
  }

  // Dropdown functionality
  // Keep your existing code and update/add this part for dropdowns
  document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
      const button = dropdown.querySelector(".browse-btn");
      const menu = dropdown.querySelector(".dropdown-menu");

      if (button) {
        button.addEventListener("click", function (e) {
          e.stopPropagation(); // Prevent event from bubbling up

          // Close all other dropdowns
          dropdowns.forEach((d) => {
            if (d !== dropdown) {
              d.querySelector(".dropdown-menu")?.classList.remove("show");
              d.querySelector(".browse-btn")?.classList.remove("active");
            }
          });

          // Toggle current dropdown
          menu.classList.toggle("show");
          this.classList.toggle("active");
        });
      }
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".dropdown")) {
        dropdowns.forEach((dropdown) => {
          dropdown.querySelector(".dropdown-menu")?.classList.remove("show");
          dropdown.querySelector(".browse-btn")?.classList.remove("active");
        });
      }
    });

    // Prevent dropdown from closing when clicking inside
    document.querySelectorAll(".dropdown-menu").forEach((menu) => {
      menu.addEventListener("click", function (e) {
        e.stopPropagation();
      });
    });
  });

  // Edit Profile Button Functionality
  const editProfileBtn = document.querySelector(".edit-profile-btn");
  if (editProfileBtn) {
    editProfileBtn.addEventListener("click", function () {
      // Add your edit profile functionality here
      console.log("Edit profile clicked");
    });
  }

  // Edit Avatar Button Functionality
  const editAvatarBtn = document.querySelector(".edit-avatar-btn");
  if (editAvatarBtn) {
    editAvatarBtn.addEventListener("click", function () {
      // Add your avatar edit functionality here
      console.log("Edit avatar clicked");
    });
  }

  // Progress Bar Animation
  const progressBars = document.querySelectorAll(".progress-bar .progress");
  progressBars.forEach((progress) => {
    const width = progress.style.width;
    progress.style.width = "0";
    setTimeout(() => {
      progress.style.width = width;
    }, 100);
  });
});

// Add smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Add this to your existing script.js
document.addEventListener("DOMContentLoaded", function () {
  // Theme switcher functionality
  const themeButtons = document.querySelectorAll(".theme-btn");

  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  // Update active button state
  themeButtons.forEach((btn) => {
    if (btn.dataset.theme === savedTheme) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Theme switch event listeners
  themeButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const theme = this.dataset.theme;

      // Update active state
      themeButtons.forEach((button) => button.classList.remove("active"));
      this.classList.add("active");

      // Apply theme
      document.documentElement.setAttribute("data-theme", theme);

      // Save preference
      localStorage.setItem("theme", theme);
    });
  });
});

// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', function() {
    // Get current page URL
    const currentPage = window.location.pathname.split('/').pop();

    // Get all nav links
    const navLinks = document.querySelectorAll('.nav-link');

    // Set active class based on current page
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
});