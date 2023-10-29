<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
<script lang="ts">
export default {
    setup () {
        useHead({
            title: 'About | Marcelo Oblan',
            meta: [
                { name: 'description', content: 'Software engineer / Fullstack web developer (Laravel | Vuejs | LAMP)' },
                /* Facebook */
                { property:"og:url", content: 'https://marcelooblan2016.github.io/' },
                { property:"og:type", content: 'website' },
                { property:"og:title", content: 'About | Marcelo Oblan' },
                { property:"og:description", content: 'Software engineer / Fullstack web developer (Laravel | Vuejs | LAMP)' },
                { property:"og:image", content: 'https://marcelooblan2016.github.io/images/profile-seo.jpg' },
                { property:"og:image:url", content: 'https://marcelooblan2016.github.io/images/profile-seo.jpg' },
                { property:"og:image:secure_url", content: 'https://marcelooblan2016.github.io/images/profile-seo.jpg' },
                { property:"og:site_name", content: 'About | Marcelo Oblan' },
                /* Twitter */
                { property:"twitter:title", content: 'Marcelo Oblan' },
                { property:"twitter:description", content: 'Software engineer / Fullstack web developer (Laravel | Vuejs | LAMP)' },
                { property:"twitter:card", content: 'summary_large_image' },
            ],
            link: [
                {rel: "icon", type: "rel/icon", href: "images/favicon.png"},
                {rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"},
                {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"},
            ]
        })
        
        return {};
    }
}
</script>