import random

class MnemonicGenerator():
    def __init__(self, mnemonicFile, mnemonicLenght):
        self.mnemonicFile = mnemonicFile
        self.mnemonicLenght = mnemonicLenght

    def getPhrase(self):
        phrase = []
        words = []
        with open(self.mnemonicFile, "r", encoding='utf-8') as data:
            for line in data:
                words.append(line.replace("\n", ""))
        for _ in range(0, self.mnemonicLenght+1):
            phrase.append(words[random.randrange(0, len(words))])
        return phrase