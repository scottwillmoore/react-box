import React from "react";

type ElementType = keyof JSX.IntrinsicElements;

type ElementProperties<T extends ElementType> = JSX.IntrinsicElements[T];

type WithElement<T extends ElementType> = {
    element: T;
} & ElementProperties<T>;

type WithChildren = {
    children?: React.ReactNode;
};

type BoxProperties<T extends ElementType> = WithElement<T> & WithChildren;

function Box<T extends ElementType>({ element, children, ...properties }: BoxProperties<T>) {
    return React.createElement(element, properties, children);
}

export default function App() {
    return (
        <Box element="a" href="#">
            Hello, world!
        </Box>
    );
}
