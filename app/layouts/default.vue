<template>
    <div class="flex min-h-screen flex-col">
        <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2">
            Skip to content
        </a>
        <HeaderMenu />
        <main id="main" class="mx-auto w-full max-w-6xl flex-1 px-4 sm:px-6">
            <slot />
        </main>
        <Footer />
    </div>
</template>
