import { Question } from "../lib/Question";

export class NfcWhenQuestion implements Question {
    public answer: string = "NFC 2018 is from the 28th of February to the 4th of March.\n" +
        "The opening ceremony is at 15:00 - 16:30 on the 28th of February, " +
        "and the closing ceremony is at 13:00 to 14:00 on the 4th of March.\n" +
        "Early arrival and late departure can be up to a few days before and after this depending on the booking.";
    public keyword: string = "nfc_when";

    public questions: string[] = [
        "When is NFC?",
        "When is NFC 2018?",
        "When is Nordic FuzzCon?",
        "When is NordicFuzzCon?",
        "When is the con?",
        "When is it?",
        "When does it start?",
        "When does it end?",
        "When is the opening ceremony?",
        "When is the closing ceremony?",
    ];
}
