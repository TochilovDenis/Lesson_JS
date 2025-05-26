// Создаем базовый список покупок
const shoppingList = [
    { product: "Молоко", quantity: 2, bought: false },
    { product: "Хлеб", quantity: 1, bought: true },
    { product: "Яйца", quantity: 10, bought: false }
];

// Функция для вывода списка покупок
function displayList() {
    // Разделяем список на некупленные и купленные
    const notBought = shoppingList.filter(item => !item.bought);
    const bought = shoppingList.filter(item => item.bought);
    
    // Объединяем списки и выводим
    const sortedList = notBought.concat(bought);
    
    alert(sortedList.map(item => 
        `Продукт: ${item.product}, Количество: ${item.quantity}, Статус: ${item.bought ? 'Куплено' : 'Не куплено'}`
    ).join('\n'));
}

// Функция для добавления покупки
function addProduct(product, quantity) {
    // Проверяем, есть ли такой продукт в списке
    const existingItem = shoppingList.find(item => item.product == product);
    
    if (existingItem) {
        // Если есть - увеличиваем количество
        existingItem.quantity += quantity;
    } else {
        // Если нет - добавляем новый объект
        shoppingList.push({ product, quantity, bought: false });
    }
}

// Функция для отметки покупки как купленной
function buyProduct(product) {
    const item = shoppingList.find(item => item.product == product);
    
    if (item) {
        item.bought = true;
    } else {
        alert('Такой продукт не найден в списке покупок!');
    }
}

// Пример использования:
// Добавляем новый продукт
addProduct("Бананы", 3);

// Отмечаем продукт как купленный
buyProduct("Хлеб");

// Выводим весь список
displayList();
