const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const { main: mainTemplate } = require("./menuTemplates")
const { CommentWindow } = require("./commentWindow")

let mainWindow;

app.on("ready", () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.loadURL(`file://${__dirname}/pages/main.html`);
    mainWindow.on('closed', () => app.quit());
    Menu.setApplicationMenu(mainTemplate);
});

ipcMain.on("addComment", (event, comment) => {
    mainWindow.webContents.send("addComment", comment);
    CommentWindow.window.close();
});