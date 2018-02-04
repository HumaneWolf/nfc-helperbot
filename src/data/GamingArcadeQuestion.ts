import { Question } from "../lib/Question";

export class GamingArcadeQuestion implements Question {
    public answer: string = "There will be an arcade room at the convention with various consoles and games " +
        "spanning multiple generations of gaming, as well as occasional tournaments.\n" +
        "Arcade Room: https://www.nordicfuzzcon.org/Program/Arcade";

    public keyword: string = "gaming_arcade";

    public questions: string[] = [
        "Will there be an arcade?",
        "What games are there at the arcade?",
        "Will there be game tournaments?",
        "Will there be arcade machines?",
    ];
}
