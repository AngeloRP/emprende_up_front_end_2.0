import { TableContent } from '../../../../shared/table/table-content/table-content.class';
import { UserInactiveInterface } from '../user-inactive/user-inactive.interface';

export class UsersTableInactive extends TableContent {
    rows: UserInactiveInterface[];
    constructor() {
        super();
        this.columns = [
            {
                prop: 'Operaciones de Usuario',
                flexGrow: 3,
                tipo: 'action',
                widthText: 180
            },
            { prop: 'Cuenta de usuario', widthText: 180 },
            { prop: 'Nombre', widthText: 100 },
            { prop: 'Paso', widthText: 40 },
            { prop: 'Género', widthText: 96 },
            { prop: 'Fecha de nacimiento', widthText: 120 },
            { prop: 'Teléfono', widthText: 100 },
            { prop: 'Categoría', widthText: 126 }
        ]
    }
}
