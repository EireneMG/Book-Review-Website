document.addEventListener('DOMContentLoaded', function() {
  // Original like functionality for reviews
  document.querySelectorAll('.like-icon').forEach(icon => {
      icon.addEventListener('click', function() {
          this.classList.toggle('fas');
          this.classList.toggle('far');

          const likeCountSpan = this.nextElementSibling;
          let likeCount = parseInt(likeCountSpan.textContent.replace(/,/g, '').split(' ')[0]);

          if (this.classList.contains('fas')) {
              likeCount++;
          } else {
              likeCount--;
          }

          likeCountSpan.textContent = likeCount.toLocaleString() + ' likes';
      });
  });

  // Quotes like functionality
  const likeButtons = document.querySelectorAll('.quote-card .like-btn');
  console.log('Found like buttons:', likeButtons.length);
  
  likeButtons.forEach(button => {
      button.addEventListener('click', function(e) {
          e.preventDefault();
          
          const heartIcon = this.querySelector('i');
          const likeCountSpan = this.querySelector('.like-count');
          
          if (heartIcon.classList.contains('far')) {
              heartIcon.classList.remove('far');
              heartIcon.classList.add('fas');
              heartIcon.style.color = '#ff6b6b';
          } else {
              heartIcon.classList.remove('fas');
              heartIcon.classList.add('far');
              heartIcon.style.color = '#765040';
          }
          
          let count = parseInt(likeCountSpan.textContent.replace(/,/g, ''));
          count = heartIcon.classList.contains('fas') ? count + 1 : count - 1;
          likeCountSpan.textContent = count.toLocaleString();
      });
  });
});

// Books carousel functionality
if (document.querySelector('.books-container')) {
  const track = document.querySelector('.books-container');
  const books = Array.from(track.children);
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');

  const booksPerPage = 4;
  let currentIndex = 0;

  function updateBooks() {
      books.forEach((book, index) => {
          if (index >= currentIndex && index < currentIndex + booksPerPage) {
              book.style.display = 'block';
          } else {
              book.style.display = 'none';
          }
      });
  }

  if (rightArrow) {
      rightArrow.addEventListener('click', () => {
          if (currentIndex + booksPerPage < books.length) {
              currentIndex += booksPerPage;
              updateBooks();
          }
      });
  }

  if (leftArrow) {
      leftArrow.addEventListener('click', () => {
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
document.addEventListener('DOMContentLoaded', function() {
  const dropdowns = document.querySelectorAll('.dropdown');
  
  dropdowns.forEach(dropdown => {
      const button = dropdown.querySelector('.browse-btn');
      if (button) {
          button.addEventListener('click', function(e) {
              // Close all other dropdowns
              dropdowns.forEach(d => {
                  if (d !== dropdown) {
                      d.classList.remove('active');
                      const btn = d.querySelector('.browse-btn');
                      if (btn) btn.classList.remove('active');
                  }
              });
              
              // Toggle current dropdown
              dropdown.classList.toggle('active');
              this.classList.toggle('active');
          });
      }
  });
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', function(e) {
      if (!e.target.closest('.dropdown')) {
          dropdowns.forEach(dropdown => {
              dropdown.classList.remove('active');
              const btn = dropdown.querySelector('.browse-btn');
              if (btn) btn.classList.remove('active');
          });
      }
  });
});

// Reviews like functionality
document.addEventListener('DOMContentLoaded', function() {
  const reviewLikeIcons = document.querySelectorAll('.review-card .like-icon');
  
  reviewLikeIcons.forEach(icon => {
      icon.addEventListener('click', function() {
          this.classList.toggle('fas');
          this.classList.toggle('far');

          const likeCountSpan = this.nextElementSibling;
          let likeCount = parseInt(likeCountSpan.textContent.replace(/,/g, '').split(' ')[0]);

          if (this.classList.contains('fas')) {
              likeCount++;
          } else {
              likeCount--;
          }

          likeCountSpan.textContent = likeCount.toLocaleString() + ' likes';
      });
  });
});