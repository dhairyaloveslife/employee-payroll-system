function calculateSalary() {
    const employeeName = document.getElementById('employee').value;
    const month = document.getElementById('month').value;
    const workingDays = parseInt(document.getElementById('workingDays').value);
    const leaveDays = parseInt(document.getElementById('leaveDays').value);
    const baseSalary = 5000; // Example base salary

    // Validate inputs
    if (!workingDays || workingDays < 1) {
        alert("Please enter a valid number of working days.");
        return;
    }

    if (leaveDays < 0 || leaveDays > workingDays) {
        alert("Leave days cannot be greater than working days.");
        return;
    }

    const dailyRate = baseSalary / 30; // Assuming 30 working days in a month
    let salary = dailyRate * (workingDays - leaveDays); // Deduct salary for leave days

    // Display the result
    document.getElementById('salaryResult').innerHTML = `
        <h3>Salary Slip for ${employeeName}</h3>
        <p>Month: ${month}</p>
        <p>Working Days: ${workingDays}</p>
        <p>Leave Days Taken: ${leaveDays}</p>
        <p>Total Salary: $${salary.toFixed(2)}</p>
    `;

    // Enable the "Create Salary Slip" button
    document.getElementById('createSalarySlipButton').disabled = false;
    document.getElementById('createSalarySlipButton').onclick = () => {
        createSalarySlip(employeeName, month, workingDays, leaveDays, salary);
    };
}

function createSalarySlip(employeeName, month, workingDays, leaveDays, salary) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Add content to the PDF
    doc.setFontSize(20);
    doc.text("Salary Slip", 20, 30);

    doc.setFontSize(12);
    doc.text(`Employee: ${employeeName}`, 20, 50);
    doc.text(`Month: ${month}`, 20, 60);
    doc.text(`Working Days: ${workingDays}`, 20, 70);
    doc.text(`Leave Days Taken: ${leaveDays}`, 20, 80);
    doc.text(`Total Salary: $${salary.toFixed(2)}`, 20, 90);

    // Download the PDF
    doc.save(`${employeeName}-salary-slip-${month}.pdf`);
}
