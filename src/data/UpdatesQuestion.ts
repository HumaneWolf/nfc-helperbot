import { Question } from "../lib/Question";

export class UpdatesQuestion implements Question {
    public answer: string = "You can find NFC and stay up to date here:\n" +
        "Facebook: https://www.facebook.com/NordicFuzzCon\n" +
        "Twitter: https://twitter.com/nordicfuzzcon\n" +
        "FA: https://www.furaffinity.net/user/nordicfuzzcon\n" +
        "Telegram Announcements: https://t.me/nordicfuzzcon\n" +
        "Telegram Live Updates: https://t.me/nordicfuzzconlive\n" +
        "Website: https://www.nordicfuzzcon.org/\n" +
        "Forum: https://forum.nordicfuzzcon.org/";

    public keyword: string = "nfc_updates";

    public questions: string[] = [
        "Where can I follow NFC on Telegram?",
        "Where can I follow NFC on Twitter?",
        "Where can I follow NFC on Furaffinity?",
        "Where can I follow NFC on FA?",
        "Where can I follow NFC on Twitter?",
        "Where can I follow NFC on YouTube?",
        "Where can I get the latest NFC news?",
        "Where does NFC post updates?",
        "Where can I find information about NFC?",
        "Where can I find updates about NFC?",
    ];
}
