const axios = require('axios');
const cheerio = require('cheerio');
const url = 'https://area-cliente.solatioenergialivre.com.br/#/dashboard';

   //await page.type('[name="Login"]', 'gilson.junior'); 
   //await page.type('[name="Senha"]','32358856'); 
   //await page.click('[value="Acessar"]'); 

axios(url).then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    const tabelaStatus = $('.ranking-item-wrapper');
    const tabelaJogador = [];
    tabelaStatus.each(function(){
        const nomeJogador = $(this).find('.jogador-nome').text();
        const posicaoJogador = $(this).find('.jogador-posicao').text();
        const numeroGols = $(this).find('.jogador-gols').text();
        const timeJogador = $(this).find('.jogador-escudo > img').attr('alt');
        tabelaJogador.push({
            nomeJogador,
            posicaoJogador,
            numeroGols,
            timeJogador
        });
    });
    console.log(tabelaJogador);
}).catch(console.error);