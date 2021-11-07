//Declaracion de Headers
let headers = new Headers()
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', 'http://localhost:5000');
headers.append('Access-Control-Allow-Credentials', 'true');
headers.append('GET', 'POST', 'OPTIONS') ;

// funcion registrar usuarios

function CrearUsuario(){
    var nombre = document.getElementById("nombre");
    var genero = document.getElementById("genero");
    var username = document.getElementById("username");
    var contra = document.getElementById("contra")
    var correo = document.getElementById("correo")

    if(nombre.value==''){
        alert('Debe llenar todos los campos')
        return
    }
    //Aca realizamos la peticion
    fetch('http://localhost:5000/registrar',
    {
        method:'POST',
        headers,
        // El cuerpo, es decir los valores que vamos a mandar
        body: `{
                "nombre":"${nombre.value}",
                "genero":"${genero.value}",
                "username":"${username.value}",
                "contra":"${contra.value}",
                "correo":"${correo.value}"
                }`
    })
    .then(response => response.json())
    .then(
        data => {
            if (data.data=="true"){
            nombre.value=''
            genero.value=''
            username.value=''
            contra.value=''
            correo.value=''
                alert("Exito al crear tu cuenta")
            }else if(data.data=="false"){
                alert("ingrese otro usename que no exista")
            }else if(data.data=="contrano2"){
                alert("Su contraseña debe contener al menos un simbolo")
            }else if(data.data=="contrano1"){
                alert("Su contraseña debe contener al menos un numero")
            }else{
                alert("Su contraseña debe ser mayor a 8")
            }
          }
    )
    .catch(
        error => {
            console.error('Error:', error);
            nombre.value=''
            genero.value=''
            username.value=''
            contra.value=''
            correo.value=''
            alert('Hubo un error creando usuario')
          }
    )

}

// funcion para iniciar sesion 
function IniciarSesion(){
    let username = document.getElementById("username");
    let contra = document.getElementById("contra");

    fetch('http://localhost:5000//login',{
        method: 'POST',
  				headers: headers,
  				body: `{
    				"username":"${username.value}",
        			"contra":"${contra.value}"
                     }`,
				})

           
			.then(response => response.json()) //me trae un formato json
			.then(data => {
        // ya puedo trabajar con la ifno
        if (data.data=="admin"){
         window.location.href="UsuarioRegistradoAdmin.html"; 
        }
        else if (data.data=="true"){  
          window.location.href="../pagina/pagina.html";
        }else{
            username.value=''
            contra.value=''
          alert("Credenciales incorrectas")
        }       
					
			})

			.catch((error) => {
  				console.error('Error:', error); 
                  alert("Credenciales incorrectas")  
			});
}

  function Usuarios(){

window.location.href="../Admin/Usuarios.html";


}



