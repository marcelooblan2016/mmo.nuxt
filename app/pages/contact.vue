<template>
    <div>
        <PageIntro title="Let's Connect" crumb="Contact">
            Use the form below to send me an email, or write directly to
            <a :href="content.social.email.value" class="text-accent [overflow-wrap:anywhere] hover:underline">{{ content.social.email.text }}</a>.
        </PageIntro>

        <div class="grid items-start gap-5 md:grid-cols-[1fr_minmax(0,22rem)]">
            <ContactForm />
            <ContactAvailabilityCard />
        </div>
    </div>
</template>
<script setup lang="ts">
import { content } from '@utils/content.js'

usePageSeo({
    title: 'Contact | Marcelo Oblan III',
    description: 'Contact Marcelo Oblan III, Senior Full-Stack Engineer. Available Monday to Friday, 1:00 PM to 11:00 PM Pacific (4:00 AM to 2:00 PM Philippine time).',
    path: '/contact',
    crumb: 'Contact',
    schema: [{
        '@type': 'ContactPage',
        url: 'https://moblan.dev/contact',
        mainEntity: { '@id': personSchema['@id'] },
    }],
})
</script>
