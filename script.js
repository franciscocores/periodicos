// Script.js

document.getElementById("importButton").addEventListener("click", function() {
    window.location.href = "import.html";
});

document.getElementById("searchButton").addEventListener("click", function() {
    // Datos de ejemplo
    const resultados = [
        {
            cliente: "Experta ART",
            fechaAsignacion: "2024-01-01",
            fechaEntrega: "2024-03-01",
            estado: "estado al azar",
            sucursal: "Sede Acevedo"
        },
        {
            cliente: "Federación Patronal ART",
            fechaAsignacion: "2024-01-01",
            fechaEntrega: "2024-03-01",
            estado: "estado al azar",
            sucursal: "Sede Acevedo"
        },
        {
            cliente: "Provincia ART",
            fechaAsignacion: "2024-01-01",
            fechaEntrega: "2024-03-01",
            estado: "estado al azar",
            sucursal: "Móvil"
        },
        {
            cliente: "Omint",
            fechaAsignacion: "2024-01-01",
            fechaEntrega: "2024-03-01",
            estado: "estado al azar",
            sucursal: "Planta"
        },
        {
            cliente: "Latitud Sur",
            fechaAsignacion: "2024-01-01",
            fechaEntrega: "2024-03-01",
            estado: "estado al azar",
            sucursal: "Planta"
        }
    ];
    
    // Función para agregar resultados a la tabla
    function mostrarResultados() {
        const tabla = document.getElementById("resultsTable");
        tabla.innerHTML = ""; // Limpiar tabla
    
        resultados.forEach(function(resultado) {
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${resultado.cliente}</td>
                <td>${resultado.fechaAsignacion}</td>
                <td>${resultado.fechaEntrega}</td>
                <td>${resultado.estado}</td>
                <td>${resultado.sucursal}</td>
            `;
            tabla.appendChild(fila);
        });
    }
    
    // Mostrar resultados al cargar la página
    mostrarResultados();
    