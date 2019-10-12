const { app, Menu } = require("electron")
const { CommentWindow } = require("./commentWindow")

const devTemplate = {
    label: "dev",
    submenu: [
        { role: "reload" },
        {
            label: "Debug",
            accelerator: process.platform === "darwin" ? "Cmd+Alt+I" : "Ctrl+Shift+I",
            click(item, focusedWindow) {
                focusedWindow.toggleDevTools();
            }
        }
    ]
};

const mainTemplate = [
    {
        label: "Menu",
        submenu: [
            {
                label: "Add comment",
                accelerator: "Ctrl+N",
                click() {
                    const template = Menu.buildFromTemplate([ devTemplate ]);
                    CommentWindow.create(template);
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
    mainTemplate.unshift({ label: "" })

if(process.env.NODE_ENV !== "production")
    mainTemplate.push(devTemplate);

const main = Menu.buildFromTemplate(mainTemplate);

module.exports = { main };