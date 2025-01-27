
//openNav shows side menu (clothes)
function openNav() {
    document.getElementById('mySidebar').style.width = "20%";
    document.getElementById('mySidebar').style.border = "6px solid lightgrey";
    document.getElementById('openNav').style.display = "none";
    document.getElementById('deleteBtn').style.display = "none";
    document.getElementById('fileBtn').style.display = "none";
    document.getElementById('screenS').style.display = "none";
    document.getElementById('question').style.display = "none";
    console.log("open menu");
    
}

//closeNav closes side menu (clothes) with button
function closeNav() {
    document.getElementById("mySidebar").style.width = "0%";
    document.getElementById('mySidebar').style.border = "none";
    document.getElementById('openNav').style.display = "block";
    document.getElementById('deleteBtn').style.display = "block";
    document.getElementById('fileBtn').style.display = "block";
    document.getElementById('screenS').style.display = "block";
    document.getElementById('question').style.display = "block";
    console.log("sulje menu");
}


//Closes side menu with clicking outside of it
document.addEventListener('mouseup', function (e) {
    var container = document.getElementById('mySidebar');
    if (!container.contains(e.target)) {
        closeNav();
    }
}.bind(this));

//Back-button in menu
function goBack() {
    var elems = document.getElementsByClassName('elements');
    for (var i = 0; i < elems.length; i += 1) {
        elems[i].style.display = 'block';
    }
    document.getElementById("wdiv").style.display = "none";
    document.getElementById("fdiv").style.display = "none";
    document.getElementById("wooddiv").style.display = "none";
    document.getElementById("mdiv").style.display = "none";
    document.getElementById("ediv").style.display = "none";
    document.getElementById('goBack').style.display= "none";
}

function openWaterE() {
    var elems = document.getElementsByClassName('elements');
    for (var i = 0; i < elems.length; i += 1) {
        elems[i].style.display = 'none';
    }
    document.getElementById("fdiv").style.display = "none";
    document.getElementById("wooddiv").style.display = "none";
    document.getElementById("ediv").style.display = "none";
    document.getElementById("mdiv").style.display = "none";
    document.getElementById("wdiv").style.display = "block";
    document.getElementById('goBack').style.display= "block";
}

function openFireE() {
    var elems = document.getElementsByClassName('elements');
    for (var i = 0; i < elems.length; i += 1) {
        elems[i].style.display = 'none';
    }
    document.getElementById("wdiv").style.display = "none";
    document.getElementById("wooddiv").style.display = "none";
    document.getElementById("ediv").style.display = "none";
    document.getElementById("mdiv").style.display = "none";
    document.getElementById("fdiv").style.display = "block";
    document.getElementById('goBack').style.display= "block";
}

function openWoodE() {
    var elems = document.getElementsByClassName('elements');
    for (var i = 0; i < elems.length; i += 1) {
        elems[i].style.display = 'none';
    }
    document.getElementById("wdiv").style.display = "none";
    document.getElementById("fdiv").style.display = "none";
    document.getElementById("ediv").style.display = "none";
    document.getElementById("mdiv").style.display = "none";
    document.getElementById("wooddiv").style.display = "block";
    document.getElementById('goBack').style.display= "block";
}

function openMetalE() {
    var elems = document.getElementsByClassName('elements');
    for (var i = 
        0; i < elems.length; i += 1) {
        elems[i].style.display = 'none';
    }
    document.getElementById("wdiv").style.display = "none";
    document.getElementById("wooddiv").style.display = "none";
    document.getElementById("ediv").style.display = "none";
    document.getElementById("fdiv").style.display = "none";
    document.getElementById("mdiv").style.display = "block";
    document.getElementById('goBack').style.display= "block";
}

function openEarthE() {
    var elems = document.getElementsByClassName('elements');
    for (var i = 0; i < elems.length; i += 1) {
        elems[i].style.display = 'none';
    }
    document.getElementById("wdiv").style.display = "none";
    document.getElementById("wooddiv").style.display = "none";
    document.getElementById("fdiv").style.display = "none";
    document.getElementById("mdiv").style.display = "none";
    document.getElementById("ediv").style.display = "block";
    document.getElementById('goBack').style.display= "block";
}
