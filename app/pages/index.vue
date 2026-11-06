<template>
    <div>
        <!-- Hero -->
        <section class="grid items-center gap-10 pb-12 pt-12 md:grid-cols-[1fr_auto] md:pt-20">
            <div>
                <p class="label flex items-center gap-2">
                    <span class="size-2 rounded-full bg-sun" aria-hidden="true"></span>
                    Remote · Pacific time
                </p>
                <h1 class="mt-5 text-[clamp(3.25rem,10vw,7.5rem)] !leading-[0.92] !tracking-[-0.04em]">
                    {{ person.fullName }}
                </h1>
                <p class="mt-6 max-w-2xl font-display text-2xl leading-snug tracking-tight md:text-3xl">
                    Senior Full-Stack Engineer building <span class="text-accent">SaaS</span>,
                    <span class="text-accent">AI integrations</span> and
                    <span class="text-accent">automation</span>.
                </p>
            </div>
            <figure class="relative mx-auto w-40 md:w-52">
                <img
                    :src="person.profileImg"
                    :alt="`Portrait of ${person.fullName}`"
                    width="800"
                    height="800"
                    fetchpriority="high"
                    class="aspect-square w-full rounded-3xl object-cover"
                >
                <figcaption class="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-xs font-medium text-canvas">
                    {{ content.quote }}
                    <ArrowUpRight class="size-3.5 text-sun" aria-hidden="true" />
                </figcaption>
            </figure>
        </section>

        <section class="border-t border-line pt-8">
            <p class="max-w-3xl text-lg">{{ person.summary }}</p>
            <div class="mt-6 flex flex-wrap items-center gap-3">
                <NuxtLink to="/portfolio" class="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-medium text-on-accent transition-opacity hover:opacity-90">
                    See Portfolio
                    <ArrowRight class="size-4" aria-hidden="true" />
                </NuxtLink>
                <a :href="content.externalLinks.resume" download="Marcelo-Oblan-III-Resume.pdf" class="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-3 font-medium transition-colors hover:border-ink">
                    <Download class="size-4" aria-hidden="true" />
                    Download Resume
                </a>
            </div>
            <ul class="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem]">
                <li>
                    <a :href="social.email.value" class="flex items-center gap-2 [overflow-wrap:anywhere] hover:text-accent">
                        <Mail class="size-4 shrink-0 text-muted" aria-hidden="true" />
                        {{ social.email.text }}
                    </a>
                </li>
                <li>
                    <a :href="social.github.value" target="_blank" rel="me noopener" class="flex items-center gap-2 [overflow-wrap:anywhere] hover:text-accent">
                        <Github class="size-4 shrink-0 text-muted" aria-hidden="true" />
                        {{ social.github.text }}
                    </a>
                </li>
            </ul>
        </section>

        <!-- Quick facts -->
        <section aria-label="Quick facts" class="mt-14">
            <dl class="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
                <div v-for="fact in facts" :key="fact.label" class="bg-surface p-5">
                    <dt class="label">{{ fact.label }}</dt>
                    <dd class="mt-2 font-display text-3xl font-semibold tracking-tight">{{ fact.value }}</dd>
                    <dd v-if="fact.note" class="mt-1 text-sm text-muted">{{ fact.note }}</dd>
                </div>
            </dl>
        </section>

        <!-- AI work spotlight -->
        <section class="mt-5 grid gap-8 rounded-2xl bg-accent-soft p-6 md:grid-cols-[1fr_minmax(0,20rem)] md:items-center md:p-10" aria-labelledby="spotlight-heading">
            <div>
                <p class="label flex items-center gap-2 !text-ink">
                    <span class="size-2 shrink-0 rounded-full bg-sun" aria-hidden="true"></span>
                    {{ content.spotlight.label }}
                </p>
                <h2 id="spotlight-heading" class="mt-4 text-3xl md:text-5xl">{{ content.spotlight.title }}</h2>
                <p class="mt-4 max-w-2xl">{{ content.spotlight.description }}</p>
                <p class="mt-4 font-mono text-xs leading-relaxed text-muted">{{ content.spotlight.stack.join(' · ') }}</p>
                <NuxtLink to="/work-experience" class="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
                    See Work Experience
                    <ArrowRight class="size-4" aria-hidden="true" />
                </NuxtLink>
            </div>
            <ul class="grid grid-cols-2 gap-3" aria-label="Record types collected">
                <li v-for="record in content.spotlight.records" :key="record" class="rounded-xl bg-surface p-4 font-display text-lg font-semibold leading-tight tracking-tight">
                    {{ record }}
                </li>
            </ul>
        </section>

        <!-- GitHub -->
        <section class="mt-5 rounded-2xl border border-line bg-surface p-5 md:p-7" aria-labelledby="github-heading">
            <div class="flex flex-wrap items-baseline justify-between gap-2">
                <h2 id="github-heading" class="text-2xl">GitHub Contributions</h2>
                <a :href="social.github.value" target="_blank" rel="me noopener" class="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
                    See Reference
                    <ArrowUpRight class="size-4" aria-hidden="true" />
                </a>
            </div>
            <div class="mt-4 overflow-x-auto">
                <img
                    :src="content.chartSrc"
                    alt="GitHub contribution chart for marcelooblan2016, showing activity over the past year"
                    width="663"
                    height="104"
                    loading="lazy"
                    class="github-chart h-auto w-full min-w-[640px]"
                >
            </div>
        </section>

        <!-- Latest works -->
        <section class="mt-20" aria-labelledby="work-heading">
            <div class="flex items-end justify-between gap-4">
                <h2 id="work-heading" class="section-title">Latest Works</h2>
                <NuxtLink to="/portfolio" class="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-accent hover:underline">
                    See More
                    <ArrowRight class="size-4" aria-hidden="true" />
                </NuxtLink>
            </div>
            <div class="mt-8 grid gap-5 md:grid-cols-2">
                <ProjectCard v-for="project in featuredProjects" :key="project.slug" :project="project" />
            </div>
        </section>

        <!-- Testimonials -->
        <section class="mt-20" aria-labelledby="testimonials-heading">
            <h2 id="testimonials-heading" class="section-title">What people say</h2>
            <div class="mt-8 gap-5 md:columns-2">
                <figure v-for="testimonial in testimonials" :key="testimonial.name" class="mb-5 break-inside-avoid rounded-2xl border border-line bg-surface p-6">
                    <blockquote class="text-[0.975rem]">{{ testimonial.message.replace(/^"|"\s*$/g, '').trim() }}</blockquote>
                    <figcaption class="mt-4 border-t border-line pt-3">
                        <span class="block font-medium">{{ testimonial.name }}</span>
                        <span v-if="testimonial.position" class="block text-sm text-muted">{{ testimonial.position }}</span>
                    </figcaption>
                </figure>
            </div>
        </section>

        <!-- Contact -->
        <section class="mt-20 rounded-3xl bg-accent p-8 text-on-accent md:p-12">
            <h2 class="text-4xl md:text-6xl">Let's Connect</h2>
            <p class="mt-4 max-w-xl text-lg">Have a project, a role, or a legacy app that needs modernizing? Send me a message.</p>
            <NuxtLink to="/contact" class="mt-6 inline-flex items-center gap-2 rounded-full bg-on-accent px-5 py-3 font-medium text-accent transition-opacity hover:opacity-90">
                Contact Me
                <ArrowRight class="size-4" aria-hidden="true" />
            </NuxtLink>
        </section>
    </div>
</template>
<script setup lang="ts">
import { ArrowRight, ArrowUpRight, Download, Github, Mail } from 'lucide-vue-next'
import { content, featuredProjects, visibleProjects } from '@utils/content.js'

const { person, social, testimonials, experiences } = content

const remoteCount = experiences.filter((experience) => experience.type === 'Remote').length

const facts = [
    { label: 'Experience', value: '14+ years' },
    { label: 'Companies', value: experiences.length, note: `${remoteCount} US (remote), ${experiences.length - remoteCount} PH (office)` },
    { label: 'Projects', value: visibleProjects.length },
    { label: 'Core stack', value: 'Laravel, Vue, PHP' },
]

usePageSeo({
    title: 'Marcelo Oblan III | Senior Full-Stack Engineer, Laravel & Vue',
    description: 'Marcelo Oblan III is a Senior Full-Stack Engineer with 14+ years building SaaS, AI integrations and automation with Laravel, Vue, Claude and OpenAI. Remote.',
    path: '/',
    schema: [{
        '@type': 'ProfilePage',
        url: 'https://moblan.dev/',
        name: `${person.fullName} | Senior Full-Stack Engineer`,
        mainEntity: { '@id': personSchema['@id'] },
    }],
})
</script>
