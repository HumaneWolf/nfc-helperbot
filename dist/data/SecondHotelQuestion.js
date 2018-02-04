"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SecondHotelQuestion {
    constructor() {
        this.answer = "The Second Hotel is Scandic Upplands Väsby, Stockholm, Sweden. There is a free shuttle " +
            "bus going between the primary and secondary hotels.\n" +
            "Second Hotel Address:\n" +
            "Scandic Upplands Väsby\n" +
            "Hotellvägen 1\n" +
            "Upplands Väsby Stockholm\n" +
            "Sweden\n" +
            "Shuttle Bus Info: https://www.nordicfuzzcon.org/Venue/ShuttleBus";
        this.keyword = "second_hotel";
        this.questions = [
            "Where is the second hotel?",
            "How do I get to the second hotel?",
            "When is the shuttle bus leaving?",
            "Where is the shuttle schedule?",
            "How do I get to the main hotel?",
        ];
    }
}
exports.SecondHotelQuestion = SecondHotelQuestion;
