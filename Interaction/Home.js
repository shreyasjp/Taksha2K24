const filters=document.querySelectorAll(".filters"),eventTiles=document.querySelectorAll(".event-tile");function toggleActive(e){e.classList.toggle("active-filter");let t=Array.from(filters).filter(e=>e.classList.contains("active-filter")).map(e=>e.id.replace("-filter",""));filterEvents(t)}function filterEvents(e){eventTiles.forEach(t=>{let l=t.id,s=!1;s=e.some(e=>{switch(e){case"coding":return"bugbounty"===l||"creatrix"===l;case"gaming":return"onepeice"===l||"lethallegion"===l;case"intellectual":return"twistnturn"===l||"thinkquake"===l;default:return!1}}),e.length||(s=!0),t.classList.toggle("hide",!s)})}const modal=document.getElementById("doc-modal"),posterDisplay=document.getElementById("poster-display"),eventPosters=document.querySelectorAll(".event-poster");function handleLoad(){let e=document.getElementById("page-loader"),t=document.getElementById("container"),l=document.querySelector("nav"),s=document.querySelector(".footer"),r=document.querySelector(".footer-div");e&&t&&(e.remove(),t.classList.remove("hide"),l&&l.classList.remove("hide"),s&&s.classList.remove("hide"),r&&r.classList.remove("hide"))}eventPosters.forEach(e=>{e.addEventListener("click",()=>{let t=e.getAttribute("src");posterDisplay.setAttribute("src",t),modal.classList.remove("hide")})}),modal.addEventListener("click",()=>{modal.classList.add("hide")}),window.addEventListener("load",handleLoad);