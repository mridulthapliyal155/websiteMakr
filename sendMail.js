(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init("gjVb5Dwvp8E51UdeQ");
})();
function sendEmail() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let company = document.getElementById("company").value;
  let details = document.getElementById("details").value;
  let message = document.getElementById("email-sent-message");

  if (name === "" || email === "" || company === "" || details === "") {
    window.alert("Fill all the details.");
  } else {
    message.classList.add("active");
    setTimeout(() => message.classList.remove("active"), 2000);

    let contactParams = {
      from_name: name,
      company: company,
      email: email,
      details: details,
    };
    emailjs
      .send("service_pagrxze", "template_4xud4os", contactParams)
      .then(function (res) {});
  }
}
