
        let email = document.querySelector(".email").value
        let senha = document.querySelector(".senha").value
        
        function verificaLogin(){
            if(email == "admin" && senha == "admin"){
                alert('Sucesso')
                location.href = "http://caiossilva.github.io/Spotify-Web-Player/"
            }else{
                alert("Erro! Dados Incorretos")
            }
        }