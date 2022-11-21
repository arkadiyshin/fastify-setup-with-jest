import fp from 'fastify-plugin'
import fastifyJwt from '@fastify/jwt';
//import { JWT_SECRET_KEY } from "../configuration.js";


export default fp(async (fastify: any) => {

    fastify.register(fastifyJwt, {
        secret: 'JWT_SECRET_KEY',
    });

})