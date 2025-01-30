import { createClient } from "contentful";
import { useListActions } from "./useListActions";
import { ref, onMounted } from "vue";

const client = createClient({
    space: "hpr0uushokd4",
    accessToken: "jwEHepvQx-kMtO7_2ldjhE4WMAsiDp3t1xxBT8aDp7U",
});

export const useBlogs = () => {
    const blogs = ref([]);
    const isLoading = ref(false);
    const error = ref(null);
    const { addItem, deleteItem } = useListActions(blogs);

    const fetchBlogs = async () => {
        try {
            isLoading.value = true;
            const response = await client.getEntries({
                content_type: "blogPost",
                order: "-fields.publishDate",
            });

            console.log("API Response:", response); // Debugging line

            blogs.value = response.items.map((item) => ({
                title: item.fields.title,
                description: item.fields.description || "No description available",
                heroImage: item.fields.heroImage,
                publishDate: item.fields.publishDate,
                id: item.fields.slug,
            }));
        } catch (err) {
            console.error("Fetch error:", err);
            error.value = err.message;
        } finally {
            isLoading.value = false;
        }
    };


    onMounted(fetchBlogs);

    return {
        blogs,
        isLoading,
        error,
        addItem,
        deleteItem,
    };
};
