class OrderState {
  process(context) {
    throw new Error("Phải implement phương thức này!");
  }
}

class PendingState extends OrderState {
  process(context) {
    console.log("[State Pending]: Đang chờ thanh toán...");
    context.setState(new ProcessingState());
    context.handlePayment();
  }
}

class ProcessingState extends OrderState {
  process(context) {
    console.log("[State Processing]: Đang xử lý...");
    console.log("Giao dịch thành công");

    context.setState(new CompletedState());
  }
}

class CompletedState extends OrderState {
  process(context) {
    console.log("[State Completed]: Đã hoàn thành");
  }
}

class OrderContext {
  constructor() {
    this.state = new PendingState();
  }

  setState(state) {
    this.state = state;
  }

  handlePayment() {
    this.state.process(this);
  }
}

console.log("\n--- TEST ---");
const myOrder = new OrderContext();

myOrder.handlePayment();

console.log("Chỉ bấm thanh toán một lần");
myOrder.handlePayment();
