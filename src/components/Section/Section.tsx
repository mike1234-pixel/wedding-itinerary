import { Row, Col } from "antd";
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
        <div className={(styles.root)}>
            <Row>
                <Col md={{ span: 24, order: imgLeft ? 2 : 1 }} lg={12} className={classNames(styles.root, styles[bg])}>
                    {leftContent}
                </Col>
                <Col md={{ span: 24, order: imgLeft ? 1 : 2 }} lg={12} className={classNames(styles.root, styles[bg])}>
                    {rightContent}
                </Col>
            </Row>
        </div>
    );
};