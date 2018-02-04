import { Question } from "../lib/Question";

export class FursuitsCatchAllQuestion implements Question {
    public answer: string = "Volunteer fursuiters can participate in Gotta Cach 'Em All, allowing other con-goers " +
        "to \"hunt\" them.\n" +
        "To hunt your prey, ask politely to see their fursuit badge. The badge will have a number tou can register " +
        "on the NFC website. The person who hunted the most fursuits will be announced at the closing ceremony.\n" +
        "Keep in mind that not all fursuiters participate, they can have opted out.\n" +
        "Info: https://www.nordicfuzzcon.org/Program/CatchEmAll";

    public keyword: string = "fursuit_catchall";

    public questions: string[] = [
        "How can I catch a fursuit?",
        "Where do I register having cought a fursuit?",
        "How can I hunt fursuit prey?",
        "How can I hunt prey?",
    ];
}
