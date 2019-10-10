const { app, BrowserWindow, Menu } = require("electron");
const { menuTemplate } = require("./utils")

let mainWindow;

app.on("ready", () => {
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(`file://${__dirname}/main.html`);
    mainWindow.on('closed', () => app.quit())
    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);
});