function validation() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const gender = document.getElementById("gender");
  const age = document.getElementById("age");

  var namecheck = /^[A-Za-z ]{3,30}$/;
  var emailcheck =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var mobilecheck = /^[6789][0-9]{9}$/;
  var gendercheck = /^[MtmLlFfEeAaOoTHhRrsS]{4,6}$/;
  var agecheck = /^[0-9]{1,2}$/;
  if (namecheck.test(name.value)) {
    document.getElementById("usererror").innerHTML = " ";
  } else {
    document.getElementById("usererror").innerHTML = "**Name is Invalid";
    return false; //Form will not sumbit
  }
  if (emailcheck.test(email.value)) {
    document.getElementById("emailerror").innerHTML = " ";
  } else {
    document.getElementById("emailerror").innerHTML = "**Email is Invalid";

    return false; //Form will not sumbit
  }
  if (mobilecheck.test(phone.value)) {
    document.getElementById("mobileerror").innerHTML = " ";
  } else {
    document.getElementById("mobileerror").innerHTML =
      "**Mobile Number is Invalid";
    return false; //Form will not sumbit
  }
  if (gendercheck.test(gender.value)) {
    document.getElementById("gendererror").innerHTML = " ";
  } else {
    document.getElementById("gendererror").innerHTML = "**Gender is Invalid";
    return false; //Form will not sumbit
  }
  if (agecheck.test(age.value)) {
    document.getElementById("ageerror").innerHTML = " ";
  } else {
    document.getElementById("ageerror").innerHTML = "**Age is Invalid";
    return false; //Form will not sumbit
  }
}
