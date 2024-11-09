const today = new Date().toISOString().split("T")[0];
document.getElementById("startDate").setAttribute("min", today);
document.getElementById("endDate").setAttribute("min", today);

function submitForm() {
  const destination = document.getElementById("destination").value;
  const persons = document.getElementById("persons").value;
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;
  const description = document.getElementById("description").value;

  if (
    !destination ||
    !persons ||
    !startDate ||
    !endDate ||
    description.length < 10 ||
    description.length > 500
  ) {
    alert("Please fill out all fields correctly.");
    return;
  }

  if (new Date(startDate) >= new Date(endDate)) {
    alert("End date must be after the start date.");
    return;
  }

  alert("Booking Successful!");
}

// gallery section js
function handleBookNow(place) {
  alert(`You have selected the ${place} package!`);
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".card button").forEach((button, index) => {
    button.addEventListener("click", () => {
      const place = button.parentElement.querySelector("h3").textContent;
      handleBookNow(place);
    });
  });
});

function validateForm() {
  const fullName = document.getElementById("fullname").value;
  const contact = document.getElementById("contact").value;
  const dob = document.getElementById("dob").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const gender = document.getElementById("gender").value;

  if (!fullName || !contact || !dob || !email || !password || !gender) {
    alert("Please fill all the fields.");
    return false;
  }
  if (contact.length !== 10 || isNaN(contact)) {
    alert("Please enter a valid 10-digit contact number.");
    return false;
  }
  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return false;
  }
  alert("Registration Successful!");
  return true;
}

function validateLoginForm() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (!email || !password) {
    alert("Please enter both email and password.");
    return false;
  }
  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return false;
  }
  alert("Login Successful!");
  return true;
}

function closeLoginModal() {
  $("#loginModal").modal("hide");
}

function closeRegistrationModal() {
  $("#registerModal").modal("hide");
}
