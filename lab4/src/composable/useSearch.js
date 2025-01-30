import { ref, computed } from 'vue';

export const useSearch = (items) => {
    const searchTerm = ref('');
    const filters = ref(['title']);

    const filteredItems = computed(() => {
        if (!searchTerm.value.trim()) return items.value;
        return items.value.filter(item =>
            filters.value.some(filter =>
                item[filter]?.toLowerCase().includes(searchTerm.value.toLowerCase())
            )
        );
    });

    return {
        searchTerm,
        filteredItems,
        filters,
    };
};