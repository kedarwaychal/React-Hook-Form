import React from "react";

const Button = ({type,className,children,onClick})=>{

    return(
        <button className={`btn ${className}`} type={type}>{children} onClick={onClick}
        </button>
        // const Button = ({ type, className, children }) => (
        //     <button type={type} className={`btn ${className}`}>
        //       {children}
        //     </button>
        //   );
    )
}

export default Button;
