function toggleMenu() {
  var navList = document.getElementById("navList");
  navList.classList.toggle("show");
}
// document.getElementById("downloadBtn").addEventListener("click", function () {
//   const data = `console.log('Hello, world!');`;
//   const blob = new Blob([data], { type: "text/javascript" });

//   // Create a link element
//   const link = document.createElement("a");

//   link.download = "example.js";

//   link.href = window.URL.createObjectURL(blob);

//   document.body.appendChild(link);

//   link.click();

//   // Remove the link from the document
//   document.body.removeChild(link);
// });
let Download = document.querySelector(".download");
download.addEventListener("click", function () {
  alert("Click more!");
});
console.log(document.querySelector("Download"));
