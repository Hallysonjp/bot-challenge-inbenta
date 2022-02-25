/**
 * This adapter creator export an adapter that shows a promotional message when the conversation window is shown.
 */
function subscriptionMessage() {
    return function (chatBot) {
        // console.log(chatbot);
        // console.log('aqui');
        // chatBot.subscriptions.onSendMessage(function (messageData, next) {
        //     messageData.message = messageData.message.replace(regex, replaceWith);
        //     console.log(messageData);
        //     return next(messageData);
        // }
        // );

        chatBot.subscriptions.onShowConversationWindow(function (next) {
            const SideWindow = {
                sideWindowContent: "<p>Hi! check out this amazing article </p><a href='https://www.fakeLinkTo.com/amazingArticle/'>Article</a>",
                sideWindowTitle: "Special promotion",
            }
            chatBot.actions.showSideWindow(SideWindow);
            return next();
        });
    };
}