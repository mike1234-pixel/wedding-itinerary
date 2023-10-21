import { useContext, useEffect } from "react";
import { ConfettiAnimationContext } from "../../context/ConfettiAnimationContext";
import styles from "./Hero.module.css";

export const Hero = () => {

    const { releaseTheConfetti } = useContext(ConfettiAnimationContext);

    useEffect(() => {
        releaseTheConfetti();
    }, []);

    return (
        <div className={styles.root}>
            <div className={styles.title}>
                <h1>Faranak and Michael's Wedding</h1>
                <h2>Itinerary</h2>
            </div>
        </div>
    );
};