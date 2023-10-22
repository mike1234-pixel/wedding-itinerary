import { ReactNode } from "react";
import classNames from "classnames";
import styles from "./Section.module.css";

interface SectionProps {
    leftContent: ReactNode | ReactNode[];
    rightContent: ReactNode | ReactNode[];
    bg: 'bud1' | 'bud2' | 'bud3';
    imgLeft?: boolean;
}

export const Section = ({ leftContent, rightContent, bg, imgLeft }: SectionProps) => {

    return (
        <div className={(classNames(styles.root, imgLeft && styles.imgLeft))}>
            <div className={styles.row}>
                <div className={classNames(styles.col, styles[bg])}>
                    {leftContent}
                </div>
                <div className={classNames(styles.col, styles[bg])}>
                    {rightContent}
                </div>
            </div>
        </div>
    );
};