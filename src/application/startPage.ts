import Control from "../common/control";

export class StartPage extends Control {
  onSettings: () => void;
  constructor(parentNode: HTMLElement) {
    super(parentNode);
    const settingsButton = new Control(this.node, 'button', '', 'settings');
    settingsButton.node.onclick = () => this.onSettings();
  }
}