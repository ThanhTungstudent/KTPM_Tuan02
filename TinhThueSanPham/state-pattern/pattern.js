class TaxState {
  calculateFinalPrice(basePrice) {
    throw new Error("Phải implement phương thức này!");
  }

  nextState(context) {
    throw new Error("Phải implement phương thức này!");
  }
}

class NormalSaleState extends TaxState {
  calculateFinalPrice(basePrice) {
    return basePrice * 1.1;
  }

  nextState(context) {
    console.log("Chuyển trạng thái: đưa vào kho thanh lý");
    context.setState(new ClearanceState());
  }
}

class ClearanceState extends TaxState {
  calculateFinalPrice(basePrice) {
    return basePrice;
  }
  nextState(context) {
    console.log("Chuyển trạng thái: đem đi huỷ");
  }
}

class ProductContext {
  constructor(name, basePrice) {
    this.name = name;
    this.basePrice = basePrice;
    this.currentState = new NormalSaleState();
  }

  setState(state) {
    this.currentState = state;
  }

  changeLifeCycle() {
    this.currentState.nextState(this);
  }

  printPrice() {
    const finalPrice = this.currentState.calculateFinalPrice(this.basePrice);
    const stateName = this.currentState.constructor.name;

    console.log(
      `[State] Tên sản phẩm: ${this.name} | Trạng thái: ${stateName} | Giá bán: ${finalPrice}`,
    );
  }
}

console.log("===Test===");
const jacket = new ProductContext("Áo khoác mùa đông", 500)

jacket.printPrice()
jacket.changeLifeCycle()
jacket.printPrice()

