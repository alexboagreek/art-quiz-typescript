import Control from "../common/control";


interface IQuizSettings {
  time: number;
  timeEnable: boolean;
}
export class SettingsPage extends Control {
  onBack: () => void;
  onSave: (settings: IQuizSettings) => void;
  
  constructor(parentNode: HTMLElement, initialSettings: IQuizSettings) {
    super(parentNode);

    const settings: IQuizSettings = initialSettings;
    



    const timeInput = new Control<HTMLInputElement>(this.node, 'input', '');
    timeInput.node.type = 'range';
    timeInput.node.min = 10..toString();
    timeInput.node.max = 30..toString();
    timeInput.node.step = 1..toString();
    timeInput.node.value = settings.time.toString();

    timeInput.node.oninput = () => {
      settings.time = timeInput.node.valueAsNumber;
    }

    const timeCheck = new Control<HTMLInputElement>(this.node, 'input');
    timeCheck.node.type = 'checkbox';
    timeCheck.node.oninput = () => {
      settings.timeEnable = timeCheck.node.checked;
    }


    const backButton = new Control(this.node, 'button', '', 'back');
    backButton.node.onclick = () => {
      this.onBack();
    }

    const saveButton = new Control(this.node, 'button', '', 'save');
    saveButton.node.onclick = () => {
      this.onSave(settings);
    }
  }
}