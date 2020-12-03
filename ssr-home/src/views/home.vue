<template>
    <div>
        <p v-if="$route.query.tab !== 'new'">
            我是首页 ——
            <a href="https://k8seggjs.hacker-linner.com/" target="_blank"
                >互相交流，一起云原生！</a
            >
        </p>
        <p v-else>首页最新内容</p>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'home'
});
</script>
