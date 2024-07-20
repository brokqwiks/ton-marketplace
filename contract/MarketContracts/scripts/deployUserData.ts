import { toNano } from '@ton/core';
import { UserData } from '../wrappers/UserData';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const userData = provider.open(await UserData.fromInit());

    await userData.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(userData.address);

    // run methods on `userData`
}
