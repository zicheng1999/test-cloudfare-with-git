<template>
  <div class="home">
    <div>Test Cloud Function 0745 pm</div>
  </div>
</template>

<script setup lang="ts">
import Axios from "axios";
import { onBeforeMount } from "vue";

async function getTasks(id: string) {
  const result = await Axios.get(
    "https://test-cloudfare-with-git.pages.dev/api/test",
    {
      params: { id: id },
    }
  );
  return result;
}

onBeforeMount(async () => {
  console.log("in onBeforeMount");
  const res = await getTasks("test id");
  console.log("res", res);
});
</script>
