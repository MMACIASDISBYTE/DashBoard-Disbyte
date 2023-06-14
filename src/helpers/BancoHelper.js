export const BancoApi = async () => {
    try {
        const response = await fetch('http://localhost:5056/banco')
        const jsonData = await response.json();

        return jsonData;
    } catch (error) {
        console.error('Error', error);
        return null;
    }
};