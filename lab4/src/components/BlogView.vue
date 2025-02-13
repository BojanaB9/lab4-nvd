<template>
  <div>
    <button @click="toggleEditor" v-if="!showEditor">Add New Blog</button>
    <BlogEditor v-else @addNewItem="handleAddItem" />
    <Blogs :blogs="blogs" :isLoading="isLoading" :error="error" @deleteBlog="deleteItem" />
  </div>
</template>


<script setup>
import BlogEditor from './BlogEditor.vue';
import Blogs from './Blogs.vue';
import { useBlogs } from '../composable/useBlog';
import { ref } from 'vue';

const { blogs, isLoading, error, handleAddItem, deleteItem } = useBlogs();
const showEditor = ref(false);

const toggleEditor = () => {
  showEditor.value = !showEditor.value;
};


</script>

<style scoped>
button {
  background-color: mediumpurple;
  color: black;
  padding: 10px;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: lightskyblue;
}
</style>
