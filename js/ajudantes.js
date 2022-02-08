class Ajudantes {

    constructor() {
        throw new Error("Essa classe não deve ser instanciada!");
    }

    static setVizinhosArray(arr) {
        for(let i = 0; i < arr.length; i++) 
        {
            for(let j = 0; j < arr[i].length; j++) 
            {
                arr[i][j].inicializaVizinhos(arr);
            }
        }
    }

    static setCasasComBombasArray(arr) {
        for(let i = 0; i < arr.length; i++) 
        {
            for(let j = 0; j < arr[i].length; j++) 
            {
                arr[i][j].setCasasComBombas();
            }
        }
    }

    static setCasasSemBombasArray(arr) {
        for(let i = 0; i < arr.length; i++) 
        {
            for(let j = 0; j < arr[i].length; j++) 
            {
                arr[i][j].setCasasSemBombas();
            }
        }
    }

    static getQtdBombasArray(arr) {
        let qtd = 0;

        for(let i = 0; i < arr.length; i++) 
        {
            for(let j = 0; j < arr[i].length; j++) 
            {
                if(arr[i][j].temBomba == true) 
                {
                    qtd++;
                }
            }
        }

        return qtd;
    }

    static getQtdCasasSemBombaArray(arr) {
        let qtd = 0;

        for(let i = 0; i < arr.length; i++) 
        {
            for(let j = 0; j < arr[i].length; j++) 
            {
                if(arr[i][j].temBomba === false) 
                {
                    qtd++;
                }
            }
        }

        return qtd;
    }

    static getCasaSemBombaArray(arr) {
        let casa;

        for(let i = 0; i < arr.length; i++) 
        {
            for(let j = 0; j < arr[i].length; j++) 
            {
                if(arr[i][j].temBomba === false) 
                {
                    casa = arr[i][j];
                }
            }
        }

        return casa;
    }

}