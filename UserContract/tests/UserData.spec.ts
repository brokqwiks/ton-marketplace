import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import { toNano } from '@ton/core';
import { UserData } from '../wrappers/UserData';
import '@ton/test-utils';
import { send } from 'process';
import { UsersDelpoyer } from '../build/UserData/tact_UsersDelpoyer';

describe('UserData', () => {
    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let user: SandboxContract<TreasuryContract>;
    let usersDeployer: SandboxContract<UsersDelpoyer>;
    let UserContract: SandboxContract<UserData>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();
        
        deployer = await blockchain.treasury('deployer');
        user = await blockchain.treasury('user');

        usersDeployer = blockchain.openContract(await UsersDelpoyer.fromInit("Market-Place Users Deployer"));

        const UsersDeployerResult = await usersDeployer.send(
            deployer.getSender(),
            {
                value: toNano('0.05'),
            },
            {
                $$type: 'Deploy',
                queryId: 0n,
            }
        );

        expect(UsersDeployerResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: usersDeployer.address,
            deploy: true,
            success: true,
        });
    });

    it('deployUserContract', async () => {

        let publicKeyHex = "04F14F5CA8C75748CC2AC8D37592C64F94CA8F64CCB3E861EF2F68B0DCF0314A761A0DF3E0720C2E4F4E10E696B5EAE8F00709C77ACE462FCE339FB50B37601F44"

        await usersDeployer.send(
            user.getSender(),
            {
                value: toNano(0.3),
                bounce: true,
            },
            {
                $$type: "DeployUserContract",
                id: 1n,
                owner: user.getSender().address,
                publicKey: publicKeyHex,
            }
        )

        const newUserContract = await blockchain.openContract(await UserData.fromInit(1n, user.getSender().address, publicKeyHex));
        const UserContractAddress = await newUserContract.getMyAddress();

        console.log(UserContractAddress);
    });

});
