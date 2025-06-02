// Mapping für Verschlüsselung
const mapping = {
    'A': 'M', 'B': 'N', 'D': 'O', 'E': 'P', 'F': 'R', 'G': 'S',
    'H': 'T', 'I': 'U', 'K': 'W', 'L': 'Z', 'M': 'A', 'N': 'B',
    'O': 'D', 'P': 'E', 'R': 'F', 'S': 'G', 'T': 'H', 'U': 'I',
    'W': 'K', 'Z': 'L',
    'Ä': 'M', 'Ö': 'D', 'Ü': 'I',
    'a': 'm', 'b': 'n', 'd': 'o', 'e': 'p', 'f': 'r', 'g': 's',
    'h': 't', 'i': 'u', 'k': 'w', 'l': 'z', 'm': 'a', 'n': 'b',
    'o': 'd', 'p': 'e', 'r': 'f', 's': 'g', 't': 'h', 'u': 'i',
    'w': 'k', 'z': 'l',
    'ä': 'm', 'ö': 'd', 'ü': 'i'
};

const ersetzeWörter = {
    'ich': 'ik',
    'er': 'oi',
    'du': 'oi',
    'es': 'oi',
    'sie': 'oi',
    'wir': 'oik'
};

function ersetze(text) {
    // Ersetze Wörter nur, wenn sie als ganze Wörter vorkommen
    for (const [alt, neu] of Object.entries(ersetzeWörter)) {
        // Regex: \b = Wortgrenze, 'gi' = global + case insensitive
        const regex = new RegExp('\\b' + alt + '\\b', 'gi');
        text = text.replace(regex, neu);
    }
    return text;
}

function verschluesseln() {
    let input = document.getElementById('inputText').value;
    input = ersetze(input);
    let output = '';

    for (let char of input) {
        if (mapping[char]) {
            output += mapping[char];
        } else {
            output += char;
        }
    }

    document.getElementById('outputText').innerText = output;
}
