<template>
  <section
    class="w-full justify-between flex flex-col mx-auto items-center py-3 lg:flex-row flex-wrap gap-2"
  >
    <h1 class="sr-only">Brand X Marketing Solutions</h1>
    <div class="flex items-center justify-between max-lg:w-full">
      <NuxtLink to="/">
        <img
          src="/images/logo-horizontal-2.png"
          alt="BrandX Logo"
          class="w-[275px]"
          width="275"
          height="66"
        />
      </NuxtLink>
      <USlideover
        v-model:open="open"
        class="lg:hidden"
        :close="{
          color: 'neutral',
          variant: 'solid',
          class: 'rounded-full',
        }"
      >
        <UButton color="subtle"
          ><UIcon name="i-lucide-menu" size="32"
        /></UButton>

        <template #body>
          <UNavigationMenu
            :items="items"
            color="primary"
            orientation="vertical"
          >
            <template #item="{ item, isExternal, attrs }">
              <ULink
                v-bind="attrs"
                :to="item.to"
                :external="isExternal"
                class="justify-center text-lg items-center flex w-full"
                @click="open = false"
              >
                <UIcon :name="item.icon" class="mr-2" />
                {{ item.label }}
              </ULink>
            </template>
          </UNavigationMenu>
        </template>
      </USlideover>
    </div>

    <UNavigationMenu :items="items" color="primary" class="max-lg:hidden" />

    <div
      class="flex flex-col lg:flex-row items-center gap-2 lg:ml-auto xl:ml-0"
    >
      <div class="flex items-center gap-1">
        <UIcon name="i-lucide-mail" class="size-5" />
        <span class="text-sm">info@valueaddsource.com</span>
      </div>
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
  </section>
</template>

<script setup>
const open = ref(false);
const items = ref([
  {
    label: "Home",
    icon: "i-lucide-house",
    to: "/",
  },
  {
    label: "About Us",
    icon: "i-lucide-users-round",
    to: "/about",
  },
  {
    label: "Services",
    icon: "i-lucide-chart-network",
    to: "/services",
  },
  {
    label: "Contact Us",
    icon: "i-lucide-message-circle",
    to: "/contact",
  },
]);
</script>
