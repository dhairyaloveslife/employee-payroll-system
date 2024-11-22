document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login validation
    if (username === "admin" && password === "1234") {
        alert("Login successful!");
        // Redirect to dashboard
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password");
    }
});
