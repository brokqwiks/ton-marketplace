import os
import hashlib
from cryptography.hazmat.primitives.serialization import Encoding, PublicFormat
from cryptography.hazmat.primitives.asymmetric import ec
from cryptography.hazmat.backends import default_backend
from src.keys.Mnemonic import MnemonicGenerator

class Keys:

    def __init__(self, privateKeyHex, publicKeyHex):
        self.privatekey = privateKeyHex
        self.publickey = publicKeyHex


class KeysGenerator():

    def __init__(self, mnemonic_generator: MnemonicGenerator):
        self.mnemonic_generator = mnemonic_generator

    def GeneratePrivateKey(self):
        concatenatedMnemonic = " ".join(self.mnemonic_generator.getPhrase())
        salt = os.urandom(32)
        privatekey = hashlib.pbkdf2_hmac('sha256', concatenatedMnemonic.encode('utf-8'), salt, 100000, dklen=32)
        return privatekey

    def GeneratePublicKey(self, privateKey):
        curve = ec.SECP256K1()
        private_key_obj = ec.derive_private_key(int.from_bytes(privateKey, byteorder='big'), curve, default_backend())
        public_key_obj = private_key_obj.public_key()
        return public_key_obj.public_bytes(encoding=Encoding.X962, format=PublicFormat.UncompressedPoint)

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
