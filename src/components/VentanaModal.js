import React, { useState } from 'react';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const VentanaModal = (props) => {
    const [bancoName, setBancoName] = useState(''); // Nuevo estado para capturar el nombre del banco

    const handleBancoNameChange = (e) => {
        setBancoName(e.target.value); // Actualizar el estado con el valor ingresado por el usuario
    };

    const handleAddBanco = () => {
        props.handleCreateBanco(bancoName); // Pasar el nombre del banco al manejador handleAddBanco en Banco.js
    };

    return (

        <>
            <FloatingLabel className='mb-3 m-4' controlId="floatingTextarea2">
                <Form.Control
                    as="textarea"
                    placeholder="Complete con nombre de Banco"
                    style={{ height: '100px' }}
                    value={bancoName}
                    onChange={handleBancoNameChange}
                />
            </FloatingLabel>
            <Button className='ml-4' variant="primary" onClick={handleAddBanco}>Agregar</Button>
            <Button className='ml-4' variant="dark" onClick={props.handleCloseModal}>Cerrar</Button>
        </>
    )
}
