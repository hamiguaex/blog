function getScrollTop() {
    return document.body.scrollTop || document.documentElement.scrollTop;
}

function setScrollTop(top) {
    if (document.body.scrollTop) {
        document.body.scrollTop = top;
    }
    if (document.documentElement.scrollTop) {
        document.documentElement.scrollTop = top;
    }
}

function ifShowJumpButton(jumptop) {
    if (getScrollTop() > 200) {
        jumptop.style.display = 'block';
    } else {
        jumptop.style.display = 'none';
    }
}