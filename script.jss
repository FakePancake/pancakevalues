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
