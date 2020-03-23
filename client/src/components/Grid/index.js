import React from "react";

// Bootstrap grid layout elements for easy rendering in React

// Bootsrap Container. Pass "fluid" as prop for "container-fluid"
export const Container = ({ fluid, children, className }) => {
    return <div className={`container${fluid ? '-fluid' : ''} ${className}`}>{children}</div>;
}

// Bootsrap Row. Pass "fluid" as prop for "row-fluid"
export const Row = ({ fluid, children, className }) => {
    return (
        <div
            className={`row${fluid ? '-fluid' : ''} ${className ? className : ''}`}
        >
            {children}
        </div>
    )
}

// Bootsrap Column. Pass sizes seperated by space for column sizes.
// i.e. <Col size={md-6 sm-12} />
export const Col = ({ size, children, className }) => {
    return (
        <div
            className={`${size && size
                    .split(" ")
                    .map(size => `col-${size}`)
                    .join(" ")} ${className ? className : ''}`}
        >
            {children}
        </div>
    )
}