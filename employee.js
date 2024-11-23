document.getElementById('employeeForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting

    const empID = document.getElementById('empID').value;
    const fullName = document.getElementById('fullName').value;
    const dob = document.getElementById('dob').value;
    const doj = document.getElementById('doj').value;
    const contact = document.getElementById('contact').value;
    const address = document.getElementById('address').value;
    const role = document.getElementById('role').value;

    const employeeData = {
        empID,
        fullName,
        dob,
        doj,
        contact,
        address,
        role
    };

    // For now, just log the employee data
    console.log(employeeData);

    // You can later send this data to the backend for storage
    alert('Employee added successfully!');
});
