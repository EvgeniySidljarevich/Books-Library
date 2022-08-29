export const getBooksFromLocalStorage = () => {
    const data = localStorage.getItem("boughtBooks");
    return (data ? JSON.parse(data) : [])
};