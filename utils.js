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