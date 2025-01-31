type Item = {
  name: string;
  price: number;
}

type Order = {
  id: number;
  item: Item;
  status: string;
}

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
]

let cashInRegister = 1000;
let nextOrderId = 1;
const orderQueue: Order[] = [];

function addNewItem(itemObj: Item) {
  menu.push(itemObj);
}

function placeOrder(itemName: string) {
  const selectedItem = menu.find(itemObj => itemObj.name === itemName);
  if (!selectedItem) {
    console.log(`${itemName} not found`);
    return;
  }
  cashInRegister += selectedItem.price;
  const newOrder: Order = { id: nextOrderId++, item: selectedItem, status: "pending" };
  orderQueue.push(newOrder);
  return newOrder;
}

function completeOrder(orderId: number) {
  const order = orderQueue.find(order => order.id === orderId);
  if (!order) {
    console.log(`Order with id ${orderId} not found`);
    return;
  }
  order.status = "completed";
  return order;
}

addNewItem({ name: "Burger", price: 500 });
addNewItem({ name: "Pizza", price: 1000 });
addNewItem({ name: "Pasta", price: 750 });

console.log("menu: ", menu);
console.log("cashInRegister: ", cashInRegister);
console.log("Order Queue: ", orderQueue);
