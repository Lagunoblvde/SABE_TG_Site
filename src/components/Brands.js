import React from 'react';
import '../Styles/Brands.css'; // Подключаем CSS файл
import Nike from '../assets/Brands/Nikelogo.jpg';
import Adidas from '../assets/Brands/Adidaslogo.jpg';
import NewBalance from '../assets/Brands/NewBalancelogo.jpg';
import LouisVuitton from '../assets/Brands/LouisVuittonlogo.jpg';
import Converse from '../assets/Brands/Converselogo.jpg';
import Asics from '../assets/Brands/Asicslogo.jpg';
import Balenciaga from '../assets/Brands/Balenciagalogo.jpg';
import Lacoste from '../assets/Brands/Lacostelogo.jpg';
import RickOwens from '../assets/Brands/RickOwenslogo.jpg';
import Prada from '../assets/Brands/Pradalogo.jpg';
import DolceGabbana from '../assets/Brands/DolceGabbanalogo.jpg';
import DC from '../assets/Brands/DClogo.jpg';
import Gucci from '../assets/Brands/Guccilogo.jpg';


const brandsData = [
  { name: 'Nike', description: 'Nike, Inc. — американская мультинациональная корпорация, специализирующаяся на производстве спортивной одежды, обуви и аксессуаров. Основанная в 1964 году под названием Blue Ribbon Sports и переименованная в Nike в 1971 году, компания стала одним из ведущих мировых брендов в области спортивной индустрии.', image: Nike },
  { name: 'Adidas', description: 'Adidas — немецкая мультинациональная корпорация, основанная в 1949 году Адольфом Дасслером. Компания производит спортивную одежду, обувь и аксессуары, став одним из ведущих мировых брендов в индустрии. Adidas известен своими тремя полосками на продуктах, сотрудничеством с крупными спортсменами и популярными сериями, такими как Stan Smith и Yeezy.', image: Adidas },
  { name: 'New Balance', description: 'New Balance (NB) — американская компания, основанная в 1906 году в Бостоне. Известна своим качеством, комфортабельной спортивной обувью и инновациями в области амортизации. New Balance производит широкий ассортимент обуви и одежды, сочетая современные технологии и классический стиль.', image: NewBalance },
  { name: 'Louis Vuitton', description: 'Louis Vuitton (LV) — французский дом моды, основанный в 1854 году Луи Виттоном. Специализируется на производстве люксовых товаров, включая сумки, одежду, обувь, аксессуары и ювелирные изделия. LV известен своим монограммным узором и высоким качеством изделий.', image: LouisVuitton },
  { name: 'Converse', description: 'Converse — американская компания, основанная в 1908 году Маркисом Миллсом. Специализируется на производстве спортивной обуви, ставшей иконой стиля. Кроссовки Chuck Taylor All-Star — самый узнаваемый продукт бренда, популярный среди молодежи и взрослых.', image: Converse },
  { name: 'Asics', description: 'Asics — японская корпорация, основанная в 1949 году Кихачиро Оницука. Название Asics происходит от латинского выражения "Anima Sana In Corpore Sano", что означает "В здоровом теле здоровый дух". Компания известна своими инновационными технологиями в производстве спортивной обуви и одежды для бега и других видов спорта.', image: Asics },
  { name: 'Balenciaga', description: 'Balenciaga — французский дом моды, основанный в 1917 году испанским дизайнером Кристобалем Баленсиагой. Бренд известен своими авангардными и архитектурными дизайнами, сочетающими роскошь и современные тенденции. Balenciaga выпускает одежду, обувь, сумки и аксессуары.', image: Balenciaga },
  { name: 'Lacoste', description: 'Lacoste — французская компания, основанная в 1933 году теннисистом Рене Лакостом и Андре Жилье. Lacoste известен своими классическими поло с логотипом в виде крокодила, а также спортивной одеждой, обувью, аксессуарами и парфюмерией. Бренд сочетает спортивный стиль с элегантностью.', image: Lacoste },
  { name: 'Rick Owens', description: 'Rick Owens — американский дизайнерский бренд, основанный Риком Оуэнсом в 1994 году. Известен своим уникальным, мрачным и авангардным стилем, сочетающим элементы готики и панка. Rick Owens производит одежду, обувь и аксессуары, ставшие символом высокого модного искусства.', image: RickOwens },
  { name: 'Prada', description: 'Prada — итальянский дом моды, основанный в 1913 году Марио Прада. Prada специализируется на люксовой одежде, обуви, сумках и аксессуарах. Бренд известен своим минималистичным и элегантным дизайном, а также инновационным подходом к моде.', image: Prada },
  { name: 'Dolce & Gabbana', description: 'Dolce & Gabbana — итальянский модный дом, основанный в 1985 году Доменико Дольче и Стефано Габбана. Бренд известен своими роскошными и гламурными дизайнами, вдохновленными итальянской культурой. Dolce & Gabbana выпускает одежду, обувь, сумки, аксессуары и парфюмерию.', image: DolceGabbana },
  { name: 'DC', description: 'DC Shoes (DC) — американская компания, основанная в 1994 году Кеном Блоком и Дэймоном Уэем. Специализируется на производстве обуви для скейтбординга, а также одежды и аксессуаров. DC известен своими инновационными дизайнами и прочной обувью, популярной среди скейтеров и молодежи.', image: DC },
  { name: 'Gucci', description: 'Gucci — итальянский модный дом, основанный в 1921 году Гуччио Гуччи. Бренд славится своими люксовыми изделиями, включая одежду, обувь, сумки, аксессуары и парфюмерию. Gucci известен своим изысканным и экстравагантным дизайном, а также высоким качеством продукции.', image: Gucci },
];

const Brands = () => {
  return (
    <div className="brands-container">
      <h1 className="brands-title">Бренды</h1>
      <div className="brands-content">
        {brandsData.map((brand, index) => (
          <div className="brand-item" key={index}>
            <img src={brand.image} alt={brand.name} className="brand-image" />
            <div className="brand-description">
              <h2>{brand.name}</h2>
              <p>{brand.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
