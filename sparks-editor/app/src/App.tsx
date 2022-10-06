import {SparksEditorTypes} from "../../types/types.editor";
import './App.css'
import javascript from "./languages/javascript";
import { Theme } from "../../types/types.theme";

function Editor(props: SparksEditorTypes) {
    const defaultTheme: Theme = {
        background: '#1e1e1e',
        keyColor: '#c94f8a',
        typeColor: '#569cd6',
        stringColor: '#ce9178',
        commentColor: '#8c5fad',
        textColor: '#d4d4d4',
    }
    /** Updates syntax highlighting inside the editor. Using prism.js */
  const updateHighlighting = (value: string) => {
      let result_element = document.querySelector("#code");
      value = value.replace(new RegExp("&", "g"), "&").replace(new RegExp("<", "g"), "<");
      // Update code
      // @ts-ignore
      // result_element.innerHTML = ; /* Global RegExp *
        if (value != null) {
            // @ts-ignore
            result_element.innerHTML = value;
            if (props.language === "javascript") {
                // @ts-ignore
                result_element.innerHTML = javascript(value, defaultTheme   );
                // @ts-ignore
                console.log(result_element.innerHTML);
            }
        }
      // Syntax Highlight
      // @ts-ignore
      //   Prism.highlightElement(result_element);
  }

  /** Lets the user press tab inside the editor */
  function check_tab(e: any) {
      let element = e.target;
      let code = e.target.value;

      if (e.keyCode == 9) {
          e.preventDefault();
          let before_tab = code.slice(0, element.selectionStart); // text before tab
          let after_tab = code.slice(element.selectionEnd, element.value.length); // text after tab
          let cursor_pos = element.selectionEnd + 1; // where cursor moves after tab - moving forward by 1 char to after tab
          element.value = before_tab + "\t" + after_tab; // add tab char
          // move cursor
          element.selectionStart = cursor_pos;
          element.selectionEnd = cursor_pos;
          updateHighlighting(code); // Update text to include indent
          console.log(e.target.value);
      }
    }

    // update scroll
    function updateScroll() {
        let code = document.getElementById("editing");
        let highlighting = document.getElementById("highlighting");
        // @ts-ignore
        highlighting.scrollTop = code.scrollTop;
    }
  // @ts-ignore
    return (
      <div>
        <textarea placeholder={props.placeholder}
                  id={'editing'}
                  spellCheck={false}
                  onInput={(e: any) => {
                    updateHighlighting(e.target.value); // @ts-ignore
                  }}
                  style={{
                        backgroundColor: defaultTheme.background,
                        color: defaultTheme.textColor,
                  }}
                  onKeyDown={ (e: any) => {check_tab(e);} }
                  onScroll={ () => {updateScroll();} }
        >
        </textarea>
        <pre id={'result'} aria-hidden={'true'} style={{
            background: defaultTheme.background,
            color: defaultTheme.textColor,
        }}>
          <code id={'code'}></code>
        </pre>
      </div>
  )
}

export default Editor
