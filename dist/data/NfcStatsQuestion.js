"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NfcStatsQuestion {
    constructor() {
        this.answer = "You can find statistics about the con participants here: " +
            "https://www.nordicfuzzcon.org/Registration/Statistics";
        this.keyword = "nfc_stats";
        this.questions = [
            "How many are participating?",
            "How many people bought tickets?",
            "How many are there from my country?",
            "Where are most con-goers from?",
        ];
    }
}
exports.NfcStatsQuestion = NfcStatsQuestion;
