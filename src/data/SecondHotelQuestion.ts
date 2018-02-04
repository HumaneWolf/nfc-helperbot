import { Question } from "../lib/Question";

export class SecondHotelQuestion implements Question {
    public answer: string = "The Second Hotel is Scandic Upplands Väsby, Stockholm, Sweden. There is a free shuttle " +
        "bus going between the primary and secondary hotels.\n" +
        "Second Hotel Address:\n" +
        "Scandic Upplands Väsby\n" +
        "Hotellvägen 1\n" +
        "Upplands Väsby Stockholm\n" +
        "Sweden\n" +
        "Shuttle Bus Info: https://www.nordicfuzzcon.org/Venue/ShuttleBus";

    public keyword: string = "second_hotel";

    public questions: string[] = [
        "Where is the second hotel?",
        "How do I get to the second hotel?",
        "When is the shuttle bus leaving?",
        "Where is the shuttle schedule?",
        "How do I get to the main hotel?",
    ];
}
