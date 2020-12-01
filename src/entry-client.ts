import { ClientOptions } from '@fmfe/genesis-core';
import { createClientApp } from '@fmfe/genesis-app';
import { createRouter } from './router';
import Vue from 'vue';
import VueMeta from 'vue-meta';
import App from './app.vue';

Vue.use(VueMeta)

export default async (clientOptions: ClientOptions): Promise<Vue> => {
    return createClientApp({
        App,
        clientOptions,
        vueOptions: {
            router: createRouter(clientOptions.state)
        }
    });
};
