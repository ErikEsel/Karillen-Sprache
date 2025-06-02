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

const ersetzeWoerter = {
  'ich': 'ik',
  'er': 'oi',
  'du': 'oi',
  'es': 'oi',
  'sie': 'oi',
  'wir': 'oik'
};

// Funktion ersetzt Wörter im Text
function ersetze(text) {
  // Für einfache Ersetzung alle Wörter in Kleinbuchstaben vergleichen
  let worte = text.split(' ');
  for(let i = 0; i < worte.length; i++) {
    const wortLower = worte[i].toLowerCase();
    if(ersetzeWoerter[wortLower]) {
      // Ersetze das Wort durch den Ersatz
      worte[i] = ersetzeWoerter[wortLower];
    }
  }
  return worte.join(' ');
}

// Funktion verschlüsselt ein Wort
function verschluesseln(wort) {
  let ergebnis = '';
  for (let buchstabe of wort) {
    if (mapping[buchstabe]) {
      ergebnis += mapping[buchstabe];
    } else {
      ergebnis += buchstabe;
    }
  }
  return ergebnis;
}

// Funktion verschlüsselt einen ganzen Satz
function verschluessleSatz(text) {
  const worte = text.split(' ');
  const verschluesselteWorte = worte.map(wort => {
    // Wenn das Wort schon ein Ersatzwort ist, nicht verschlüsseln
    if (Object.values(ersetzeWoerter).includes(wort)) {
      return wort;
    } else {
      return verschluesseln(wort);
    }
  });
  return verschluesselteWorte.join(' ');
}

// Beispiel mit Benutzereingabe:
const eingabe = prompt("Gib ein Wort oder Text ein:");
const ersetzt = ersetze(eingabe);
console.log("Text nach Ersetzung:", ersetzt);
const verschluesselt = verschluessleSatz(ersetzt);
console.log("Verschlüsseltes Wort:", verschluesselt);
