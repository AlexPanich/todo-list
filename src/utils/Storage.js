export const getTodosFromStorage = () => {
    try {
        return JSON.parse(localStorage.getItem('todos')) || [];
    } catch (e) {
        return [];
    }
}
export const setTodosToStorage = (todos) => localStorage.setItem('todos', JSON.stringify(todos))


export default {
    getTodosFromStorage,
    setTodosToStorage
};
