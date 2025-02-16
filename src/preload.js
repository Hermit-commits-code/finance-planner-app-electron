const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  login: (username, password) =>
    ipcRenderer.invoke('login', { username, password }),
  register: (username, password, email) =>
    ipcRenderer.invoke('register', { username, password, email }),
});
