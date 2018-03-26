/**
 * Interface de Boton
 * @param id: id del boton para permitir manipulación por jquery u otros.
 * @param title: texto que describe al botón.
 * @param clase: clase css para el boton
 * @param contenido: contenido en texto para el boton o puede tratarse de una imagen
 * @param hasImagen: valor boolean que indica si tiene imagen o no
 */
export interface ButtonInt {
    id: string;
    title: string;
    clase: string;
    contenido: any;
    hasImagen: boolean;
}
