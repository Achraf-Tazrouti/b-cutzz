document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll(".accordion-header");
  
    headers.forEach(header => {
      header.addEventListener("click", () => {
        const parent = header.parentElement;
  
        // Sluit alle andere open accordeons
        document.querySelectorAll(".footer-column").forEach(column => {
          if (column !== parent) {
            column.classList.remove("active");
          }
        });
  
        // Toggle de actieve klasse op de huidige kolom
        parent.classList.toggle("active");
      });
    });
  });