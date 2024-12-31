document.getElementById('search').addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    if (title.includes(query)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
});

// Add sorting functionality (optional)
document.getElementById('sort').addEventListener('change', function () {
  const order = this.value;
  const cards = Array.from(document.querySelectorAll('.card'));
  const parent = document.querySelector('.cards');
  
  cards.sort((a, b) => {
    const priceA = parseInt(a.querySelector('p').textContent.replace(/,/g, ''));
    const priceB = parseInt(b.querySelector('p').textContent.replace(/,/g, ''));
    return order === 'asc' ? priceA - priceB : priceB - priceA;
  });
  
  cards.forEach(card => parent.appendChild(card));
});
