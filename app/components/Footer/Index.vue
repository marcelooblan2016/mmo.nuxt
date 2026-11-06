<template>
    <footer class="mt-24 border-t border-line">
        <div class="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1fr_auto]">
            <div>
                <p class="font-display text-2xl font-semibold tracking-tight">
                    {{ content.quote }}
                </p>
                <p class="mt-2 text-sm text-muted">
                    © {{ year }} {{ content.person.fullName }}. All Rights Reserved.
                </p>
            </div>
            <div class="flex flex-col gap-4 md:items-end">
                <ul class="flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
                    <li v-for="item in content.menu" :key="item.slug">
                        <NuxtLink :to="item.value" class="hover:text-ink">{{ item.text }}</NuxtLink>
                    </li>
                </ul>
                <ul class="flex gap-1">
                    <li v-for="item in socials" :key="item.value">
                        <a :href="item.href" target="_blank" rel="me noopener" :aria-label="item.text" :title="item.text" class="block rounded-lg p-2 text-muted transition-colors hover:text-accent">
                            <component :is="item.icon" class="size-5" aria-hidden="true" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>
<script setup lang="ts">
import { Facebook, Github, Instagram, Linkedin } from 'lucide-vue-next'
import { content } from '@utils/content.js'

const ICONS: Record<string, unknown> = { github: Github, facebook: Facebook, instagram: Instagram, linkedin: Linkedin }

const socials = content.footer.social.map((item) => ({ ...item, icon: ICONS[item.value] }))
const year = new Date().getFullYear()
</script>
