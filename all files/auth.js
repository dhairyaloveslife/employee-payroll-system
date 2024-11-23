document.getElementById('signupForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    alert("Signup successful! Redirecting to dashboard...");
    window.location.href = "dashboard.html";
});

document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert("Login successful! Redirecting to dashboard...");
        window.location.href = "dashboard.html";
    } else {
        alert("Please fill in all fields.");
    }
});
