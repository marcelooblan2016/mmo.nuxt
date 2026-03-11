<template>
  <header>
        <!-- Menu -->
        <nav class="z-50 w-full bg-[rgba(0,0,0,.8)] md:bg-[rgba(255,255,255,.9)] dark:md:bg-[rgba(17,24,39,.95)] block px-2 sm:px-4 py-2.5 fixed lg:shadow-md">
<div class="container flex flex-wrap justify-between items-center mx-auto w-full">
    <NuxtLink v-bind:to="findMenuBySlug('about').value" class="flex items-center" draggable="false">
    <img src="/images/mmo.webp" class="mr-3 w-[100px] h-auto" alt="Marx Logo" draggable="false" />
    <span class="text-gray-400 font-bold hidden md:inline-block" v-text="quote"></span>
    </NuxtLink>
<div class="flex items-center gap-2 ml-auto">
<!-- Theme Toggle -->
<button
type="button"
class="p-2 rounded-lg text-white md:text-gray-700 dark:md:text-gray-300 hover:bg-white/10 md:hover:bg-gray-100 dark:md:hover:bg-gray-700 transition-colors"
:title="themeLabel"
:aria-label="themeLabel"
@click.prevent="cycleTheme"
>
<!-- System icon -->
<svg v-if="colorMode.preference === 'system'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
</svg>
<!-- Sun / Light icon -->
<svg v-else-if="colorMode.preference === 'light'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.07-6.07l-.71.71M6.34 17.66l-.71.71m12.02 0l-.71-.71M6.34 6.34l-.71-.71M12 5a7 7 0 100 14A7 7 0 0012 5z"/>
</svg>
<!-- Moon / Dark icon -->
<svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
</svg>
</button>

<template v-if="isOpen == false">
<button data-collapse-toggle="navbar-default" type="button" 
class="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg" 
aria-controls="navbar-default" aria-expanded="false"
@click.prevent="isOpen = true;"
>
<span class="sr-only">Open main menu</span> 
<svg class="w-6 h-6 text-white md:text-gray-800 dark:md:text-gray-200" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
                </template>
<template v-if="isOpen == true">
<button type="button" class="inline-flex items-center p-2 ml-3 text-sm text-white">
<span class="material-symbols-outlined w-6 h-6 text-white">
close
</span>
</button>
</template>
</div>
<div class="w-full block w-auto" v-bind:class="{'open': isOpen == true, 'close': isOpen == false}" id="navbar-modal-backdrop" @click.prevent="isOpen = false"></div>
<div class="w-full block w-auto shadow-[22px_2px_20px_0px_rgba(0,0,0,1)]"
v-bind:class="{'open': isOpen == true, 'close': isOpen == false}"
id="navbar-container">
<div class="sub-container flex h-screen">
<div class="m-auto">
<ul class="p-4 md:text-sm md:font-medium md:border-0 text-center menu-options">
  <template v-for="menuItem in menu">
<li>
<NuxtLink @click="isOpen=false" v-bind:to="menuItem.value" class="block py-2 pr-4 pl-3 text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">
{{ menuItem.text }}
</NuxtLink>
</li>
  </template>
  <li>
<a target="_blank" v-bind:href="externalLinks.resume" class="block py-2 pr-4 pl-3 text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white" aria-current="page">Download Resume</a>
  </li>
</ul>
<ul class="text-center menu-social">
<template v-for="social in footer.social">
<li class="inline p-2">
<a v-bind:href="social.href" target="_blank" v-bind:title="social.text">
<span v-bind:class="social.icon"></span>
</a>
</li>
</template>
</ul>
</div>
</div>
</div>
</div>
</nav>
  </header>
</template>
<script lang="ts">
import global from '~/mixins/global.js';
export default {
    mixins: [global],
    setup () {
        const colorMode = useColorMode();
        return { colorMode };
    },
data () {
return {
isOpen: false,
};
},
computed: {
themeLabel (): string {
const labels: Record<string, string> = {
system: 'System theme',
light: 'Light theme',
dark: 'Dark theme',
};
return labels[this.colorMode.preference] ?? labels.system;
},
},
methods: {
cycleTheme () {
const order = ['system', 'light', 'dark'];
const current = this.colorMode.preference;
const next = order[(order.indexOf(current) + 1) % order.length];
this.colorMode.preference = next;
},
},
}
</script>
