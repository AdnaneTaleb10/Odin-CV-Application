import './Button.css'

export default function Button ({children , className , iconPosition = "right" , icon: Icon , ...props}){
    return (
        <button className={`btn ${className}`} {...props}>
            {iconPosition === "left" && Icon && <Icon/>}
            {children}
            {iconPosition === "right" && Icon && <Icon/>}
        </button>
    )
}