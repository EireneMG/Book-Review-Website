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