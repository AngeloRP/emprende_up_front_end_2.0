
/**
 * @param isRequired verificar que el campo input sea requerido
 * @param id id para identificar al input y poder manipularlo mediante jquery o css.
 * @param value valor seteado en el input
 * @param class clase css que se agregara al input
 * @param alt texto que se muestra al pasar el cursor sobre el input
 * @param isSeteable verifica si el campo es editable o no
 * @param placeholder texto que se mostrara como placeholder del input y en el label en caso de tener
 * @param pattern texto que va en el campo pattern del input sirve para poner reglas en la escritura del input
 * @param title texto que se muestra cuando el valor seteado en el input es invalido
 * @param min valor minimo si el valor seteado es menor a este se pintara de rojo el input ademas no deja escribir valores
 *  que sean menores a ese valor aplicable para valores de tipo número y de tipo date
 * @param max valor máximo lo mismo que el anterior pero delimita un maximo al valor a escribir.
 */
export interface InputInterface {
    isRequired: boolean | true;
    hasPlaceholder: boolean | true;
    id: string;
    value: any;
    class: string;
    alt: string;
    isSeteable: boolean | true;
    placeholder: string;
}
