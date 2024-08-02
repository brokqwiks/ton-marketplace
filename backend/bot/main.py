from aiogram import Bot, executor, Dispatcher, types
from aiogram.types.web_app_info import WebAppInfo

import backend.config as config

bot = Bot(config.BOT_TELEGRAM_TOKEN)
dp = Dispatcher(bot)

@dp.message_handler(commands=['start'])
async def start(message: types.Message):
    markup = types.ReplyKeyboardMarkup()
    markup.add(types.KeyboardButton('Открыть', web_app=WebAppInfo(url=f"https://2370-176-52-22-226.ngrok-free.app")))
    await message.answer("Привет!", reply_markup=markup)


if __name__ == "__main__":
    executor.start_polling(dp, skip_updates=True)