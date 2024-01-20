const submitLoader = document.getElementById("submit-loader");
const submitButton = document.getElementById("submit");
const message = document.querySelector(".message");

const notification = document.getElementById("notification");
const regmessage = document.getElementById("registered");

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var detailValue = getParameterByName("detail");

// Update the h1 element based on detailValue
if (detailValue == "op") {
  const lst = [];
  document.querySelectorAll(".event-names").forEach((eventName) => {
    if (eventName.id == detailValue) {
      eventName.classList.add("hide");
    }
    if (lst.includes(eventName.id)) {
      eventName.classList.add("red");
      eventName.setAttribute("href", "javascript: void(0)");
    }
  });
  document.querySelector("h1").innerHTML = "ONE PIECE";
  document.querySelector("p").innerHTML = "TREASURE HUNTING EVENT";
  // Show the additional input box for 'ONE PIECE'
  document.getElementById("extraInputBox").style.display = "flex";
  document.querySelector('input[name="member1"]').required = true;
  document.getElementById("xtraInputBox").style.display = "flex";
  document.querySelector('input[name="member2"]').required = true;
  document.getElementById("traInputBox").style.display = "flex";
  document.querySelector('input[name="member3"]').required = true;
  document.getElementById("raInputBox").value = "OnePiece";
} else if (detailValue == "tt") {
  const lst = ["ll", "ct", "tq"];
  document.querySelectorAll(".event-names").forEach((eventName) => {
    if (eventName.id == detailValue) {
      eventName.classList.add("hide");
    }
    if (lst.includes(eventName.id)) {
      eventName.classList.add("red");
      eventName.setAttribute("href", "javascript: void(0)");
    }
  });
  document.querySelector("h1").innerHTML = "TWIST'N'TURN";
  document.querySelector("p").innerHTML = "SPEED CUBING EVENT";
  document.getElementById("raInputBox").value = "TwistNTurn";
} else if (detailValue == "tq") {
  const lst = ["ll", "ct", "tt", "bb"];
  document.querySelectorAll(".event-names").forEach((eventName) => {
    if (eventName.id == detailValue) {
      eventName.classList.add("hide");
    }
    if (lst.includes(eventName.id)) {
      eventName.classList.add("red");
      eventName.setAttribute("href", "javascript: void(0)");
    }
  });
  document.querySelector("h1").innerHTML = "THINKQUAKE";
  document.querySelector("p").innerHTML = "IDEA PITCHING EVENT";
  document.getElementById("extraInputBox").style.display = "flex";
  document.querySelector('input[name="member1"]').required = true;
  document.getElementById("xtraInputBox").style.display = "flex";
  document.getElementById("raInputBox").value = "ThinkQuake";
} else if (detailValue == "ct") {
  const lst = ["ll", "bb", "tt", "tq"];
  document.querySelectorAll(".event-names").forEach((eventName) => {
    if (eventName.id == detailValue) {
      eventName.classList.add("hide");
    }
    if (lst.includes(eventName.id)) {
      eventName.classList.add("red");
      eventName.setAttribute("href", "javascript: void(0)");
    }
  });
  document.querySelector("h1").innerHTML = "CREATRIX";
  document.querySelector("p").innerHTML = "WEB DESIGNING EVENT";
  document.getElementById("extraInputBox").style.display = "flex";
  document.getElementById("raInputBox").value = "Creatrix";
} else if (detailValue == "ll") {
  const lst = ["tt", "ct", "tq"];
  document.querySelectorAll(".event-names").forEach((eventName) => {
    if (eventName.id == detailValue) {
      eventName.classList.add("hide");
    }
    if (lst.includes(eventName.id)) {
      eventName.classList.add("red");
      eventName.setAttribute("href", "javascript: void(0)");
    }
  });
  document.querySelector("h1").innerHTML = "LETHAL LEGION";
  document.querySelector("p").innerHTML = "E-SPORTS COMPETITION";
  document.getElementById("extraInputBox").style.display = "flex";
  document.querySelector('input[name="member1"]').required = true;
  document.getElementById("xtraInputBox").style.display = "flex";
  document.querySelector('input[name="member2"]').required = true;
  document.getElementById("traInputBox").style.display = "flex";
  document.querySelector('input[name="member3"]').required = true;
  document.getElementById("raInputBox").value = "LethalLegion";
} else if (detailValue == "bb") {
  const lst = ["ct", "tq"];
  document.querySelectorAll(".event-names").forEach((eventName) => {
    if (eventName.id == detailValue) {
      eventName.classList.add("hide");
    }
    if (lst.includes(eventName.id)) {
      eventName.classList.add("red");
      eventName.setAttribute("href", "javascript: void(0)");
    }
  });
  document.querySelector("h1").innerHTML = "BUGBOUNTY";
  document.querySelector("p").innerHTML = "DEBUGGING CONTEST";
  document.getElementById("raInputBox").value = "BugBounty";
}
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  if (
    clg_name_status === "true" &&
    name_status === "true" &&
    phone_status === "true" &&
    mem1_status === "true" &&
    mem2_status === "true" &&
    mem3_status === "true"
  ) {
    submitLoader.style.display = "flex";
    submitButton.style.display = "none";
    var formData = new FormData(this);

    fetch(
      "https://script.google.com/macros/s/AKfycbxinff5Z0lWJJvaqlOpsjZ3yfTo5LBAIuuGaOv9KkuRzkYtBVXDUADi13HhV4AJUAs/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => {
        if (response.ok) {
          submitLoader.style.display = "none";
          submitButton.style.display = "flex";
          document.getElementById("myForm").reset();
          removeActive();
          message.style.display = "flex";
          regmessage.classList.add("registered-show");
          setTimeout(() => {
            message.style.display = "none";
            regmessage.classList.remove("registered-show");
          }, 5000);
          setTimeout(() => {
            window.location.href = "index.html";
          }, 4000);
        } else {
          submitLoader.style.display = "none";
          submitButton.style.display = "flex";
          message.textContent =
            "There was a problem at our side. Please try again later.";
          message.style.display = "flex";
          setTimeout(() => {
            message.style.display = "none";
          }, 2000);
        }
      })
      .catch((error) => {
        console.error("Error during form submission:", error);
      });
  }
});

document.querySelectorAll(".red").forEach((disabled) => {
  disabled.addEventListener("click", () => {
    notification.classList.add("notification-show");
    setTimeout(() => {
      notification.classList.remove("notification-show");
    }, 3000);
  });
});

function removeActive() {
  document.querySelectorAll(".input-bx span").forEach((label) => {
    label.classList.remove("span-active");
  });
}