import { useState, useEffect } from 'react';
import { Address } from 'ton-core';
import { useTonClient } from './useTonClient';
import { UserData } from '../wrappers/UserData';
import { OpenedContract } from '@ton/core';

export function useIsContractDeployed(contractAddress: Address) {
    const { client } = useTonClient();
    const [isDeployed, setIsDeployed] = useState<boolean | null>(null); // null означает, что состояние еще не определено
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const checkDeployment = async () => {
            if (!client || !contractAddress) {
                setLoading(false);
                return;
            }

            try {
                // Открываем контракт по указанному адресу
                const contract = await UserData.fromAddress(contractAddress);
                const openedContract = client.open(contract) as OpenedContract<UserData>;

                // Пробуем вызвать метод контракта, чтобы проверить, задеплоен ли он
                await openedContract.getMyOwner();
                
                setIsDeployed(true);
            } catch (error) {
                if (error instanceof Error) { 
                    // Проверяем на exit_code: -13
                    if (error.message.includes("exit_code: -13")) {
                        setIsDeployed(false);
                    } else {
                        console.error("Error while checking contract deployment:", error);
                        setError(error.message);
                    }
                } else {
                    setError("An unknown error occurred");
                }
            } finally {
                setLoading(false);
            }
        };

        checkDeployment();
    }, [client, contractAddress]);

    return { isDeployed, loading, error };
}