import { toNano, Address } from '@ton/core';
import { NetworkProvider } from '@ton/blueprint';
import { UsersDelpoyer } from '../build/UserData/tact_UsersDelpoyer';

export async function run(provider: NetworkProvider) {
    // Получить адрес отправителя
    const senderAddress = provider.sender().address as Address;

    const usersDeployerContract = provider.open(
        await UsersDelpoyer.fromInit("Market-Place UsersDeployer")
    );

    await usersDeployerContract.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(usersDeployerContract.address);
    const usersDeployerAddress = await usersDeployerContract.getMyAddress();

    console.log(usersDeployerAddress);
}