import { getFirestore } from 'firebase/firestore';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import './Auth.css';

export const Auth = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [currentUser, setCurrentUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [resetPasswordEmail, setResetPasswordEmail] = useState('');
    const [resetPasswordSent, setResetPasswordSent] = useState(false);
    const [showResetPassword, setShowResetPassword] = useState(false);
    const [showButtons, setShowButtons] = useState(true);

    const dbFirestore = getFirestore();
    const firebaseAuth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
            if (user) {
                setCurrentUser(user);
            } else {
                setCurrentUser(null);
            }
        });

        return () => unsubscribe();
    }, [firebaseAuth]);

    const submit = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
            const user = userCredential.user;
            if (user) {
                setCurrentUser(user);
            }
        } catch (error) {
            setErrorMessage(error.code === 'auth/email-already-in-use' ? 'El correo electrónico ya está registrado' : 'Por favor ingresá un correo valido y contraseña de más de 6 dígitos!');
        }
    };

    const login = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
            const user = userCredential.user;
            if (user) {
                setCurrentUser(user);
            }
        } catch (error) {
            setErrorMessage('Credenciales inválidas');
        }
    };

    const handleSignOut = async () => {
        try {
            await signOut(firebaseAuth);
            setCurrentUser(null);
        } catch (error) {
            console.log(error);
        }
    };

    const handleResetPassword = async () => {
        setResetPasswordSent(false);
        setShowButtons(false);
        try {
            await sendPasswordResetEmail(firebaseAuth, resetPasswordEmail);
            setResetPasswordSent(true);
        } catch (error) {
            console.log(error);
            setResetPasswordSent(false);
            setErrorMessage('Error al enviar el correo de restablecimiento');
        }
    };

    return (
        <div>
            {currentUser ? (
                <div className='containerRegisterStart'>
                    <div>
                        <p>Bienvenido/a {currentUser.email}</p>
                    </div>
                    <button className='buttonsUserLogin' onClick={handleSignOut}>Cerrar sesión</button>
                </div>
            ) : (
                <div className='containerRegister'>
                    <h3>Inicia sesión o Regístrate</h3>
                    <hr />
                    {errorMessage && <p className='errorMessageRegister'>{errorMessage}</p>}
                    <div className='orderRegisterUserbox'>
                        <div className='orderRegisterUser'>
                            <label htmlFor="email">Correo Electrónico</label>
                            <input type="email" id='email' onChange={(event) => setEmail(event.target.value)} placeholder='ejemplo@ejemplo.com' />
                        </div>
                        <div className='orderRegisterUser'>
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" id='password' onChange={(event) => setPassword(event.target.value)} placeholder='mínimo 6 dígitos' />
                        </div>
                    </div>
                    <div className='buttonsUserStart'>
                        <button className='buttonsUserCreate' onClick={submit}>Crear cuenta</button>
                        <button className='buttonsUserLogin' onClick={login}>Iniciar sesión</button>
                    </div>
                    {!showResetPassword ? (
                        <p className='forgotPassword'>
                            ¿Olvidaste tu contraseña?{' '}
                            <a href="#" onClick={() => setShowResetPassword(true)}>
                                Haz clic aquí
                            </a>
                        </p>
                    ) : (
                        <div className='RestartPassword'>
                            <h3>Restablecer Contraseña</h3>
                            <h4>Por favor escribe tu correo para solicitar el código de restablecimiento</h4>
                            <div className='orderRegisterUserRestart'>
                                <label htmlFor="resetPasswordEmail">Correo electrónico</label>
                                <input type="email" id='resetPasswordEmail' onChange={(event) => setResetPasswordEmail(event.target.value)} placeholder='ejemplo@ejemplo.com' />
                            </div>
                            {showButtons && (
                                <button onClick={handleResetPassword}>Solicitar código</button>
                            )}
                            {resetPasswordSent ? (
                                <p className='errorMessageRegisterOk'>✅ Se ha enviado un correo de restablecimiento a {resetPasswordEmail}</p>
                            ) : (
                                errorMessage && <p className='errorMessageRegister'>{errorMessage}</p>
                            )}
                            {showButtons && (
                                <button onClick={() => setShowResetPassword(false)}>Cancelar</button>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
