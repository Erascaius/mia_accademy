function list() {
    const ul = document.createElement("ul");

    const items = ["hello", "world", "bye", "1", "2", "3", "4", "5"];
    items.forEach(itemText => {
        const li = document.createElement("li");
        li.textContent = itemText;
        ul.append(li);
    });

    document.body.append(ul);
}

list();