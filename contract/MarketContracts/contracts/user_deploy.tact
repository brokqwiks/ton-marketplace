import "@stdlib/deploy";
import "@stdlib/ownable";
import "./messages";
import "./user_data";

contract UsersDelpoyer with Deployable { 
    name: String;
    users: Int as uint256 = 0;

    init(name: String){
        self.name = name;
    }

    receive(msg: DeployUser) {
        self.users = self.users + 1;
        let init: StateInit = initOf UserData(sender(), myAddress());
        let userContractAddress: Address = contractAddress(init);

        send(SendParameters{
            body: UpdateUserPublicKey{publicKey: msg.publicKey, sender: sender()}.toCell(),
            to: userContractAddress,
            value: ton("0.2"),
            mode: SendIgnoreErrors,
            code: init.code,
            data: init.data,
        });

        self.reply(UpdateUserPublicKey_Responce{
            updated: true,
            sender: sender(),
        }.toCell());   
    }

    get fun myAddress(): Address {
        return myAddress();
    }

    get fun totalUsers(): Int {
        return self.users;
    }

    get fun userContractAddress(userAddress: Address): Address {
        let init: StateInit = initOf UserData(userAddress, myAddress());
        let userContractAddress: Address = contractAddress(init);

        return userContractAddress;
    }
}
