class Casa 
{

    constructor(linha, coluna, valor) {
        this.linha = linha;
        this.coluna = coluna;
        this.valor = valor;
        this.status = this.inicializaStatus();
        this.vizinhos = [];
        this.temBomba = "";
    }

    inicializaStatus() {
        let re = /[0-9]/; 

        if(re.test(this.valor)) 
        {
            return "aberta";
        } 
        else 
        {
            return "fechada";
        }
    }

    inicializaVizinhos(arr) {
        let arrayVizinhos = [];

        if(this.linha == 0) 
        {
            if(this.coluna == 0) 
            {
                arrayVizinhos.push(arr[0][1]);
                arrayVizinhos.push(arr[1][0]);
                arrayVizinhos.push(arr[1][1]);              
            } 
            else if(this.coluna == 8) 
            {
                arrayVizinhos.push(arr[0][7]);
                arrayVizinhos.push(arr[1][7]);
                arrayVizinhos.push(arr[1][8]);
            } 
            else 
            {
                arrayVizinhos.push(arr[parseInt(this.linha)][parseInt(this.coluna - 1)]);
                arrayVizinhos.push(arr[parseInt(this.linha)][parseInt(this.coluna + 1)]);
                arrayVizinhos.push(arr[parseInt(this.linha + 1)][parseInt(this.coluna - 1)]);
                arrayVizinhos.push(arr[parseInt(this.linha + 1)][parseInt(this.coluna)]);
                arrayVizinhos.push(arr[parseInt(this.linha + 1)][parseInt(this.coluna + 1)]);
            }
        } 
        else if(this.linha == 8) 
        {
            if(this.coluna == 0) 
            {
                arrayVizinhos.push(arr[7][0]);
                arrayVizinhos.push(arr[7][1]);
                arrayVizinhos.push(arr[8][1]);
            } 
            else if(this.coluna == 8) 
            {
                arrayVizinhos.push(arr[7][8]);
                arrayVizinhos.push(arr[7][7]);
                arrayVizinhos.push(arr[8][7]);
            } 
            else 
            {
                arrayVizinhos.push(arr[parseInt(this.linha)][parseInt(this.coluna - 1)]);
                arrayVizinhos.push(arr[parseInt(this.linha)][parseInt(this.coluna + 1)]);
                arrayVizinhos.push(arr[parseInt(this.linha - 1)][parseInt(this.coluna - 1)]);
                arrayVizinhos.push(arr[parseInt(this.linha - 1)][parseInt(this.coluna)]);
                arrayVizinhos.push(arr[parseInt(this.linha - 1)][parseInt(this.coluna + 1)]);
            }
        } 
        else 
        {
            if(this.coluna == 0) 
            {
                arrayVizinhos.push(arr[parseInt(this.linha - 1)][parseInt(this.coluna)]);
                arrayVizinhos.push(arr[parseInt(this.linha - 1)][parseInt(this.coluna + 1)]);
                arrayVizinhos.push(arr[parseInt(this.linha)][parseInt(this.coluna + 1)]);
                arrayVizinhos.push(arr[parseInt(this.linha + 1)][parseInt(this.coluna)]);
                arrayVizinhos.push(arr[parseInt(this.linha + 1)][parseInt(this.coluna + 1)]);
            } 
            else if(this.coluna == 8) 
            {
                arrayVizinhos.push(arr[parseInt(this.linha - 1)][parseInt(this.coluna - 1)]);
                arrayVizinhos.push(arr[parseInt(this.linha - 1)][parseInt(this.coluna)]);
                arrayVizinhos.push(arr[parseInt(this.linha)][parseInt(this.coluna - 1)]);
                arrayVizinhos.push(arr[parseInt(this.linha + 1)][parseInt(this.coluna - 1)]);
                arrayVizinhos.push(arr[parseInt(this.linha + 1)][parseInt(this.coluna)]);
            } 
            else 
            {
                arrayVizinhos.push(arr[parseInt(this.linha - 1)][parseInt(this.coluna - 1)]);
                arrayVizinhos.push(arr[parseInt(this.linha - 1)][parseInt(this.coluna)]);
                arrayVizinhos.push(arr[parseInt(this.linha - 1)][parseInt(this.coluna + 1)]);
                arrayVizinhos.push(arr[parseInt(this.linha)][parseInt(this.coluna - 1)]);
                arrayVizinhos.push(arr[parseInt(this.linha)][parseInt(this.coluna + 1)]);
                arrayVizinhos.push(arr[parseInt(this.linha + 1)][parseInt(this.coluna - 1)]);
                arrayVizinhos.push(arr[parseInt(this.linha + 1)][parseInt(this.coluna)]);
                arrayVizinhos.push(arr[parseInt(this.linha + 1)][parseInt(this.coluna + 1)]);
            }
        }

        this.vizinhos = arrayVizinhos;
    }

    //se o valor de uma casa tem o mesmo número de vizinhos "não abertos", logo, esses vizinhos são bombas
    setCasasComBombas() {

        let vizinhosFechados = 0;

        for(let i = 0; i < this.vizinhos.length; i++)
        {
            if(this.vizinhos[i].status == "fechada") 
            {
                vizinhosFechados++;
            }
        }

        if(this.valor == vizinhosFechados && vizinhosFechados != 0) {
            for(let i = 0; i < this.vizinhos.length; i++)
            {
                if(this.vizinhos[i].status == "fechada" && this.vizinhos[i].temBomba != true) 
                {
                    this.vizinhos[i].temBomba = true;
                    /*document.getElementById('exibir-execucao').innerHTML += 
                        '<pre>' + 
                            `Bomba encontrada: linha(${this.vizinhos[i].linha + 1}) / coluna(${this.vizinhos[i].coluna + 1})` + 
                        '</pre>'
                    ;*/
                }
            }
               
        }
    }

    //uma vez encontrados os vizinhos de uma casa que contém bombas, o restante não contém
    setCasasSemBombas() {

        let vizinhosFechados = 0;
        let vizinhosComBombas = 0;

        for(let i = 0; i < this.vizinhos.length; i++)
        {
            if(this.vizinhos[i].status == "fechada") 
            {
                vizinhosFechados++;
            } 
            
            if(this.vizinhos[i].temBomba == true) 
            {
                vizinhosComBombas++;
            }
            
        }

        if(this.valor == vizinhosComBombas) {
            for(let i = 0; i < this.vizinhos.length; i++)
            {
                if(this.vizinhos[i].status == "fechada") 
                {
                    if(this.vizinhos[i].temBomba != true) {
                        this.vizinhos[i].temBomba = false;
                    }
                }
            }
               
        }
    }
    
}