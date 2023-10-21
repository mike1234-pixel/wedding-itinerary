import { ReactNode } from 'react';
import styles from './LongSection.module.css';

interface LongSectionProps {
    children: ReactNode | ReactNode[];
}

export const LongSection = ({ children }: LongSectionProps) => {
    return <div className={styles.root}>
        {children}
    </div>;
};