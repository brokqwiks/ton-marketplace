import os
from dotenv import load_dotenv

load_dotenv()

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

MNEMONIC_FILE_RELATIVE = os.getenv('MNEMONIC_FILE_PATH')
MNEMONIC_FILE = os.path.join(BASE_DIR,'backend',MNEMONIC_FILE_RELATIVE)
BOT_TELEGRAM_TOKEN = os.getenv('BOT_TELEGRAM_TOKEN')

MNEMONIC_LENGTH = int(os.getenv('MNEMONIC_LENGTH'))
