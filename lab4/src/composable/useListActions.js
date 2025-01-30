export const useListActions = (items) => {
    const addItem = (item) => {
        if (!item.id || !item.title) return;
        items.value = [...items.value, item];
    };

    const deleteItem = (id) => {
        items.value = items.value.filter(item => item.id !== id);
    };

    return {
        addItem,
        deleteItem,
    };
};