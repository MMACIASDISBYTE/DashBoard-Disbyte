import React, { useEffect, useState } from 'react';
import { ApiHelper } from '../../helpers/ApiConsultasHelper.js';

import Button from 'react-bootstrap/Button';


export const Banco = () => {
    const [data, setData] = useState(null);
    const [editMode, setEditMode] = useState({});

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
                            <th>Acciones</th> {/* Nueva columna para las opciones de modificación y eliminación */}
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
            </div>
        </div>
    </div>
</>
);
};
