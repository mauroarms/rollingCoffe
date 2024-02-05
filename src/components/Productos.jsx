import React from 'react';
import CardProducto from './CardProducto';

const Productos = () => {
    return (
        <section className='grillaProductos'>
            <CardProducto className="col-lg-4 col-md-6 col-sm-12"/>
            <CardProducto className="col-lg-4 col-md-6 col-sm-12"/>
            <CardProducto className="col-lg-4 col-md-6 col-sm-12"/>
            <CardProducto className="col-lg-4 col-md-6 col-sm-12"/>
            <CardProducto className="col-lg-4 col-md-6 col-sm-12"/>
            <CardProducto className="col-lg-4 col-md-6 col-sm-12"/>
            
        </section>
    );
};

export default Productos;