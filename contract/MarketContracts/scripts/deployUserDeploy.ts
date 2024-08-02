import { toNano } from '@ton/core';
import { NetworkProvider } from '@ton/blueprint';
import { UsersDelpoyer } from '../wrappers/UserDeploy';

export async function run(provider: NetworkProvider) {
    const usersDeployer = provider.open(await UsersDelpoyer.fromInit("UDO Market-Place Users Deployer"));

    await usersDeployer.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(usersDeployer.address);

    // run methods on `userDeploy`
}
