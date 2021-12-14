import Control from "../common/control";
import { SettingsPage } from './settingsPage';
import { StartPage } from './startPage';
import { CategoriesPage } from './categoriesPage';
import { GameFieldPage } from './gameFieldPage';

export class Application extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode);
    this.mainCycle();
    
  }
  private mainCycle() {
    const startPage = new StartPage(this.node);
    startPage.onGameSelect = (gameName) => {
      startPage.destroy();
      const categories = new CategoriesPage(this.node);
      categories.onBack = () => {
        categories.destroy();
        this.mainCycle();
      }
      categories.onSelect = (index) => {
        const gameField = new GameFieldPage(this.node);
      }
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