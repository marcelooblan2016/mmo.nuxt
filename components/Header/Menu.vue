<template>
  <header>
        <!-- Menu -->
        <nav class="z-50 w-full bg-[rgba(0,0,0,.8)] md:bg-[rgba(255,255,255,.9)] block px-2 sm:px-4 py-2.5 fixed lg:shadow-md">
			<div class="container flex flex-wrap justify-between items-center mx-auto w-full">
			    <NuxtLink v-bind:to="findMenuBySlug('about').value" class="flex items-center" draggable="false">
				    <img src="/images/mmo.webp" class="mr-3 w-[100px] h-auto" alt="Marx Logo" draggable="false" />
				    <span class="text-gray-400 font-bold" v-text="quote"></span>
			    </NuxtLink>
				<template v-if="isOpen == false">
					<button data-collapse-toggle="navbar-default" type="button" 
					class="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg" 
					aria-controls="navbar-default" aria-expanded="false"
					@click.prevent="isOpen = true;"
					>
						<span class="sr-only">Open main menu</span> 
						<svg class="w-6 h-6 text-white md:text-blue-800 font-bold" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
				    </button>
                </template>
				<template v-if="isOpen == true">
					<button type="button" class="inline-flex items-center p-2 ml-3 text-sm text-white">
						<span class="material-symbols-outlined w-6 h-6 text-white">
							close
						</span>
					</button>
				</template>
				<div class="w-full block w-auto" v-bind:class="{'open': isOpen == true, 'close': isOpen == false}" id="navbar-modal-backdrop" @click.prevent="isOpen = false"></div>
				<div class="w-full block w-auto shadow-[22px_2px_20px_0px_rgba(0,0,0,1)]"
				v-bind:class="{'open': isOpen == true, 'close': isOpen == false}"
				id="navbar-container">
					<div class="sub-container flex h-screen">
						<div class="m-auto">
							<ul class="p-4 md:text-sm md:font-medium md:border-0 text-center menu-options">
								  <template v-for="menuItem in menu">
									<li>
										<NuxtLink @click="isOpen=false" v-bind:to="menuItem.value" class="block py-2 pr-4 pl-3 text-gray-800 hover:text-gray-900">
											{{ menuItem.text }}
										</NuxtLink>
									</li>
								  </template>
								  <li>
									<a target="_blank" v-bind:href="externalLinks.resume" class="block py-2 pr-4 pl-3 text-gray-800 hover:text-gray-900" aria-current="page">Download Resume</a>
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
        return {};
    },
	data () {
		return {
			isOpen: false,
		};
	}
}
</script>