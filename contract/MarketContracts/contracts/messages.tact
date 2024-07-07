message DeployUser {
    publicKey: String;
}

message UpdateUserPublicKey {
    publicKey: String;
    sender: Address;
}

message UpdateUserPublicKey_Responce {
    updated: Bool;
    sender: Address;
}

message UserContractDeploy_Responce {
    address: Address;
    owner: Address;
    publicKey: String;
}
