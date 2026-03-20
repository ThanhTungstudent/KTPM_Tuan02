class PaymentComponent {
  processAmount(amount) {
    throw new Error("Phải implement phương thức này!");
  }
}

class BasePayment extends PaymentComponent {
  processAmount(amount) {
    return amount;
  }
}

class PaymentDecorator extends PaymentComponent {
  constructor(wrappedComponent) {
    super();
    this.wrappedComponent = wrappedComponent;
  }

  processAmount(amount) {
    return this.wrappedComponent.processAmount(amount);
  }
}

class ProcessingFeeDecorator extends PaymentDecorator {
  constructor(wrappedComponent, fee) {
    super(wrappedComponent);
    this.fee = fee;
  }

  processAmount(amount) {
    const currentAmount = super.processAmount(amount);
    console.log(`Thêm phí xử lý: + ${this.fee} VNĐ`);
    return currentAmount + this.fee;
  }
}

class DiscountDecorator extends PaymentDecorator {
  constructor(wrappedComponent, discountValue) {
    super(wrappedComponent);
    this.discountValue = discountValue;
  }

  processAmount(amount) {
    const currentAmount = super.processAmount(amount);

    console.log(`Áp dụng mã giảm giá: - ${this.discountValue} VNĐ`);

    return currentAmount - this.discountValue;
  }
}

console.log("\n--- TEST ---");
let myPayment = new BasePayment();
const baseAmount = 100000;

myPayment = new DiscountDecorator(myPayment, 20000);

myPayment = new ProcessingFeeDecorator(myPayment, 5000);

const finalAmount = myPayment.processAmount(baseAmount);
console.log(`Số tiền cuối cùng cần thanh toán: ${finalAmount} VNĐ`);
