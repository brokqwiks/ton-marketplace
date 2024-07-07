import { toNano, Address } from '@ton/core';
import { NetworkProvider } from '@ton/blueprint';
import { UsersDelpoyer } from '../build/UserData/tact_UsersDelpoyer';
import { UserData } from '../wrappers/UserData';

export async function run(provider: NetworkProvider) {
    const senderAddress = provider.sender().address as Address;
    const userPublicKey = "04F14F5CA8C75748CC2AC8D37592C64F94CA8F64CCB3E861EF2F68B0DCF0314A761A0DF3E0720C2E4F4E10E696B5EAE8F00709C77ACE462FCE339FB50B37601F44";
    const userContractId = 5n

    const usersDeployerContract = provider.open(
        await UsersDelpoyer.fromInit("Market-Place UsersDeployer")
    );

    const userContract = provider.open(
        await UserData.fromInit(userContractId, senderAddress, userPublicKey)
    );

    await usersDeployerContract.send(
        provider.sender(),
        {
            value: toNano("0.02"),
            bounce: true
        },
        {
            $$type: "DeployUserContract",
            id: userContractId,
            owner: senderAddress,
            publicKey: userPublicKey,
        }
    )
}