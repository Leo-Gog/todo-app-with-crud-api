export interface TaskInterface {
    _created: Date,
    _data_type: string,
    _is_deleted: boolean,
    _modified: Date,
    _self_link: string,
    _user: string,
    _uuid: string,
    deadline: string,
    isCompleted: boolean,
    name: string,
    person: string,
}

export interface NewTodoInterface {
    name: string,
    isCompleted: boolean,
    person: string,
    deadline: Date | string,
}

export interface ChangeStatusBodyInterface {
    _uuid: string,
    isCompleted: boolean
}
export interface ChangeDetailsBodyInterface {
    _uuid: string,
    name: string,
    person: string,
    deadline: string | Date,
}
export type OptionsBody = ChangeStatusBodyInterface | ChangeDetailsBodyInterface

export interface OptionsInterface {
    method:string,
    headers: {
        'Content-Type': string,
        Authorization: string
    }
    body?:string
}

export interface languageState {
    texts:{
        _lang: string,
        taskPlaceholder: string,
        userPlaceholder: string,
        edit: string,
        removeTitle: string,
    }
}