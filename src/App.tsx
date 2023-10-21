import { Hero } from './components/Hero/Hero';
import { ConfettiAnimationContextProvider } from './context/ConfettiAnimationContext';
import { ConfettiEffect } from './components/Confetti/Confetti';
import { Section } from './components/Section/Section';
import adamVilla from "./assets/adam-villa.jpg";
import registryOffice from "./assets/registry-office.jpg";
import styles from "./App.module.css";

const App = () => {

  return (
    <ConfettiAnimationContextProvider>
      <ConfettiEffect />
      <Hero />
      <Section leftContent={<div className={styles.text}>
        <div>
          <h3>Ceremony</h3>
          <p>The ceremony is taking place at the registry office in District VIII of Budapest: Baross u 63-67, 1082 Hungary at 4pm</p>
          <p>Please be at the registry by 3:40pm</p>
          <p>The service will be conducted in Hungarian and our good friend Bogi will be translating to English.</p>
          <p>Please arrange transport from Baross Utca to Adam Villa where the reception will take place.</p>
          <p>Taxis can be ordered via the Bolt app.</p>
        </div>
      </div>}
        rightContent={
          <img src={registryOffice} alt="district 8 budapest registry office" />
        }
      />
      <Section leftContent={<img src={adamVilla} alt="adam villa - budapest" />} rightContent={<h3>Reception</h3>} />

    </ConfettiAnimationContextProvider>
  );
};

export default App;
