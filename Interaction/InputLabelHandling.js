const inputs = document.querySelectorAll('.input-bx input');
const error_messages = document.querySelectorAll('.error');

document.addEventListener("DOMContentLoaded", function () {
    const inputBoxes = document.querySelectorAll(".input-bx");

    inputBoxes.forEach((inputBox) => {
        const input = inputBox.querySelector(".input-bx input");
        const label = inputBox.querySelector(".input-bx span");

        if(input && label){

        input.addEventListener("focus", function () {
            label.classList.add("span-active");
        });

        input.addEventListener("blur", function () {
            if (input.value === "") {
                label.classList.remove("span-active");
            }
        });
    }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    inputs.forEach((input, input_index) => {

    mem1_status = 'true';
    mem2_status = 'true';
    mem3_status = 'true';

    if (input.id === "clg-name") {
        input.addEventListener("input", function() {
        clg_name_status = validate_clg_name(input, 0);
        })
    }
    if (input.id === "std-name") {
        input.addEventListener("input", function() {
        name_status = validate_name(input, 1);
        })
    }
    //Phone validation
    if (input.id === "std-num") {
        input.addEventListener("blur", function () {
        phone_status = validate_phone(input, 2);
        });
    }
    if (input.id === "std-mem1") {
        input.addEventListener("input", function() {
            mem1_status = validate_mem_name(input, 3);
        })
    }
    if (input.id === "std-mem2") {
        input.addEventListener("input", function() {
            mem2_status = validate_mem_name(input, 4);
        })
    }
    if (input.id === "std-mem3") {
        input.addEventListener("input", function() {
            mem3_status = validate_mem_name(input, 5);
        })
    }
    });
  });

function validate_name(input, index) {
    const name = input.value.trim();
  
    // Regular expression pattern for email validation
    const namePattern = /^[a-zA-Z][a-zA-Z .]*$/;
  
    if (name.length === 0) {
      // Name field is empty
      status=true;
      error_messages[index].classList.add("hide");
    } else {
      if (namePattern.test(name)) {
        // Valid Name
        status = true;
        error_messages[index].classList.add("hide");
      } else {
        // Invalid Name
        status = false;
        error_messages[index].classList.remove("hide");
      }
    }
    return status;
  }

  function validate_clg_name(input, index) {
    const name = input.value.trim();
  
    // Regular expression pattern for email validation
    const namePattern = /^[a-zA-Z0-9\s.'",()&-]*$/;
  
    if (name.length === 0) {
      // Name field is empty
      status=true;
      error_messages[index].classList.add("hide");
    } else {
      if (namePattern.test(name)) {
        // Valid Name
        status = true;
        error_messages[index].classList.add("hide");
      } else {
        // Invalid Name
        status = false;
        error_messages[index].classList.remove("hide");
      }
    }
    return status;
  }

  function validate_mem_name(input, index) {
    const name = input.value.trim();
  
    // Regular expression pattern for email validation
    const namePattern = /^[a-zA-Z][a-zA-Z .]*$/;
  
    if (name.length === 0) {
      // Name field is empty
      status = true;
      error_messages[index].classList.add("hide");
    } else {
      if (namePattern.test(name)) {
        // Valid Name
        status = true;
        error_messages[index].classList.add("hide");
      } else {
        // Invalid Name
        status = false;
        error_messages[index].classList.remove("hide");
      }
    }
    return status;
  }

  function validate_phone(input, index) {
    const phone = input.value.trim();
  
    // Regular expression pattern for email validation
    const phonePattern = /^(?:\+?([0-9]{1,3}) ?)?([0-9]{10})$/;
  
    if (phone.length === 0) {
      // Name field is empty
      status = true;
      error_messages[index].classList.add("hide");
    } else {
      if (phonePattern.test(phone)) {
        // Valid Name
        status = true;
        error_messages[index].classList.add("hide");
      } else {
        // Invalid Name
        status = false;
        error_messages[index].classList.remove("hide");
      }
    }
    return status;
  }