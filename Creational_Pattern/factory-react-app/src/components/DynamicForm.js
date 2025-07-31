import {FormFieldFactory} from "./FormFieldFactory";


export const DynamicForm =()=>{
    const formConfig = [
        { type: "text", label: "Name" },
        { type: "checkbox", label: "Subscribe?" },
        { type: "select", label: "Country" }
    ]
    return (
        <form>
            {formConfig.map((field,id)=>(
                <div key = {id}>{FormFieldFactory(field.type,field.label)}</div>
            ))}
        </form>
    )
}
export default DynamicForm;