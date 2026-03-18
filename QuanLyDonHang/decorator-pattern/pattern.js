
class OrderProcess {
    process() {
        throw new Error("Phải implement phương thức này!");
    }
}

class BasicOrder extends OrderProcess {
    process() {
        console.log("Khởi tạo đơn hàng trống.");
    }
}

class OrderDecorator extends OrderProcess {
    constructor(orderWrapper) {
        super();
        this.wrapper = orderWrapper; // Has-a relation
    }

    process() {
        this.wrapper.process();
    }
}

class VerifyDecorator extends OrderDecorator {
    process() {
        super.process();
        console.log("+ [Thêm lớp]: Kiểm tra thông tin đơn hàng.");
    }
}

class ShippingDecorator extends OrderDecorator {
    process() {
        super.process();
        console.log("+ [Thêm lớp]: Đóng gói và vận chuyển.");
    }
}

class DeliveryDecorator extends OrderDecorator {
    process() {
        super.process();
        console.log("+ [Thêm lớp]: Cập nhật trạng thái là đã giao.");
    }
}

class CancelDecoretor extends OrderDecorator {
    process() {
        super.process()
        console.log("+ [Thêm lớp]: Huỷ đơn hàng và hoàn tiền.");
        
    }
}

console.log("\n=== CHẠY THỬ DECORATOR PATTERN ===");


let myPipeline = new BasicOrder();
myPipeline = new VerifyDecorator(myPipeline);
myPipeline = new ShippingDecorator(myPipeline);
myPipeline = new CancelDecoretor(myPipeline);


myPipeline.process();