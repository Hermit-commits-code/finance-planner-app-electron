const bcrypt = require('bcryptjs');
const { ipcMain } = require('electron');
const users = {}; // This is a simple in-memory store. Replace with a database in production

// Handle User Registration
ipcMain.handle('register', async (event, { username, password, email }) => {
  if (users[username]) {
    return { message: 'User already exists', status: 400 };
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  users[username] = { password: hashedPassword, email };
  return { message: 'User Registered Successfully', status: 201 };
});

// Handle User login
ipcMain.handle('login', async (event, { username, password, email }) => {
  const user = users[username];
  if (user && (await bcrypt.compare(password, user.password))) {
    return { message: 'Login Successful', status: 200 };
  }
  return { message: 'Invalid Credentials', status: 401 };
});
