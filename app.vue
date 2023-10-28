<template>
    <NuxtLayout>
        <h1>{{  title }}</h1>
        <NuxtPage />
    </NuxtLayout>
</template>
<script lang="ts">
export default {
    setup () {
        const title = "BOOM";
        
        return {
            title
        };
    }
}
</script>
