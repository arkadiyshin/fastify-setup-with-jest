import { join } from 'path';
import AutoLoad, { AutoloadPluginOptions } from '@fastify/autoload';
import { FastifyPluginAsync } from 'fastify';


/**
 * Extends the AutoloadPluginOptions with customs options
 * @date 11/12/2022 - 10:23:35 PM
 *
 * @export
 * @typedef {AppOptions}
 */
export type AppOptions = {
  // Place your custom options for app below here.
} & Partial<AutoloadPluginOptions>;



/**
 * Pass --options via CLI arguments in command to enable these options.
 * @date 11/12/2022 - 10:25:38 PM
 *
 * @type {AppOptions}
 */
const options: AppOptions = {
}


/**
 * Create app as a plugin. Use to run server with fastify-cli or in helper for unit-tests
 * @date 11/12/2022 - 10:25:55 PM
 *
 * @async
 * @param {*} fastify - 
 * @param {*} opts - 
 * @returns {Promise<void>} - the app plugin as a promise
 */
const app: FastifyPluginAsync<AppOptions> = async (
  fastify,
  opts
): Promise<void> => {
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  
  
  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'plugins'),
    options: opts
  })

  // This loads all plugins defined in routes
  // define your routes in one of these

  
  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'routes'),
    options: opts,
    routeParams: true
  })

};

export default app;
export { app, options }
