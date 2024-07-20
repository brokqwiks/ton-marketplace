import "@stdlib/deploy";
import "@stdlib/ownable";
import "./messages";

contract UserData with Deployable, Ownable {
    parent: Address;
    owner: Address;
    publicKey: String?;

    init(owner: Address, parent: Address){
        self.owner = owner;
        self.parent = parent;
        self.publicKey = null;
    }
    
    receive(msg: UpdateUserPublicKey){
        require(msg.sender == self.owner, "Owner only");
        self.publicKey = msg.publicKey;
    }

    get fun myBalance(): Int {
        return myBalance();
    }

    get fun myAddress(): Address {
        return myAddress();
    }

    get fun myOwner(): Address {
        return self.owner;
    }

    get fun myPublicKey(): String? {
        return self.publicKey;
    }
}

