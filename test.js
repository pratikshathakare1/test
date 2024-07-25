function tabClick(tab, tabContent) {
    var newcontent=document.getElementById(tabContent);
    document.getElementsByClassName('active')[0].removeAttribute('class', 'active');
    tab.setAttribute('class', 'active');
    document.getElementsByClassName('tabactive')[0].setAttribute('class', 'tab');
    newcontent.setAttribute('class', 'tabactive');
}












