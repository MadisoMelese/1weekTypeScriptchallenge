const menu = [
  {
    name: "Home",
    price: 100000,
  },
  {
    name: "car",
    price: 2000,
  },
  {
    name: "suit",
    price: 500,
  },
  {
    name: "Laptop",
    price: 750,
  },
];


type OrderObj = {
  name: string;
  price: number;
}

type Order = {
  id: number;
  order: OrderObj;
  status: string;
}


let cashInHand = 1000;
let nextOrderId = 1;
let orderQueue:Order[] = [];


const addnewOrder = (orderObj:OrderObj) => {
  menu.push(orderObj);
};

const placeOrder = (orderName: string) => {
  const selectedOrder = menu.find((order) => order.name === orderName);
  if (!selectedOrder) {
    console.log(`${orderName}`);
    return;
  }
  cashInHand += selectedOrder.price;
  const newOrder = {
    id: nextOrderId++,
    order: selectedOrder,
    status: "Ordered"
  };

  orderQueue.push(newOrder);
  return newOrder;
};

const completeOrder = (orderId:number) => {
  const order = orderQueue.find((order) => order.id === orderId);
  if (!order) {
    console.log(`Order not found`);
    return;
  }
  order.status = "Completed";
  return order;
};

addnewOrder({ name: "Shirt", price: 300 });
addnewOrder({ name: "Shoes", price: 500 });
addnewOrder({ name: "Watch", price: 100 });

placeOrder("Shirt");
completeOrder(1);

console.log("menu: ", menu);
console.log("cashInHand: ", cashInHand);
console.log("Order Queue: ", orderQueue);
