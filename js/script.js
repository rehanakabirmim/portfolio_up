

  // Get current file name from URL
   const currentPage = location.pathname.split("/").pop() || 'index.html';
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });








 

