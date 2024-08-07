document.addEventListener('DOMContentLoaded', function() {
    fetch('./assets/hideProducts.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error fetching hideProducts.json:', error);
    });
});