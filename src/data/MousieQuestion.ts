import { Question } from "../lib/Question";

export class MousieQuestion implements Question {
    public answer: string = "Mousie is the cheese loving mascot mouse of NFC!";

    public keyword: string = "nfc_mousie";

    public questions: string[] = [
        "What is mousie?",
        "Who is mousie?",
    ];
}
