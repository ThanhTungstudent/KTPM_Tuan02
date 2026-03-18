// Interface
class HandlingStrategy {
    execute (){
        throw new Error("Phải implement phương thức này")
        
    }
}

class VerifyInfoStrategy extends HandlingStrategy {
    execute() {
        console.log("Kiểm tra thông tin đơn hàng");
    }
}

class PackAndShipStrategy extends HandlingStrategy {
    execute() {
        console.log("Đóng gói và vận chuyển");
        
    }
}

class UpdateDeliveryStrategy extends HandlingStrategy {
    execute() {
        console.log("Cập nhật trạng thái đơn hàng là đã giao");
        
    }
}

class CancelAndRefundStrategy extends HandlingStrategy {
    execute() {
        console.log("Huỷ đơn hàng và hoàn tiền");
        
    }
}

class Order {
    constructor() {
        this.strategy = null
    }

    setStrategy(strategy){
        this.strategy = strategy
    }

    executeStrategy() {
        if(!this.strategy){
            console.log("Chưa có hành động được thiết lập");
            return
            
        }
        this.strategy.execute()
    }
}

console.log("=== Strategy Pattern");

const orderProcess = new Order()


orderProcess.setStrategy(new VerifyInfoStrategy())
orderProcess.executeStrategy()

orderProcess.setStrategy(new PackAndShipStrategy());
orderProcess.executeStrategy();


orderProcess.setStrategy(new CancelAndRefundStrategy());
orderProcess.executeStrategy();

