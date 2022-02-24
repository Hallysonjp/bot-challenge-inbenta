/**
 * This adapter creator export an adapter that shows a promotional message when the conversation window is shown.
 */
function subscriptionMessage() {
    return function (chatBot) {
        chatBot.subscriptions.onDisplayChatbotMessage(function (messageData, next) {
            console.log(messageData.message);
            // BEFORE DisplayChatbotMessage action execution
            if (messageData.message == "Sorry, we couldn't find any answers to your question.") {
                console.log("hidden message")
                return
            } else {
                messageData.message = 'Custom chatbot message! ' + messageData.message;
                return next(messageData);
            }
        });
    };
}