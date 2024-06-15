using System;
using System.Security.Cryptography;
using System.Text;
using Org.BouncyCastle.Asn1.Sec;
using Org.BouncyCastle.Asn1.X9;
using Org.BouncyCastle.Crypto.Parameters;
using Org.BouncyCastle.Math;
using Org.BouncyCastle.Security;

namespace TonMarket.src
{
    internal class Keys
    {
        public byte[] PublicKey;
        public byte[] PrivateKey;

        public string PublicKeyHex;
        public string PrivateKeyHex;
    }

    internal class KeysGenerator
    {
        public static int mnemonicLenght = 12;
        private static string mnemonicPathFile = "./wordlist/words.txt";

        public int privateKeyIterations = 10000;
        public int privateKeySize = 32;

        public string[] mnemonicPhrase { get; set; }


        private byte[] GeneratePrivateKey()
        {
            string concatenatedMnemonic = string.Join(" ", mnemonicPhrase);
            byte[] salt = Encoding.UTF8.GetBytes("mnemonic" + concatenatedMnemonic);

            using (var pbkdf2 = new Rfc2898DeriveBytes(concatenatedMnemonic, salt, privateKeyIterations, HashAlgorithmName.SHA256))
            {
                return pbkdf2.GetBytes(privateKeySize);
            }
        }

        private string ConvertToHex(byte[] byteArray)
        {
            StringBuilder hex = new StringBuilder(byteArray.Length * 2);
            foreach (byte b in byteArray)
            {
                hex.AppendFormat("{0:x2}", b);
            }
            return hex.ToString();
        }

        private byte[] GeneratePublicKey(byte[] privateKey)
        {
            // Use BouncyCastle to convert the private key and generate the public key
            X9ECParameters curve = SecNamedCurves.GetByName("secp256k1");
            ECDomainParameters domainParams = new ECDomainParameters(curve.Curve, curve.G, curve.N, curve.H);

            BigInteger d = new BigInteger(1, privateKey);
            ECPrivateKeyParameters privateKeyParams = new ECPrivateKeyParameters(d, domainParams);
            ECPublicKeyParameters publicKeyParams = new ECPublicKeyParameters(curve.G.Multiply(d), domainParams);

            return publicKeyParams.Q.GetEncoded();
        }

        public Keys GenerateKeys()
        {
            byte[] privateKey = GeneratePrivateKey();
            byte[] publicKey = GeneratePublicKey(privateKey);

            string privateKeyHex = ConvertToHex(privateKey);
            string publicKeyHex = ConvertToHex(publicKey);

            return new Keys()
            {
                PrivateKey = privateKey,
                PublicKey = publicKey,
                PrivateKeyHex = privateKeyHex,
                PublicKeyHex = publicKeyHex
            };
        }
    }
}