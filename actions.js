const { BrowserWindow } = require("electron");

let commentWindow;

exports.createCommentWindow = () => {
    commentWindow = new BrowserWindow({
        width: 500,
        height: 300,
        title: "New Comment",
        webPreferences: {
            nodeIntegration: true
        }
    });
    commentWindow.loadURL(`file://${__dirname}/comment.html`)
};

exports.commentWindow = commentWindow;