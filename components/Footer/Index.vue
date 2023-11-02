<template>
    <div>
		<!-- Social -->
		<div class="text-center mb-[20px]">
			<ul class="text-center menu-social mt-[2em]">
				<template v-for="social in footer.social">
					<li class="inline p-2">
						<a v-bind:href="social.href" target="_blank" v-bind:title="social.text" class="hover:text-gray-400">
							<span v-bind:class="social.icon"></span>
						</a>
					</li>
				</template>
			</ul>
		</div>
		<!-- Footer -->
		<footer class="p-4 text-gray-400 bg-slate-100 border-t-[1px] border-gray-300">
			<span class="block text-sm text-center">
				© <span x-text="footer.year"></span> All Rights Reserved.
			</span>
		</footer>
    </div>
</template>
<script>
import global from '~/mixins/global.js';

export default {
    mixins: [global],
    setup () {
        return {};
    },
}
</script>