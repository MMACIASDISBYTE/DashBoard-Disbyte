export const ApiHelper = {
    baseUrl: 'http://localhost:5056',

    //Consulta a la API de bancos
    fetchBancoData: async () => {
        try {
            const response = await fetch(`${ApiHelper.baseUrl}/banco`);
            const jsonData = await response.json();

            return jsonData;
        } catch (error) {
            console.error('Error', error);
            return null;
        }
    },
    //CRUD BANCO 
    // Crear un registro en la tabla "banco"
    createBancoData: async (newData) => {
        try {
            const response = await fetch(`${ApiHelper.baseUrl}/Banco`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newData),
            });
            const jsonData = await response.json();
            console.log('Helper', newData)
            return jsonData;
        } catch (error) {
            console.error('Error', error);
            return null;
        }
    },
    // Leer un registro de la tabla "banco" por ID
    readBancoDataById: async (id) => {
        try {
            const response = await fetch(`${ApiHelper.baseUrl}/banco/${id}`);
            const jsonData = await response.json();
            return jsonData;
        } catch (error) {
            console.error('Error', error);
            return null;
        }
    },
    // Actualizar un registro de la tabla "banco" por ID
    updateBancoDataById: async (id, updatedData) => {
        try {
            const response = await fetch(`${ApiHelper.baseUrl}/banco/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData),
            });
            console.log(updatedData);
            const jsonData = await response.json();
            return jsonData;
        } catch (error) {
            console.error('Error', error);
            return null;
        }
    },
    // Eliminar un registro de la tabla "banco" por ID
    deleteBancoDataById: async (id) => {
        try {
            const response = await fetch(`${ApiHelper.baseUrl}/banco/${id}`, {
                method: 'DELETE',
            });
            const jsonData = await response.json();
            return jsonData;
        } catch (error) {
            console.error('Error', error);
            return null;
        }
    },

    //Consulta a la API de proveedor
    fetchProveedoresData: async () => {
        try {
            const responde = await fetch(`${ApiHelper.baseUrl}/proveedor`);
            const jsonData = await responde.json();

            return jsonData;
        } catch (error) {
            console.error('Error', error)
            return null;
        }
    },
    //Consulta a la API EstimateHeader
    fetchEstimateHeader: async () => {
        try {
            const response = await fetch(`${ApiHelper.baseUrl}/estimateheader`);
            const jsonData = await response.json();

            return jsonData;
        } catch (error) {
            console.error('Error', error);
            return null;
        }
    },
}