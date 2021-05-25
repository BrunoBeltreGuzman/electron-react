const { BrowserWindow, app } = require("electron");
const path = require("path");

function createWindow() {
       const window = new BrowserWindow({
              center: true,
              width: 1000,
              height: 800,
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

app.whenReady().then(createWindow);
