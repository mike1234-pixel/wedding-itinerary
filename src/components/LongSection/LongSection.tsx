import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './LongSection.module.css';

interface LongSectionProps {
    children: ReactNode | ReactNode[];
    bg?: 'menu' | 'party' | 'gifts' | 'budapest' | 'red';
}

export const LongSection = ({ children, bg }: LongSectionProps) => {
    return <div className={classNames(styles.root, bg && styles[bg])}>
        {children}
    </div>;
};