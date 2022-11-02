import { EnumUserStatus } from 'app/model/enum/enum-user-status.enum';

export const USER_LOGGED_LOAD = 'user-logged-load';
export const USER_LOGGED_UPDATE_STATUS = 'user-logged-update-status';

export class LoadUserLogged {
    static readonly type = USER_LOGGED_LOAD;

    constructor(public payload: {idUser: number}) { }
}

export class UpdateStatusUserLogged {
    static readonly type = USER_LOGGED_UPDATE_STATUS;

    constructor(public payload: {enumStatus: EnumUserStatus}) {};
}
