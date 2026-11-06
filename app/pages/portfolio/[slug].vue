<template>
    <article>
        <PageIntro :title="project.title" :crumb="project.title" :parent="{ text: 'Portfolio', to: '/portfolio' }">
            {{ project.description }}
        </PageIntro>

        <div class="grid items-start gap-8 lg:grid-cols-[1fr_18rem]">
            <aside class="rounded-2xl border border-line bg-surface p-6 lg:sticky lg:top-24 lg:order-last">
                <h2 class="sr-only">Project details</h2>
                <dl class="space-y-4">
                    <div v-if="dates">
                        <dt class="label">Timeline</dt>
                        <dd class="mt-1">{{ dates }}</dd>
                    </div>
                    <div v-if="isRetired(project)">
                        <dt class="label">Status</dt>
                        <dd class="mt-1 flex items-center gap-2">
                            <span class="size-2 rounded-full bg-sun" aria-hidden="true"></span>
                            {{ PROJECT_RETIRED_LABEL }}
                        </dd>
                    </div>
                    <div>
                        <dt class="label">Tech stack</dt>
                        <dd class="mt-2">
                            <ul class="flex flex-wrap gap-2">
                                <li v-for="tech in project.tech_used" :key="tech" class="rounded-lg bg-accent-soft px-2.5 py-1 text-sm">{{ tech }}</li>
                            </ul>
                        </dd>
                    </div>
                </dl>
                <a v-if="project.url" :href="project.url" target="_blank" rel="noopener" class="mt-6 flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 font-medium text-on-accent transition-opacity hover:opacity-90">
                    View Project
                    <ArrowUpRight class="size-4" aria-hidden="true" />
                </a>
            </aside>

            <div class="grid gap-4 sm:grid-cols-2">
                <a
                    v-for="(photo, index) in photos"
                    :key="photo"
                    :href="photo"
                    target="_blank"
                    :aria-label="`Open ${project.title} screenshot ${index + 1}`"
                    class="block overflow-hidden rounded-2xl border border-line bg-white"
                    :class="{ 'sm:col-span-2': index === 0 }"
                >
                    <img
                        :src="photo"
                        :alt="`${project.title} screenshot ${index + 1}`"
                        width="800"
                        height="500"
                        :loading="index === 0 ? 'eager' : 'lazy'"
                        class="aspect-[16/10] size-full object-contain"
                    >
                </a>
            </div>
        </div>

        <nav aria-label="More projects" class="mt-14 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
            <NuxtLink v-for="link in siblings" :key="link.label" :to="`/portfolio/${link.project.slug}`" class="group rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-accent" :class="{ 'sm:text-right': link.label === 'Next project' }">
                <span class="label block">{{ link.label }}</span>
                <span class="mt-1 block font-display text-xl font-semibold tracking-tight group-hover:text-accent">{{ link.project.title }}</span>
            </NuxtLink>
        </nav>
    </article>
</template>
<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import { findProject, frontPhoto, isRetired, PROJECT_RETIRED_LABEL, projectDates, projectPhotos, visibleProjects } from '@utils/content.js'

const route = useRoute()
const project = findProject(route.params.slug)

if (!project) {
    throw createError({ statusCode: 404, statusMessage: 'Project not found', fatal: true })
}

const dates = projectDates(project)
const photos = projectPhotos(project)

const index = visibleProjects.indexOf(project)
const total = visibleProjects.length
const siblings = [
    { label: 'Previous project', project: visibleProjects[(index - 1 + total) % total] },
    { label: 'Next project', project: visibleProjects[(index + 1) % total] },
]

const leadingTech = project.tech_used.slice(0, 4).join(', ')
const path = `/portfolio/${project.slug}`

usePageSeo({
    title: `${project.title}: Project by Marcelo Oblan III`,
    description: `${project.description} Built with ${leadingTech}.`.slice(0, 157).replace(/\s+\S*$/, '') + '...',
    path,
    crumb: project.title,
    parent: { name: 'Portfolio', path: '/portfolio' },
    schema: [{
        '@type': 'CreativeWork',
        name: project.title,
        description: project.description,
        url: `https://moblan.dev${path}`,
        image: `https://moblan.dev${frontPhoto(project)}`,
        keywords: project.tech_used.join(', '),
        creator: { '@id': personSchema['@id'] },
        ...(isRetired(project) ? { creativeWorkStatus: 'Retired' } : {}),
        ...(project.url ? { sameAs: project.url } : {}),
    }],
})
</script>
