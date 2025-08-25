import '../Button/Button.css'

export default function Button ({children , className , icon: Icon , ...props}){
    return (
        <button className={`btn ${className}`} {...props}>
            {children}
            {Icon && <Icon/>}
        </button>
    )
}