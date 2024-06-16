import sys
import os

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from config import MNEMONIC_FILE, MNEMONIC_LENGTH
from src.keys import Mnemonic, Keys

mnemonic_generator = Mnemonic.MnemonicGenerator(
    MNEMONIC_FILE,
    MNEMONIC_LENGTH
)
keys_generator = Keys.KeysGenerator(
    mnemonic_generator
)

keys = keys_generator.GenerateKeys()
print(keys.publickey)
print(keys.privatekey)
