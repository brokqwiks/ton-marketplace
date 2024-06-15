import { toNano, Address } from '@ton/core';
import { UserData } from '../wrappers/UserData';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const senderAddress = provider.sender().address as Address;

    const userData = provider.open(
        await UserData.fromInit(senderAddress, "")
    );

    const publicKey = "04F14F5CA8C75748CC2AC8D37592C64F94CA8F64CCB3E861EF2F68B0DCF0314A761A0DF3E0720C2E4F4E10E696B5EAE8F00709C77ACE462FCE339FB50B37601F44"

    const res = await userData.send(
        provider.sender(),
        {
            value: toNano("0.01"),
            bounce: true
        },
        {
            $$type: "UserAuth",
            publicKeyHex: publicKey,
            sender: senderAddress
        } 
    )

    console.log(res);
}