const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});


document.querySelectorAll('.off-screen-menu .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    // Esta ação removerá a classe 'active' do menu e do ícone hambúrguer, fechando o menu.
    offScreenMenu.classList.remove('active');
    hamMenu.classList.remove('active');
  });
});














/*
const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});


// Supondo que seus links tenham a classe 'nav-link'
document.querySelectorAll('.off-screen-menu .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.off-screen-menu').classList.remove('active');
    // Adicione qualquer outra lógica para redefinir o estado do botão de menu, se necessário
  });
});

*/