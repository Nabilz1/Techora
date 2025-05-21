<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Login - Techora</title>
  <style>
    * {
      margin: 0; padding: 0; box-sizing: border-box;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    body {
      background: #f9f9f9;
      color: #333;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    header, footer {
      background: #222;
      color: white;
      padding: 20px 0;
      text-align: center;
    }
    nav ul {
      display: flex;
      justify-content: center;
      list-style: none;
      flex-wrap: wrap;
      margin-top: 10px;
    }
    nav ul li {
      margin: 0 15px;
    }
    nav ul li a {
      color: white;
      text-decoration: none;
      font-weight: 500;
      cursor: pointer;
    }
    nav ul li a:hover {
      color: #00bcd4;
    }
    section {
      flex-grow: 1;
      padding: 60px 20px;
      max-width: 400px;
      margin: auto;
      background: white;
      border-radius: 10px;
      box-shadow: 0 2px 15px rgba(0,0,0,0.1);
    }
    h2 {
      text-align: center;
      font-size: 2rem;
      margin-bottom: 30px;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    input {
      padding: 12px;
      border-radius: 5px;
      border: 1px solid #ccc;
      font-size: 1rem;
    }
    button {
      background-color: #00bcd4;
      color: white;
      padding: 12px;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    button:hover {
      background-color: #007c91;
    }
    #floating-cart {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #00bcd4;
      color: white;
      padding: 12px 18px;
      border-radius: 50%;
      font-size: 1.2rem;
      text-decoration: none;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      z-index: 1000;
      transition: background-color 0.3s;
    }
    #floating-cart:hover {
      background-color: #007c91;
    }
  </style>
</head>
<body>

  <header>
    <h1>Techora</h1>
    <nav>
      <ul id="nav-list">
        <li><a href="index.html">Home</a></li>
        <li><a href="products.html">Products</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li><a href="cart.html" id="cart-link">🛒 Cart</a></li>
        <!-- Login/logout link will be injected here -->
      </ul>
    </nav>
  </header>

  <section>
    <h2>User Login</h2>
    <form id="login-form" onsubmit="handleLogin(event)">
      <input type="text" id="username" placeholder="Username" required autocomplete="username" />
      <input type="password" id="password" placeholder="Password" required autocomplete="current-password" />
      <button type="submit">Login</button>
    </form>
  </section>

  <footer>
    <p>&copy; 2025 Techora. All rights reserved.</p>
  </footer>

  <a href="cart.html" id="floating-cart">🛒</a>

  <script>
    // Hardcoded demo users (username:password)
    const users = {
      'user1': 'pass123',
      'admin': 'admin123',
      'guest': 'guest123'
    };

    function handleLogin(event) {
      event.preventDefault();
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value;

      if(users[username] && users[username] === password) {
        // Save user info to localStorage
        localStorage.setItem('loggedInUser', username);
        alert(`Welcome back, ${username}!`);
        // Redirect to home page
        window.location.href = 'index.html';
      } else {
        alert('Invalid username or password. Please try again.');
      }
    }

    function updateNavLoginStatus() {
      const navList = document.getElementById('nav-list');
      const loggedInUser = localStorage.getItem('loggedInUser');

      // Remove existing login/logout item if any
      const existing = document.getElementById('login-logout');
      if(existing) navList.removeChild(existing);

      const li = document.createElement('li');
      li.id = 'login-logout';

      if(loggedInUser) {
        li.innerHTML = `<a href="#" onclick="logout()">Logout (${loggedInUser})</a>`;
      } else {
        li.innerHTML = `<a href="login.html">Login</a>`;
      }
      navList.appendChild(li);
    }

    function logout() {
      localStorage.removeItem('loggedInUser');
      alert('You have been logged out.');
      updateNavLoginStatus();
      // Optionally redirect to home after logout:
      window.location.href = 'index.html';
    }

    // Update nav bar on page load
    updateNavLoginStatus();
  </script>

</body>
</html>
