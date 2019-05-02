// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução

let algarismos = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

let promise = document.querySelector('audio').play();
const musica = document.querySelector('#musica')
musica.currentTime = 9;

if (promise !== undefined) {
    promise.then(_ => {
      
      musica.play();

        // Autoplay started!
    }).catch(error => {
        // Autoplay was prevented.
        // Show a "Play" button so that user can start playback.
    });
}

$.ajax({
  url: 'https://swapi.co/api/films/',
  success: function(resposta) {


    resposta.results.sort((a, b) =>  a.episode_id - b.episode_id);
    let banco = jQuery.parseJSON(JSON.stringify(resposta));
    console.dir(banco);  // veja a resposta no terminal



    let indice = 1;
    banco.results.forEach(function(filme){
        $("#movies ul").append(`<li id="filme${indice}">Episode ${algarismos[filme.episode_id - 1]}</li>`);
        indice++;
      //  \\\
    });

    let chave = localStorage.getItem('chaveFilme');
    $("pre").append( `Episode ${algarismos[banco.results[chave].episode_id - 1]} \n${banco.results[chave].title.toUpperCase()} \n\n${banco.results[chave].opening_crawl}`);

    $("#filme1").click(function(){
      $("pre").empty();
      $("pre").append( `Episode ${algarismos[banco.results[0].episode_id - 1]} \n${banco.results[0].title.toUpperCase()} \n\n${banco.results[0].opening_crawl}`);
      localStorage.setItem('chaveFilme', 0 );
    });
    $("#filme2").click(function(){
      $("pre").empty();
      $("pre").append( `Episode ${algarismos[banco.results[1].episode_id - 1]} \n${banco.results[1].title.toUpperCase()} \n\n${banco.results[1].opening_crawl}`);
      localStorage.setItem('chaveFilme', 1 );
    });
    $("#filme3").click(function(){
      $("pre").empty();
      $("pre").append( `Episode ${algarismos[banco.results[2].episode_id - 1]} \n${banco.results[2].title.toUpperCase()} \n\n${banco.results[2].opening_crawl}`);
      localStorage.setItem('chaveFilme', 2 );
    });
    $("#filme4").click(function(){
      $("pre").empty();
      $("pre").append( `Episode ${algarismos[banco.results[3].episode_id - 1]} \n${banco.results[3].title.toUpperCase()} \n\n${banco.results[3].opening_crawl}`);
      localStorage.setItem('chaveFilme', 3 );
    });
    $("#filme5").click(function(){
      $("pre").empty();
      $("pre").append( `Episode ${algarismos[banco.results[4].episode_id - 1]} \n${banco.results[4].title.toUpperCase()} \n\n${banco.results[4].opening_crawl}`);
      localStorage.setItem('chaveFilme', 4 );
    });
    $("#filme6").click(function(){
      $("pre").empty();
      $("pre").append( `Episode ${algarismos[banco.results[5].episode_id - 1]} \n${banco.results[5].title.toUpperCase()} \n\n${banco.results[5].opening_crawl}`);
      localStorage.setItem('chaveFilme', 5 );
    });
    $("#filme7").click(function(){
      $("pre").empty();
      $("pre").append( `Episode ${algarismos[banco.results[6].episode_id - 1]} \n${banco.results[6].title.toUpperCase()} \n\n${banco.results[6].opening_crawl}`);
      localStorage.setItem('chaveFilme', 6 );
    });

  }
});
