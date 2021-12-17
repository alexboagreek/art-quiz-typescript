import Control from "../common/control";
import { ArtistQuestionView } from './artistQuestionView';
import { PictureQuestionView } from './pictureQuestionView';
// import { IArtistQuestionData } from "./IArtistQuestionView";
import { IArtistsQuestionData, IPicturesQuestionData } from "./quizDataModel";

interface IQuizOptions {
  gameName: string; 
  categoryIndex: number;
  settings: IQuizSettings;
}
// interface IQuizResult {

// }
type IQuizResults = Array<boolean>;
export class GameFieldPage extends Control {
  onBack: () => void;
  onHome: () => void;
  onFinish: (result: IQuizResults) => void;
  progressIndicator: Control<HTMLElement>;
  results: IQuizResults;
  answersIndicator: Control<HTMLElement>;

  constructor(parentNode: HTMLElement, gameOptions: IQuizOptions, questionsData: Array<IArtistsQuestionData | IPicturesQuestionData> ) {

    super(parentNode);
    // console.log(gameOptions);

    const header = new Control(this.node, 'h1', '', `${gameOptions.categoryIndex} - ${gameOptions.categoryIndex}`);
    const backButton = new Control(this.node, 'button', '', 'back');
    backButton.node.onclick = () => {
      this.onBack();
    }
    const homeButton = new Control(this.node, 'button', '', 'home');
    homeButton.node.onclick = () => {
      this.onHome();
    }

    this.progressIndicator = new Control(this.node, 'div', '', '');
    this.answersIndicator = new Control(this.node, 'div', '', '');
    
    //fake ArrayQuestion
    // const questions: Array<IArtistQuestionData> = [{ answers: [1, 2, 3, 4], correctAnswerIndex:1 }, { answers: [1, 2, 3, 4], correctAnswerIndex:2 }, { answers: [1, 2, 3, 4], correctAnswerIndex:3 }];
    this.results = [];
    
    this.questionCycle(gameOptions.gameName, questionsData, 0, () => {
      this.onFinish(this.results); 
    });
    
    // const finishButton = new Control(this.node, 'button', '', 'finish');
    // finishButton.node.onclick = () => {
    //   this.onFinish({});
    // }
  }

  questionCycle(gameName:string, questions: Array<any>, index: number, onFinish: () => void) {
    if (index >= questions.length) {
      onFinish();
      return;
    }
    this.progressIndicator.node.textContent = `${index + 1} / ${questions.length}`;
    this.answersIndicator.node.textContent = this.results.map(it => it ? '+' : '-').join(' ');
    
   

    if (gameName == 'artists') {
      const question = new ArtistQuestionView(this.node, questions[index]);
      question.onAnswer = answerIndex => {
        question.destroy();
        this.results.push(answerIndex === questions[index].correctAnswerIndex);
        this.questionCycle(gameName, questions, index+1, onFinish);
      };
      
    } else if (gameName == 'pictures') {
      const question = new PictureQuestionView(this.node, questions[index]);
      question.onAnswer = answerIndex => {
        question.destroy();
        this.results.push(answerIndex === questions[index].correctAnswerIndex);
        this.questionCycle(gameName, questions, index+1, onFinish);
      };
      
    } else {
      throw new Error('game type is not find');
    }

   
    
  }
}

function gameName(gameOptions: IQuizOptions, gameName: any, questions: IArtistsQuestionData[], arg3: number, arg4: () => void) {
  throw new Error("Function not implemented.");
}
