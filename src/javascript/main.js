let applicationPath = "file:///C:/Abhishek/personal/bestof/src/html/";

$(document).ready(function () {
    $('.breadcrumb').css('margin-top', document.getElementsByTagName("header")[0].offsetHeight + 'px');
});

function toggleNav() {
    var element = document.getElementsByClassName("switch-toggle")[0];
    if (element.classList && element.classList.contains("open-toggle")) {
        document.getElementsByTagName("nav")[0].style.width = "0";
        document.getElementsByTagName("main")[0].style.marginLeft = "0";
        element.classList.remove("open-toggle");
        document.getElementById("overlay").style.display = "none";
    } else {
        element.classList.add("open-toggle");
        overlayOn();
        document.getElementsByTagName("nav")[0].style.top = document.getElementsByTagName("header")[0].offsetHeight + 'px';
        document.getElementsByTagName("nav")[0].style.width = "250px";
        document.getElementsByTagName("main")[0].style.marginLeft = "250px";
    }
}


function overlayOn() {
    document.getElementById("overlay").style.left = "250px";
    document.getElementById("overlay").style.top = document.getElementsByTagName("header")[0].offsetHeight + 'px';
    document.getElementById("overlay").style.display = "block";
}

function overlayOff() {
    toggleNav();
}






