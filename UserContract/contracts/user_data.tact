import "@stdlib/deploy";

message UserAuth {
    publicKeyHex: String;
}

message DeployUserContract {
    id: Int as uint64;
    owner: Address;
    publicKey: String;
}

contract UsersDelpoyer with Deployable { 
    Name: String;

    init(Name: String){
        self.Name = Name;
    }

    get fun myAddress(): Address {
        return myAddress();
    }

    receive(msg: DeployUserContract) {
        let init: StateInit = initOf UserData(msg.id, msg.owner, msg.publicKey);
        let addressContract: Address = contractAddress(init);

        send(SendParameters{
            to: addressContract,
            value: 0,
            mode: SendRemainingValue + SendIgnoreErrors,
            bounce: true,
            code: init.code,
            data: init.data,
            body: Deploy{queryId: 0}.toCell()
        });
    }
}

contract UserData with Deployable {
    id: Int as uint64;
    owner: Address;
    publicKey: String;

    init(id: Int, owner: Address, publicKey: String){
        self.id = id;
        self.owner = owner;
        self.publicKey = publicKey;
    }

    get fun myAddress(): Address {
        return myAddress();
    }

    get fun myId(): Int {
        return self.id;
    }

    get fun myPublicKey(): String {
        return self.publicKey;
    }
}
