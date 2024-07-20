import { CompilerConfig } from '@ton/blueprint';

export const compile: CompilerConfig = {
    lang: 'tact',
    target: 'contracts/user_deploy.tact',
    options: {
        debug: true,
    },
};
