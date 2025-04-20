<template>
  <div
    class="flex flex-col items-center justify-center gap-16 md:gap-24 pb-16 pt-8 md:pt-16 lg:pt-24 md:pb-24 min-h-screen"
  >
    <section class="text-center space-y-8 md:space-y-16 max-w-4xl">
      <h2 class="font-bold text-xl md:text-4xl lg:text-5xl uppercase">
        Customized On-Packs Designer
        <br /><span
          class="text-4xl md:text-6xl lg:text-7xl xl:text-8xl relative"
          >& Manufacturer
          <span
            class="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-lime-500 w-1/4"
        /></span>
      </h2>
      <p>
        BrandX Marketing Solutions has over 30 years of experience in providing
        a range of customization options for on-packs design. Our company
        specializes in being a single source for innovative design and
        manufacturing services with a strategic marketing plan.
      </p>
    </section>

    <section
      class="flex flex-col items-center justify-center gap-16 md:gap-0 lg:gap-0 md:flex-row md:items-stretch md:h-[550px]"
    >
      <div
        class="flex flex-col items-center gap-4 justify-center text-center md:text-start md:max-w-3/4 mx-auto border-4 p-4 md:p-8 lg:p-12 xl:p-16 md:w-1/2 md:items-start"
      >
        <h2 class="font-bold text-3xl md:text-4xl xl:text-5xl uppercase">
          Seamless Process
        </h2>
        <p>
          As a one-stop solution, we complete the on-pack customization process
          for our clients with ease. With BrandX Marketing Solutions, you don’t
          have to work with separate companies for each process stage. Our team
          of experts takes care of the entire process, from design ideas and
          conception to the final manufacturing of the product.
        </p>
      </div>

      <img
        src="/images/custom-packaging.webp"
        alt="brand x packaging"
        width="500"
        height="568"
        class="w-4/5 md:w-1/2 object-cover"
      />
    </section>

    <section
      class="flex flex-col-reverse items-center justify-center gap-16 md:gap-0 lg:gap-0 md:flex-row md:items-stretch md:h-[550px]"
    >
      <img
        src="/images/wine-stack.webp"
        alt="wine bottles on marble counte"
        width="500"
        height="568"
        class="w-4/5 md:w-1/2 object-cover"
      />
      <div
        class="flex flex-col items-center gap-4 justify-center text-center md:text-start md:max-w-3/4 mx-auto border-4 p-4 md:p-8 lg:p-12 xl:p-16 md:w-1/2 md:items-start"
      >
        <h2 class="font-bold text-3xl md:text-4xl xl:text-5xl uppercase">
          Our Core Values
        </h2>
        <p>
          When you hire us, you will get three primary benefits: convenience,
          customization, and execution. We provide flexible and seamless
          customization processes for clients and execute our product
          programming as per the decided schedule. Contact us for more
          information.
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
  title: "About Us - BrandX Marketing Solutions | On-Packs Manufacturer",
  meta: [
    {
      name: "description",
      content:
        "Learn more about BrandX Marketing Solutions and our commitment to quality and innovation in custom on-packs and manufacturing.",
    },
  ],
  link: [{ rel: "canonical", href: "https://valueaddsource.com/about" }],
});
</script>
