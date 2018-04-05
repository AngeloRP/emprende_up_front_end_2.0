import { UserInterface } from '../user/user.interface';
import { TableContent } from '../../../../shared/table/table-content/table-content.class';
export class UsersTable extends TableContent {
    rows: UserInterface[];
    constructor() {
        super();
        this.columns = [
            { prop: 'Nombre' },
            { prop: 'Cuenta de usuario'},
            { prop: 'Género'},
            { prop: 'Fecha de nacimiento'},
            { prop: 'Teléfono'},
            { prop: 'Categoría'},
            { prop: 'Estado'}
        ]
    }
}
