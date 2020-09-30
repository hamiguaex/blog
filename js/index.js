window.onload = function() {
    const menuButton = document.querySelector('#menu-button');
    const ulist = document.querySelector('#menu').querySelector('ul');
    const jumptop = document.querySelector('#goto-top');
    menuButton.onclick = function() { menuOpenClose(ulist, 'menu-open', 'menu-close'); }
    window.onscroll = function() { ifShowJumpButton(jumptop); }
    jumptop.onclick = function() { setScrollTop(0); }
}