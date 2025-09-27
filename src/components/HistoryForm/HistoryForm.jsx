import FormGroup from '../FormGroup/FormGroup';
import './HistoryForm.css'

export default function HistoryForm({type , formTitle , role}){
    return(
        <div className="form-container">
            <h2 className='form-title'>{formTitle}</h2>

            <div className="form-content">
                <FormGroup id="role" label={type === "education" ? "Degree" : "Position"} />
                <FormGroup id="organization" label={type === "education" ? "Institution" : "Organization"} />
                <FormGroup id="location" label="location" />
            </div>

            <div className="control-container">

            </div>
        </div>  
    );
}