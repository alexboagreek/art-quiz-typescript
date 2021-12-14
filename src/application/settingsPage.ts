import Control from "../common/control";

export class SettingsPage extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode);
    const backButton = new Control(this.node, 'button', '', 'back');
    backButton.node.onclick = () => {
      this.onBack();
    }
    const settings = {
      
    }
    const saveButton = new Control(this.node, 'button', '', 'save');
    backButton.node.onclick = () => {
      this.onSave();
    }
  }
}