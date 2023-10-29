<template>
  <div>
    <Header.Menu />
    <div  class="grid grid-cols-1 lg:grid-cols-5 gap-1">
        <div class="hidden lg:flex col-span-1"></div>
        <div class="col-span-3 py-4 px-4 min-h-screen">
            <!-- CONTENT -->
            <slot />
            <!-- END CONTENT -->
        </div>
        <div class="hidden lg:flex col-span-1"></div>
    </div>
    <Footer />
  </div>
</template>