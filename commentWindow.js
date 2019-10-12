const { BrowserWindow } = require("electron");

class CommentWindow {
    static create(template) {
        if(!CommentWindow.window) {
            CommentWindow.window = new BrowserWindow({
                width: 500,
                height: 300,
                title: "New Comment",
                webPreferences: {
                    nodeIntegration: true
                }
            });
            CommentWindow.window.loadURL(`file://${__dirname}/pages/comment.html`);
            CommentWindow.window.on('closed', () => CommentWindow.window = null);
            if(process.platform !== "darwin")
                CommentWindow.window.setMenu(template);
        }
        CommentWindow.window.show();
    };
}

module.exports = { CommentWindow }