import Control from "../common/control";
import { SettingsPage } from './settingsPage';
import { StartPage } from './startPage';
import { CategoriesPage } from './categoriesPage';

export class Application extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode);
    this.mainCycle();
    
  }
  private mainCycle() {
    const startPage = new StartPage(this.node);
    startPage.onGameSelect = () => {
      const categories = new CategoriesPage(this.node);
    }

    startPage.onSettings = () => {
      startPage.destroy();
      const settingsPage = new SettingsPage(this.node);
        settingsPage.onBack = () => {
          settingsPage.destroy();
          this.mainCycle();
      }
      settingsPage.onSave = (settings) => {
        console.log(settings)
        settingsPage.destroy();
        this.mainCycle();
      }
    }
  }
}