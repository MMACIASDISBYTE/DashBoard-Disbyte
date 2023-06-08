import React from 'react';
import imagenFondo from '../assets/images/Logo Disbyte.png';

function LastMovieInDb() {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Quienes somos</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 40 + 'rem' }} src={imagenFondo} alt=" Star Wars - Mandalorian " />
                    </div>
                    <p>DISBYTE fue fundada en 2015 en la ciudad de Buenos Aires por jóvenes profesionales emprendedores con el objetivo de convertirse en una empresa líder en comercio electrónico en Argentina. Actualmente, DISBYTE se encuentra en el Top Ten de los vendedores de Mercadolibre Argentina y, con mas de 500.000 ventas concretadas, hoy podemos decir que somos una empresa sólida y consolidada en el mercado argentino que ha logrado un crecimiento 
                        significativo a pesar de un contexto socioeconómico adverso.
                        <br />A través de nuestro Departamento de Business Intelligence, transformamos los datos en información y la información en conocimiento para mejorar el proceso de toma de decisiones y elaboración de estrategias para satisfacer la demanda
                        , esto es crítico en un entorno altamente competitivo.
                        <br />Contamos con departamentos propios de Comercio Exterior, Marketing
                        , Ventas y Atención al Cliente, Logística, Servicio Técnico, Finanzas 
                        y Recursos Humanos con una plantilla de 35 empleados calificados
                        , con amplia experiencia y trayectoria en comercio tanto con 
                        instalaciones privadas como públicas lo que nos permite ser muy eficientes en las operaciones diarias.</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="https://www.disbyte.com/">Disbyte WebSide</a>
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb;
