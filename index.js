const { app, BrowserWindow, Menu } = require("electron");

let mainWindow;

const menuTemplate = [
    {
        label: "Menu",
        submenu: [
            {label: "Add comment"},
            {
                label: "Exit",
                accelerator: process.platform === "darwin" ? "Cmd+Q" : "Alt+F4",
                click() {
                    app.quit();
                }
            }
        ]
    }
];

if(process.platform === "darwin")
    menuTemplate.unshift({ label: "" })

app.on("ready", () => {
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(`file://${__dirname}/main.html`);
    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);
});