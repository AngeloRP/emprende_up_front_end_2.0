import { TableContent } from '../../../../shared/table/table-content/table-content.class';
import { UserInactiveInterface } from '../user-inactive/user-inactive.interface';

export class UsersTableInactive extends TableContent {
    rows: UserInactiveInterface[];
    constructor() {
        super();
        this.columns = [
            { prop: 'Operaciones de Usuario', tipo: 'action' },
            { prop: 'Nombre', tipo: 'normal-value' },
            { prop: 'Cuenta de usuario', tipo: 'normal-value' },
            { prop: 'Género', tipo: 'normal-value' },
            { prop: 'Fecha de nacimiento', tipo: 'normal-value' },
            { prop: 'Teléfono', tipo: 'normal-value' },
            { prop: 'Categoría', tipo: 'normal-value' },
            { prop: 'Estado', tipo: 'normal-value' }
        ]
    }
}
