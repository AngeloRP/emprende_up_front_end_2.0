import { UserInterface } from '../user/user.interface';
import { TableContent } from '../../../../shared/table/table-content/table-content.class';
export class UsersTable extends TableContent {
    rows: UserInterface[];
    constructor() {
        super();
        this.columns = [
            {
                prop: 'Operaciones de Usuario',
                tipo: 'action',
                internal_buttons: [
                    {
                        text: 'Editar Usuario',
                        class: 'col-xs-4',
                        icon: 'fa fa-pencil',
                        action: (data) => {
                            console.log('Data:' + JSON.stringify(data));
                        }
                    }
                ]
            },
            { prop: 'Nombre' },
            { prop: 'Cuenta de usuario' },
            { prop: 'Género' },
            { prop: 'Fecha de nacimiento' },
            { prop: 'Teléfono' },
            { prop: 'Categoría' },
            { prop: 'Estado' }
        ];
        this.searColumns = [
            'Nombre',
            'Cuenta de usuario',
            'Categoría'
        ];
    }
}
