function downloadPdf(t,e){var o=document.createElement("a");o.href=t,o.download=e,o.click()}$(function(){$(document).scroll(function(){var t=$("nav");t.toggleClass("scrolled",$(this).scrollTop()>t.height())})}),window.onscroll=()=>{var t="";sections.forEach(e=>{let o=e.offsetTop;pageYOffset>=o&&(t=e.getAttribute("id"))}),navLi.forEach(e=>{e.classList.remove("active"),e.classList.contains(t)&&e.classList.add("active")})},document.addEventListener("DOMContentLoaded",function(){let t=document.querySelectorAll(".nav-links a");t.forEach(t=>{t.addEventListener("click",function(t){t.preventDefault();let e=this.getAttribute("href").substring(1),o=document.getElementById(e);o?window.scrollTo({top:o.offsetTop,behavior:"smooth"}):window.location.href=this.getAttribute("href")})}),window.onscroll=()=>{let e=window.scrollY;t.forEach(t=>{let o=t.getAttribute("href").substring(1),l=document.getElementById(o);if(l){let s=l.offsetTop,a=s+l.offsetHeight;e>=s&&e<a?t.classList.add("navbar-active"):t.classList.remove("navbar-active")}})}});