@Injectable({ providedIn: 'root' })
export class GoogleMapAddressService
{
    @Select(UserDetailState.get) public state$: Observable<DataInfo<UserForDetail>>;

    /**
     * Constructor
     */
    constructor(
        private _store: Store
    )
    {
        this.state$.subscribe((x)=> {
            if(x?.loader['datas']?.loaded) {
            }
        });
    }

    // // -----------------------------------------------------------------------------------------------------
    // // @ Public methods
    // // -----------------------------------------------------------------------------------------------------
    load(param: { idUser: number }): void {
        this._store.dispatch(new LoadUserDetail(param));
    }

    save(userForDetail: UserForDetail): void {
        this._store.dispatch(new SaveUserDetail(userForDetail));
    }

    delete(idUser: number): any {
        this._store.dispatch(new DeleteUserDetail(idUser));
    }

    addShortcut(shortcut: UserShortcut): any {
        this._store.dispatch(new AddShortcutUserDetail(shortcut));
    }

    deleteShortcut(idShorcut: number): void {
        this._store.dispatch(new DeleteShortcutUserDetail(idShorcut));
    }
}
