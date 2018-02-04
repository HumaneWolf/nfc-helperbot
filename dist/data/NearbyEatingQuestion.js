"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NearbyEatingQuestion {
    constructor() {
        this.answer = "The Main Hotel has a restaurant and a bar. In addition, there is a Subway right by the " +
            "hotel, and you can find other places to eat using Google Maps.\n" +
            "Google Maps: https://www.google.no/maps/search/Restau%C2%ADranter/@59.4991442,17.9262566,17z/" +
            "data=!3m1!4b1!4m8!2m7!3m6!1sRestau%C2%ADranter!2sScandic+Infra+City,+Kanalv%C3%A4gen+10," +
            "+194+61+Upplands+V%C3%A4sby,+Sverige!3s0x465f986671f1e153:0x7d437ed039b5ee49!4m2!1d17.928102!2d59.499324";
        this.keyword = "area_eating";
        this.questions = [
            "Where can you get some food?",
            "What restaurants are there in the area?",
            "Where can I get lunch?",
            "Where can I get dinner?",
            "Where can I get breakfast?",
            "Where can I get food?",
            "I am hungry",
        ];
    }
}
exports.NearbyEatingQuestion = NearbyEatingQuestion;
