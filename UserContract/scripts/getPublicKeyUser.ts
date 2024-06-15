import { toNano, Address } from '@ton/core';
import { UserData } from '../wrappers/UserData';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const senderAddress = provider.sender().address as Address;

    const userData = provider.open(
        await UserData.fromInit(senderAddress, "")
    );

    const userPublicKey = await userData.getPublicKeyHex();
    console.log(userPublicKey);
}