/**
 * This adapter creator export an adapter that shows a promotional message when the conversation window is shown.
 */
function receiveData(chooseColor) {
    return function (chatBot) {
        chatBot.subscriptions.onSendMessage(
            function (messagedata, next) {
                console.log(chooseColor);
                console.log(messagedata);
                return next();
            }
        );
    }
}