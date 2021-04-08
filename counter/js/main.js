let increments = document.querySelectorAll(".btn-outline-success");
console.log("increments:", increments);
increments = Array.from(increments);
console.log("increments:", increments);
let decrements = document.getElementsByClassName("btn-outline-danger");
console.log("decrements:", decrements);
for (let i = 0; i < increments.length; i++) {
  increments[i].addEventListener("click", function () {
    increments[i].nextElementSibling.innerHTML++;
  });
  decrements[i].addEventListener("click", function () {
    decrements[i].previousElementSibling.innerHTML > 0
      ? decrements[i].previousElementSibling.innerHTML--
      : alert("you can't get a negative number");
  });
}
