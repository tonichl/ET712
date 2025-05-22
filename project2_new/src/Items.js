// Import images 
import Aspire from './product_img/Aspire-Healthy-Energy.png';
import C4 from './product_img/C4.png';
import Celsius from './product_img/Celsius-Functional-Essential.png';
import Fast from './product_img/Fast-Twitch.png';
import Gorilla from './product_img/Gorilla-Mind.png';
import Guayaki from './product_img/Guayaki-Yerba-Mate.png';
import Jocko from './product_img/Jocko-GO.png';
import Lucky from './product_img/Lucky-Energy.png';
import Mountain from './product_img/Mountain-Dew-Kickstart.png';
import Redbull from './product_img/Red-Bull.png';
import Sparletta from './product_img/Sparletta_Sparberry.png'
import Milkis from './product_img/milkis.png'
import Ramune from './product_img/Ramune.png'
import Sour from './product_img/Sour_plum_drink.png'
import Mogumogu from './product_img/mogumogu.png'
import onehundredPlus from './product_img/onehundredPlus.png'
import Calpico from './product_img/calpico.png'
import Buratino from './product_img/Buratino.png'
import './App.css';

// Organize 2 categories
const Items = [
  {
    category: "Energy Drinks",
    products: [
      { 
        id: 1, 
        name: 'Celsius Functional Essential', 
        price: 22.99, 
        pack: '12-Pack', 
        image: Celsius,
        description: 'Sparkling fitness drink that boosts metabolism and burns body fat with natural ingredients like green tea and ginger.'
      },
      { 
        id: 2, 
        name: 'C4 Energy', 
        price: 22.99, 
        pack: '12-Pack', 
        image: C4,
        description: 'Pre-workout energy drink with Beta-Alanine for performance and 200mg caffeine for focus during intense training.'
      },
      { 
        id: 3, 
        name: 'Red Bull (Original Flavor)', 
        price: 34.99, 
        pack: '24-Pack', 
        image: Redbull,
        description: 'The world\'s most popular energy drink with taurine, B-vitamins and 80mg caffeine per can for wings when you need them.'
      },
      { 
        id: 4, 
        name: 'Jocko Go', 
        price: 29.99, 
        pack: '12-Pack', 
        image: Jocko,
        description: 'Military-grade energy with natural caffeine from green coffee beans and no artificial sweeteners or colors.'
      },
      { 
        id: 5, 
        name: 'Fast Twitch', 
        price: 23.99, 
        pack: '12-Pack', 
        image: Fast,
        description: 'Gatorade\'s energy drink with 200mg caffeine and electrolytes for rapid hydration during competition.'
      },
      { 
        id: 6, 
        name: 'Guayakí Yerba Mate', 
        price: 29.99, 
        pack: '12-Pack', 
        image: Guayaki,
        description: 'Organic yerba mate packed with antioxidants and natural caffeine for clean, sustained energy.'
      },
      { 
        id: 7, 
        name: 'Gorilla Mind', 
        price: 34.99, 
        pack: '12-Pack', 
        image: Gorilla,
        description: 'Premium nootropic energy drink with 175mg caffeine and brain-boosting compounds for mental performance.'
      },
      { 
        id: 8, 
        name: 'Mountain Dew Kickstart', 
        price: 18.99, 
        pack: '12-Pack', 
        image: Mountain,
        description: 'Juice-infused energy drink with 5% juice, 90mg caffeine, and B-vitamins for morning energy.'
      },
      { 
        id: 9, 
        name: 'Lucky Energy', 
        price: 25.99, 
        pack: '12-Pack', 
        image: Lucky,
        description: 'Irish-inspired energy drink with ginseng and guarana for smooth energy without jitters.'
      },
      { 
        id: 10, 
        name: 'Aspire Healthy Energy', 
        price: 24.99, 
        pack: '12-Pack', 
        image: Aspire,
        description: 'All-natural energy drink sweetened with stevia that burns calories while boosting energy.'
      }
    ]
  },
  {
    category: "World Wide Famous Drinks", 
    products: [
      {
        id: 11, 
        name: 'Sparletta Sparberry', 
        price: 8.99, 
        pack: '6-Pack', 
        image: Sparletta,
        description: 'South African sparkling soda with a unique strawberry-raspberry flavor that\'s been beloved since 1955.'
      },
      {
        id: 12, 
        name: 'Milkis', 
        price: 8.99, 
        pack: '6-Pack', 
        image: Milkis,
        description: 'Korean milk-carbonated drink with a sweet, creamy taste that\'s refreshingly different.'
      },
      {
        id: 13, 
        name: 'Ramune', 
        price: 20.99, 
        pack: '6-Pack', 
        image: Ramune,
        description: 'Iconic Japanese soda with marble-sealed bottles and flavors like original, strawberry and lychee.'
      },
      {
        id: 14, 
        name: 'Sour Plum Juice', 
        price: 18.99, 
        pack: '6-Pack', 
        image: Sour,
        description: 'Traditional Chinese preserved plum drink that\'s both sweet and sour, often served chilled.'
      },
      {
        id: 15, 
        name: 'MoguMogu', 
        price: 18.99, 
        pack: '6-Pack', 
        image: Mogumogu,
        description: 'Japanese fruit nectar drink with real pulp for authentic tropical fruit flavors.'
      },
      {
        id: 16, 
        name: '100Plus', 
        price: 18.99, 
        pack: '6-Pack', 
        image: onehundredPlus,
        description: 'Singapore\'s isotonic sports drink with minerals to quickly replenish after activity.'
      },
      {
        id: 17, 
        name: 'Calpico', 
        price: 18.99, 
        pack: '6-Pack', 
        image: Calpico,
        description: 'Japanese uncarbonated soft drink with a distinctive milky, slightly tart flavor since 1919.'
      },
      {
        id: 18, 
        name: 'Buratino', 
        price: 18.99, 
        pack: '6-Pack', 
        image: Buratino,
        description: 'Russian sparkling tarragon-flavored soda named after the famous fairy tale character Pinocchio.'
      }
    ]
  }
];

export default Items;