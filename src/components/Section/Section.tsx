import { Row, Col } from "antd";
import { ReactNode } from "react";
import styles from "./Section.module.css";

interface SectionProps {
    leftContent: ReactNode | ReactNode[];
    rightContent: ReactNode | ReactNode[];
}

export const Section = ({ leftContent, rightContent }: SectionProps) => {

    return (
        <div className={styles.root}>
            <Row>
                <Col md={24} lg={12}>
                    {leftContent}
                </Col>
                <Col md={24} lg={12}>
                    {rightContent}
                </Col>
            </Row>
        </div>
    );
};