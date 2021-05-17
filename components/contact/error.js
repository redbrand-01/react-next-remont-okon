export const Error = (state) => {
    const copy = {...state}
    let err = false
    if(!!copy.name === false) {
        copy.labelname =  "Пожалуйста введите имя"
        copy.errorname =  true
        err = true
    }
    if(!!copy.email === false) {
        copy.labelemail =  "Пожалуйста введите номер телефона"
        copy.erroremail =  true
        err = true
    }
    if(!!copy.text === false) {
        copy.labeltext =  "Пожалуйста оставте сообщенние"
        copy.errortext =  true
        err = true
    }

    const res = copy

    return { res, err }
}

export const Default = {
    name: '',
    labelname: '',
    errorname: false,
    email: '',
    labelemail: '',
    erroremail: false,
    text: '',
    labeltext: '',
    errortext: false,
}