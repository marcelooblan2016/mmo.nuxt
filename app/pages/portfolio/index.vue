<template>
    <div>
        <PageIntro title="Portfolio" crumb="Portfolio">
            {{ visibleProjects.length }} projects, from SaaS products and online marketplaces to payment gateways and government platforms.
        </PageIntro>

        <div class="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects by technology">
            <button
                v-for="filter in FILTERS"
                :key="filter"
                type="button"
                :aria-pressed="active === filter"
                class="rounded-full border px-4 py-1.5 text-sm transition-colors"
                :class="active === filter ? 'border-ink bg-ink text-canvas' : 'border-line text-muted hover:text-ink'"
                @click="active = filter"
            >
                {{ filter }}
            </button>
        </div>

        <h2 class="sr-only">Projects</h2>
        <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard v-for="(project, index) in projects" :key="project.slug" :project="project" :eager="index < 3" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { visibleProjects } from '@utils/content.js'

const ALL = 'All'
const FILTERS = [ALL, 'Laravel', 'Vue.js', 'Wordpress', 'AI']
const AI_TECH = /open ?ai/i

const active = ref(ALL)

const projects = computed(() => visibleProjects.filter((project) => {
    if (active.value === ALL) return true
    if (active.value === 'AI') return project.tech_used.some((tech) => AI_TECH.test(tech))
    return project.tech_used.some((tech) => tech.startsWith(active.value))
}))

usePageSeo({
    title: 'Portfolio: SaaS & Web Projects | Marcelo Oblan III',
    description: 'Selected work by Marcelo Oblan III, including Fortbyte.io, Filechamp.io, AllCars and Wild Alert. SaaS, marketplaces and web platforms built with Laravel and Vue.',
    path: '/portfolio',
    crumb: 'Portfolio',
    schema: [{
        '@type': 'ItemList',
        name: 'Projects by Marcelo Oblan III',
        itemListElement: visibleProjects.map((project, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: project.title,
            url: `https://moblan.dev/portfolio/${project.slug}`,
        })),
    }],
})
</script>
