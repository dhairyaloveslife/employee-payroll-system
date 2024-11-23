// Salary Chart (Bar Chart)
const ctx = document.getElementById('salaryChart').getContext('2d');
const salaryChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Salary ($)',
            data: [2500, 2700, 2600, 2800, 3000, 3200, 3500],
            backgroundColor: '#4caf50',
            borderColor: '#388e3c',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
