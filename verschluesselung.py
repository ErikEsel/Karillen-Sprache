
import re

mapping = {
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
}

ersetze_woerter = {
    'ich': 'ik',
    'er': 'oi',
    'du': 'oi',
    'es': 'oi',
    'sie': 'oi',
    'wir': 'oik',
}

# Alle Ersetzungswerte (also 'ik', 'oi', 'oik', ...)
ersetzt_woerter_liste = set(ersetze_woerter.values())

def ersetze(text):
    for alt, neu in ersetze_woerter.items():
        pattern = r'\b' + re.escape(alt) + r'\b'
        text = re.sub(pattern, neu, text)
    return text

def verschluesseln(text):
    worte = text.split()
    ergebnis_liste = []
    for wort in worte:
        # Wenn das Wort in der Ersetzungs-Liste ist, nicht verschlüsseln
        if wort in ersetzt_woerter_liste:
            ergebnis_liste.append(wort)
        else:
            verschl_word = ''
            for buchstabe in wort:
                if buchstabe in mapping:
                    verschl_word += mapping[buchstabe]
                else:
                    verschl_word += buchstabe
            ergebnis_liste.append(verschl_word)
    return ' '.join(ergebnis_liste)

if __name__ == "__main__":
    try:
        eingabe = input("Gib ein Wort oder Text ein: ").lower()
        ersetzt = ersetze(eingabe)
        print("Text nach Ersetzung:", ersetzt)  # Ersetzter Text
        
        verschluesselt = verschluesseln(ersetzt)
        print("Verschlüsseltes Wort:", verschluesselt)  # Verschlüsselter Text, aber Ersetzungswörter unverändert
        
    except Exception as e:
        print("Fehler:", e)
    input("Drücke Enter, um das Programm zu beenden...")
