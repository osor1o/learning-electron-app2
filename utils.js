const { app } = require("electron")
const { createCommentWindow } = require("./actions")

exports.menuTemplate = [
    {
        label: "Menu",
        submenu: [
            {
                label: "Add comment",
                click() {
                    createCommentWindow();
                }
            },
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

if(process.env.NODE_ENV !== "production")
    this.menuTemplate.push({
        label: "dev",
        submenu: [
            {
                label: "Debug",
                accelerator: process.platform === "darwin" ? "Cmd+Alt+I" : "Ctrl+Shift+I",
                click(item, focusedWindow) {
                    focusedWindow.toggleDevTools();
                }
            }
        ]
    })