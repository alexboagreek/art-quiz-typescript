import Control from "../common/control";

export class StartPage extends Control {
  onSettings: () => void;
  onGameSelect: (gameName: string) => void;





  constructor(parentNode: HTMLElement) {
    super(parentNode);
    // create picturesButton
    const picturesButton = new Control(this.node, 'button', '', 'pictures');
    picturesButton.node.onclick = () => this.onGameSelect('pictures');

    // create artistsButton
    const artistsButton = new Control(this.node, 'button', '', 'artists');
    artistsButton.node.onclick = () => this.onGameSelect('artists');

    const settingsButton = new Control(this.node, 'button', '', 'settings');
    settingsButton.node.onclick = () => this.onSettings();
  }
}