import random
import os
import hashlib
from cryptography.hazmat.primitives.serialization import Encoding, PublicFormat
from cryptography.hazmat.primitives.asymmetric import ec
from cryptography.hazmat.backends import default_backend

class Keys:

    def __init__(self, privateKeyHex, publicKeyHex):
        self.privatekey = privateKeyHex
        self.publickey = publicKeyHex

class Mnemonic:

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
    
class KeysGenerator (Mnemonic):
    
    # Шифрока мнемонической фразы
    def GeneratePrivateKey(self):
        concatenatedMnemonic = " ".join(Mnemonic(self.mnemonicFile, self.mnemonicLenght).getPhrase())
        salt = os.urandom(32)
        privatekey = hashlib.pbkdf2_hmac('sha256', concatenatedMnemonic.encode('utf-8'), salt, 100000, dklen = 32)
        return  privatekey

    # Конвертация приватного ключа в публичный
    def GeneratePublicKey(self, privateKey):
        curve = ec.SECP256K1()
        private_key_obj = ec.derive_private_key(int.from_bytes(privateKey, byteorder='big'), curve, default_backend())
        public_key_obj = private_key_obj.public_key()
        return public_key_obj.public_bytes(encoding = Encoding.X962, format=PublicFormat.UncompressedPoint)

    # Конвертация массива байтов ключей в хэш
    def ConvertToHex(self, byteArray):        
        hex_string = ""
        for b in byteArray:
            hex_string += "{:02X}".format(b)
        return hex_string

    def GenerateKeys(self):
        privateKey = self.GeneratePrivateKey()
        publicKey = self.GeneratePublicKey(privateKey)

        privateKeyHex = self.ConvertToHex(privateKey)
        publicKeyHex = self.ConvertToHex(publicKey)

        keys = Keys(privateKeyHex, publicKeyHex)

        return keys
        # Теперь при вызове этой функции вернется объект класса Keys. Чтобы получить ключ - keys = GenerateKeys().privatekey

