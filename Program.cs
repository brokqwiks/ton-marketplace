

using TonMarket.src;

public class Program
{
    public static int mnemonicLenght = 12;
    private static string mnemonicPathFile = "./wordlist/words.txt";

    static void Main(string[] args)
    {


        Mnemonic mnemonic = new Mnemonic() {
            MnemonicFile = mnemonicPathFile,
            MnemonicLenght = mnemonicLenght
        };

        string[] phrase = mnemonic.GetPhrase();

        for(int i = 0; i < phrase.Length; i++)
        {
            Console.WriteLine(phrase[i]);
        }

        KeysGenerator generator = new KeysGenerator() {
            mnemonicPhrase = phrase,
        };
        Keys keys = generator.GenerateKeys();

        Console.WriteLine(keys.PrivateKeyHex);
        Console.WriteLine(keys.PublicKeyHex);

    }
}