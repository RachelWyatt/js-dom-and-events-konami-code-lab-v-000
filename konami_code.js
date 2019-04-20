const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

document.addEventListener("keydown", function(e) {
  init(e)
//  alert(3)
})

function init(e) {
  // Write your JavaScript code inside the init() function
  let index = 0;
  const key = parseInt(e.detail || e.which);

  if (key === code[index]) {
    index++;

    if (index === code.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
}
