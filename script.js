document.querySelectorAll('.like-icon').forEach(icon => {
    icon.addEventListener('click', function() {
      this.classList.toggle('fas'); // Add filled heart class
      this.classList.toggle('far'); // Remove unfilled heart class
  
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
  
  rightArrow.addEventListener('click', () => {
    if (currentIndex + booksPerPage < books.length) {
      currentIndex += booksPerPage;
      updateBooks();
    }
  });
  
  leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex -= booksPerPage;
      updateBooks();
    }
  });
  
  // Initialize the view
  updateBooks();