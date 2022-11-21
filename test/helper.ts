// This file contains code that we reuse between our tests.
//const helper = require('fastify-cli/helper.js')
//import * as path from 'path'
// import Fastify from 'fastify';
// import fp from 'fastify-plugin';
// import app from '../src/app';

// //export type Test = typeof tap['Test']['prototype'];

// //const AppPath = path.join(__dirname, '..', 'src', 'app.ts')

// // Fill in this config with all the configurations
// // needed for testing the application
// async function config() {
//   return {}
// }

// // Automatically build and tear down our instance
// async function build() {
//   // you can set all the options supported by the fastify CLI command
//   //const argv = [AppPath]
//   const Test = Fastify();

//   // fastify-plugin ensures that all decorators
//   // are exposed for testing purposes, this is
//   // different from the production setup
//   // await helper.build(app, await config())

//   // // Tear down our app after we are done
//   // Test.teardown(() => void Test.close())

//   // return app

//   beforeAll(async () => {
//     void Test.register(fp(app), await config());
//     await Test.ready();
//   });

//   afterAll(() => Test.close());

//   return Test;
// }

// export {
//   config,
//   build
// }

// This file contains code that we reuse between our tests.
import Fastify from 'fastify';
import fp from 'fastify-plugin';
import App from '../src/app';

// Fill in this config with all the configurations
// needed for testing the application
async function config() {
    return {};
}

// Automatically build and tear down our instance
function build() {
    const app = Fastify();

    // fastify-plugin ensures that all decorators
    // are exposed for testing purposes, this is
    // different from the production setup

    beforeAll(async () => {
        void app.register(fp(App), await config());
        await app.ready();
    });

    afterAll(() => app.close());

    return app;
}

export { config, build };