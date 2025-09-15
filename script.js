function mostrar_Mensaje(){
    let nombre = document.getElementById("name").value;
    let mensaje = document.getElementById("mensaje");
    alert("Bienvenid@ "+ nombre)

    mensaje.classList.remove("d-none");
    mensaje.innerHTML = `
        <div class="mb-3" id="mensaje">
            <label for="bienvenida" class="form-label">Mensaje de Bienvenida</label>
            <textarea class="form-control" id="" rows="3" disabled readonly>Hola ${nombre}</textarea>
        </div>
    `
}