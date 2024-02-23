const form = document.getElementById("formdangky");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  console.log(formData.get("name"));
  console.log(formData.get("contactnumber"));
  console.log(formData.get("email"));
  console.log(formData.get("password"));
  console.log(formData.get("gender"));
});

let result = text.link(
  "http://127.0.0.1:5500/baicuoikhoa/Trang%20Ch%E1%BB%A7/exam.html"
);
document.getElementById("n").innerHTML = result;
