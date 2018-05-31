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
                widthText: 180,
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
            { prop: 'Cuenta de usuario', widthText: 180 },
            { prop: 'Nombre', widthText: 100 },
            { prop: 'Paso', widthText: 90 },
            { prop: 'Género', widthText: 100 },
            { prop: 'Fecha de nacimiento', widthText: 180 },
            { prop: 'Teléfono', widthText: 120 },
            { prop: 'Categoría', widthText: 125 }
        ];
        this.searColumns = [
            'Nombre',
            'Cuenta de usuario',
            'Categoría'
        ];
    }
}
