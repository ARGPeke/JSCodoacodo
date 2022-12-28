function totalAPagar(cantPan,categoria){
	const valorPan = 200;
	let total = cantPan* valorPan;

	switch (categoria){
		case "ClHabitual":
			total = total - (total * 80/100)
			break;
		case "Jubilado":
			total = total - (total * 50/100)
			break;
		case "Contado":
			total = total - (total * 15/100)
			break;	
	}
	return total
}


let boton = document.getElementById("liveAlertBtn")

let formulario = document.getElementById("form_pan")

formulario.addEventListener("submit", (e)=>{
	e.preventDefault();
})


boton.addEventListener("click", ()=>{
  let cantidad = document.getElementById("cantidad").value
  let categoria = document.getElementById("categorias").value

  let valor = totalAPagar(cantidad,categoria)

  let divMensaje = document.getElementById("liveAlertPlaceholder")
  divMensaje.textContent = "Total a pagar: $" + valor
}
)