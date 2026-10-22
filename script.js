
function showWorkout(workoutName) {
  alert(
    workoutName +
    "\n\nThis is a demo workout card. You can add a detailed workout page later."
  );
}

// Login form: front-end demonstration only
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const message = document.getElementById("loginMessage");

    if (!loginForm.checkValidity()) {
      loginForm.reportValidity();
      return;
    }

    message.className = "mb-3 text-warning";
    message.textContent =
      "Demo only: connect a secure backend to verify your account.";
  });
}

// Signup form: check the two password fields match
const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const password = document.getElementById("signupPassword").value;
    const confirmPassword =
      document.getElementById("confirmPassword").value;
    const message = document.getElementById("signupMessage");

    if (!signupForm.checkValidity()) {
      signupForm.reportValidity();
      return;
    }

    if (password !== confirmPassword) {
      message.className = "mb-3 text-danger";
      message.textContent = "Passwords do not match. Please try again.";
      return;
    }

    message.className = "mb-3 text-success";
    message.textContent =
      "Form validated! This demo does not create or save an account. A backend is required.";
  });
}
