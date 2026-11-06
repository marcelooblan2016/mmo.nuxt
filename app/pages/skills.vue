<template>
    <div>
        <PageIntro title="Technical Skills" crumb="Skills">
            A full-stack toolkit centered on Laravel, Vue and AI tooling, from the database and API to deployment.
        </PageIntro>

        <div class="grid gap-5 md:grid-cols-2">
            <section v-for="group in content.skills" :key="group.type" class="rounded-2xl border border-line bg-surface p-6 md:last:odd:col-span-2">
                <h2 class="text-2xl">{{ group.type }}</h2>
                <ul class="mt-4 flex flex-wrap gap-2">
                    <li v-for="skill in group.lists" :key="skill" class="rounded-lg bg-accent-soft px-3 py-1 text-sm">
                        {{ skill }}
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>
<script setup lang="ts">
import { content } from '@utils/content.js'

usePageSeo({
    title: 'Technical Skills: AI, Laravel, Vue, Nuxt | Marcelo Oblan III',
    description: 'Technical skills of Marcelo Oblan III: Claude, OpenAI, Gemini, Playwright, Stagehand, Laravel, PHP, Vue.js, Nuxt, TypeScript, Node.js, MySQL, Docker and AWS.',
    path: '/skills',
    crumb: 'Skills',
})
</script>
