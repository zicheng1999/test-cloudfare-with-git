<template>
  <div class="home">
    <div>Test Cloud Function</div>
    <div>{{ now }}</div>
  </div>
</template>

<script setup lang="ts">
import Axios from "axios";
import { onBeforeMount, ref } from "vue";

const now = ref(new Date());
async function getTasks(id: string) {
  console.log("id", id);

  const result = await Axios.get(
    "https://test-cloudfare-with-git.pages.dev/api/test"
    // {
    //   params: { id: id },
    // }
  );
  return result;
}

onBeforeMount(async () => {
  console.log("in onBeforeMount");
  const res = await getTasks("testid_001");
  console.log("res", res);
});
</script>
