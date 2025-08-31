import PersonalInfoForm from '../PersonalInfoForm/PersonalInfoForm'
import './Main.css'

export default function Main(){
    return(
        <div className="main">
            <PersonalInfoForm/>
            <div className="section-navigator"></div>
        </div>
    )
}