
/**  Used for creating custom themes for the editor. */
export interface Theme {
    background: string;
    /** The Color of words like class | function def | const  */
    keyColor: string;
    /** The Color of words like string | int | double  */
    typeColor: string;
    /** The color of "" */
    stringColor: string;
    /** The color of the specific comment type */
    commentColor: string;
    /** The color of the default text */
    textColor: string;
}