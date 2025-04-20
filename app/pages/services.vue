<template>
  <div
    class="flex flex-col items-center justify-center gap-16 md:gap-24 pb-16 pt-8 md:pt-16 lg:pt-24 md:pb-24 min-h-screen"
  >
    <section class="text-center space-y-8 md:space-y-16 max-w-4xl">
      <h2 class="font-bold text-xl md:text-4xl lg:text-5xl uppercase">
        Custom Design, Manufacturing,
        <br /><span class="text-4xl md:text-6xl lg:text-7xl relative"
          >Packaging & More
          <span
            class="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-lime-500 w-1/4"
        /></span>
      </h2>
      <p>
        End to end solutions that bring your brand vision to life. From concept
        to shelf, we handle it all. Brand X Marketing Solutions elevates brands
        through sophisticated design and seamless execution
      </p>
    </section>

    <section
      class="flex flex-col items-center justify-center gap-16 md:gap-0 lg:gap-0 md:flex-row md:items-stretch md:h-[550px]"
    >
      <div
        class="flex flex-col items-center gap-4 justify-center text-center md:text-start md:max-w-3/4 mx-auto border-4 p-4 md:p-8 lg:p-12 xl:p-16 md:w-1/2 md:items-start"
      >
        <h2 class="font-bold text-3xl md:text-4xl xl:text-5xl uppercase">
          Manufacturing, Packaging, and Fulfillment
        </h2>
        <p>
          Do you have an upcoming project that needs a marketing push? We can
          design and build a custom value-add from conception to production.
        </p>
      </div>

      <img
        src="/images/assembly-line.webp"
        alt="brand x assembly line"
        width="500"
        height="568"
        class="w-full md:w-1/2 object-cover"
      />
    </section>

    <section
      class="flex flex-col-reverse items-center justify-center gap-16 md:gap-0 lg:gap-0 md:flex-row md:items-stretch md:h-[550px]"
    >
      <img
        src="/images/jt-bottle.webp"
        alt="Jackon Triggs wine bottle with promotional hang tag"
        width="500"
        height="568"
        class="w-full md:w-1/2 object-cover"
      />
      <div
        class="flex flex-col items-center gap-4 justify-center text-center md:text-start md:max-w-3/4 mx-auto border-4 p-4 md:p-8 lg:p-12 xl:p-16 md:w-1/2 md:items-start"
      >
        <h2 class="font-bold text-3xl md:text-4xl xl:text-5xl uppercase">
          Custom Design
        </h2>
        <p>
          Our team of experts will work with you to create a unique and
          eye-catching design that will help your product stand out on the
          shelf. We offer a wide range of options, including custom shapes,
          sizes, and materials, to ensure that your on-pack is perfect for your
          brand.
        </p>
        <UButton
          label="Get In Touch"
          to="/contact"
          size="xl"
          class="hover:bg-haiti/10 hover:text-haiti transition-colors duration-300 border border-haiti"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Custom Packaging, Design & Manufacturing Services | BrandX Marketing",
  meta: [
    {
      name: "description",
      content:
        "Discover 30+ years of expertise in custom packaging, design, and manufacturing. We deliver standout on-pack solutions tailored to your brand.",
    },
  ],
  link: [{ rel: "canonical", href: "https://valueaddsource.com/services" }],
});
</script>
