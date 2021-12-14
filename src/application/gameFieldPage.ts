import Control from "../common/control";
import { ArtistQuestionView } from './artistQuestionView';
import { IArtistQuestionData } from "./IArtistQuestionView";

interface IQuizOptions {
  gameName: string; 
  categoryIndex: number;
}
interface IQuizResult {

}
export class GameFieldPage extends Control {
  onBack: () => void;
  onHome: () => void;
  onFinish: (result: IQuizResult) => void;
  constructor(parentNode: HTMLElement, gameOptions: IQuizOptions) {

    super(parentNode);
    console.log(gameOptions);

    const header = new Control(this.node, 'h1', '', `${gameOptions.categoryIndex} - ${gameOptions.categoryIndex}`);
    const backButton = new Control(this.node, 'button', '', 'back');
    backButton.node.onclick = () => {
      this.onBack();
    }
    const homeButton = new Control(this.node, 'button', '', 'home');
    homeButton.node.onclick = () => {
      this.onHome();
    }
    //fake ArrayQuestion
    const questions: Array<IArtistQuestionData> = [{ answers: [1, 2, 3, 4] }, { answers: [1, 2, 3, 4] }, { answers: [1, 2, 3, 4] }];
    this.questionCycle(questions, 0, () => {
      this.onFinish({});
    });
    
    // const finishButton = new Control(this.node, 'button', '', 'finish');
    // finishButton.node.onclick = () => {
    //   this.onFinish({});
    // }
  }

  questionCycle(questions: Array<IArtistQuestionData>, index: number, onFinish: () => void) {
    if (index >= questions.length) {
      onFinish();
      return;
    }
    const question = new ArtistQuestionView(this.node, questions[index]);
    question.onAnswer = answerIndex => {
      question.destroy();
      this.questionCycle(questions, index + 1, onFinish);
    };
    
  }
}