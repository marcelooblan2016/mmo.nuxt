<template>
    <div class="max-w-3xl pb-10 pt-14 md:pt-20">
        <p class="label">
            <NuxtLink to="/" class="hover:text-ink">Home</NuxtLink>
            <template v-if="parent">
                <span aria-hidden="true"> / </span>
                <NuxtLink :to="parent.to" class="hover:text-ink">{{ parent.text }}</NuxtLink>
            </template>
            <span aria-hidden="true"> / </span>
            <span>{{ crumb }}</span>
        </p>
        <h1 class="mt-4 text-5xl md:text-7xl">{{ title }}</h1>
        <p class="mt-5 text-lg text-muted md:text-xl">
            <slot />
        </p>
    </div>
</template>
<script setup lang="ts">
defineProps<{ title: string, crumb: string, parent?: { text: string, to: string } }>()
</script>
