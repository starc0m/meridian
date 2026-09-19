import './PopularDishes.css'

const PopularDishes = () => {
  const dishes = [
    { name: 'Spaghetti Carbonara', description: 'Spaghetti Carbonara — классическое итальянское блюдо, сочетающее в себе панировку, сыр и яйцо.', price: 2.400, image: './src/assets/images/Rectangle-2.png' },
    { name: 'Margherita Pizza', description: 'Margherita Pizza — простая, но вкусная пицца с томатным соусом и базиликом.', price: 3.000, image: './src/assets/images/Rectangle-1.png' },
    { name: 'Caesar Salad', description: 'Caesar Salad — классический салат с курицей, сыром и кукурузой.', price: 3.500, image: './src/assets/images/Rectangle.png' },
  ];

  return (
    <div className="popular-dishes ">
      <h6 className="popular-dishes__subtitle font-M">Шедевры Нашего Меню</h6>
      <h2 className="popular-dishes__title font-Cg">Популярные блюда сезона</h2>
      <p className="popular-dishes__description font-M">Каждое блюдо — это история из редких ингредиентов, воссозданная с уважением к традициям локального фермерства.</p>
      <div className="popular-dishes__list">
        {dishes.map((dish, index) => (
          <div className="popular-dishes__card" key={index}>
            <img src={dish.image} alt={dish.name} />
            <p className="popular-dishes__name font-Cg">{dish.name}</p>
            <p className="popular-dishes__description font-M">{dish.description}</p>
            <p className="popular-dishes__price font-M"><div className="popular-dishes__price-wrapper">֏{dish.price}<span>купить</span></div></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDishes;
