import React, { useEffect, useState } from 'react';
import { ApiHelper } from '../../helpers/ApiConsultasHelper.js';
import { VentanaModal } from '../VentanaModal.js';

import Button from 'react-bootstrap/Button';

export const Banco = () => {
    const [data, setData] = useState(null);
    const [editMode, setEditMode] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [isAddingBanco, setIsAddingBanco] = useState(false);

    const fetchData = async () => {
        const jsonData = await ApiHelper.fetchBancoData();
        setData(jsonData);
    };
    useEffect(() => {
        fetchData();
    }, []);

    const handleUpdate = async (id) => {
        // Obtener los datos del registro a modificar
        const registro = data.find((row) => row.id === id);

        // Llamar a la función del helper para modificar el registro
        const updatedData = await ApiHelper.updateBancoDataById(id, {
            ...registro,
            // Actualizar los campos necesarios
            description: data.find((row) => row.id === id).description,
        });

        // Actualizar los datos en el estado
        setData((prevState) =>
            prevState.map((row) => (row.id === id ? updatedData : row))
        );

        setEditMode((prevEditMode) => ({
            ...prevEditMode,
            [id]: false, // Restablecer el estado de editMode a false para el ID actual
        }));
        fetchData();
    };

    const handleDelete = async (id) => {
        // Llamar a la función del helper para eliminar el registro
        await ApiHelper.deleteBancoDataById(id);

        // Actualizar los datos en el estado eliminando el registro correspondiente
        setData((prevState) => prevState.filter((row) => row.id !== id));
    };

    const handleEdit = (id) => {
        setEditMode((prevEditMode) => ({
            ...prevEditMode,
            [id]: true,
        }));
    };

    const handleDescriptionChange = (e, id) => {
        const { value } = e.target;
        setData((prevData) =>
            prevData.map((row) =>
                row.id === id ? { ...row, description: value } : row
            )
        );
    };

    const handleAddBanco = () => {
        setShowModal(true); // Actualiza el estado showModal a true para mostrar la ventana modal
        setIsAddingBanco(true);
      };

    const handleCreateBanco = async (bancoName) => {
        const newBanco = {
          id: 0,
          description: bancoName,
        };
    
        const createdBanco = await ApiHelper.createBancoData(newBanco);
    
        if (createdBanco) {
          setData((prevState) => [...prevState, createdBanco]);
        }
    
        handleCloseModal();
        console.log(newBanco)
        fetchData();
      };
    
      const handleCloseModal = () => {
        setShowModal(false); // Actualiza el estado showModal a false para ocultar la ventana modal
        setIsAddingBanco(false);
      };


return (
<>
<div className="card col-lg-10 m-3 shadow mb-4">
    <div className="card-body">
        <div className="table-responsive">
            <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
            >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Acciones</th> {/* Nueva columna para las opciones de modificación y eliminación */}
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        {/* Mostrar el botón "Agregar Banco" solo si no se está agregando un banco */}
                        <th className='ml-2'>
                            {!isAddingBanco && (
                                <>
                                    <Button className='ml-2' variant="success" onClick={handleAddBanco}>Agregar Banco</Button>
                                </>
                            )}
                        </th>
                    </tr>
                </tfoot>
                <tbody>
                    {data &&
                        data.map((row, i) => (
                            <tr key={i}>
                                <td>{row.id}</td>
                                <td>
                                    {editMode[row.id] ? (
                                        <input
                                            type="text"
                                            value={row.description}
                                            onChange={(e) =>
                                                handleDescriptionChange(e, row.id)
                                            }
                                        />
                                    ) : (
                                        row.description
                                    )}
                                </td>
                                <td>
                                    {editMode[row.id] ? (
                                        <>
                                            <Button className='ml-2' variant="warning" onClick={() => handleUpdate(row.id)}>Guardar</Button>
                                        </>
                                    ) : (
                                        <>
                                            <Button className='ml-2' variant="primary" onClick={() => handleEdit(row.id)}>Editar</Button>
                                            <Button className='ml-2' variant="danger" onClick={() => handleDelete(row.id)}>Eliminar</Button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            {/* Renderiza la ventana modal */}
            {showModal && <VentanaModal handleCreateBanco={handleCreateBanco} handleCloseModal={handleCloseModal} />}
        </div>
    </div>
</div>
</>
);
};
