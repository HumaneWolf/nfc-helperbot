import { App } from "../lib/App";
import { Command } from "../lib/Command";

export class AskCommand implements Command {
    public aliases: string[] = [
        "/ask",
    ];

    public execute(msg): void {
        const args = msg.update.message.text.split(" ");
        if (args.length === 1) {
            msg.replyWithMarkdown("Usage: `/ask [question]`");
            return;
        }
        args.shift();
        const question = args.join(" ");

        const answer = App.getInstance().ask(question);

        msg.reply(answer);
    }
}
