"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("../lib/App");
class QuestionAskedEvent {
    constructor() {
        this.event = 'text';
    }
    handle(info) {
        if (info.update.message.chat.type != 'private')
            return;
        let answer = App_1.App.getInstance().ask(info.update.message.text);
        info.reply(answer);
    }
}
exports.QuestionAskedEvent = QuestionAskedEvent;
