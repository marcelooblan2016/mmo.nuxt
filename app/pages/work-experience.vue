<template>
    <div>
        <PageIntro title="Work Experience" crumb="Work Experience">
            3 US companies (remote) and 2 Philippine companies (office), from a four-person startup team to senior engineering.
        </PageIntro>

        <ol class="border-t border-line">
            <li v-for="experience in content.experiences" :key="experience.company" class="grid gap-3 border-b border-line py-8 md:grid-cols-[12rem_1fr] md:gap-8">
                <div>
                    <p class="label !text-ink">{{ experience.time_frame }}</p>
                    <p class="label mt-1">{{ experience.type }}</p>
                </div>
                <div>
                    <h2 class="text-3xl">{{ experience.title }}</h2>
                    <p class="mt-2 font-medium text-accent">{{ experience.company }}</p>
                    <p class="text-sm text-muted">{{ experience.location }}</p>
                    <ul class="mt-4 max-w-3xl list-disc space-y-2 pl-5 marker:text-sun">
                        <li v-for="line in experienceHighlights(experience)" :key="line">{{ line }}</li>
                    </ul>
                    <p class="mt-4 font-mono text-xs leading-relaxed text-muted">
                        {{ experienceSkills(experience).join(' · ') }}
                    </p>
                </div>
            </li>
        </ol>
    </div>
</template>
<script setup lang="ts">
import { content, experienceHighlights, experienceSkills } from '@utils/content.js'

usePageSeo({
    title: 'Work Experience | Marcelo Oblan III, Senior Full-Stack Engineer',
    description: 'Career history of Marcelo Oblan III: AFX Research, AllCars.com, DiegoDev Group, Yondu and International Payments Processing.',
    path: '/work-experience',
    crumb: 'Work Experience',
})
</script>
