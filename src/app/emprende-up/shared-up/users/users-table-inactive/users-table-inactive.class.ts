import { TableContent } from '../../../../shared/table/table-content/table-content.class';
import { UserInactiveInterface } from '../user-inactive/user-inactive.interface';

export class UsersTableInactive extends TableContent {
    rows: UserInactiveInterface[];
    constructor() {
        super();
        this.columns = [
            { prop: 'Nombre'},
            { prop: 'Cuenta de usuario'},
            { prop: 'Género'},
            { prop: 'Fecha de nacimiento'},
            { prop: 'Teléfono'},
            { prop: 'Categoría'},
            { prop: 'Estado'}
        ]
    }
}
