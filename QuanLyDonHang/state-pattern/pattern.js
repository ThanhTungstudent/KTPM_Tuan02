
// State Interfare
class OrderSate{
    processAction (order){
        throw new Error("Phải implement phương thức này")
    }
}

class NewState extends OrderSate {
    processAction(order){
        console.log("[Trạng thái mới tạo]: Đang kiểm tra thông tin đơn hàng");
        order.setState(new ProcessingSate())
        
    }
}

class ProcessingSate extends OrderSate {
    processAction(order){
        console.log("[Trạng thái đang xử lý]: Đóng gói và vận chuyển");
        order.setState(new DeliveredState())
        
    }
}

class DeliveredState extends OrderSate {
    processAction(order) {
        console.log("[Trạng thái đã giao]: Cập nhật trạng thái đơn hàng là đã giao");
        
    }
}

class CancelledSate extends OrderSate{
    processAction(order){
        console.log("[Trạng thái huỷ]: Huỷ đơn hàng và hoàn tiền");
        
    }
}

class Order {
    constructor() {
        this.currentState = new NewState()
    }

    setState(state) {
        this.currentState = state
    }

    processOrder() {
        this.currentState.processAction(this)
    }

    cancelOrder() {
        this.setState(new CancelledSate())
        this.processOrder()
    }
}


console.log("=== Khách hàng order ===");

const myOrder1 = new Order()
myOrder1.processOrder()
myOrder1.processOrder()
myOrder1.processOrder()

console.log("=== Khách hàng huỷ order ===");

const myOrder2 = new Order()
myOrder2.processOrder()
myOrder2.cancelOrder()


