import { CompilerConfig } from '@ton/blueprint';

export const compile: CompilerConfig = {
    lang: 'tact',
    target: 'contracts/user_data.tact',
    options: {
        debug: true,
    },
};
