import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Detalles in DB --> */

let detallesInDB = {
    title: 'Detalles en Data Base',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-clipboard-list'
}

/* <!-- Total presupuestos --> */

let totalPresupuestos = {
    title:' Total de Presupuestos', 
    color:'success', 
    cuantity: '79',
    icon:'fa-award'
}

/* <!-- proveedores quantity --> */

let proveedoresQuantity = {
    title:'Cantidad de proveedores' ,
    color:'warning',
    cuantity:'49',
    icon:'fa-user-check'
}

let cartProps = [detallesInDB, totalPresupuestos, proveedoresQuantity];

function ContentRowMovies(){
    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;