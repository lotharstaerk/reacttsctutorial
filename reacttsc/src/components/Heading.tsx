import { ReactElement } from "react";

//type HeadingProps = { title: string };

// const Heading = ({ title }: HeadingProps): ReactElement => {
const Heading = ({ title }: { title: string }): ReactElement => {
    return <h1>{title}</h1>;
};

export default Heading;
