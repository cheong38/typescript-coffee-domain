import { Menu } from './Menu';
import { Barista } from './Barista';
import { Coffee } from './Coffee';

export class Customer {

  private coffee: Coffee;

  public order(menuName: string, menu: Menu, barista: Barista): void {
    const menuItem = menu.choose(menuName);
    this.coffee = barista.makeCoffee(menuItem);
  }

  public getOrderedCoffee(): Coffee {
    return this.coffee;
  }
}
