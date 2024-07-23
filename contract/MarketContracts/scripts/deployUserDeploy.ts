import { toNano } from '@ton/core';
import { UserDeploy } from '../wrappers/UserDeploy';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const userDeploy = provider.open(await UserDeploy.fromInit());

    await userDeploy.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(userDeploy.address);

    // run methods on `userDeploy`
}
