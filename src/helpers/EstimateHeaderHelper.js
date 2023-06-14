export const EstimateHeaderApi = async () => {
    try {
        const response = await fetch('http://localhost:5056/estimateheader')
        const jsonData = await response.json();

        return jsonData;
    } catch (error) {
        console.error('Error', error);
        return null;
    }
};