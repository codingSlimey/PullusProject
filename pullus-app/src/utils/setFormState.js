export function UpdateFormState(fieldName, value, formState, SetFormState ){
    SetFormState({
        ...formState,
        [fieldName]: value
    })
}