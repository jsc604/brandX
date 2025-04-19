<template>
  <section
    class="w-full justify-between flex flex-col mx-auto items-center p-3 lg:flex-row"
  >
    <div class="flex items-center justify-between max-lg:w-full">
      <h1
        class="font-bold text-center text-lg min-[382px]:text-xl min-[442px]:text-2xl uppercase"
      >
        Brand<span class="text-lime-500">X</span>{{ "" }}
        <span class="text-[#787878]">Marketing Solutions</span>
      </h1>
      <USlideover
        v-model:open="open"
        class="lg:hidden"
        :close="{
          color: 'primary',
          variant: 'outline',
          class: 'rounded-full',
        }"
      >
        <UButton icon="i-lucide-menu" color="subtle" size="xl" />

        <template #body>
          <UNavigationMenu
            :items="items"
            color="primary"
            orientation="vertical"
          >
            <template #item="{ item, isExternal, attrs }">
              <UNavLink
                v-bind="attrs"
                :to="item.to"
                :external="isExternal"
                class="justify-center text-lg items-center flex w-full"
                @click="open = false"
              >
                <UIcon :name="item.icon" class="mr-2" />
                {{ item.label }}
              </UNavLink>
            </template>
          </UNavigationMenu>
        </template>
      </USlideover>
    </div>

    <UNavigationMenu :items="items" color="primary" class="max-lg:hidden" />

    <div class="flex flex-col lg:flex-row items-center gap-2">
      <div class="flex items-center gap-1">
        <UIcon name="i-lucide-mail" class="size-5" />
        <span>info@valueaddsource.com</span>
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
          to="https://www.instagram.com/brandxmarketing/"
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
