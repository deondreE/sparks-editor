import { Theme} from "./types.theme";

export interface SparksEditorTypes {
    value?: string;
    height?: string;
    minHeight?: string;
    maxHeight?: string;
    width?: string;
    minWidth?: string;
    maxWidth?: string;

    /** Color theme for the editor */
    theme?: Theme;
    /** focus on the editor */
    autoFocus?: boolean;

    placeholder?: string;

    language?: string;

    editable?: boolean;
    /** defaults to false
     * @default false
     */

    readOnly?: boolean;

    indentWithTab?: boolean;
    //
    // onChange?(value: string, viewUpdates: ViewUpdate): void;
    //
    onStatistics?(data: Statistics): void;

    //
    // onUpdate?(viewUpdate: ViewUpdate): void;
    //
    // onCreateEditor?(view: EditorViw


    root?: Document;

    // initialState?: {
    //     json: any;
    //     fields?: Record<string, StateField<any>>;
    // }
}

export interface Statistics {
    /** total length of the document */
    length: number;
    /** Get the number of lines in the editor. */
    lineCount: number;
    /** Get the proper [line-break](https://codemirror.net/docs/ref/#state.EditorState^lineSeparator) string for this state. */
    lineBreak: string;
    /** Returns true when the editor is [configured](https://codemirror.net/6/docs/ref/#state.EditorState^readOnly) to be read-only. */
    readOnly: boolean;
    /** The size (in columns) of a tab in the document, determined by the [`tabSize`](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize) facet. */
    tabSize: number;
    /** Get the currently selected code. */
    selectionCode: string;
    /**
     * The length of the given array should be the same as the number of active selections.
     * Replaces the content of the selections with the strings in the array.
     */
    selections: string[];
    /** Return true if any text is selected. */
    selectedText: boolean;
}
