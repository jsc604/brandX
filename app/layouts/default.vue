<template>
  <UApp :toaster="{ position: 'top-center' }">
    <div class="container mx-auto px-3">
      <HeaderNav />
      <USeparator />
      <slot />
    </div>
    <FooterNav />
  </UApp>
</template>
