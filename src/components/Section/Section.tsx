import { Row, Col } from "antd";
import { ReactNode } from "react";
import styles from "./Section.module.css";

interface SectionProps {
    leftContent: ReactNode | ReactNode[];
    rightContent: ReactNode | ReactNode[];
    bg: 'bud1' | 'bud2' | 'bud3';
}

export const Section = ({ leftContent, rightContent, bg }: SectionProps) => {

    return (
        <div className={(styles.root)}>
            <Row>
                <Col md={24} lg={12} className={styles[bg]}>
                    {leftContent}
                </Col>
                <Col md={24} lg={12} className={styles[bg]}>
                    {rightContent}
                </Col>
            </Row>
        </div>
    );
};