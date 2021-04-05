function openNavbar() {
    var head = document.getElementById('head')
    var navbar = document.getElementById('navbar')
    var exitnav = document.getElementById('exitnav')
    exitnav.style.display = 'block'
    navbar.style.display = 'block'
    head.style.display = 'none'
}

function hidenavbar() {
    var head = document.getElementById('head')
    var navbar = document.getElementById('navbar')
    navbar.style.display = 'none'
    head.style.display = 'flex'
}
var x = window.matchMedia('(min-width:700px)')

function changes(x) {
    var head = document.getElementById('head')
    var navbar = document.getElementById('navbar')
    var exitnav = document.getElementById('exitnav')
    if (x.matches) {
        exitnav.style.display = 'none'
        navbar.style.display = "block"
        head.style.display = 'flex'
    } else {
        navbar.style.display = "none"

    }
}
x.addListener(changes)
changes(x)


function swap() {
    login=document.getElementById('loginBox')
    register=document.getElementById('registerBox')
    if (login.style.display=='none') {
        register.style.display='none'
        login.style.display='flex'
    }
    else{
        register.style.display='flex'
        login.style.display='none'
    }
}
function acOptions() {
    let acoptions = document.getElementById('acOptions')
    if (acoptions.style.display == 'none') {
        acoptions.style.display = 'block'
    }
    else {
        acoptions.style.display = 'none'
    }
}



function accounttoggle(element) {
    let entered=document.getElementById(element)
    let form=document.getElementById('editaddressdetails')
    let profile = document.getElementById('profiledetail')
    let address = document.getElementById('addressdetails')
    if (profile == entered) {
        profile.style.display = 'flex'
        address.style.display = 'none'
        form.style.display='none'
    } else if(address==entered) {
        profile.style.display = 'none'
        address.style.display = 'flex'
        form.style.display='none'
    }
}
function changeaddressform() {
    let form=document.getElementById('editaddressdetails')
    let profile = document.getElementById('profiledetail')
    let address = document.getElementById('addressdetails')
    form.style.display='flex'
    profile.style.display='none'
    address.style.display='none'
}
function hideaddressform() {
    let form=document.getElementById('editaddressdetails')
    let profile = document.getElementById('profiledetail')
    let address = document.getElementById('addressdetails')
    form.style.display='none'
    profile.style.display='none'
    address.style.display='flex'
}

function hidenotification() {
    let  notification=document.getElementById('notification')
    notification.style.display='none'
}