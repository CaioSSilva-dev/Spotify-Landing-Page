function verificaLogin(){
    const email = document.querySelector('.email').value;
    const senha = document.querySelector('.senha').value;
    if(email == "admin" && senha == "admin"){
            location.href = "http://caiossilva.github.io/Spotify-Web-Player/"
        }else{
                alert("Erro! Dados Incorretos")
            }
        }
function esqueciDados(){
    alert("(Email: admin) (Senha: admin)  Por Favor, guarde seus dados!")
}