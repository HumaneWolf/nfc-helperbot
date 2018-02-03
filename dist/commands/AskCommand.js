"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("../lib/App");
class AskCommand {
    constructor() {
        this.aliases = [
            "/ask",
        ];
    }
    execute(msg) {
        const args = msg.update.message.text.split(" ");
        if (args.length === 1) {
            msg.replyWithMarkdown("Usage: `/ask [question]`");
            return;
        }
        args.shift();
        const question = args.join(" ");
        const answer = App_1.App.getInstance().ask(question);
        msg.reply(answer);
    }
}
exports.AskCommand = AskCommand;
