function verificaLogin(){
    const email = document.querySelector('.email').value;
    const senha = document.querySelector('.senha').value;
    if(email == "admin" && senha == "admin"){
            alert('Sucesso')
            location.href = "http://caiossilva.github.io/Spotify-Web-Player/"
        }else{
                alert("Erro! Dados Incorretos")
            }
        }