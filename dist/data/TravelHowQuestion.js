"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TravelHowQuestion {
    constructor() {
        this.answer = "You can travel to NFC from Arlanda Airport using the scheduled FuzzBus, or by " +
            "using train ran by SL to Upplands Väsby Station, then bus route 536 to the hotel itself.\n" +
            "If you travel by train you can take same train from Stockholm C, then the same bus.\n" +
            "If you travel by car, you can set your GPS to the hotel address.\n" +
            "SL travel planner and info: https://sl.se/en\n" +
            "Google Maps: https://www.google.no/maps/place/Scandic+Infra+City/@59.4993267,17.9259133,17z/" +
            "data=!3m1!4b1!4m5!3m4!1s0x465f986671f1e153:0x7d437ed039b5ee49!8m2!3d59.499324!4d17.928102";
        this.keyword = "travel_how";
        this.questions = [
            "How do I get to the hotel?",
            "How do I get to the con?",
            "What train should I take?",
            "What bus should I take?",
            "How do I get from Arlanda to the con?",
            "How do I get from Stockholm C to the con?",
            "How do I get there?",
            "How do I travel to NFC?",
            "How do I travel there?",
        ];
    }
}
exports.TravelHowQuestion = TravelHowQuestion;
