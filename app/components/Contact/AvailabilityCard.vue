<template>
    <aside class="rounded-2xl border border-line bg-surface p-6" aria-labelledby="availability-heading">
        <h2 id="availability-heading" class="text-2xl">Availability</h2>
        <p class="mt-1 text-muted">My working hours, Monday - Friday</p>
        <dl class="mt-5 space-y-4">
            <div v-for="zone in ZONES" :key="zone.name" class="border-t border-line pt-4">
                <dt class="label">{{ zone.name }}, {{ zone.offset }}</dt>
                <dd class="mt-1 font-display text-xl font-semibold tracking-tight">{{ zone.hours }}</dd>
                <dd class="text-sm text-muted">{{ zone.period }}</dd>
            </div>
        </dl>
        <p class="mt-5 flex items-center gap-2 text-sm">
            <span class="size-2 rounded-full bg-sun" aria-hidden="true"></span>
            Ready to chat within these hours!
        </p>
    </aside>
</template>
<script setup lang="ts">
const ZONES = [
    { name: 'Pacific (PDT)', offset: 'UTC-7', hours: '1:00 PM - 11:00 PM', period: 'Afternoon to Night' },
    { name: 'Philippines (PHT)', offset: 'UTC+8', hours: '4:00 AM - 2:00 PM', period: 'Morning to Afternoon' },
]
</script>
