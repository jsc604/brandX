<template>
  <section
    class="flex flex-col items-center justify-center gap-4 min-h-[calc(100vh-162px)] lg:flex-row my-8"
  >
    <div
      class="flex flex-col items-center md:items-start justify-center gap-4 md:gap-8 lg:w-1/2 text-center md:text-start"
    >
      <p class="font-bold text-xl md:text-4xl uppercase mb-4">
        Reach out to us if you have<br /><span
          class="text-4xl md:text-6xl lg:text-7xl relative"
          >Any Questions
          <span class="absolute bottom-0 left-0 h-1 bg-lime-500 w-1/4"
        /></span>
      </p>

      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-phone" class="size-5" />
        <span>+1 (604) 970-8297</span>
      </div>
      <div class="flex items-center gap-2">
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
          to="https://www.instagram.com/valueaddsource?igsh=MTk1a2prMHQ3ZnRhZg=="
          target="_blank"
          class="rounded-full hover:bg-lime-500 transition-colors duration-300 hover:text-haiti"
        />
      </div>
    </div>

    <UForm
      :schema="schema"
      :state="state"
      class="space-y-4 w-full max-w-xl"
      @submit="onSubmit"
    >
      <UFormField label="Name*" name="name">
        <UInput v-model="state.name" class="w-full" />
      </UFormField>

      <UFormField label="Email*" name="email">
        <UInput v-model="state.email" class="w-full" />
      </UFormField>

      <UFormField label="Subject" name="subject">
        <UInput v-model="state.subject" class="w-full" />
      </UFormField>

      <UFormField label="Message*" name="message">
        <UTextarea v-model="state.message" class="w-full" />
      </UFormField>

      <UButton
        label="Submit"
        type="submit"
        size="xl"
        class="hover:bg-haiti/10 hover:text-haiti transition-colors duration-300 border border-haiti hover:cursor-pointer"
      />
    </UForm>
  </section>
</template>

<script setup>
import * as v from "valibot";

const schema = v.object({
  name: v.pipe(v.string(), v.minLength(1, "Name is required")),
  email: v.pipe(v.string(), v.email("Invalid email")),
  subject: v.pipe(v.string(), v.minLength(0, "")),
  message: v.pipe(v.string(), v.minLength(1, "Message is required")),
});

const state = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const toast = useToast();

async function onSubmit() {
  const result = v.safeParse(schema, state);
  if (!result.success) {
    const errors = Object.values(result.issues)
      .map((issue) => issue.message)
      .join(", ");
    toast.add({
      title: "Validation Error",
      description: errors,
      color: "red",
    });
    return;
  }

  // try {
  //   const response = await $fetch("/api/email", {
  //     method: "POST",
  //     body: {
  //       ...state,
  //     },
  //   });

  toast.add({
    title: "Success",
    description: "The form has been submitted.",
    color: "success",
  });

  //   console.log({ response });
  // state.name = "";
  // state.email = "";
  // state.subject = "";
  // state.message = "";
  // } catch (err) {
  //   toast.add({
  //     title: "Error",
  //     description: "Something went wrong while sending your message.",
  //     color: "red",
  //   });
  // }
}
</script>
