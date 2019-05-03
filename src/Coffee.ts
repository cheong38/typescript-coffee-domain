export class Coffee {
  constructor(private readonly name: string, private readonly price: number) {}

  public getName(): string {
    return this.name;
  }

  public cost(): number {
    return this.price;
  }
}
