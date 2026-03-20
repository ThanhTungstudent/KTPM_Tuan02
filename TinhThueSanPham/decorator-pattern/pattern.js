class BasicProduct {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getPrice() {
    return this.price;
  }

  getDescription() {
    return this.name;
  }
}

class TaxDecorator {
  constructor(item) {
    this.wrappedItem = item;
  }

  getPrice() {
    this.wrappedItem.getPrice();
  }

  getDescription() {
    this.wrappedItem.getDescription();
  }
}

class VATDecorator extends TaxDecorator {
  getPrice() {
    const itemPrice = this.wrappedItem.getPrice();
    return itemPrice + itemPrice * 0.1;
  }
  getDescription() {
    return this.wrappedItem.getDescription() + "(+ VAT)";
  }
}

class LuxuryTaxDecorator extends TaxDecorator {
  getPrice() {
    const itemPrice = this.wrappedItem.getPrice();
    return itemPrice + itemPrice * 0.3;
  }

  getDescription() {
    return this.wrappedItem.getDescription() + "+ Luxury tax";
  }
}

console.log("---Test---");
let perfume = new BasicProduct("Nước hoa", 1000);

perfume = new VATDecorator(perfume);
perfume = new LuxuryTaxDecorator(perfume);

console.log(`[Decorator] Mặt hàng: ${perfume.getDescription()}`);
console.log(`[Decorator] Tổng giá: ${perfume.getPrice()}`);
