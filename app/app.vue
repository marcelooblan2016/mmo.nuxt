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
                { property:"og:url", content: 'https://moblan.dev/' },
                { property:"og:type", content: 'website' },
                { property:"og:title", content: 'About | Marcelo Oblan' },
                { property:"og:description", content: 'Software engineer / Fullstack web developer (Laravel | Vuejs | LAMP)' },
                { property:"og:image", content: 'https://moblan.dev/images/profile-seo.jpg' },
                { property:"og:image:url", content: 'https://moblan.dev/images/profile-seo.jpg' },
                { property:"og:image:secure_url", content: 'https://moblan.dev/images/profile-seo.jpg' },
                { property:"og:site_name", content: 'About | Marcelo Oblan' },
                /* Twitter */
                { property:"twitter:title", content: 'Marcelo Oblan' },
                { property:"twitter:description", content: 'Software engineer / Fullstack web developer (Laravel | Vuejs | LAMP)' },
                { property:"twitter:card", content: 'summary_large_image' },
            ],
            link: [
                {rel: "icon", type: "rel/icon", href: "/images/mmo-new.png"},
                {rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"},
                {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"},
            ],
            script: [
                {
                    type: 'application/ld+json',
                    children: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Marcelo Oblan",
                        "jobTitle": "Senior Full-Stack Web Developer",
                        "url": "https://moblan.dev",
                        "image": "https://moblan.dev/images/profile-picture-ph.jpg",
                        "description": "Senior Full-Stack Developer with 12+ years of experience in scaling production-grade web applications.",
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Software Development Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Custom Web Application Development",
                                        "description": "End-to-end development of scalable applications using Laravel and Vue.js."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Architectural API Development & Integration",
                                        "description": "Design and implementation of robust RESTful APIs and complex third-party integrations."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Modern Web App Upgrades",
                                        "description": "Modernizing legacy systems (e.g., Nuxt 2 to Nuxt 3) to improve efficiency and DX."
                                    }
                                }
                            ]
                        }
                    })
                }
            ]
        })
        
        return {};
    }
}
</script>