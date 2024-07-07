import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import { toNano } from '@ton/core';
import { UsersDelpoyer } from '../wrappers/UserDeploy';
import '@ton/test-utils';
import { UserData } from '../wrappers/UserData';

describe('UserDeploy', () => {
    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let userDeploy: SandboxContract<UsersDelpoyer>;
    let userData: SandboxContract<UserData>;
    let user: SandboxContract<TreasuryContract>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();
        userDeploy = blockchain.openContract(await UsersDelpoyer.fromInit("TON Market-Place Users Deployer"));

        deployer = await blockchain.treasury('deployer');

        const deployResult = await userDeploy.send(
            deployer.getSender(),
            {
                value: toNano('0.05'),
            },
            {
                $$type: 'Deploy',
                queryId: 0n,
            }
        );

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: userDeploy.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        user = await blockchain.treasury('user');
        userData = await blockchain.openContract(await UserData.fromInit(user.address, userDeploy.address));

        const publicKey = "some key";

        const deployResult = await userDeploy.send(
            user.getSender(),
            {
                value: toNano("0.3")
            },
            {
                $$type: "DeployUser",
                publicKey: publicKey
            }
        );

        expect(deployResult.transactions).toHaveTransaction({
            from: userDeploy.address,
            to: userData.address,
            deploy: true
        });

        console.log(await userData.getMyPublicKey());
    });
});
