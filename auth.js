document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    alert("Signup successful!");
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Login successful!");
});
