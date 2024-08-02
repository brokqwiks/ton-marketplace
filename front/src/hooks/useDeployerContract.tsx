import { Address, toNano } from "ton-core";
import { Deploy, DeployUser, UsersDelpoyer } from "../wrappers/UserDeploy";
import { useAsyncInitialize } from "./useAsyncInitialize";
import { useTonClient  } from "./useTonClient";
import { OpenedContract } from "@ton/core";
import { useTonConnect } from "./useTonConnect";
import { UserData } from "../wrappers/UserData";

export function useDeployerContract() {
    const {client} = useTonClient()
    const {wallet, sender} = useTonConnect()

    const deployerContract = useAsyncInitialize(async() => {
        if(!client) return;

        const userDeployerContract = UsersDelpoyer.fromAddress(Address.parse("EQC2q9lt6WVWtZO3Z-ROwueuMd6UzfCvg_x_NBMLX9FUlkrf"))

        return client.open(userDeployerContract) as OpenedContract<UsersDelpoyer>
    }, [client, wallet])


    const userContract = useAsyncInitialize(async() => {
        if(!wallet || !sender || !client) return;
        
        const contractAddress = await deployerContract?.getUserContractAddress(sender.address!)
        const contract = await UserData.fromAddress(contractAddress!);

        return client.open(contract) as OpenedContract<UserData>
    }, [deployerContract, client])

    return{
        deployerContract,
        userContract,
        deployUser: () => {
            const message: DeployUser = {
                $$type: "DeployUser",
                publicKey: "047B47F3D30541396444B8D3465EDF155441AC64E12D9C6D5107D03DE702ABF86526ECEE556E63FE222F8A8F79E2B112E8ABAB2EFD9BA658C3DEA6A3638F27EA82"
            }

            deployerContract?.send(sender, {
                value: toNano("0.25"),
                bounce: true
            }, message)
        }
    }
}