const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const { menuTemplate } = require("./utils")
const { commentWindow } = require("./actions")

let mainWindow;

app.on("ready", () => {
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(`file://${__dirname}/main.html`);
    mainWindow.on('closed', () => app.quit())
    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

ipcMain.on("addComment", (event, comment) => {
    console.log(commentWindow)
    mainWindow.webContents.send("addComment", comment)
});