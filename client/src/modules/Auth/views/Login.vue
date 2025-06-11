<template>
  <div
    class="container mx-auto h-full flex flex-col justify-center items-center"
  >
    <div>
      <img
        class="h-10"
        src="./../../../assets/logo-fullcolor.png"
        alt="Agentcis"
      />
    </div>
    <div
      class="bg-white border-blue-500 p-4 border-t-4 mb-6 shadow p-6 mt-3"
      style="min-width: 24rem;"
    >
      <form class="w-full">
        <div class="md:flex mb-6">
          <RamroInput
            v-validate="'required|email'"
            class="mb-6 md:mb-0 w-full"
            label="Email"
            name="email"
            :has-error="errors.has('email')"
            v-model="credentials.email"
          >
            <span class="text-sm text-red-500">
              {{ errors.first("email") }}
            </span>
          </RamroInput>
        </div>
        <div class="md:flex mb-6">
          <RamroInput
            class="mb-6 md:mb-0 w-full"
            label="Password"
            type="password"
            name="password"
            v-validate="'required'"
            :has-error="errors.has('password')"
            v-model="credentials.password"
          >
            <span class="text-sm text-red-500">
              {{ errors.first("password") }}
            </span>
          </RamroInput>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="focus:outline-none bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
            @click.prevent="login"
          >
            Login
          </button>
          <a
            class="no-underline inline-block align-baseline font-bold text-sm text-grey-darker float-right"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import RamroInput from "@/components/Input/Input.vue";
import Auth from "@/common/auth";

export default {
  name: "Login",
  components: {
    RamroInput
  },
  data() {
    return {
      credentials: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      this.$validator.validateAll().then(() => {
        this.loading = true;
        Auth.attempt(this.credentials).then(() => {
          this.$router.push("dashboard");
        });
      });
    }
  }
};
</script>
