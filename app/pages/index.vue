<template>
  <div class="space-y-16 pb-16 pt-8 md:pb-24">
    <section
      class="flex flex-col items-center gap-16 md:flex-row-reverse justify-center min-h-[calc(100vh-162px)] lg:min-h-[calc(100vh-130px)] xl:min-h-[calc(100vh-90px)]"
    >
      <div class="bottle-wrapper">
        <img
          src="/images/wine-bottle.webp"
          alt="Wine Bottle"
          class="w-4/5 md:w-full h-auto hero-bottle"
          width="400"
          height="600"
        >
        <div class="light-sweep" />
      </div>
      <div
        class="flex flex-col items-center md:items-start justify-center gap-4 md:gap-8 md:w-1/2 text-center md:text-start"
      >
        <h2
          class="font-bold text-xl md:text-4xl lg:text-5xl xl:text-6xl uppercase"
        >
          Manufacturing, Sourcing,<br><span
            class="text-4xl md:text-6xl lg:text-7xl xl:text-8xl relative"
            >Innovations
            <span class="absolute bottom-0 left-0 h-1 bg-lime-500 w-1/4"
          /></span>
        </h2>
        <h3>Custom On-packs, Neck Hangers, Gift with Purchase</h3>
        <UButton
          label="Explore Our Services"
          to="/services"
          size="xl"
          class="hover:bg-haiti/10 hover:text-haiti transition-colors duration-300 border border-haiti"
        />
      </div>
    </section>

    <div
      class="flex flex-col items-center gap-16 md:gap-24 justify-center text-center mx-auto min-h-screen"
    >
      <section
        class="flex flex-col items-center gap-8 justify-center md:max-w-3/4"
      >
        <h2
          class="font-bold text-xl md:text-4xl lg:text-5xl xl:text-6xl uppercase"
        >
          Customized POS Merchandise
          <br><span
            class="text-4xl md:text-6xl lg:text-7xl xl:text-8xl relative"
            >For Wine & Spirit
            <span
              class="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-lime-500 w-1/4"
          /></span>
        </h2>
        <p>
          At BrandX Marketing Solutions, we specialize in high-quality design
          and manufacturing on-packs. With over 30 years of experience, we are
          experts in designing custom on-packs for the beer, wine, and spirits
          industries.
        </p>
      </section>

      <UCarousel
        v-slot="{ item }"
        loop
        arrows
        dots
        :prev="{ variant: 'solid' }"
        :next="{ variant: 'solid' }"
        prev-icon="i-lucide-chevron-left"
        next-icon="i-lucide-chevron-right"
        :autoplay="{ delay: 4000 }"
        :items="items"
        :ui="{ item: 'basis-1/1.1' }"
        class="w-3/4 mb-8"
      >
        <img
          :src="item.src"
          width="250"
          height="250"
          class="rounded-lg"
          :alt="item.alt"
        >
      </UCarousel>

      <div
        class="flex flex-col items-center justify-center gap-16 lg:gap-0 lg:flex-row"
      >
        <section
          class="flex flex-col items-center gap-4 justify-center text-center md:max-w-3/4 mx-auto border-4 p-4 md:p-8 lg:p-12 xl:p-16 lg:max-w-1/2 lg:text-start"
        >
          <h2 class="font-bold text-3xl md:text-4xl xl:text-5xl uppercase">
            Design and Manufacturing
          </h2>
          <p>
            Our company handles the entire design and manufacturing process from
            start to finish. If you have an upcoming project that needs
            marketing help, we've got you covered. Get in touch with one of our
            experts who will create a custom plan for your project, from the
            idea to the final result.
          </p>
        </section>
        <section
          class="flex flex-col items-center gap-4 justify-center text-center md:max-w-3/4 mx-auto p-4 md:p-8 lg:p-12 xl:p-16 lg:max-w-1/2 lg:text-start"
        >
          <h2 class="font-bold text-3xl md:text-4xl xl:text-5xl uppercase">
            Why Choose Us
          </h2>
          <p>
            With BrandX Marketing Solutions, clients receive exclusive benefits
            and the convenience of working with a single company for
            manufacturing. Email us today if you want to hire us for customized
            on-packs for your next project.
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  {
    src: "/images/cheese-board.jpg",
    alt: "cheese board promotion",
  },
  {
    src: "/images/chocolate-tag-bottle.jpg",
    alt: "chocolate tag bottle promotion",
  },
  {
    src: "/images/jt-mittens.jpg",
    alt: "Jackson Triggs mittens promotion",
  },
  {
    src: "/images/patio-wine-glass.jpg",
    alt: "Jackson Triggs patio wine glass promotion",
  },
  {
    src: "/images/segura-viudas.jpg",
    alt: "Segura Viudas promotion",
  },
];

useHead({
  title: "Brand X Marketing Solutions | Custom On-Packs & POS Merchandise",
  meta: [
    {
      name: "description",
      content:
        "Custom on-packs & POS promos. Brand X Marketing Solutions delivers 30+ years of design & manufacturing expertise for standout retail marketing.",
    },
  ],
  link: [{ rel: "canonical", href: "https://valueaddsource.com" }],
});
</script>

<style scoped>
.hero-bottle {
  animation: zoomIn 1.5s ease-out forwards;
  transform: scale(0.95);
  opacity: 0;
}

@keyframes zoomIn {
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.bottle-wrapper {
  position: relative;
  display: flex;
  overflow: hidden;
  justify-content: center;
  max-width: 400px;
}

.light-sweep {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  height: 100%;
  width: 50%;
  background: linear-gradient(120deg, rgba(255, 255, 255, 0.2), transparent);
  transform: skewX(-25deg);
  animation: sweep 4s ease-in-out;
}

@keyframes sweep {
  0% {
    left: -100%;
  }
  50% {
    left: 100%;
  }
  100% {
    left: 100%;
  }
}
</style>
