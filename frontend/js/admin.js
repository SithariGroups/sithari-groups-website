document.getElementById('gallery-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    
    fetch('/api/gallery/add', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        window.location.href = '/admin'; // Redirect to admin panel
    })
    .catch(error => alert('Error: ' + error.message));
});
