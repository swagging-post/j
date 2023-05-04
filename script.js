// Define an array of valid codes
const validCodes = ['testmeboy', 'subtoeli', 'thisisatest'];

// Get the HTML elements
const codeInput = document.getElementById('code-input');
const nameInput = document.getElementById('name-input');
const redeemBtn = document.getElementById('redeem-btn');
const lightModeBtn = document.getElementById('light-mode-btn');
const darkModeBtn = document.getElementById('dark-mode-btn');

// Add event listeners
redeemBtn.addEventListener('click', redeemCode);
lightModeBtn.addEventListener('click', toggleLightMode);
darkModeBtn.addEventListener('click', toggleDarkMode);

function redeemCode() {
  // Get the user's code and name
  const userCode = codeInput.value;
  const userName = nameInput.value;
  
  // Check if the user's code is valid
  if (validCodes.includes(userCode)) {
    // If the code is valid, create a webhook bot and send a message to a Discord server
    const webhookURL = 'https://discord.com/api/webhooks/1103472689617838100/0QvS9NMwI57qHCzEQ7C9JZmn1ftE3x_HvAB3JrwOIYBq8cE8htVYjqfphmlskbU0t4RY'; // Replace with your own webhook URL
    const message = {content: `${userName}
