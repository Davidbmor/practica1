// stateManager.js
export const stateManager = {
    // Guardar el estado de las cartas en el servidor
    saveState: (state) => {
        fetch('http://localhost:3000/api/state', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cartas: state }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Estado guardado:', data);
        })
        .catch(error => {
            console.error('Error al guardar el estado:', error);
        });
    },

    // Obtener el estado de las cartas desde el servidor
    getState: () => {
        return fetch('http://localhost:3000/api/state')
            .then(response => response.json())
            .then(data => {
                return data.cartas;  // Suponiendo que el servidor devuelve { cartas: [...] }
            })
            .catch(error => {
                console.error('Error al obtener el estado:', error);
                return [];  // En caso de error, devolver un mazo vacío o predeterminado
            });
    }
};
