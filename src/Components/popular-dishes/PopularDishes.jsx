import DishCard from '../dishCard/dishCard';
import styles from './PopularDishes.module.css'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import minion from './../../assets/file-minion.png'
import octopus from './../../assets/Grilled-octopus.png'
import tartar from './../../assets/tuna-tartar.png'


const PopularDishes = () => {
  const [DataDishes] = useState([
      {
        name: 'Филе-миньон',
        description: 'С премиальным картофельным пюре на основе белого трюфеля и соусом из выдержанного портвейна.',
        price: 2.400,
        image: minion
      },
      {
        name: 'Тартар из тунца',
        description: 'Спелый авокадо, цитрусовая заправка юдзу-понзу, чипсы из морских водорослей и кунжутное масло.',
        price: 3.000,
        image: tartar
      },
      {
        name: 'Осьминог на гриле',
        description: 'Подается на подушке из пикантного соуса Ромеско с печеным беби-картофелем и маринованным фенхелем.',
        price: 3.500,
        image: octopus
      },
      ])



  return (
    <div className={styles.Container}>
      <h6 className={styles.subtitle}>Шедевры Нашего Меню</h6>
      <h2 className={styles.title}>Популярные блюда сезона</h2>
      <p className={styles.description}>Каждое блюдо — это история из редких ингредиентов, воссозданная с уважением к традициям локального фермерства.</p>
      <div className={styles.list}>
        {DataDishes.map((dishes) => (
          <DishCard onOrder={() => console.log('order')}
            key={uuidv4()}
            image={dishes.image}
            title={dishes.name}
            description={dishes.description}
            price={dishes.price}


          />

        ))}
      </div>
    </div>
  );
};

export default PopularDishes;
