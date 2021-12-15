import Control from "../common/control";
import { IArtistQuestionData }  from './IArtistQuestionView';

export class ArtistQuestionView extends Control {
    onAnswer: (index:number)=> void;
  
    constructor(parentNode: HTMLElement, questionData: IArtistQuestionData) {
      super(parentNode);
      
      const question = new Control(this.node, 'div', '', 'Вопрос?');
      const img = new Image(200, 200);
      img.src = questionData.artistImgUrl;
      question.node.append(img);
      

      const answerButtons = questionData.answers.map((it, i) => {
        const button = new Control(this.node, 'button', '', it.toString());
        button.node.onclick = () => {
          this.onAnswer(i);
        }

      });
      
    } 
} 
