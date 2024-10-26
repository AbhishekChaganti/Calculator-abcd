// Append the clicked button value to the display
function appendValue(value) {
  const display = document.getElementById("display");
  display.value += value;
}

// Clear the entire display
function clearDisplay() {
  const display = document.getElementById("display");
  display.value = "";
}

// Delete the last entered character
function deleteLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

// Calculate and display the result
function calculateResult() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
