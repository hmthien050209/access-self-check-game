<script setup lang="ts">
import { animate, stagger } from "motion";
import { RouterLink } from "vue-router";
import Button from "../components/Button.vue";
import { onMounted } from "vue";
onMounted(() => {
  animate(
    "li",
    { y: [-150, 0], opacity: [0, 1] },
    { delay: stagger(0.3, { start: 0.5 }) }
  );
});
</script>

<template>
  <div class="relative h-screen w-screen p-32">
    <h1 class="font-[Oswald] text-7xl font-medium">Luật chơi</h1>
    <ul class="list-disc pl-8 pt-8 text-4xl leading-relaxed">
      <li>Chúng mình sẽ quay ngẫu nhiên để chọn người trả lời câu hỏi 🙃</li>
      <li>
        Sẽ có 13 câu hỏi cho các bạn lựa chọn và trong mỗi câu hỏi này sẽ có 1
        chữ cái của mật mã
      </li>
      <li>
        Nhiệm vụ của các bạn là trả lời các câu hỏi này để tìm từ khóa và nhận
        thưởng
      </li>
      <li>Bạn nào trả lời đúng thì sẽ được 2 viên kẹo</li>
      <li>Bạn nào trả lời sai thì không sao, không có bị gì đâu nè 🙃</li>
      <li>
        Sau 6 câu hỏi, nếu bạn nào tìm ra được từ khóa sẽ được thưởng 5 viên
        kẹo!
      </li>
    </ul>
  </div>
  <RouterLink to="/random_wheel">
    <Button class="absolute bottom-20 left-20 h-auto w-auto text-3xl">
      Đã rõ luật chơi
      <FontAwesomeIcon
        icon="fa-check-square"
        size="lg"
        class="ml-2"
      />
    </Button>
  </RouterLink>
</template>
