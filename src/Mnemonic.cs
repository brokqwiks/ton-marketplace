using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TonMarket.src
{
    public class Mnemonic
    {   
        public string MnemonicFile { get; set; }
        public int MnemonicLenght { get; set; }

        public string[] GetPhrase()
        {
            string[] words = File.ReadAllLines(MnemonicFile);
            Random random = new Random();
            string[] mnemonicWords = new string[MnemonicLenght];

            for (int word = 0; word < mnemonicWords.Length; word++)
            {
                int randomIndex = random.Next(0, words.Length);
                mnemonicWords[word] = words[randomIndex];
            }

            return mnemonicWords;
        }
    }
}
