import { Command } from '../lib/Command';

export class HelpCommand implements Command {
    public aliases: string[] = [
        '/help',
        '/start'
    ];

    public execute(msg): void {
        msg.replyWithMarkdown(
            'Hello! You can ask me questions about NFC by sending me messages. I will try to answer as best I can. ' +
            'If this is in a group you will need to ask by sending `/ask [question]`, otherwise, just send them as a' +
            'message. Have feedback? Contact @HumaneWolf or make an issue at https://github.com/HumaneWolf/nfc-helperbot.'
        );
    }
}
