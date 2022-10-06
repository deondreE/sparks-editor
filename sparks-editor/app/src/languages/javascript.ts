import { Theme } from "../../../types/types.theme";

function javascript (code: string, theme: Theme): string {
    let jScriptRgx =  /((?:^|[^$])\b(?:function|return|var|let|const|class|new|import|export|from|extends|if|else|switch|case|default|break|for|while|do|try|catch|finally|throw|in|of|instanceof|typeof|void|delete|yield|await|debugger|this|super|true|false|null|undefined|NaN|Infinity|Math|JSON|console|window|document|global|process|require|module|exports|__dirname|__filename|Intl|Array|ArrayBuffer|Boolean|DataView|Date|Error|EvalError|Float32Array|Float64Array|Function|Generator|GeneratorFunction|Infinity|Int16Array|Int32Array|Int8Array|InternalError|Intl|Intl.Collator|Intl.DateTimeFormat|Intl.NumberFormat|Intl.PluralRules|Intl.RelativeTimeFormat|Intl.v8BreakIterator|Iterator|Map|Number|Object|Promise|Proxy|RangeError|ReferenceError|Reflect|RegExp|Set|SharedArrayBuffer|String|Symbol|SyntaxError|TypeError|URIError|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|WeakMap|WeakSet|WebAssembly|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|escape|eval|isFinite|isNaN|parseFloat|parseInt|undefined|unescape|uneval|Atomics|JSON|Math|Reflect|escape|unescape|Object|Function|Boolean|Symbol|Error|EvalError|InternalError|RangeError|ReferenceError|SyntaxError|TypeError|URIError|Number|BigInt|Math|Date|String|RegExp|Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array|BigInt64Array|BigUint64Array|Map|Set|WeakMap|WeakSet|ArrayBuffer|SharedArrayBuffer|Atomics|DataView|JSON|Promise|Generator|GeneratorFunction|AsyncFunction|Reflect|Proxy|Intl|Intl.Collator|Intl.DateTimeFormat|Intl.NumberFormat|Intl.PluralRules|Intl.RelativeTimeFormat|Intl.v8BreakIterator|WebAssembly)\b)/g;
    // regex for comments

    let jScriptMatches = code.match(jScriptRgx);
    // if there are any matches
    if (jScriptMatches) {
        // loop through the matches
        for (let i = 0; i < jScriptMatches.length; i++) {
            // replace the match with the same match but with a span tag around it
            code = code.replace(jScriptMatches[i], `<span style="color:${theme.keyColor};">${jScriptMatches[i]}</span>`);
        }
        // code = code.replace(new RegExp("&", "g"), "&").replace(new RegExp("<", "g"), "<");
        return code;
    }

    if (code.includes("/")) {
        let jScriptCommentRgx = /\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+/g;
        let jScriptCommentMatches = code.match(jScriptCommentRgx);
        if (jScriptCommentMatches) {
            console.log('called');
            for (let i = 0; i < jScriptCommentMatches.length; i++) {
                code = code.replace(jScriptCommentMatches[i], `<span style="color:${theme.commentColor};">${jScriptCommentMatches[i]}</span>`);
            }
            return code;
        }
    }

    return code;
}

export default javascript;