import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


export default function Login(props) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();


    const handleSubmit= e => {
        e.preventDefault();
        axios 
            .get('http://localhost:8080/users')
            .then((response) => { 
             const validateName = name === response.data[0].name ? true : false;
             const validatePassword = password === response.data[0].password ? true : false; 
             console.log(response) 
             if ( validateName && validatePassword){
                props.setUser(response.data[0].name)
               history.push('/player')
               console.log('hello')

             } 
            else 
                console.log('failed')  
            })
    }
        return (
        <div className='login'>
             <img src="https://seeklogo.com/images/H/hooli-logo-169591D776-seeklogo.com.png" alt="" />
        
            <form onSubmit={handleSubmit}>        
                <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
                <br/>
                <input type="text" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br/>
                <input type='submit'/>
            </form>

            
        </div>
    )
}
