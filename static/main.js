//date update
function updateDate() {
    const dateElement = document.getElementById("date");
    const currentDate = new Date();
    dateElement.innerHTML = currentDate.toDateString();
    }
setInterval(updateDate); // update the date every 1000 milliseconds (1 second)

// top 3 tasks saves
const firstTask = document.getElementById("first-task");
const saveddText = localStorage.getItem("firstTaskText");
if (saveddText) {
    firstTask.value = saveddText;
}
firstTask.addEventListener("input", function() {
        localStorage.setItem("firstTaskText", firstTask.value)
});

const secondTask = document.getElementById("second-task");
const savedddText = localStorage.getItem("secondTaskText");
if (savedddText) {
    secondTask.value = savedddText;
}
secondTask.addEventListener("input", function() {
        localStorage.setItem("secondTaskText", secondTask.value)
});

const thirdTask = document.getElementById("third-task");
const saveddddText = localStorage.getItem("thirdTaskText");
if (saveddddText) {
    thirdTask.value = saveddddText;
}
thirdTask.addEventListener("input", function() {
        localStorage.setItem("thirdTaskText", thirdTask.value)
});

//secondary tasks saves
const fourthTask = document.getElementById("fourth-task");
const ssavedText = localStorage.getItem("fourthTaskText");
if (ssavedText) {
    fourthTask.value = ssavedText;
}
fourthTask.addEventListener("input", function() {
        localStorage.setItem("fourthTaskText", fourthTask.value)
});

const fifthTask = document.getElementById("fifth-task");
const sssavedText = localStorage.getItem("fifthTaskText");
if (sssavedText) {
    fifthTask.value = sssavedText;
}
fifthTask.addEventListener("input", function() {
        localStorage.setItem("fifthTaskText", fifthTask.value)
});

const sixthTask = document.getElementById("sixth-task");
const ssssavedText = localStorage.getItem("sixthTaskText");
if (ssssavedText) {
    sixthTask.value = ssssavedText;
}
sixthTask.addEventListener("input", function() {
        localStorage.setItem("sixthTaskText", sixthTask.value)
});

//saving brain dump text
// Get the brain dump textarea element
const brainDump = document.getElementById("brain-dump");
// Load any saved brain dump text from local storage
const savedText = localStorage.getItem("brainDumpText");
if (savedText) {
    brainDump.value = savedText;
}
// Add an event listener to save the brain dump text to local storage when it changes
brainDump.addEventListener("input", function() {
    localStorage.setItem("brainDumpText", brainDump.value);
});

//highlighting timeslots

document.getElementById("save-button").addEventListener("click", function() {
    // Get the start and end time select elements
    const startTimeSelect = document.querySelector(".start-time-select");
    const endTimeSelect = document.querySelector(".end-time-select");

    // Get the selected start and end time values
    const startTime = startTimeSelect.value;
    const endTime = endTimeSelect.value;

    // Get all the time slot elements
    const timeSlots = document.querySelectorAll(".time-slot");

    // Loop through the time slots and add the "highlighted" class to the ones that fall within the selected range
    for (const timeSlot of timeSlots) {
      if (timeSlot.innerText >= startTime && timeSlot.innerText <= endTime) {
        timeSlot.classList.add("highlighted");
      }
    }
  });

  document.getElementById("save-button").addEventListener("click", function() {
    // Get the start and end time select elements
    const startTimeSelect = document.querySelector(".start-time-select-second");
    const endTimeSelect = document.querySelector(".end-time-select-second");

    // Get the selected start and end time values
    const startTime = startTimeSelect.value;
    const endTime = endTimeSelect.value;

    // Get all the time slot elements
    const timeSlots = document.querySelectorAll(".time-slot");

    // Loop through the time slots and add the "highlighted" class to the ones that fall within the selected range
    for (const timeSlot of timeSlots) {
      if (timeSlot.innerText >= startTime && timeSlot.innerText <= endTime) {
        timeSlot.classList.add("highlighted-second");
      }
    }
  });

  document.getElementById("save-button").addEventListener("click", function() {
    // Get the start and end time select elements
    const startTimeSelect = document.querySelector(".start-time-select-third");
    const endTimeSelect = document.querySelector(".end-time-select-third");

    // Get the selected start and end time values
    const startTime = startTimeSelect.value;
    const endTime = endTimeSelect.value;

    // Get all the time slot elements
    const timeSlots = document.querySelectorAll(".time-slot");

    // Loop through the time slots and add the "highlighted" class to the ones that fall within the selected range
    for (const timeSlot of timeSlots) {
      if (timeSlot.innerText >= startTime && timeSlot.innerText <= endTime) {
        timeSlot.classList.add("highlighted-third");
      }
    }
  });

  document.getElementById("save-button").addEventListener("click", function() {
    // Get the start and end time select elements
    const startTimeSelect = document.querySelector(".start-time-select-fourth");
    const endTimeSelect = document.querySelector(".end-time-select-fourth");

    // Get the selected start and end time values
    const startTime = startTimeSelect.value;
    const endTime = endTimeSelect.value;

    // Get all the time slot elements
    const timeSlots = document.querySelectorAll(".time-slot");

    // Loop through the time slots and add the "highlighted" class to the ones that fall within the selected range
    for (const timeSlot of timeSlots) {
      if (timeSlot.innerText >= startTime && timeSlot.innerText <= endTime) {
        timeSlot.classList.add("highlighted-fourth");
      }
    }
  });

  document.getElementById("save-button").addEventListener("click", function() {
    // Get the start and end time select elements
    const startTimeSelect = document.querySelector(".start-time-select-fifth");
    const endTimeSelect = document.querySelector(".end-time-select-fifth");

    // Get the selected start and end time values
    const startTime = startTimeSelect.value;
    const endTime = endTimeSelect.value;

    // Get all the time slot elements
    const timeSlots = document.querySelectorAll(".time-slot");

    // Loop through the time slots and add the "highlighted" class to the ones that fall within the selected range
    for (const timeSlot of timeSlots) {
      if (timeSlot.innerText >= startTime && timeSlot.innerText <= endTime) {
        timeSlot.classList.add("highlighted-fifth");
      }
    }
  });

  document.getElementById("save-button").addEventListener("click", function() {
    // Get the start and end time select elements
    const startTimeSelect = document.querySelector(".start-time-select-sixth");
    const endTimeSelect = document.querySelector(".end-time-select-sixth");

    // Get the selected start and end time values
    const startTime = startTimeSelect.value;
    const endTime = endTimeSelect.value;

    // Get all the time slot elements
    const timeSlots = document.querySelectorAll(".time-slot");

    // Loop through the time slots and add the "highlighted" class to the ones that fall within the selected range
    for (const timeSlot of timeSlots) {
      if (timeSlot.innerText >= startTime && timeSlot.innerText <= endTime) {
        timeSlot.classList.add("highlighted-sixth");
      }
    }
  });


document.getElementById("clear-button").addEventListener("click", function() {
    const result = confirm("Are you sure you want to clear the text?");
    if (result) {
        // Clear the local storage
        localStorage.clear();

        // Reload the page
        window.location.reload();
    }
  });
