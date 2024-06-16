from fastapi import FastAPI
from pydantic import BaseModel
import random
import os
import hashlib
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives.asymmetric import ec

import config
from src.keys import Mnemonic, Keys

app = FastAPI(
    title="title"
)

mnemonic_generator = Mnemonic.MnemonicGenerator(
    config.MNEMONIC_FILE,
    config.MNEMONIC_LENGTH
)
keys_generator = Keys.KeysGenerator(
    mnemonic_generator
)

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
