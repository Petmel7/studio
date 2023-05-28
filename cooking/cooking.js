const pictureGalleryList = [
  {
    id: "XWaQXcbk0",
    name: "Картопля, запечена в мундирі",
    description: "Ароматна, ситна, шипляча домашня картопля, фарширована сметанно-беконною начинкою, - це дуже простий і дуже ефектний спосіб нагодувати велику кількість людей, практично не витративши на готування ні сил, ні часу. Звичайну картоплю за бажання тут можна замінити на солодкий батат, а начинку додати, наприклад, кукурудзу або солодкий червоний перець.",
    image: "https://static.1000.menu/img/content-v2/0a/2a/61884/kartoshka-v-mundire-v-folge_1642183542_2_max.jpg",
    price: 100,
    ingredients: [
      "Картопля",
      "Часник",
      "Сметана",
      "Бекон",
      "Твердий сир",
      "Зелена цибуля"
    ]
  },
  {
    id: "pkXzyRp1P",
    name: "Томатний магрібський суп",
    description: "Томатний магрібський суп особливо поширений у Марокко та Тунісі. Він дуже простий у приготуванні і сам по собі легкий – в основі томати та курячий бульйон. Крім них у супі лише необхідні спеції, мед та лимон, які всі разом і передають той самий східний колорит. Смак супу повністю залежить від якості томатів. Доповнять страву свіжа кінза та окремі часточки лимона.",
    image: "https://cdn.lifehacker.ru/wp-content/uploads/2020/01/shutterstock_523823068_1579610576-e1579610871364.jpg",
    price: 150,
    ingredients: [
      "Помідори",
      "Курячий бульйон",
      "Мед",
      "Петрушка",
      "Кінза",
      "Паприка"
    ]
  },
  {
    id: "QMom9q4Ku",
    name: "Крем-суп із гарбуза",
    description: "Портрет цієї помаранчевої юшки прикрашає обкладинку книги «La Cuisine du Marché» Поля Бокюза. Бокюз, який вигадав так звану нову кухню, вважав гарбуз однією з основ цього світопорядку, а гарбузовий суп — такою собі навколоплідною водою гастрономії.",
    image: "https://www.gastronom.ru/binfiles/images/20141006/b2fd6ca0.jpg",
    price: 100,
    ingredients: [
      "Гарбуз",
      "Петрушка",
      "Вершки",
      "Бренді",
      "Курячий бульйон"
    ]
  },
  {
    id: "k2k0UrjZG",
    name: "Салат з червоної квасолі з сиром",
    description: "Тосканський салат, витриманий у колористиці італійського прапора. Буквально кількох ложок вистачає, щоб у шлунку утворився приємний тягар. Дуже корисна штука з точки зору ранку, коли важко запхати великі дози біомаси, а їсти при цьому хочеться.",
    image: "https://s.mediasole.ru/cache/content/data/images/1393/1393226/original.jpg",
    price: 150,
    ingredients: [
      "Квасоля",
      "Сіль",
      "Часник",
      "Оливкова олія",
      "Сир",
      "Червона цибуля"
    ]
  },
  {
    id: "j2k8U1jZd",
    name: "Класичний грецький салат",
    description: "Це рецепт із старої, привезеної із Греції, кулінарної книги. Секрет салату - свіжі овочі та гарна фета. Для салату використовують лише оливкову олію, а такі спеції, як орегано та базилік, є візитною карткою грецької кухні.",
    image: "https://www.maggi.ru/data/images/recept/img640x500/recept_234_08vf.jpg",
    price: 350,
    ingredients: [
      "Оливкова олія",
      "Лимонний сік",
      "Часник",
      "Помідори",
      "Червона цибуля",
      "Сир фета",
      "Масліни"
    ]
  },
  {
    id: "X2aQ7cvkd",
    name: "Маффіни з голубкою та мускатним горіхом",
    description: "Культова ягода, яку навчилися виробляти цілий рік, у поєднанні з пухким тестом – це абсолютно безпрограшний варіант. Маффіни з голубкою стали популярним десертом в Англії та Америці, хоча походження їхнє французьке. Та й взагалі, ці маленькі солодкі кекси, якими ми їх знаємо зараз, замислювалися як звичайний хліб і на смак були нейтральні.",
    image: "https://chakchak.uz/uploads/images/reciepts/0c31eb4f9f4b4b05.jpg",
    price: 170,
    ingredients: [
      "Вершкове масло",
      "Пшеничне борошно",
      "Голубика",
      "Ванільний екстракт",
      "Мускатний горіх"
    ]
  },
  {
    id: "nk3zy1pf8",
    name: "Азу по-татарськи",
    description: "Одна з небагатьох страв, що удостоєні в радянській продуктовій традиції продажу з іменною нарізкою. І досі в кулінаріях та супермаркетах можна знайти яловичину, яку ріжуть соломкою та продають як азу. Щодо самої страви досі точаться суперечки, як і з чим готувати: використовувати яловичину або баранину, топлене або звичайне масло, гасити в казані або сотейнику з товстим дном. Редакцій цієї страви може бути багато, але її основа завжди незмінна — це нарізане соломкою м'ясо, картопля і томатний соус.",
    image: "https://static.1000.menu/img/content-v2/87/d4/32648/azu-po-tatarski-iz-svininy-s-kartoshkoi_1644662376_0_max.jpg",
    price: 270,
    ingredients: [
      "Яловичина",
      "Солоні огірки",
      "Картопля",
      "М'ясний бульйон",
      "Часник"
    ]
  },
  {
    id: "b7k2U13fd",
    name: "Смажений рис з яйцем по-китайськи",
    description: "Смажений рис - досить поширений інгредієнт страв східноазіатської кухні - готувати, по суті, можна із залишків вчорашньої вечері. Тільки добре остиглий, заздалегідь зварений рис, що в ідеалі простояв усю ніч у холодильнику, при попаданні в розпечений вок не розповзеться до стану каші і не перетворить вміст сковорідки на неповоротку безформну грудку.",
    image: "https://lifehacker.ru/wp-content/uploads/2018/05/Rice_1527059845.jpg",
    price: 240,
    ingredients: [
      "Круглий рис",
      "Міні цукіні",
      "Тертий імбир",
      "Гриби шиїтаке",
      "Соєвий соус",
      "Кунжутну олію"
    ]
  }
]

const galleryList = document.querySelector('.js-menu');

const createGalleryList = ({ name, description, image, price, ingredients }) =>
  `<li class="menu__item">
    <article class="card">
        <img src="${image}" alt="${name}" class="card__image" />
        <div class="card__content">
            <h2 class="card__name">${name}</h2>
            <p class="card__price">
                <i class="material-icons"> monetization_on </i>
                ${price} грн.
            </p>
            <p class="card__descr">
                ${description}
            </p>
            <ul class="tag-list">
                ${ingredients.map((ingredient) => `<li class="tag-list__item">${ingredient}</li>`).join('')}
            </ul>
        </div>
        <button class="card__button button">
            <i class="material-icons button__icon">shopping_cart</i>
            В корзину
        </button>
    </article>
  </li>`;

const galleryMarkup = pictureGalleryList.reduce((acc, item) => acc + createGalleryList(item), '');

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitchToggle = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

// Функція для встановлення теми
const setTheme = (theme) => {
  body.classList.remove(Theme.LIGHT, Theme.DARK);
  body.classList.add(theme);
};

// Функція для збереження вибраної теми в localStorage
const saveThemeToLocalStorage = (theme) => {
  localStorage.setItem('theme', theme);
};

// Функція для отримання збереженої теми з localStorage
const getSavedThemeFromLocalStorage = () => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme ? savedTheme : Theme.LIGHT;
};

// Встановлюємо початкову тему при завантаженні сторінки
const initialTheme = getSavedThemeFromLocalStorage();
setTheme(initialTheme);
if (initialTheme === Theme.DARK) {
  themeSwitchToggle.checked = true;
}

// Обробник події change на чекбоксі
themeSwitchToggle.addEventListener('change', (event) => {
  const selectedTheme = event.target.checked ? Theme.DARK : Theme.LIGHT;
  setTheme(selectedTheme);
  saveThemeToLocalStorage(selectedTheme);
});
