import React from 'react';
import CardProducto from './CardProducto';

const Productos = () => {
    return (
        <section className='grillaProductos'>
            <CardProducto className="col-lg-4 col-md-6 col-sm-12" imagen="https://www.elglobo.com.mx/cdn/shop/products/americano-3_800x.jpg?v=1618806696"/>
            <CardProducto className="col-lg-4 col-md-6 col-sm-12" imagen="https://tapcom-live.ams3.cdn.digitaloceanspaces.com/media/cheat-menu-saudi/products/cappuchino-Cappuccino_-_12Oz.jpg"/>
 
        </section>
    );
};

export default Productos;