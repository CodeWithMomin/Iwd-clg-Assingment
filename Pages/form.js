function validateForm() {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const mobileNumber = document.getElementById("mobileNumber").value;
    const password = document.getElementById("password").value;

    // Full name validation (example: should contain at least 3 characters)
    if (fullName.length < 3) {
        alert("Full Name must be at least 3 characters long.");
        return false;
    }

    // Email validation (HTML5 `type="email"` handles basic email validation)
    // Additional custom validation can be added if needed

    // Mobile number validation (example: should be 10 digits)
    const mobileNumberPattern = /^[0-9]{10}$/;
    if (!mobileNumberPattern.test(mobileNumber)) {
        alert("Mobile Number must be 10 digits.");
        return false;
    }

    // Password validation (example: should be at least 6 characters)
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    // If all validations pass
    return true;
}
