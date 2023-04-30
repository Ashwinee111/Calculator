let output = document.getElementById("output");
let allkeys = document.querySelectorAll(".key");
let equal = document.querySelector(".equal");
let string = "";

allkeys.forEach((key) => {
  key.addEventListener("click", (e) => {
    if (e.target.value == "AC") {
      string = "";
      output.value = string;
    } else if (e.target.value == "DEL") {
      string = string.slice(0, -1);
      output.value = string;
    } else {
      string = string += e.target.value;
      output.value = string;
    }
  });
});

equal.addEventListener("click", () => {
  if (output.value === "") {
    output.value = "";
  } else {
    let ans = eval(output.value);
    output.value = ans;
  }
});
