// Countdown functionality

// Set the target date for the countdown
const targetDate = new Date('2023-12-31');

// Function to calculate the remaining days until the target date
function calculateRemainingDays() {
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;
  const remainingDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  return remainingDays;
}

// Update the "Coming Soon" message with the remaining days
function updateComingSoonMessage() {
  const remainingDays = calculateRemainingDays();
  const comingSoonMessage = document.querySelector('.coming-soon');
  if(remainingDays === 1) comingSoonMessage.textContent = `Coming Soon in ${remainingDays} day`;
  comingSoonMessage.textContent = `Coming Soon in ${remainingDays} days`
}

updateComingSoonMessage();

// Dark mode functionality

// Function to toggle dark mode
function toggleDarkMode(darkMode) {
    const body = document.querySelector('body');
    const footer = document.querySelector('.footer');
    const logo = document.querySelector('.logo');
    const comingSoon = document.querySelector('.coming-soon');
    
    if (darkMode) {
      body.classList.add('dark-mode');
      body.classList.remove('light-mode');
      footer.classList.add('dark-mode');
      footer.classList.remove('light-mode');
      logo.style.color = '#eee';
      comingSoon.style.color = '#eee';
    } else {
      body.classList.add('light-mode');
      body.classList.remove('dark-mode');
      footer.classList.add('light-mode');
      footer.classList.remove('dark-mode');
      logo.style.color = '#333';
      comingSoon.style.color = '#999';
    }
  }
  
  // Function to check if the browser prefers dark mode
  function checkDarkModePreference() {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    toggleDarkMode(prefersDarkMode);
  }
  
  // Event listener for browser dark mode preference change
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    toggleDarkMode(e.matches);
  });
  
  // Initially check the dark mode preference
  checkDarkModePreference(); 