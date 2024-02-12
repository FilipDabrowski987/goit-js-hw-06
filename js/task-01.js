const listItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${listItems.length}`);

listItems.forEach((category) => {
    const categoryName = category.querySelector('h2').textContent;
    console.log(`Category: ${categoryName}`);
    const counOfElements = category.querySelectorAll('li');
    console.log(`Elements: ${counOfElements.length}`);
});