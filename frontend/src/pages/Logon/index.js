import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import api from '../../services/api';
import './styles.css'
import herosImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

function Logon(){
    const history = useHistory();
    const [id, setId] = useState('');

    async function handleLogin(e){
        e.preventDefault();
        try{
            const response = await api.post('sessions', {id});
            console.log(response.data);
            console.log(response.data.ong.name);
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.ong.name);

            history.push('/profile');
        }catch(err){
            alert('Erro ao realizar login');
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input 
                        placeholder="Sua ID" 
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit" >Entrar</button>
                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho Cadastro
                    </Link>
                </form>
            </section>
            <img src={herosImg} alt="Heroes" />
        </div>
    );
}

export default Logon;