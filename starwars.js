// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução


$.ajax({
  url: 'https://swapi.co/api/films/',
  method: 'GET',      // opcional: 'GET' é o valor padrão
  success: function(resposta) {
    console.dir(resposta);  // veja a resposta no terminal
    let banco = jQuery.parseJSON(JSON.stringify(resposta));
    for(i in banco.results){
      $("#movies ul li:last").after(`<li>${banco.results[i]['title']}</li>`);
    }

  }
});
