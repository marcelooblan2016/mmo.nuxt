<template>
    <article class="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-accent">
        <div class="relative aspect-[16/10] overflow-hidden border-b border-line bg-white">
            <img
                :src="frontPhoto(project)"
                :alt="`${project.title} screenshot`"
                width="800"
                height="500"
                :loading="eager ? 'eager' : 'lazy'"
                :decoding="eager ? 'sync' : 'async'"
                class="size-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            >
            <span v-if="isRetired(project)" class="absolute left-3 top-3 rounded-full bg-ink px-3 py-1 text-xs font-medium text-canvas">
                {{ PROJECT_RETIRED_LABEL }}
            </span>
        </div>
        <div class="flex flex-1 flex-col p-5">
            <p v-if="dates" class="label">{{ dates }}</p>
            <h3 class="mt-2 text-2xl">
                <NuxtLink :to="`/portfolio/${project.slug}`" class="after:absolute after:inset-0 group-hover:text-accent">
                    {{ project.title }}
                </NuxtLink>
            </h3>
            <p class="mt-2 flex-1 text-[0.95rem] text-muted">{{ project.description }}</p>
            <p class="mt-4 font-mono text-xs leading-relaxed text-muted">
                {{ project.tech_used.join(' · ') }}
            </p>
        </div>
    </article>
</template>
<script setup lang="ts">
import { frontPhoto, isRetired, PROJECT_RETIRED_LABEL, projectDates } from '@utils/content.js'

const props = defineProps<{ project: any, eager?: boolean }>()
const dates = computed(() => projectDates(props.project))
</script>
