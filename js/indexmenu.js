function menuOpenClose(ulist, class1, class2) {
    // if (ulist.hasAttribute)
    let className = ulist.className.split(' ');
    if (className.indexOf(class1) == -1) {
        ulist.classList.add(class1);
        if (className.indexOf(class2) != -1) {
            ulist.classList.remove(class2);
        }
        className = ulist.className.split(' ');
    } else if (className.indexOf(class2) == -1) {
        ulist.classList.add(class2);
        if (className.indexOf(class1) != -1) {
            ulist.classList.remove(class1);
        }
    }
}