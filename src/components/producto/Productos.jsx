import React from 'react';
import CardProducto from './CardProducto';

const Productos = () => {
    return (
        <section className='grillaProductos'>
            <CardProducto imagen="https://www.elglobo.com.mx/cdn/shop/products/americano-3_800x.jpg?v=1618806696"/>
            <CardProducto imagen="https://tapcom-live.ams3.cdn.digitaloceanspaces.com/media/cheat-menu-saudi/products/cappuchino-Cappuccino_-_12Oz.jpg"/>
 
        </section>
    );
};

export default Productos;