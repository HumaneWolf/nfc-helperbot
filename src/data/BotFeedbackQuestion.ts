import { Question } from "../lib/Question";

export class BotFeedbackQuestion implements Question {
    public answer: string = "You can make an issue at https://github.com/HumaneWolf/nfc-helperbot/issues or " +
        "contact @HumaneWolf with suggestions and feedback.";

    public keyword: string = "bot_feedback";

    public questions: string[] = [
        "That is wrong.",
        "You should know that",
        "Add that information",
        "Find that out",
        "How can I give feedback?",
        "How can I make suggestions?",
    ];
}
