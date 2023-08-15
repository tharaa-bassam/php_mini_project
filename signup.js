document.getElementById("signUpForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let fname = document.getElementById("fname").value;
  var midname = document.getElementById("midname").value;
  var lname = document.getElementById("lname").value;
  var famname = document.getElementById("famname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confpass = document.getElementById("confpass").value;
  var date = document.getElementById("date").value;
  var phone = document.getElementById("phone").value;

  // let fnamehasError = false;
  // let lnamehasError = false;
  // let famnamehasError = false;
  // let midnamehasError = false;
  // let emaihasError = false;
  // let passwordhasError = false;
  // let datehasError = false;
  // let phonehasError = false;

  // add an event function for the name input to activate when leaveing the input box (blur or lose fouce)
  // fname.addEventListener("blur", (e) => validatefname(e.target));
  // a fucntion that validate the  name
  // function validatefname(e) {
  //   // check if the input field was left empty by invoking checkEmpty function
  //   if (checkEmpty(e)) {
  //     fnamehasError = true;
  //     return;
  //   }
  //   // this is the pattren that will check the input name .value and if it finds any match it returns true and if false it alerts the user by invoking alertWrong function
  //   // and only accpets letters
  //   let pattern = /^[a-zA-Z]+$/i;
  //   if (!fname.value.match(pattern)) {
  //     alertWrong(fname, "The name cannot contain numbers or special characters");
  //     fnamehasError = true;
  //     return;
  //   }

  //   //this runs when the name is correct and now mistakes and if so it check if it had any error alerts and removes them by invoking removeError function
  //   if (fnamehasError) fnamehasError = removeError(fname);

  // }

  // lname.addEventListener("blur", (e) => validatelname(e.target));
  // function validatelname(e) {
  //   if (checkEmpty(e)) {
  //     lnamehasError = true;
  //     return;
  //   }

  //   // and only accpets letters
  //   let pattern = /^[a-zA-Z]+$/i;
  //   if (!lname.value.match(pattern)) {
  //     alertWrong(lname, "The name cannot contain numbers or special characters");
  //     lnamehasError = true;
  //     return;
  //   }

  //   if (midnamehasError) midnamehasError = removeError(midname);

  // }
  //   midname.addEventListener("blur", (e) => validatemidname(e.target));
  // function validatemidname(e) {
  //   if (checkEmpty(e)) {
  //     midnamehasError = true;
  //     return;
  //   }
  //   let pattern = /^[a-zA-Z]+$/i;
  //   if (!midname.value.match(pattern)) {
  //     alertWrong(lname, "The name cannot contain numbers or special characters");
  //     midnamehasError = true;
  //     return;
  //   }

  //   if (midnamehasError) midnamehasError = removeError(midname);
  // }

  // famname.addEventListener("blur", (e) => validatefamname(e.target));
  // // a fucntion that validate the  name
  // function validatefamname(e) {
  //   if (checkEmpty(e)) {
  //     famnamehasError = true;
  //     return;
  //   }
  //   // and only accpets letters
  //   let pattern = /^[a-zA-Z]+$/i;
  //   if (!famname.value.match(pattern)) {
  //     alertWrong(famname, "The name cannot contain numbers or special characters");
  //     famnamehasError = true;
  //     return;
  //   }

  //   if (famnamehasError) famnamehasError = removeError(famname);

  // }

  //   email.addEventListener("blur", (e) => validateEmail(e.target));
  //   function validateEmail(e) {
  //     if (checkEmpty(e)) {
  //       emaihasError = true;
  //       return;
  //     }

  //     let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  //     if (!email.value.match(pattern)) {
  //       alertWrong(email, "Please recheck the email");
  //       emailhasError = true;
  //       return;
  //     }

  //     if (emailhasError) emailhasError = removeError(email);
  //   }

  //   date.addEventListener("blur", (e) => validateDate(e.target));
  //   datehasError = false;
  //   function validateDate(e) {
  //     const currentDate = new Date();
  //     const eighteenYearsAgo = new Date(
  //       currentDate.getFullYear() - 16,
  //       currentDate.getMonth(),
  //       currentDate.getDate()
  //     );
  //     const inputDate = new Date(e.value);

  //     if (inputDate > eighteenYearsAgo) {
  //       alertWrong(date, "You need to be at least 18 to sign up");
  //       datehasError = true;
  //       return;
  //     }

  //     if (datehasError) datehasError = removeError(date);
  //   }

  //   //same as the prevouse function but the pattren is diffrent
  //   password.addEventListener("blur", (e) => validatePassword(e.target));
  //   function validatePassword(e) {
  //     if (checkEmpty(e)) {
  //       passwordhasError = true;
  //       return;
  //     }

  //     let pattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/;
  //     if (!password.value.match(pattern)) {
  //       alertWrong(
  //         password,
  //         "Password must be between 8 and 16 and contain at least 1 diget, one spical charecter, and a capital letter"
  //       );
  //       passwordhasError = true;
  //       return;
  //     }

  //     if (passwordhasError) passwordhasError = removeError(password);
  //   }

  //   submit.addEventListener("click", (e) => {
  //     let signUp = true;
  //     validatefname(fname);
  //     validatelname(lname);
  //     validatefamname(famname);

  //     validatemidname(midname);
  //     validatephone(phone);

  //     validateEmail(email);
  //     validatePassword(password);
  //     validateDate(date);

  //     if (
  //       fnamehasError ||
  //       lnamehasError ||
  //       emaihasError ||
  //       passwordhasError ||
  //       datehasError ||
  //       midnamehasError ||
  //       famnamehasError ||
  //       phonehasError

  //     )
  //     {
  //        signUp = false;
  //     }

  // function alertWrong(e, errMas) {
  //   removeError(e);
  //   let warningElement = document.createElement("section");
  //   warningElement.className = "alert";
  //   warningElement.innerHTML = `<i class="material-symbols-outlined">error</i>&nbsp${errMas}`;
  //   e.parentElement.prepend(warningElement);
  //   e.cals;
  // }

  // function checkEmpty(ele) {
  //   if (ele.value.trim() === "") {
  //     alertWrong(ele, "This field is mandatory");
  //     return true;
  //   }
  //   return false;
  // }

  // function removeError(ele) {
  //   let deletedElem = ele.parentElement.querySelector(".alert");
  //   if (deletedElem != null) deletedElem.remove();
  //   return false;
  // }

  //////
  fetch("signin.php", {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify({
      password: password,
      email: email,
      fname: fname,
      midname: midname,
      lname: lname,
      famname: famname,
      date: date,
      confpass: confpass,
      phone: phone,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(data.message);
      document.getElementById("fname").value = "";
      document.getElementById("lname").value = "";

      document.getElementById("midname").value = "";

      document.getElementById("famname").value = "";

      document.getElementById("password").value = "";

      document.getElementById("confpass").value = "";

      document.getElementById("date").value = "";

      document.getElementById("phone").value = "";

      document.getElementById("email").value = "";
    })
    .catch((error) => {
      console.error("Error:", error);
    });

});
