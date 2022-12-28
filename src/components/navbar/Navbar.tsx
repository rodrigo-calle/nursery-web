import * as React from 'react';
import './Navbar.scss';

const Navbar: React.FC = () => {
    return (
        <div className='navbarContainer'>
            <img 
                src="https://res.cloudinary.com/dwat1o60y/image/upload/v1672188338/vivero/logo-vivero_apagk8.png" 
                alt="Logo Vivero Santo Domingo Oxapampa"
                className='logo-navbar'
             />
            <button
                className='burguer-btn'
            >
                <img 
                    src="https://icongr.am/clarity/bars.svg?size=128&color=8a8a8a"
                    alt="Hamburguer Menú Vivero Santo Domingo" 
                    className='burguer-btn-img'
                />
            </button>
        </div>
    )
}

export default Navbar;