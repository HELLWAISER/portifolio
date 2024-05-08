document.addEventListener("DOMContentLoaded", function() {
  const filterButtons = document.querySelectorAll(".projects-filter");
  const projectItems = document.querySelectorAll(".project-item-web, .project-item-folders, .project-item-landing-page");

  filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      // Remove a classe 'active' de todos os botões e esconde todos os projetos
      filterButtons.forEach(function(btn) {
        btn.classList.remove("projects-filter-active");
      });
      projectItems.forEach(function(item) {
        item.style.display = 'none';
      });
      
      // Adiciona a classe 'active' ao botão clicado e mostra os projetos correspondentes
      button.classList.add("projects-filter-active");
      const filter = this.getAttribute("data-filter");
      
      if (filter === "all") {
        projectItems.forEach(function(item) {
          item.style.display = 'block';
        });
      } else {
        document.querySelectorAll(`.project-item-${filter}`).forEach(function(item) {
          item.style.display = 'block';
        });
      }
    });
  });
});
