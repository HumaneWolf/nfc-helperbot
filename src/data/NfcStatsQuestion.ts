import { Question } from "../lib/Question";

export class NfcStatsQuestion implements Question {
    public answer: string = "You can find statistics about the con participants here: " +
        "https://www.nordicfuzzcon.org/Registration/Statistics";

    public keyword: string = "nfc_stats";

    public questions: string[] = [
        "How many are participating?",
        "How many people bought tickets?",
        "How many are there from my country?",
        "Where are most con-goers from?",
    ];
}
