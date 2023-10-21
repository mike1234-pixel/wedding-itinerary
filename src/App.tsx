import { Hero } from './components/Hero/Hero';
import { ConfettiAnimationContextProvider } from './context/ConfettiAnimationContext';
import { ConfettiEffect } from './components/Confetti/Confetti';
import { Section } from './components/Section/Section';
import adamVilla from "./assets/adam-villa.jpg";
import adamVilla2 from "./assets/adam-villa-2.jpg";
import registryOffice from "./assets/registry-office.jpg";
import Fade from 'react-reveal/Fade';
import { LongSection } from './components/LongSection/LongSection';
import styles from "./App.module.css";
import classNames from 'classnames';

const App = () => {

  return (
    <ConfettiAnimationContextProvider>
      <ConfettiEffect />
      <Hero />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <LongSection bg='party'>
          <div className={styles.textCenter}>
            <Fade bottom>
              <h3>Welcome!</h3>
              <p>We are honoured and delighted that you are able to attend our special day in Budapest!</p>
              <p>Please find below an itinerary of the day which includes full details of the ceremony, reception and sequence of events.</p>
              <i style={{ fontStyle: 'normal', fontSize: 30 }}>❤️</i>
            </Fade>
          </div>
        </LongSection>
        <Section bg='bud1' leftContent={<div className={styles.text}>
          <div>
            <Fade bottom>
              <h3>Ceremony</h3>
              <p>The ceremony is taking place at the registry office in District VIII of Budapest: Baross u 63-67, 1082 Hungary at 4pm</p>
              <p>Please be at the registry by 3:40pm</p>
              <p>The service will be conducted in Hungarian and our good friend Bogi will be kindly translating to English.</p>
              <p>Please arrange transport from Baross Utca to Adam Villa where the reception will take place.</p>
              <p>Taxis can be ordered via the Bolt app.</p>
              <p>The journey takes 10 minutes by car or 30 minutes by public transport.</p>
            </Fade>
          </div>
        </div>}
          rightContent={
            <img src={registryOffice} alt="district 8 budapest registry office" />
          }
        />
        <Section bg='bud2' imgLeft leftContent={<img src={adamVilla} alt="adam villa - budapest" />} rightContent={<div className={styles.text}>
          <div>
            <Fade bottom>
              <h3>Reception</h3>
              <p>The reception at Adam Villa (Budapest, Városligeti fasor 35a, 1071 Hungary) will start at 5:15pm, and welcome snacks and drinks will be served.</p>
              <p>We will start taking photos from 5:45pm and we will call guests individually for photos.</p>
              <p>Dinner will take place from 7pm-8pm.</p>
              <p>Dinner will be a buffet with a variety of options and alcohol is unlimited!</p>
              <p>Please <a href="#menu">find the menu here.</a></p>
            </Fade>
          </div>
        </div>} />
        <Section bg='bud3' leftContent={<div className={styles.text}>
          <div>
            <Fade bottom>
              <h3>Party</h3>
              <p>After dinner, we will have speeches, followed by music and dancing from 9pm.</p>
              <p>We will be cutting the cake at 10pm.</p>
              <p>There will be a midnight buffet at 12am.</p>
              <p>The party will end between 2 and 3am.</p>
            </Fade>
          </div>
        </div>}
          rightContent={
            <img src={adamVilla2} alt="adam villa - budapest" />
          }
        />
        <LongSection bg='menu'>
          <div id="menu" className={classNames(styles.textCenter, styles.menu)}>
            <h3>Menu</h3>
            <h4>1. Welcome Snacks</h4>
            <ul>
              <li>Freshly baked salty pastries 10 dg/portion (cheese, greave, potato scones, cabbage, and meat mince)</li>
              <li>Fresh fruits of the season on the stick</li>
            </ul>

            <h4>Menu Offer for Wedding Dinner from Buffet Table</h4>
            <p>We serve the appetizer on big plates, the soup in cups and the main courses and desserts on buffet tables.</p>

            <h4>2. Wedding Dinner</h4>
            <h4>Welcome Snacks on Tables</h4>
            <ul>
              <li>Freshly baked mini seeded salty roll and rye roll, natural and herbed butter</li>
            </ul>

            <h4>Cold Appetizer Composition</h4>
            <ul>
              <li>Dried tomato and pullet breast snacks with blue cheese and fresh salad</li>
            </ul>

            <h4>Soup Served in Cup</h4>
            <ul>
              <li>Turkey soup with tarragon</li>
            </ul>

            <h4>Hot Dishes with Matching Side Dishes Served on Platters</h4>
            <ul>
              <li>Roasted chicken breast with grilled vegetables from the garden</li>
              <li>Turkey stew with mushrooms and homemade noodle</li>
              <li>Leg of duck in honey and clove with red cabbage</li>
              <li>Grey catfish roasted on thyme served with pumpkin ragout with sour cream and dill and with potatoes</li>
            </ul>

            <h4>Our Salad Offer</h4>
            <ul>
              <li>Caesar salad with roasted chicken breast and parmesan</li>
              <li>Greek salad</li>
              <li>Potato and apple salad</li>
            </ul>

            <h4>Vinegars, Balsams, and Dressings for Our Cold and Hot Dishes</h4>
            <ul>
              <li>Extra virgin olive oil, red and white vinegars, dill-yogurt dressing, thousand islands dressing, fresh herbs and lemon</li>
            </ul>

            <h4>Mixed Bakery Goods</h4>
            <ul>
              <li>Mini rolls, twists, fresh home-made bread, baguette slices</li>
            </ul>

            <h4>Desserts</h4>
            <ul>
              <li>Petit Fours</li>
              <li>White and dark chocolate mousse with savory</li>
              <li>Black and white sponge cake with chocolate sauce</li>
            </ul>

            <h4>Midnight Dishes on the Buffet Table</h4>

            <h4>2. Midnight Buffet</h4>
            <ul>
              <li>Pork grilled in mustard with roasted vegetables</li>
              <li>Chicken breast grilled in herbs with potatoes</li>
              <li>Potato salad with mayonnaise and roasted onion slices</li>
              <li>Fresh green salad with three dressings (Yogurt-dill, thousand island, balsamic vinegar)</li>
              <li>Home-made white bread, mini bakery good variations</li>
            </ul>

            <h4>Unlimited Drink</h4>

            <h4>2. Alcoholic Offer</h4>

            <h5>Juices</h5>
            <ul>
              <li>Apple and peach juices, 100% orange and pear juices</li>
            </ul>

            <h5>Soft Drinks</h5>
            <ul>
              <li>Coca-Cola, Cola-light, Fanta, Ginger and Tonic</li>
            </ul>

            <h5>Mineral Water</h5>
            <ul>
              <li>Sparkling and still mineral water</li>
            </ul>

            <h5>Coffee Offer</h5>
            <ul>
              <li>Espresso with milk and cream, Americano, cappuccino</li>
              <li>Tea variations with fresh lemon</li>
            </ul>

            <h5>Beer Offer</h5>
            <ul>
              <li>Soproni, Heineken, Edelweiss</li>
              <li>Soproni non-alcoholic</li>
            </ul>

            <h5>White Wines</h5>
            <ul>
              <li>Alig várom- Nyakas pincészet</li>
              <li>Nagy-Somlói Juhfark - Csordás- Fodor</li>
            </ul>

            <h5>Rosé</h5>
            <ul>
              <li>Rosé Cuvée- Frittmann</li>
              <li>Pinot Noir Rosé- Juhász Pince</li>
            </ul>

            <h5>Red Wines</h5>
            <ul>
              <li>Egri Bikavér- Juhász</li>
              <li>Villányi Portugieser- Gere</li>
            </ul>
          </div>

        </LongSection>
        <LongSection bg='gifts'>
          <div className={styles.textCenter}>
            <Fade bottom>
              <h3>Gifts</h3>
              <p>We do not have a wedding gift list, but we appreciate all gifts!</p>
              <p>Gifts that are smaller in size or consumable are preferable, as we will need to be able to transport them to our next destination.</p>
              <i style={{ fontStyle: 'normal', fontSize: 30 }}>🎁</i>
            </Fade>
          </div>
        </LongSection>
        <LongSection bg='budapest'>
          <div className={styles.textCenter}>
            <Fade bottom>
              <h3>Budapest</h3>
              <p>Budapest is a wonderful city with amazing things to see and we hope you enjoy your time here as much as we have!</p>
              <p>If you're new to Budapest, <a href="/wedding-guide-final.pdf" target="_blank" rel="noopener noreferrer">please find our recommendations here</a>, <a href='/wedding-guide-final-persian.pdf' target="_blank" rel="noopener noreferrer">and in Farsi here</a>.</p>
              <i style={{ fontStyle: 'normal', fontSize: 30 }}>🏛</i>
            </Fade>
          </div>
        </LongSection>
      </div >

    </ConfettiAnimationContextProvider >
  );
};

export default App;
