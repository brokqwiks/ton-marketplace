from fastapi import FastAPI
from pydantic import BaseModel
import random
import os
import hashlib
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives.asymmetric import ec

app = FastAPI()

class Keys(BaseModel):
    privatekey: str
    publickey: str

class Mnemonic(BaseModel):
    mnemonicFile: str
    mnemonicLength: int

    def get_phrase(self):
        phrase = []
        words = []
        with open(self.mnemonicFile, "r", encoding='utf-8') as data:
            for line in data:
                words.append(line.replace("\n", ""))
        for _ in range(0, self.mnemonicLength+1):
            phrase.append(words[random.randrange(0, len(words))])
        return phrase

class KeysGenerator(Mnemonic):

    def generate_private_key(self):
        concatenated_mnemonic = " ".join(Mnemonic(self.mnemonicFile, self.mnemonicLength).get_phrase())
        salt = os.urandom(32)
        private_key = hashlib.pbkdf2_hmac('sha256', concatenated_mnemonic.encode('utf-8'), salt, 100000, dklen=32)
        return private_key

    def generate_public_key(self, private_key):
        curve = ec.SECP256K1()
        private_key_obj = ec.derive_private_key(int.from_bytes(private_key, byteorder='big'), curve, default_backend())
        public_key_obj = private_key_obj.public_key()
        return public_key_obj.public_bytes(encoding=serialization.Encoding.X962, format=serialization.PublicFormat.UncompressedPoint)

    def convert_to_hex(self, byte_array):        
        hex_string = ""
        for b in byte_array:
            hex_string += "{:02X}".format(b)
        return hex_string

@app.post("/generate_private_key")
async def generate_private_key_handler(mnemonic: Mnemonic):
    key_generator = KeysGenerator(mnemonicFile=mnemonic.mnemonicFile, mnemonicLength=mnemonic.mnemonicLength)
    private_key = key_generator.generate_private_key()
    return {"private_key": private_key.hex()}

@app.post("/generate_public_key")
async def generate_public_key_handler(private_key: str):
    key_generator = KeysGenerator()
    public_key = key_generator.generate_public_key(bytes.fromhex(private_key))
    return {"public_key": public_key.hex()}

@app.post("/generate_keys")
async def generate_keys_handler(mnemonic: Mnemonic):
    key_generator = KeysGenerator(mnemonicFile=mnemonic.mnemonicFile, mnemonicLength=mnemonic.mnemonicLength)
    private_key = key_generator.generate_private_key()
    public_key = key_generator.generate_public_key(private_key)

    private_key_hex = key_generator.convert_to_hex(private_key)
    public_key_hex = key_generator.convert_to_hex(public_key)

    keys = Keys(privatekey=private_key_hex, publickey=public_key_hex)

@app.get("/generate/mnemonic")
def generate_mnemonic():
    generator = Mnemonic()
    return {"mnemonic": generator.getPhrase()}

@app.get("/generate/keys")
def generate_keys():
    generator = KeysGenerator()
    keys = generator.generateKeys()
    return {"privateKey": keys.privateKey, "publicKey": keys.publicKey}

    return keys
        
