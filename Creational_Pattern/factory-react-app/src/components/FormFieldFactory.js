import {TextInput} from "./TextInput";
import {CheckBoxInput} from "./CheckBoxInput";
import {SelectInput} from "./SelectInput";



export const FormFieldFactory=(type,label)=>{
    switch(type){
        case "text":
            return <TextInput label={label} />;
        case "select":
            return <SelectInput label={label} />;
        case "checkbox":
            return <CheckBoxInput label={label} />;
        default:
            return null;
    }
}
