document.getElementById('certificate-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const course = document.getElementById('course').value;
    const date = document.getElementById('date').value;

    // Fill the certificate with form data
    document.getElementById('certificate-name').textContent = name;
    document.getElementById('certificate-course').textContent = course;
    document.getElementById('certificate-date').textContent = new Date(date).toLocaleDateString();

    // Show certificate section
    document.getElementById('form-section').classList.add('hidden');
    document.getElementById('certificate-section').classList.remove('hidden');
});

document.getElementById('download-btn').addEventListener('click', function() {
    const certificateElement = document.getElementById('certificate');
    
    // Using html2canvas to convert the certificate to an image
    html2canvas(certificateElement).then(function(canvas) {
        const link = document.createElement('a');
        link.download = 'certificate.png';
        link.href = canvas.toDataURL();
        link.click();
    });
});