var imagens = ["https://i.postimg.cc/MGn9GJXw/family.jpg",
    "https://i.postimg.cc/qqyYvVbq/grandpa.jpg",
    "https://i.postimg.cc/wjMnFtMX/father.jpg" ,
    "https://i.postimg.cc/5ymDKL83/bro.jpg",
    "https://i.postimg.cc/JnL6wtrd/sister.jpg",
    "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var nomes = ["Álbum de família",
    "Rodrigo Silva",
    "Diego Silva",
    "Roberto Silva",
    "Alinne Silva",
    "Sônia Silva"];
var index = 0;

function proximo() {
    index++;
    if (index > imagens.length - 1) {
        index = 0;
        console.log("Álbum de Família");
    }
    var imagem_atualizada = imagens[index];
    var nome_atualizado = nomes[index];
    document.getElementById("membro_familia").innerHTML = nome_atualizado;
    document.getElementById("imagem").src = imagem_atualizada;
    console.log(index);
}