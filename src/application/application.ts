import Control from "../common/control";
import { SettingsPage } from './settingsPage';
import { StartPage } from './startPage';

export class Application extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode);
    const startPage = new StartPage(this.node);
  }
}