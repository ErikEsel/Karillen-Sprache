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

def verschluesseln(text):
    ergebnis = ''
    for buchstabe in text:
        if buchstabe in mapping:
            ergebnis += mapping[buchstabe]
        else:
            ergebnis += buchstabe
    return ergebnis.upper()

if __name__ == "__main__":
    wort = input("Gib ein Wort ein, das du verschlüsseln möchtest: ")
    print("Verschlüsseltes Wort:", verschluesseln(wort))
input("Drücke Enter, um das Programm zu beenden...")