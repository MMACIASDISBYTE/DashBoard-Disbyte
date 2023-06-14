export const ProveedorApi = async () => {
    try {
        const response = await fetch('http://localhost:5056/proveedor')
        const jsonData = await response.json();
        return(jsonData);
    } catch (error) {
        console.error('Error', error);
        return null;
    }
};