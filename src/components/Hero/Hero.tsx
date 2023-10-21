import { useContext, useEffect } from "react";
import { ConfettiAnimationContext } from "../../context/ConfettiAnimationContext";
import { Bounce } from "react-awesome-reveal";
import styles from "./Hero.module.css";

export const Hero = () => {

    const { releaseTheConfetti } = useContext(ConfettiAnimationContext);

    useEffect(() => {
        releaseTheConfetti();
    }, []);

    return (
        <div className={styles.root}>
            <div className={styles.title}>
                <Bounce>
                    <h1>Faranak and Michael's Wedding</h1>
                    <h2>Itinerary</h2>
                    <h4>Friday 10th November</h4>
                </Bounce>
            </div>
        </div>
    );
};