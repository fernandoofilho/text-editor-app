const { app, BrowserWindow } = require('electron');
const path = require('path');

require('electron-reload')(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`)
});

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1280,
    height: 920
  });

  // Carrega o arquivo JavaScript que contém a lógica para renderizar a interface do usuário
  win.loadFile(path.join(__dirname, 'src', 'index.html'));

  // Abre as ferramentas de desenvolvimento (opcional)
  // win.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
