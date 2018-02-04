import { Question } from "../lib/Question";

export class BoopQuestion implements Question {
    public answer: string = "Boop :3";

    public keyword: string = "boop";

    public questions: string[] = [
        "Boop!",
        "Beep!",
    ];
}
