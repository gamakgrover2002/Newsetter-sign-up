const direct = () => {
  var email = document.getElementById("email").value;
  if (email.indexOf("@") < 0 || email.length < 10) {
    console.log("error");
    document.getElementById("error-msg").style.display = "block";
    document.getElementById("email").style.border = "1px solid red";
    document.getElementById("email").style.backgroundColor = "light-red";
  } else {
    window.location.href = "/message.html";
  }
};

const redirect = () => {
  window.location.href = "/index.html";
};
