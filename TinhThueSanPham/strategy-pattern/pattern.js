// interface
class TaxStrategy {
  calculateTax(basePrice) {
    throw new Error("Phải implement phương thức này!");
  }
}

class VATTaxStrategy extends TaxStrategy {
  calculateTax(basePrice) {
    return basePrice * 0.1;
  }
}

class ConsumptionTaxStrategy extends TaxStrategy {
  calculateTax(basePrice) {
    return basePrice * 0.05;
  }
}

class LuxuryTaxStrategy extends TaxStrategy {
  calculateTax(basePrice) {
    return basePrice * 0.3;
  }
}

class Product {
  constructor(name, basePrice, taxStrategy) {
    this.name = name;
    this.basePrice = basePrice;
    this.taxStrategy = taxStrategy;
  }

  setTaxStrategy(taxStrategy) {
    this.taxStrategy = taxStrategy;
  }

  getFinalPrice() {
    const tax = this.taxStrategy.calculateTax(this.basePrice);
    return this.basePrice + tax;
  }

  printInfo() {
    console.log(
      `[Strategy] Sản phẩm: ${this.name} | Giá gốc: ${this.basePrice} |Giá sau thuế: ${this.getFinalPrice()}`,
    );
  }
}

console.log("===Test===");

const milk = new Product("Sữa tươi", 100, new VATTaxStrategy());
const wine = new Product("Rượu vang", 1000, new LuxuryTaxStrategy());

milk.printInfo();
wine.printInfo();
