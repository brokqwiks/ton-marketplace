import { 
    Cell,
    Slice, 
    Address, 
    Builder, 
    beginCell, 
    ComputeError, 
    TupleItem, 
    TupleReader, 
    Dictionary, 
    contractAddress, 
    ContractProvider, 
    Sender, 
    Contract, 
    ContractABI, 
    ABIType,
    ABIGetter,
    ABIReceiver,
    TupleBuilder,
    DictionaryValue
} from 'ton-core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    let sc_0 = slice;
    let _code = sc_0.loadRef();
    let _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
    let builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Cell;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw);
    };
}

export function loadContext(slice: Slice) {
    let sc_0 = slice;
    let _bounced = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _raw = sc_0.loadRef();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounced);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw);
    return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        }
    }
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
    };
}

export function loadSendParameters(slice: Slice) {
    let sc_0 = slice;
    let _bounce = sc_0.loadBit();
    let _to = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _mode = sc_0.loadIntBig(257);
    let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounce);
    builder.writeAddress(source.to);
    builder.writeNumber(source.value);
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        }
    }
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadDeploy(src.loadRef().beginParse());
        }
    }
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeployOk(src)).endCell());
        },
        parse: (src) => {
            return loadDeployOk(src.loadRef().beginParse());
        }
    }
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1829761339, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.cashback);
    };
}

export function loadFactoryDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _cashback = sc_0.loadAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.cashback);
    return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadFactoryDeploy(src.loadRef().beginParse());
        }
    }
}

export type ChangeOwner = {
    $$type: 'ChangeOwner';
    queryId: bigint;
    newOwner: Address;
}

export function storeChangeOwner(src: ChangeOwner) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2174598809, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadChangeOwner(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2174598809) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _newOwner = sc_0.loadAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwner(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwner(source: ChangeOwner) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.newOwner);
    return builder.build();
}

function dictValueParserChangeOwner(): DictionaryValue<ChangeOwner> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeChangeOwner(src)).endCell());
        },
        parse: (src) => {
            return loadChangeOwner(src.loadRef().beginParse());
        }
    }
}

export type ChangeOwnerOk = {
    $$type: 'ChangeOwnerOk';
    queryId: bigint;
    newOwner: Address;
}

export function storeChangeOwnerOk(src: ChangeOwnerOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(846932810, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadChangeOwnerOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 846932810) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _newOwner = sc_0.loadAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwnerOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwnerOk(source: ChangeOwnerOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.newOwner);
    return builder.build();
}

function dictValueParserChangeOwnerOk(): DictionaryValue<ChangeOwnerOk> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeChangeOwnerOk(src)).endCell());
        },
        parse: (src) => {
            return loadChangeOwnerOk(src.loadRef().beginParse());
        }
    }
}

export type DeployUser = {
    $$type: 'DeployUser';
    publicKey: string;
}

export function storeDeployUser(src: DeployUser) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1212914039, 32);
        b_0.storeStringRefTail(src.publicKey);
    };
}

export function loadDeployUser(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1212914039) { throw Error('Invalid prefix'); }
    let _publicKey = sc_0.loadStringRefTail();
    return { $$type: 'DeployUser' as const, publicKey: _publicKey };
}

function loadTupleDeployUser(source: TupleReader) {
    let _publicKey = source.readString();
    return { $$type: 'DeployUser' as const, publicKey: _publicKey };
}

function storeTupleDeployUser(source: DeployUser) {
    let builder = new TupleBuilder();
    builder.writeString(source.publicKey);
    return builder.build();
}

function dictValueParserDeployUser(): DictionaryValue<DeployUser> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeployUser(src)).endCell());
        },
        parse: (src) => {
            return loadDeployUser(src.loadRef().beginParse());
        }
    }
}

export type UpdateUserPublicKey = {
    $$type: 'UpdateUserPublicKey';
    publicKey: string;
    sender: Address;
}

export function storeUpdateUserPublicKey(src: UpdateUserPublicKey) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(4272949027, 32);
        b_0.storeStringRefTail(src.publicKey);
        b_0.storeAddress(src.sender);
    };
}

export function loadUpdateUserPublicKey(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 4272949027) { throw Error('Invalid prefix'); }
    let _publicKey = sc_0.loadStringRefTail();
    let _sender = sc_0.loadAddress();
    return { $$type: 'UpdateUserPublicKey' as const, publicKey: _publicKey, sender: _sender };
}

function loadTupleUpdateUserPublicKey(source: TupleReader) {
    let _publicKey = source.readString();
    let _sender = source.readAddress();
    return { $$type: 'UpdateUserPublicKey' as const, publicKey: _publicKey, sender: _sender };
}

function storeTupleUpdateUserPublicKey(source: UpdateUserPublicKey) {
    let builder = new TupleBuilder();
    builder.writeString(source.publicKey);
    builder.writeAddress(source.sender);
    return builder.build();
}

function dictValueParserUpdateUserPublicKey(): DictionaryValue<UpdateUserPublicKey> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeUpdateUserPublicKey(src)).endCell());
        },
        parse: (src) => {
            return loadUpdateUserPublicKey(src.loadRef().beginParse());
        }
    }
}

export type UpdateUserPublicKey_Responce = {
    $$type: 'UpdateUserPublicKey_Responce';
    updated: boolean;
    sender: Address;
}

export function storeUpdateUserPublicKey_Responce(src: UpdateUserPublicKey_Responce) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2857009081, 32);
        b_0.storeBit(src.updated);
        b_0.storeAddress(src.sender);
    };
}

export function loadUpdateUserPublicKey_Responce(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2857009081) { throw Error('Invalid prefix'); }
    let _updated = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    return { $$type: 'UpdateUserPublicKey_Responce' as const, updated: _updated, sender: _sender };
}

function loadTupleUpdateUserPublicKey_Responce(source: TupleReader) {
    let _updated = source.readBoolean();
    let _sender = source.readAddress();
    return { $$type: 'UpdateUserPublicKey_Responce' as const, updated: _updated, sender: _sender };
}

function storeTupleUpdateUserPublicKey_Responce(source: UpdateUserPublicKey_Responce) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.updated);
    builder.writeAddress(source.sender);
    return builder.build();
}

function dictValueParserUpdateUserPublicKey_Responce(): DictionaryValue<UpdateUserPublicKey_Responce> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeUpdateUserPublicKey_Responce(src)).endCell());
        },
        parse: (src) => {
            return loadUpdateUserPublicKey_Responce(src.loadRef().beginParse());
        }
    }
}

export type UserContractDeploy_Responce = {
    $$type: 'UserContractDeploy_Responce';
    address: Address;
    owner: Address;
    publicKey: string;
}

export function storeUserContractDeploy_Responce(src: UserContractDeploy_Responce) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(766246395, 32);
        b_0.storeAddress(src.address);
        b_0.storeAddress(src.owner);
        b_0.storeStringRefTail(src.publicKey);
    };
}

export function loadUserContractDeploy_Responce(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 766246395) { throw Error('Invalid prefix'); }
    let _address = sc_0.loadAddress();
    let _owner = sc_0.loadAddress();
    let _publicKey = sc_0.loadStringRefTail();
    return { $$type: 'UserContractDeploy_Responce' as const, address: _address, owner: _owner, publicKey: _publicKey };
}

function loadTupleUserContractDeploy_Responce(source: TupleReader) {
    let _address = source.readAddress();
    let _owner = source.readAddress();
    let _publicKey = source.readString();
    return { $$type: 'UserContractDeploy_Responce' as const, address: _address, owner: _owner, publicKey: _publicKey };
}

function storeTupleUserContractDeploy_Responce(source: UserContractDeploy_Responce) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.address);
    builder.writeAddress(source.owner);
    builder.writeString(source.publicKey);
    return builder.build();
}

function dictValueParserUserContractDeploy_Responce(): DictionaryValue<UserContractDeploy_Responce> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeUserContractDeploy_Responce(src)).endCell());
        },
        parse: (src) => {
            return loadUserContractDeploy_Responce(src.loadRef().beginParse());
        }
    }
}

 type UsersDelpoyer_init_args = {
    $$type: 'UsersDelpoyer_init_args';
    name: string;
}

function initUsersDelpoyer_init_args(src: UsersDelpoyer_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeStringRefTail(src.name);
    };
}

async function UsersDelpoyer_init(name: string) {
    const __code = Cell.fromBase64('te6ccgECGgEABGoAART/APSkE/S88sgLAQIBYgIDAqTQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxa2zzy4ILI+EMBzH8BygBZyFjPFslYzMv/ye1UFgQCASAKCwLKAZIwf+BwIddJwh+VMCDXCx/eIIIQSEuZd7qOlTDTHwGCEEhLmXe68uCB1AHQMds8f+CCEJRqmLa6jqfTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J+EIBcG3bPH/gMHAFBwKeAaT4Q/hC+CjbPFxwWchwAcsBcwHLAXABywASzMzJ+QDIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiPhCFRkGAvjIWYIQ/rAHI1ADyx/IWM8WyQHMASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFslEE4IQC+vCAAJyQGZ/RmbbPH/4QshZghCqSn+5UAPLH8oAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFsn4QgF/bds8CAcBOm1tIm6zmVsgbvLQgG8iAZEy4hAkcAMEgEJQI9s8CAHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAJAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAgEgDA0CASAQEQIRuvhds82zxsIYFg4CEbjbzbPNs8bCGBYPAAT4KAACIAC5u70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAgEgEhMCASAUFQJLtcqEGukwICF3XlwRBBrhYUQQIJ/3XloRMGE3XlwRG2eLG2eNhDAWFwARsK+7UTQ0gABgAHWybuNDVpcGZzOi8vUW1mN29wZ0p5amhQWlVIZUJaOHpFOG5SYmtZbTFtYkpiZWduQUhZZFh3ZnlGMYIAFO7UTQ1AH4Y9IAAZnUAdAB0/9ZbBLg+CjXCwqDCbry4InUAdAB0ds8GAGQ+EP4KBLbPHBZyHABywFzAcsBcAHLABLMzMn5AMhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIGQACcADWAtD0BDBtAYEqCQGAEPQPb6Hy4IcBgSoJIgKAEPQXyAHI9ADJAcxwAcoAQANZINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFsk=');
    const __system = Cell.fromBase64('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');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initUsersDelpoyer_init_args({ $$type: 'UsersDelpoyer_init_args', name })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const UsersDelpoyer_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack underflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    13: { message: `Out of gas error` },
    32: { message: `Method ID not found` },
    34: { message: `Action is invalid or not supported` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    135: { message: `Code of a contract was not found` },
    136: { message: `Invalid address` },
    137: { message: `Masterchain support is not enabled for this contract` },
    57920: { message: `Owner only` },
}

const UsersDelpoyer_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ChangeOwner","header":2174598809,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ChangeOwnerOk","header":846932810,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"DeployUser","header":1212914039,"fields":[{"name":"publicKey","type":{"kind":"simple","type":"string","optional":false}}]},
    {"name":"UpdateUserPublicKey","header":4272949027,"fields":[{"name":"publicKey","type":{"kind":"simple","type":"string","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"UpdateUserPublicKey_Responce","header":2857009081,"fields":[{"name":"updated","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"UserContractDeploy_Responce","header":766246395,"fields":[{"name":"address","type":{"kind":"simple","type":"address","optional":false}},{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"publicKey","type":{"kind":"simple","type":"string","optional":false}}]},
]

const UsersDelpoyer_getters: ABIGetter[] = [
    {"name":"myAddress","arguments":[],"returnType":{"kind":"simple","type":"address","optional":false}},
    {"name":"totalUsers","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"userContractAddress","arguments":[{"name":"userAddress","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"simple","type":"address","optional":false}},
]

const UsersDelpoyer_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"DeployUser"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class UsersDelpoyer implements Contract {
    
    static async init(name: string) {
        return await UsersDelpoyer_init(name);
    }
    
    static async fromInit(name: string) {
        const init = await UsersDelpoyer_init(name);
        const address = contractAddress(0, init);
        return new UsersDelpoyer(address, init);
    }
    
    static fromAddress(address: Address) {
        return new UsersDelpoyer(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  UsersDelpoyer_types,
        getters: UsersDelpoyer_getters,
        receivers: UsersDelpoyer_receivers,
        errors: UsersDelpoyer_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: DeployUser | Deploy) {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'DeployUser') {
            body = beginCell().store(storeDeployUser(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getMyAddress(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('myAddress', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
    async getTotalUsers(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('totalUsers', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getUserContractAddress(provider: ContractProvider, userAddress: Address) {
        let builder = new TupleBuilder();
        builder.writeAddress(userAddress);
        let source = (await provider.get('userContractAddress', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
}