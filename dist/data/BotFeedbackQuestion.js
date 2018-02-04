"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BotFeedbackQuestion {
    constructor() {
        this.answer = "You can make an issue at https://github.com/HumaneWolf/nfc-helperbot/issues or " +
            "contact @HumaneWolf with suggestions and feedback.";
        this.keyword = "bot_feedback";
        this.questions = [
            "That is wrong.",
            "You should know that",
            "Add that information",
            "Find that out",
            "How can I give feedback?",
            "How can I make suggestions?",
        ];
    }
}
exports.BotFeedbackQuestion = BotFeedbackQuestion;
