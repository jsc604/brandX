<template>
  <footer
    class="flex flex-col bg-[#AEB7B3] items-center justify-center px-3 py-12 gap-4 text-sm w-full"
  >
    <div
      class="flex flex-col gap-4 items-center justify-center md:flex-row md:justify-between w-full max-w-3xl"
    >
      <img
        src="/images/logo-horizontal.png"
        alt="BrandX Logo"
        class="w-[175px] h-auto"
        width="175"
        height="31"
      />
      <span class="flex items-center gap-2">
        <UIcon name="i-lucide-phone" class="size-5" />
        <span>+1 (604) 970-8297</span>
      </span>
      <span class="flex items-center gap-2">
        <UIcon name="i-lucide-mail" class="size-5" />
        <span>info@valueaddsource.com</span>
      </span>
      <div class="space-x-2 whitespace-nowrap">
        <UButton
          icon="i-lucide-facebook"
          to="https://www.facebook.com/brandxmarketingsolutions"
          target="_blank"
          class="rounded-full hover:bg-lime-500 transition-colors duration-300 hover:text-haiti"
        />
        <UButton
          icon="i-simple-icons-instagram"
          to="https://www.instagram.com/valueaddsource?igsh=MTk1a2prMHQ3ZnRhZg=="
          target="_blank"
          class="rounded-full hover:bg-lime-500 transition-colors duration-300 hover:text-haiti"
        />
      </div>
    </div>

    <div class="space-x-2">
      <NuxtLink to="/" class="hover:text-lime-500 hover:bg-haiti rounded-md px-1 transition-colors duration-300">Home</NuxtLink>
      <span>|</span>
      <NuxtLink to="/about" class="hover:text-lime-500 hover:bg-haiti rounded-md px-1 transition-colors duration-300">About us</NuxtLink>
      <span>|</span>
      <NuxtLink to="/services" class="hover:text-lime-500 hover:bg-haiti rounded-md px-1 transition-colors duration-300">Services</NuxtLink>
      <span>|</span>
      <NuxtLink to="/contact" class="hover:text-lime-500 hover:bg-haiti rounded-md px-1 transition-colors duration-300">Contact</NuxtLink>
    </div>
    <p class="text-xs text-neutral">
      © 2025, BrandX Marketing Solutions. All Rights Reserved.
    </p>
  </footer>
</template>
