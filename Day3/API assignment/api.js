const userGrid = document.getElementById('userGrid');

async function loadUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    users.forEach(user => {
      const userCard = document.createElement('div');
      userCard.className = 'user-card';
      userCard.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Company:</strong> ${user.company.name}</p>
        <p><strong>City:</strong> ${user.address.city}</p>
      `;
      userGrid.appendChild(userCard);
});
} catch (error) {
    console.error('Error fetching users:', error);
    userGrid.innerHTML = '<p>Failed to load users.</p>';
}
}

loadUsers();