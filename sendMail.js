(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init("gjVb5Dwvp8E51UdeQ");
})();
function sendEmail() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let company = document.getElementById("company").value;
  let details = document.getElementById("details").value;

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
