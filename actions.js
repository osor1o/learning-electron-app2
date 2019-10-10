const { BrowserWindow } = require("electron");

exports.createCommentWindow = () => {
    commentWindow = new BrowserWindow({
        width: 500,
        height: 300,
        title: "New Comment"
    });
    commentWindow.loadURL(`file://${__dirname}/comment.html`)
}