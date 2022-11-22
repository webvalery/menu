const sidebar = document.querySelector('.sidebar');
if(sidebar) {
  window.addEventListener('scroll', (e) => {
    if(window.scrollY <= 100) {
      sidebar.style.top = 100 - `${window.scrollY}` + 'px';
    } else {
      sidebar.style.top = 0 + 'px';
    }
  });

  const globalWrapper = document.querySelector('.global-wrapper');
  const sidebarSwapBtn = sidebar.querySelector('.sidebar__swap-btn');
  const headerNavMobile = document.querySelector('.header__nav-mobile');
  sidebarSwapBtn.addEventListener('click', (e) => {
    globalWrapper.classList.toggle('sidebar__on');
  });

  headerNavMobile.addEventListener('click', (e) => {
    globalWrapper.classList.toggle('sidebar__on');
  });


  sidebar.addEventListener('click', (event) => {
    event.preventDefault();
    if(event.target.classList.contains('sidebar__menu-link')) {
      const sidebarMenuLi = sidebar.querySelectorAll('.sidebar__menu-li');
      event.target.closest('li').classList.toggle('active');
      deleteActive(sidebarMenuLi, event);
    } else if(event.target.classList.contains('sidebar__submenu-link')) {
      const sidebarSubmenuLi = sidebar.querySelectorAll('.sidebar__submenu-li');
      event.target.closest('li').classList.add('active');
      deleteActive(sidebarSubmenuLi, event);
    }
  });

  function deleteActive(menu, event) {
    menu.forEach(li => {
      if(li !== event.target.closest('li')) {
        li.classList.remove('active')
      }
    });
  }
}