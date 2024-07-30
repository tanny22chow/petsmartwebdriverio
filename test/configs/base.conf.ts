import type { Options } from '@wdio/types'
import {environments} from './environments.ts'
export const config: Options.Testrunner = {

    runner: 'local',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true
        }
    },
    baseUrl: environments[`${process.env.execenv}`].baseurl,

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
            browserVersion:'126'

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