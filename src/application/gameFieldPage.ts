import Control from "../common/control";
interface IQuizOptions {
  gameName: string; 
  categoryIndex: number;
}

export class GameFieldPage extends Control {
  onBack: () => void;
  constructor(parentNode: HTMLElement, gameOptions: IQuizOptions) {
    super(parentNode);
    console.log(gameOptions);
    const backButton = new Control(this.node, 'button', '', 'back');
    backButton.node.onclick = () => {
      this.onBack();
    }
  }
}