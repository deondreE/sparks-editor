
function CPlusPlus (code: string): string {
    let cPlusPlusRgx = /((?:^|[^$])\b(?:auto|bool|break|case|catch|char|class|const|const_cast|continue|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|false|float|for|friend|goto|if|inline|int|long|mutable|namespace|new|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_cast|struct|switch|template|this|throw|true|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|while)\b)/g;
    // check the code for any C++ keywords
    let cPlusPlusMatches = code.match(cPlusPlusRgx);
    // if there are any matches
    if (cPlusPlusMatches) {
        // loop through the matches
        for (let i = 0; i < cPlusPlusMatches.length; i++) {
            // replace the match with the same match but with a span tag around it
            code = code.replace(cPlusPlusMatches[i], `<span style="color: blueviolet;">${cPlusPlusMatches[i]}</span>`);
        }

        return code;
    }

    return " ";
}

export default CPlusPlus;