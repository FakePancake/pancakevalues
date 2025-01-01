// Get references to the buttons and content divs
const vehiclesTab = document.getElementById('vehicles-tab');
const spoilersTab = document.getElementById('spoilers-tab');
const vehiclesContent = document.getElementById('vehicles');
const spoilersContent = document.getElementById('spoilers');

// Function to switch tabs
function switchTab(event, activeTab, activeContent, inactiveContent) {
  // Deactivate all tabs and contents
  vehiclesTab.classList.remove('active');
  spoilersTab.classList.remove('active');
  vehiclesContent.classList.remove('active');
  spoilersContent.classList.remove('active');

  // Activate the clicked tab and show the relevant content
  activeTab.classList.add('active');
  activeContent.classList.add('active');
  inactiveContent.classList.remove('active');
}

// Add event listeners to the tabs
vehiclesTab.addEventListener('click', (event) => {
  switchTab(event, vehiclesTab, vehiclesContent, spoilersContent);
});

spoilersTab.addEventListener('click', (event) => {
  switchTab(event, spoilersTab, spoilersContent, vehiclesContent);
});
