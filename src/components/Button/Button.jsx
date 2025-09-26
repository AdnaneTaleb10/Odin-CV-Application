import './Button.css'

export default function Button ({title , className , iconPosition = "right" , icon: Icon , ...props}){
    return (
        <button className={`btn ${className}`} {...props}>
            {iconPosition === "left" && Icon && <Icon/>}
            {title}
            {iconPosition === "right" && Icon && <Icon/>}
        </button>
    )
}