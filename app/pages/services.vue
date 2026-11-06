<template>
    <div>
        <PageIntro title="Services" crumb="Services">
            How I can help your team.
        </PageIntro>
        <div class="grid gap-5 md:grid-cols-2">
            <section v-for="service in content.services" :key="service.title" class="rounded-2xl border border-line bg-surface p-6">
                <h2 class="text-2xl">{{ service.title }}</h2>
                <p class="mt-3 text-muted">{{ service.description }}</p>
            </section>
        </div>
    </div>
</template>
<script setup lang="ts">
// Hidden: /services redirects home via routeRules in nuxt.config.ts.
import { content } from '@utils/content.js'

usePageSeo({
    title: 'Services | Marcelo Oblan III',
    description: 'Web development, legacy modernization, API integration, AI data automation and mobile development.',
    path: '/services',
    crumb: 'Services',
})
</script>
