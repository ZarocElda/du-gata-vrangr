const backendUrl = 'https://script.google.com/macros/s/AKfycbyZeSE6wd7Cv8sdFfZTBjotvlhYhJKDUgCfb5tm5Q2YIv89IXu2MNNR2e7FzPbwKS5X/exec'; // Replace with your URL

// Mock logged-in user
const user = {
  discordId: "1234567890",
  username: "TylerUchiha"
};

// Mock item list
const storeDiv = document.getElementById('store');
const items = [
  { id: 1, name: "Sword of Destiny", cost: 250, description: "A powerful sword" }
];

items.forEach(item => {
  const div = document.createElement('div');
  div.className = 'item';
  div.innerHTML = `
    <h3>${item.name} (${item.cost} pts)</h3>
    <p>${item.description}</p>
    <button onclick="buyItem(${item.id})">Buy</button>
  `;
  storeDiv.appendChild(div);
});

function buyItem(itemId) {
  const url = `${backendUrl}?discordId=${user.discordId}&username=${user.username}&itemId=${itemId}`;

  fetch(url)
    .then(res => res.text())
    .then(msg => alert(msg))
    .catch(err => alert("Error: " + err.message));
}

