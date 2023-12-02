// script.js
const names = ['Alice', 'Bob', 'Charlie', 'David'];

function generateRandomName() {
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

document.addEventListener('DOMContentLoaded', () => {
  const randomNameElement = document.getElementById('randomName');
  
  randomNameElement.addEventListener('click', () => {
    const generatedName = generateRandomName();
    randomNameElement.textContent = `Random Name: ${generatedName}`;
  });
});
