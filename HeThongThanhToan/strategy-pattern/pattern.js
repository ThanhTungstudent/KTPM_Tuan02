class PaymentStrategy {
  pay(amount) {
    throw new Error("Phải implement phương thức này!");
  }
}

class CreditCardStrategy extends PaymentStrategy {
  pay(amount) {
    console.log(`Thanh toán ${amount} VNĐ bằng thẻ tín dụng`);
  }
}

class PayPalStrategy extends PaymentStrategy {
  pay(amount) {
    console.log(`Thanh toán ${amount} VNĐ bằng cổng PayPal`);
  }
}

class PaymentProcessor {
  constructor() {
    this.strategy = null;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  executePayment(amount) {
    if (!this.strategy) {
      console.log("Lỗi: chưa chọn phương thức thanh toán");
      return;
    }
    this.strategy.pay(amount);
  }
}

console.log("===Test===");

const payment = new PaymentProcessor();

payment.setStrategy(new CreditCardStrategy());
payment.executePayment(500);

payment.setStrategy(new PayPalStrategy());
payment.executePayment(10000);
