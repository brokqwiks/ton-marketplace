import "@stdlib/deploy";

message UserAuth {
    publicKeyHex: String;
    sender: Address;
}


contract UserData with Deployable {
    owner: Address;
    publicKeyHex: String;

    init(owner: Address, publicKeyHex: String){
        self.owner = owner;
        self.publicKeyHex = publicKeyHex; 
    }

    get fun owner(): Address{
        return self.owner;
    }

    get fun publicKeyHex(): String{
        return self.publicKeyHex;
    }

    receive(msg: UserAuth) {
        // Проверка, что сообщение отправлено владельцем
        require(msg.sender == self.owner, "Only the owner can change the public key");

        let receivePublicKey: String = msg.publicKeyHex;

        if (receivePublicKey != null && receivePublicKey != "") {
            self.publicKeyHex = receivePublicKey;
        }
    }

 

}
