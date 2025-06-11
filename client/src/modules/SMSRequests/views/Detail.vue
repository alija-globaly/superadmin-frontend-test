<template>
  <Drawer size="max-w-xl">
    <component :is="status" :details="details" @cancel="cancel"></component>
  </Drawer>
</template>
<script>
import axios from "axios";
import { capitalizeFirstLetter } from "@/utils/helpers";
import Drawer from "@/layout/Drawer.vue";
import RamroButton from "@/components/Button/Button.vue";
import Pending from "./Details/Pending.vue";
import Approved from "./Details/Approved.vue";
import Rejected from "./Details/Rejected.vue";

export default {
  name: "SMSRequestsDetail",
  components: {
    Drawer,
    RamroButton,
    Pending,
    Approved,
    Rejected
  },
  data() {
    return {
      details: null,
      status: ""
    };
  },

  created() {
    const path = this.$route.matched[1].path;
    const pathStatus = path.replace("/sms-requests/", "");
    this.status = capitalizeFirstLetter(pathStatus);
  },
  async beforeRouteEnter(to, _, next) {
    let response = await axios.get("sms/registrations/" + to.params.id);
    next(vm => {
      vm.details = response.data.data;
    });
  },
  async beforeRouteUpdate(to, from, next) {
    let response = await axios.get("sms/registrations/" + to.params.id);
    this.details = response.data.data;
    next();
  },
  methods: {
    cancel() {
      this.$router.back();
    }
  }
};
</script>

<style>
.reject-reason-container {
  height: calc(100vh - 60px);
}

.click-upload {
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}

.status:before {
  background-color: currentcolor;
  border-radius: 50%;
  content: "";
  display: inline-block;
  height: 7px;
  left: 8px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 7px;
}
</style>
