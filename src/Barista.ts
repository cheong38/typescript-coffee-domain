import { MenuItem } from './MenuItem';
import { Coffee } from './Coffee';

export class Barista {
  makeCoffee(menuItem: MenuItem): Coffee {
    return new Coffee(menuItem.getName(), menuItem.cost());
  }
}
