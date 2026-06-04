$(document).ready(function () {
    $.getJSON("menu.json", function (data) {
      let menuHTML = "";
  
      data.menu.forEach(function (item) {
        menuHTML += `<li class="menu-item-has-children">
          <a href="javascript:void(0)">${item.title}</a>`;
  
        if (item.submenus) {
          menuHTML += `<ul class="submenu">`;
  
          item.submenus.forEach(function (sub) {
            menuHTML += `<li class="menu-item-has-children">
              <a href="javascript:void(0)">${sub.title}</a>`;
  
            if (sub.links) {
              menuHTML += `<ul class="submenu">`;
              sub.links.forEach(function (link) {
                menuHTML += `<li><a href="${link.url}">${link.name}</a></li>`;
              });
              menuHTML += `</ul>`;
            }
  
            menuHTML += `</li>`;
          });
  
          menuHTML += `</ul>`;
        }
  
        menuHTML += `</li>`;
      });
  
      $("#menu").html(menuHTML);
    });
  });
  