import { RenderContext } from '@fmfe/genesis-core';
import { createServerApp } from '@fmfe/genesis-app';
import { createRouter } from './router';
import Vue from 'vue';
import VueMeta from 'vue-meta'
import App from './app.vue';

Vue.use(VueMeta)

export default async (renderContext: RenderContext): Promise<Vue> => {
    return createServerApp({
        App,
        renderContext,
        vueOptions: {
            router: createRouter(renderContext.data.state)
        }
    });
};
