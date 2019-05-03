export class MenuItem {
  constructor(private name: string, private price: number) {}

  public getName(): string {
    return this.name;
  }

  public cost(): number {
    return this.price;
  }
}
