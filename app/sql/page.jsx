"use client"
import { useState, useEffect } from "react";
import axios from "axios";

const SQL = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`/api/sql`);
                setUsers(response.data.result); // Guarda los datos en el estado
            } catch (error) {
                console.error("Error fetching data:", error.message);
                setUsers([]); // En caso de error, define un array vacío
            } finally {
                setLoading(false); // Finaliza la carga
            }
        };

        getData();
    }, []); // La lista de dependencias vacía asegura que solo se ejecute al montar el componente

    if (loading) {
        return <p>Cargando...</p>; // Mensaje de carga
    }

    return (
        <div>
            <h1>SQL</h1>
            {users.map((item, index) => (
                <div key={index}>
                    <p>Nombre: {item.nombre}</p>
                    <p>Apellido: {item.apellido}</p>
                    <p>Correo: {item.correo}</p>
                </div>
            ))}
        </div>
    );
};

export default SQL;
