import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import { toNano } from '@ton/core';
import { UserData } from '../wrappers/UserData';
import '@ton/test-utils';
import { send } from 'process';

describe('UserData', () => {
    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let userData: SandboxContract<UserData>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();
        
        deployer = await blockchain.treasury('deployer');

        userData = blockchain.openContract(await UserData.fromInit(deployer.getSender().address, ""));


        const deployResult = await userData.send(
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
            to: userData.address,
            deploy: true,
            success: true,
        });
    });

    it('get owner', async () => {
        const ownerAddress = await userData.getOwner();
        console.log(ownerAddress)
    });

    it('add public key', async () => {

        const testPublicKey = "04F14F5CA8C75748CC2AC8D37592C64F94CA8F64CCB3E861EF2F68B0DCF0314A761A0DF3E0720C2E4F4E10E696B5EAE8F00709C77ACE462FCE339FB50B37601F44";

        const result = await userData.send(
            deployer.getSender(),
            {
                value: toNano('0.01')
            },
            {
                $$type: "UserAuth",
                publicKeyHex: testPublicKey,
                sender: deployer.getSender().address
            }
        );

        const contractPublicKey = await userData.getPublicKeyHex();
        console.log(contractPublicKey);
    });
});
