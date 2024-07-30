import type { Options } from '@wdio/types'
export const config: Options.Testrunner = {

    runner: 'local',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true
        }
    },
    baseUrl: 'https://services.petsmart.com',

    specs: [
        '../specs/**/*.ts'
        
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,

    //
    capabilities: [
        {
            browserName: 'Chrome',
            browserVersion:'127'

        }

    ],
    logLevel: 'info',

    bail: 0,


    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    framework: 'mocha',


    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

}