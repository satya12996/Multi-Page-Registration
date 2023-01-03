let require = [
  "Firstname",
  "DateofBirth",
  "Email",
  "Fatherfirstname",
  "Motherfirstname",
  "Gender",
  "Nationality",
  "Street",
  "City",
  "Country",
  "Telephonehome",
  "Telephonemobile",
];
let student = {};

function validateAll() {
  let allValid = true;
  require.forEach((key) => {
    if (!validateStudent(key, student[key])) {
      allValid = false;
    }
  });
  return allValid;
}
let Form = document.getElementById("form");
Form.addEventListener("input", ({ target: { name, value } }) => {
  student = { ...student, [name]: value };
  console.log(student);
});
function validateStudent(name, value = "") {
  if (!name) return;
  if (name === "Firstname" || name === "Lastname") {
    console.log(name, value);
    if (!value.match(/^[A-Z]/)) {
      displayError(name, "should starts with uppercase");
      return false;
    } else if (value.length < 5) {
      displayError(name, "minimum 5 characters");
      return false;
    } else {
      displayError(name, "");
      return true;
    }
  }
  if (name === "Telephonehome") {
    if (!(value + "").match(/^[6-9][0-9]{9}$/)) {
      displayError(name, "Invalid phone number");
      return false;
    } else {
      displayError(name, "");
      return true;
    }
  }
  if (name === "Telephonemobile") {
    if (!(value + "").match(/^[6-9][0-9]{9}$/)) {
      displayError(name, "Invalid phone number");
      return false;
    } else {
      displayError(name, "");
      return true;
    }
  }

  if (name === "DateofBirth") {
    if (value === "") {
      displayError(name, "Please enter Date of birth");
      return false;
    } else {
      displayError(name, "");
      return true;
    }
  }

  if (name === "Gender" && value) {
    displayError(name, "");
    return true;
  }
  if (!value) {
    displayError(name, "please fill the field");
    return false;
  } else {
    displayError(name, "");
    return true;
  }
}
function displayError(id, msg) {
  console.log(id);
  document.getElementById(id + "Error").innerText = msg;
}
document.getElementById("nextBtn").addEventListener("click", () => {
  let allValid = true;
  for (const key of require) {
    console.log(key);
    if (!validateStudent(key, student[key])) {
      allValid = false;
      break;
    }
  }
  // console.log(allValid);
  if (allValid) {
    changeForm("form-1", "form-2");
  }
});
document.getElementById("previousBtn-2").addEventListener("click", () => {
  changeForm("form-2", "form-1");
});
function changeForm(hide, show) {
  document.getElementById(hide).classList.add("hidden");
  document.getElementById(show).classList.remove("hidden");
}

//--------------form2 validation-------------
let require2 = [
  "HSCname",
  "HSCboard",
  "HSCpercentage",
  "SSCname",
  "SSCboard",
  "SSCpercentage",
  "CurrentInstuationname",
  "Currentpercentage",
  "Backlog",
];

document.getElementById("nextBtn2").addEventListener("click", () => {
  let allValid = true;
  for (const key of require2) {
    console.log(key);
    if (!validateStudent(key, student[key])) {
      allValid = false;
      break;
    }
  }
  // console.log(allValid);
  if (allValid) {
    changeForm("form-2", "form-3");
  }
});

// --------------------------Form -3 Validation---------------------------------------

let require3 = [
  "profilePhoto",
  "SSCCertificate",
  "HSCCertificate",
  "degreeCertificate",
];
let allValid = true;
for (const key of require3) {
  console.log(key);
  if (!validateStudent(key, student[key])) {
    allValid = false;
    break;
  }
}
document.getElementById("previousBtn").addEventListener("click", () => {
  changeForm("form-3", "form-2");
});
function changeForm(hide, show) {
  document.getElementById(hide).classList.add("hidden");
  document.getElementById(show).classList.remove("hidden");
}
if (allValid) {
  FORM.addEventListener("submit", (event) => {
    console.log(validate(), validateAll(), uploadFile());
    if (!(validate() && validateAll() && uploadFile())) {
      event.preventDefault();
    }
  });
}
