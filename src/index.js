var menu = [
    { name: "Burger", price: 500 },
    { name: "Pizza", price: 1000 },
    { name: "Pasta", price: 750 },
];
var cashInRegister = 1000;
var nextOrderId = 1;
var orderQueue = [];
function addNewItem(item) {
    menu.push(item);
    console.log("Item ".concat(item.name, " added to the menu."));
}
function placeOrder(itemName) {
    var selectedItem = menu.find(function (item) { return item.name === itemName; });
    if (!selectedItem) {
        console.log("".concat(itemName, " not found in the menu."));
        return;
    }
    cashInRegister += selectedItem.price;
    var newOrder = { id: nextOrderId++, item: selectedItem, status: "pending" };
    orderQueue.push(newOrder);
    console.log("Order for ".concat(selectedItem.name, " placed successfully."));
    return newOrder;
}
function completeOrder(orderId) {
    var order = orderQueue.find(function (order) { return order.id === orderId; });
    if (!order) {
        console.log("Order with id ".concat(orderId, " not found."));
        return;
    }
    order.status = "completed";
    console.log("Order with id ".concat(orderId, " completed."));
    return order;
}
function displayStatus() {
    console.log("Menu:", menu);
    console.log("Cash in Register:", cashInRegister);
    console.log("Order Queue:", orderQueue);
}
// Example Usage
addNewItem({ name: "Salad", price: 300 });
placeOrder("Pizza");
placeOrder("Salad");
completeOrder(1);
displayStatus();
