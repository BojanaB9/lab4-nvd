<template>
  <div>
    <h1>Blog Editor</h1>
    <form @submit.prevent="save">
      <div class="field">
        <label for="title">Title</label>
        <input type="text" id="title" v-model.trim="title" required />
      </div>
      <div class="field">
        <label for="slug">Blog ID</label>
        <input type="text" id="slug" v-model.trim="id" required />
      </div>
      <div class="field">
        <label for="author">Author</label>
        <input type="text" id="author" v-model.trim="author" required />
      </div>
      <div class="field">
        <label for="content">Content</label>
        <textarea id="content" v-model.trim="content" required></textarea>
      </div>
      <div class="field">
        <button type="submit">Save</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const title = ref('');
const author = ref('');
const content = ref('');
const id = ref('');

const emits = defineEmits(['addNewItem']);

const save = () => {
  if (!title.value || !id.value || !author.value || !content.value) return;

  emits('addNewItem', {
    title: title.value,
    author: author.value,
    content: content.value,
    id: id.value
  });

  resetForm();
};

const resetForm = () => {
  title.value = '';
  author.value = '';
  content.value = '';
  id.value = '';
};
</script>

<style scoped>
.field {
  margin-bottom: 1rem;
}

.field label {
  margin-inline-end: 10px;
}
</style>