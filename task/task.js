const categoriesList = document.querySelector('#categories');
const categoriesItems = document.querySelectorAll('.item');

console.log(`Категорії ${categoriesItems.length}`);

categoriesItems.forEach (item => {
    const categoriesName = item.querySelector('h2');
    const categoriesItemsCaunt = item.querySelectorAll('li');

    console.log(categoriesName.textContent);
    console.log(`Кількість ${categoriesItemsCaunt.length}`);
});