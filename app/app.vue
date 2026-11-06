<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
<script setup lang="ts">
useHead({
    meta: [
        { name: 'author', content: 'Marcelo Oblan III' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: '#f6f7f5' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#0b1016' },
    ],
    link: [
        { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/images/icon-192.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/images/icon-512.png' },
        { rel: 'apple-touch-icon', href: '/images/apple-touch-icon.png' },
        { rel: 'alternate', type: 'text/plain', title: 'LLM-readable profile', href: '/llms.txt' },
    ],
})
</script>
