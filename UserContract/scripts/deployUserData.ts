import { toNano, Address } from '@ton/core';
import { UserData } from '../wrappers/UserData';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    // Получить адрес отправителя
    const senderAddress = provider.sender().address as Address;

    // Создать контракт с передачей адреса отправителя
    const userData = provider.open(
        await UserData.fromInit(senderAddress, "")
    );

    // Отправить транзакцию для развертывания контракта
    await userData.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    // Дождаться развертывания контракта
    await provider.waitForDeploy(userData.address);

    // Вызвать методы контракта
}