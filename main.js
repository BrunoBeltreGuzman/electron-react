const { BrowserWindow, app } = require("electron");
const path = require("path");

const isDev = !app.isPackaged;

function createWindow() {
       const window = new BrowserWindow({
              center: true,
              title: "Name App",
              icon: "public/img/favicon.png",
              webPreferences: {
                     nodeIntegration: false,
                     worldSafeExecuteJavaScript: true,
                     contextIsolation: true,
                     preload: path.join(__dirname, "preload.js"),
              },
       });
       window.setMenu(null);
       window.loadFile("index.html");
}

if (isDev) {
       require("electron-reload")(__dirname, {
              electron: path.join(
                     __dirname,
                     "node_modules",
                     ".bin",
                     "electron"
              ),
       });
}

app.whenReady().then(createWindow);
