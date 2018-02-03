import { App } from "../lib/App";
import { Event } from '../lib/Event';

export class QuestionAskedEvent implements Event {
    event: string = 'text';

    handle(info: any): void {
        if (info.update.message.chat.type != 'private') return;

        let answer = App.getInstance().ask(info.update.message.text);

        info.reply(answer);
    }
}
