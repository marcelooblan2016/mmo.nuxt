<template>
    <header class="sticky top-0 z-40 border-b border-line bg-canvas/85 backdrop-blur-md">
        <nav aria-label="Main" class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
            <NuxtLink to="/" class="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
                <img src="/images/mmo-new.png" width="372" height="310" alt="" class="h-8 w-auto">
                Marcelo Oblan
            </NuxtLink>

            <ul class="hidden items-center gap-1 lg:flex">
                <li v-for="item in content.menu" :key="item.slug">
                    <NuxtLink
                        :to="item.value"
                        class="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:text-ink"
                        active-class="!text-ink font-medium"
                    >
                        {{ item.text }}
                    </NuxtLink>
                </li>
            </ul>

            <div class="flex items-center gap-1">
                <button
                    type="button"
                    class="rounded-lg p-2 text-muted transition-colors hover:text-ink"
                    :aria-label="themeLabel"
                    :title="themeLabel"
                    @click="cycleTheme"
                >
                    <ClientOnly>
                        <component :is="themeIcon" class="size-5" aria-hidden="true" />
                        <template #fallback><Monitor class="size-5" aria-hidden="true" /></template>
                    </ClientOnly>
                </button>
                <a
                    :href="content.externalLinks.resume"
                    download="Marcelo-Oblan-III-Resume.pdf"
                    class="ml-2 hidden items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-canvas transition-opacity hover:opacity-85 sm:inline-flex"
                >
                    <Download class="size-4" aria-hidden="true" />
                    Download Resume
                </a>
                <button
                    type="button"
                    class="rounded-lg p-2 text-ink lg:hidden"
                    :aria-expanded="isOpen"
                    aria-controls="mobile-menu"
                    :aria-label="isOpen ? 'Close main menu' : 'Open main menu'"
                    @click="isOpen = !isOpen"
                >
                    <X v-if="isOpen" class="size-6" aria-hidden="true" />
                    <Menu v-else class="size-6" aria-hidden="true" />
                </button>
            </div>
        </nav>

        <div v-show="isOpen" id="mobile-menu" class="border-t border-line bg-canvas px-4 pb-5 pt-2 lg:hidden">
            <ul>
                <li v-for="item in content.menu" :key="item.slug">
                    <NuxtLink :to="item.value" class="block border-b border-line py-3 font-display text-2xl" @click="isOpen = false">
                        {{ item.text }}
                    </NuxtLink>
                </li>
            </ul>
            <a
                :href="content.externalLinks.resume"
                download="Marcelo-Oblan-III-Resume.pdf"
                class="mt-4 flex items-center justify-center gap-2 rounded-full bg-ink px-4 py-3 font-medium text-canvas"
            >
                <Download class="size-4" aria-hidden="true" />
                Download Resume
            </a>
        </div>
    </header>
</template>
<script setup lang="ts">
import { Download, Menu, Monitor, Moon, Sun, X } from 'lucide-vue-next'
import { content } from '@utils/content.js'

const colorMode = useColorMode()
const isOpen = ref(false)

const THEMES = {
    system: { label: 'System theme', icon: Monitor },
    light: { label: 'Light theme', icon: Sun },
    dark: { label: 'Dark theme', icon: Moon },
}
type Theme = keyof typeof THEMES

const currentTheme = computed(() => THEMES[colorMode.preference as Theme] ?? THEMES.system)
const themeLabel = computed(() => currentTheme.value.label)
const themeIcon = computed(() => currentTheme.value.icon)

function cycleTheme () {
    const order = Object.keys(THEMES)
    colorMode.preference = order[(order.indexOf(colorMode.preference) + 1) % order.length]
}
</script>
