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

const { blogs, isLoading, error, addItem, deleteItem } = useBlogs();
const showEditor = ref(false);

const toggleEditor = () => {
  showEditor.value = !showEditor.value;
};

// const handleAddItem = (newBlog) => {
//   addItem(newBlog);
//   showEditor.value = false;
// };
</script>

<style scoped>
button {
  background-color: #42b983;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #369f75;
}
</style>
