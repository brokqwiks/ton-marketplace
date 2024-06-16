from fastapi import FastAPI
from pydantic import BaseModel

import config
from src.keys import Mnemonic, Keys

app = FastAPI(title="title")

mnemonic_generator = Mnemonic.MnemonicGenerator(
    config.MNEMONIC_FILE,
    config.MNEMONIC_LENGTH
)
keys_generator = Keys.KeysGenerator(mnemonic_generator)

class MnemonicModel(BaseModel):
    mnemonicFile: str
    mnemonicLength: int

class PrivateKeyModel(BaseModel):
    private_key: str

class PublicKeyModel(BaseModel):
    public_key: str

@app.post("/generate_private_key")
async def generate_private_key_handler(mnemonic: MnemonicModel):
    private_key = keys_generator.generate_private_key()
    return {"private_key": private_key.hex()}

@app.post("/generate_public_key")
async def generate_public_key_handler(private_key: PrivateKeyModel):
    public_key = keys_generator.generate_public_key(bytes.fromhex(private_key.private_key))
    return {"public_key": public_key.hex()}

@app.post("/generate_keys")
async def generate_keys_handler(mnemonic: MnemonicModel):
    private_key = keys_generator.generate_private_key()
    public_key = keys_generator.generate_public_key(private_key)
    private_key_hex = keys_generator.convert_to_hex(private_key)
    public_key_hex = keys_generator.convert_to_hex(public_key)
    keys = Keys(privatekey=private_key_hex, publickey=public_key_hex)
    return keys

@app.get("/generate/mnemonic")
def generate_mnemonic():
    mnemonic = mnemonic_generator.getPhrase()
    return {"mnemonic": mnemonic}

@app.get("/generate/keys")
def generate_keys():
    keys = keys_generator.generateKeys()
    return {"privateKey": keys.privateKey, "publicKey": keys.publicKey}
