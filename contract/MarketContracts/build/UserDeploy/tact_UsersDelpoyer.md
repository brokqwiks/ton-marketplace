# TACT Compilation Report
Contract: UsersDelpoyer
BOC Size: 1142 bytes

# Types
Total Types: 12

## StateInit
TLB: `_ code:^cell data:^cell = StateInit`
Signature: `StateInit{code:^cell,data:^cell}`

## Context
TLB: `_ bounced:bool sender:address value:int257 raw:^slice = Context`
Signature: `Context{bounced:bool,sender:address,value:int257,raw:^slice}`

## SendParameters
TLB: `_ bounce:bool to:address value:int257 mode:int257 body:Maybe ^cell code:Maybe ^cell data:Maybe ^cell = SendParameters`
Signature: `SendParameters{bounce:bool,to:address,value:int257,mode:int257,body:Maybe ^cell,code:Maybe ^cell,data:Maybe ^cell}`

## Deploy
TLB: `deploy#946a98b6 queryId:uint64 = Deploy`
Signature: `Deploy{queryId:uint64}`

## DeployOk
TLB: `deploy_ok#aff90f57 queryId:uint64 = DeployOk`
Signature: `DeployOk{queryId:uint64}`

## FactoryDeploy
TLB: `factory_deploy#6d0ff13b queryId:uint64 cashback:address = FactoryDeploy`
Signature: `FactoryDeploy{queryId:uint64,cashback:address}`

## ChangeOwner
TLB: `change_owner#819dbe99 queryId:uint64 newOwner:address = ChangeOwner`
Signature: `ChangeOwner{queryId:uint64,newOwner:address}`

## ChangeOwnerOk
TLB: `change_owner_ok#327b2b4a queryId:uint64 newOwner:address = ChangeOwnerOk`
Signature: `ChangeOwnerOk{queryId:uint64,newOwner:address}`

## DeployUser
TLB: `deploy_user#484b9977 publicKey:^string = DeployUser`
Signature: `DeployUser{publicKey:^string}`

## UpdateUserPublicKey
TLB: `update_user_public_key#feb00723 publicKey:^string sender:address = UpdateUserPublicKey`
Signature: `UpdateUserPublicKey{publicKey:^string,sender:address}`

## UpdateUserPublicKey_Responce
TLB: `update_user_public_key_responce#aa4a7fb9 updated:bool sender:address = UpdateUserPublicKey_Responce`
Signature: `UpdateUserPublicKey_Responce{updated:bool,sender:address}`

## UserContractDeploy_Responce
TLB: `user_contract_deploy_responce#2dabfdfb address:address owner:address publicKey:^string = UserContractDeploy_Responce`
Signature: `UserContractDeploy_Responce{address:address,owner:address,publicKey:^string}`

# Get Methods
Total Get Methods: 3

## myAddress

## totalUsers

## userContractAddress
Argument: userAddress

# Error Codes
2: Stack underflow
3: Stack overflow
4: Integer overflow
5: Integer out of expected range
6: Invalid opcode
7: Type check error
8: Cell overflow
9: Cell underflow
10: Dictionary error
13: Out of gas error
32: Method ID not found
34: Action is invalid or not supported
37: Not enough TON
38: Not enough extra-currencies
128: Null reference exception
129: Invalid serialization prefix
130: Invalid incoming message
131: Constraints error
132: Access denied
133: Contract stopped
134: Invalid argument
135: Code of a contract was not found
136: Invalid address
137: Masterchain support is not enabled for this contract
57920: Owner only