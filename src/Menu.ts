import { MenuItem } from './MenuItem';

export class Menu {

  constructor(private readonly items: MenuItem[]) {
  }

  public choose(menuName: string): MenuItem {
    for (const item of this.items) {
      if (item.getName() === menuName) {
        return item;
      }
    }

    return undefined;
  }
}
