
function login(){
	let correo = document.formulario.correo.value
	let pw = document.formulario.psw.value
	let user1 = {
		correo,
		pw
	}
	console.log(user1)

	if (user1.correo == "cjlopez60@misena.edu.co" && user1.pw == "1234") {
		window.open("home.html", "home", "width=900, height=500")
		
	}
	else{
		alert("Informacion incorrecta, verifique sus datos")
		
	}
}
