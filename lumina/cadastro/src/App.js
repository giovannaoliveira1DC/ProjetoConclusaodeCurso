import React, { useState } from 'react';

function Cadastro() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: '',
        confirmarSenha: '',
        dia: '',
        mes: '',
        ano: '',
        genero: '',
        cep: '',
        cpf: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataNascimento = `${formData.dia}/${formData.mes}/${formData.ano}`;
        // Lógica de envio de dados
        console.log('Dados enviados:', {...formData, dataNascimento});
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Crie sua conta</h1>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    type="text"
                    name="nome"
                    placeholder="Nome completo"
                    value={formData.nome}
                    onChange={handleChange}
                    style={styles.input}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleChange}
                    style={styles.input}
                />
                <input
                    type="password"
                    name="senha"
                    placeholder="Senha"
                    value={formData.senha}
                    onChange={handleChange}
                    style={styles.input}
                />
                <input
                    type="password"
                    name="confirmarSenha"
                    placeholder="Confirme sua senha"
                    value={formData.confirmarSenha}
                    onChange={handleChange}
                    style={styles.input}
                />
                <div style={styles.dateContainer}>
                    <input
                        type="text"
                        name="dia"
                        placeholder="DD"
                        value={formData.dia}
                        onChange={handleChange}
                        style={styles.smallInput}
                    />
                    <input
                        type="text"
                        name="mes"
                        placeholder="MM"
                        value={formData.mes}
                        onChange={handleChange}
                        style={styles.smallInput}
                    />
                    <input
                        type="text"
                        name="ano"
                        placeholder="AAAA"
                        value={formData.ano}
                        onChange={handleChange}
                        style={styles.smallInput}
                    />
                </div>
                <div style={styles.smallInputContainer}>
                    <input
                        type="text"
                        name="cep"
                        placeholder="CEP"
                        value={formData.cep}
                        onChange={handleChange}
                        style={styles.smallInput}
                    />
                    <input
                        type="text"
                        name="cpf"
                        placeholder="CPF"
                        value={formData.cpf}
                        onChange={handleChange}
                        style={styles.smallInput}
                    />
                </div>
                <div style={styles.radioContainer}>
                    <label>
                        <input
                            type="radio"
                            name="genero"
                            value="masculino"
                            checked={formData.genero === 'masculino'}
                            onChange={handleChange}
                            style={styles.radio}
                        />
                        Masculino
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="genero"
                            value="feminino"
                            checked={formData.genero === 'feminino'}
                            onChange={handleChange}
                            style={styles.radio}
                        />
                        Feminino
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="genero"
                            value="outro"
                            checked={formData.genero === 'outro'}
                            onChange={handleChange}
                            style={styles.radio}
                        />
                        Outro
                    </label>
                </div>
                <div style={styles.checkboxContainer}>
                    <input type="checkbox" id="termos" required />
                    <label htmlFor="termos">Eu concordo com os Termos de Serviço e a Política de Privacidade</label>
                </div>
                <button type="submit" style={styles.button}>Cadastrar</button>
            </form>
        </div>
    );
}

const styles = {
    container: {
        height: '100vh',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
    },
    title: {
        textAlign: 'center',
        marginBottom: '30px',
        fontSize: '24px',
    },
    form: {
        width: '100%',
        maxWidth: '500px',
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        padding: '15px',
        margin: '10px 0',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize: '16px',
        width: '100%',
    },
    dateContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '10px',
        marginBottom: '20px',
    },
    smallInputContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '20px',
    },
    smallInput: {
        padding: '15px',
        margin: '10px 0',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize: '16px',
        width: 'calc(33% - 10px)',
    },
    radioContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        margin: '20px 0',
    },
    radio: {
        marginRight: '10px',
    },
    checkboxContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
    },
    button: {
        padding: '15px',
        backgroundColor: '#28a745',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    },
};

export default Cadastro;
