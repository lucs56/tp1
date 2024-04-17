document.addEventListener('DOMContentLoaded', function() {
    // Datos de ejemplo para los equipos de fútbol, incluyendo las rutas de las imágenes de los logos
    const equipos = [
        { nombre: "Independiente", pais: "Argentina", entrenador: "Carlos Tévez", logo: "fotos escudos/independiente.jpeg", copas: 18, fundado: 1905},
        { nombre: "Boca Juniors", pais: "Argentina", entrenador: "Diego Martínez", logo: "fotos escudos/boca.jpeg", copas: 13, fundado: 1905},
        // Otros equipos...
    ];

    // Crear una tabla HTML
    const tablaEquipos = document.createElement('table');
    tablaEquipos.classList.add('table'); // Agregar la clase 'table' de Bootstrap a la tabla

    // Crear la sección de encabezado de la tabla
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ['Foto del Logo', 'Equipo', 'País', 'Entrenador', 'Copas', 'Año de Fundación']; // Títulos de las columnas

    // Crear celdas de encabezado para cada título de columna
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    // Agregar la fila de encabezado a la sección de encabezado de la tabla
    thead.appendChild(headerRow);
    tablaEquipos.appendChild(thead);

    // Crear la sección de cuerpo de la tabla
    const tbody = document.createElement('tbody');

    // Iterar sobre cada equipo y crear una fila en la tabla para cada uno
    equipos.forEach((equipo, index) => {
        const row = document.createElement('tr'); // Crear una nueva fila

        // Crear celda para la imagen del logo
        const imgCell = document.createElement('td');
        const img = document.createElement('img');
        img.src = equipo.logo; // Establecer la ruta de la imagen del logo
        img.alt = equipo.nombre; // Establecer el texto alternativo de la imagen
        img.width = 100; // Establecer el ancho de la imagen
        img.height = 100; // Establecer la altura de la imagen
        imgCell.appendChild(img); // Agregar la imagen a la celda
        row.appendChild(imgCell); // Agregar la celda a la fila

        // Crear celdas para el nombre del equipo, país, entrenador y copas
        const equipoData = [equipo.nombre, equipo.pais, equipo.entrenador, equipo.copas, equipo.fundado];
        equipoData.forEach(text => {
            const td = document.createElement('td');
            td.textContent = text; // Establecer el texto de la celda
            row.appendChild(td); // Agregar la celda a la fila
        });

        // Agregar la fila a la sección de cuerpo de la tabla
        tbody.appendChild(row);
    });

    // Agregar la sección de cuerpo de la tabla a la tabla
    tablaEquipos.appendChild(tbody);

    // Obtener el contenedor donde se agregará la tabla y agregar la tabla al contenedor
    const container = document.querySelector('.container');
    container.appendChild(tablaEquipos);

    // Integración de la API de JSONPlaceholder para obtener publicaciones
    // URL de la API de JSONPlaceholder para obtener publicaciones
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    
    // Realizar la solicitud HTTP GET a la API
    fetch(apiUrl)
        .then(response => {
            // Verificar si la respuesta de la API fue exitosa (código de estado 200)
            if (response.ok) {
                // Convertir la respuesta a formato JSON
                return response.json();
            } else {
                // En caso de error, lanzar una excepción con el mensaje de error
                throw new Error('Error al obtener datos de la API');
            }
        })
        .then(data => {
            // Procesar los datos recibidos de la API
            // Por ejemplo, puedes imprimir las publicaciones en la consola
            console.log('Publicaciones:', data);
        })
        .catch(error => {
            // Manejar cualquier error que ocurra durante la solicitud o procesamiento de la respuesta
            console.error('Error:', error);
        });
});
