import { MenuItem } from '../src/MenuItem';
import { Menu } from '../src/Menu';
import { Barista } from '../src/Barista';
import { Customer } from '../src/Customer';

describe('Customer', () => {
  it('can order an Americano', () => {
    const americanoMenuItem = new MenuItem('Americano', 2500);
    const latteMenuItem = new MenuItem('Caffe Latte', 2800);

    const menu = new Menu([americanoMenuItem, latteMenuItem]);
    const barista = new Barista();

    const customer = new Customer();

    customer.order('Americano', menu, barista);

    const coffee = customer.getOrderedCoffee();
    expect(coffee.getName()).toEqual('Americano');
    expect(coffee.cost()).toEqual(2500);
  });
});
