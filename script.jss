document.getElementById('search-bar').addEventListener('keyup', function() {
    let searchQuery = this.value.toLowerCase();
    let items = document.querySelectorAll('.item-card');

    items.forEach(item => {
        let itemName = item.getAttribute('data-name').toLowerCase();
        if (itemName.includes(searchQuery)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

document.getElementById('sort').addEventListener('change', function() {
    // Add sorting functionality if needed
});

document.getElementById('currency').addEventListener('change', function() {
    // Add currency change functionality if needed
});
