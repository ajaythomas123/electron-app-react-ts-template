import path from "path";
import { app, BrowserWindow } from "electron";
const fs = require("fs");
const MANIFEST = JSON.parse(
  fs.readFileSync(path.join(__dirname, "manifest.json"))
);

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, MANIFEST["preload.js"]),
    },
  });

  win.loadFile("./index.html");
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
