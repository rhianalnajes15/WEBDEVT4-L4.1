// Wait for the page to load
document.addEventListener('DOMContentLoaded', () => {
  const roleOptions = document.querySelectorAll('.role-option');
  const selectedRoleInput = document.getElementById('selectedRole');
  const loginForm = document.getElementById('loginForm');
  const messageDiv = document.getElementById('message');

  // Select a role
  roleOptions.forEach(option => {
    option.addEventListener('click', () => {
      roleOptions.forEach(o => o.classList.remove('selected')); // remove others
      option.classList.add('selected'); // highlight selected
      selectedRoleInput.value = option.dataset.role; // store selected value
    });
  });

  // Handle form submit
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // stop page from reloading

    const role = selectedRoleInput.value;
    const password = document.getElementById('password').value;

    // Check if inputs are filled
    if (!role || !password) {
      showMessage('Please select a role and enter your password.', false);
      return;
    }

    // Role-password pairs (for demo only!)
    const passwords = {
      "Department Head": "SiEsD3ptH34d",
      "Faculty": "SiEsF4cu1ty",
      "Student Officer": "#CCSOAko",
      "Student": "3SapatNa!"
    };

    // Check password
    if (password === passwords[role]) {
      showMessage(`Welcome, ${role}! Login successful.`, true);
    } else {
      showMessage(`Incorrect password for ${role}. Try again.`, false);
    }
  });

  // Show message
  function showMessage(text, success) {
    messageDiv.textContent = text;
    messageDiv.style.color = success ? 'green' : 'red';
  }
});

