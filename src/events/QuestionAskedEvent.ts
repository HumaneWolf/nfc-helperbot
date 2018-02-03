import { App } from "../lib/App";
import { Event } from "../lib/Event";

export class QuestionAskedEvent implements Event {
    public event: string = "text";

    public handle(info: any): void {
        if (info.update.message.chat.type !== "private") { return; }

        const answer = App.getInstance().ask(info.update.message.text);

        info.reply(answer);
    }
}
