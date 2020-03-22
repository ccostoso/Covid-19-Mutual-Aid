import React from "react";

// Bootstrap grid layout elements for easy rendering in React

// Bootsrap Container. Pass "fluid" as prop for "container-fluid"
export const Container = ({fluid, children}) => {
    return <div className={`container${fluid && '-fluid'}`}>{children}</div>;
}

// Bootsrap Row. Pass "fluid" as prop for "row-fluid"
export const Row = ({fluid, children}) => {
    return <div className={`row${fluid && '-fluid'}`}>{children}</div>
}

// Bootsrap Column. Pass sizes seperated by space for column sizes.
// i.e. <Col size={md-6 sm-12} />
export const Col = ({size, children}) => {
    return (
        <div
            className={size
                .split(" ")
                .map(size => {`col-${size}`})
                .join(" ")}
            >
                {children}
            </div>
    )
}