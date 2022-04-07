class HeaderScroll{
    constructor(){
        this._header = document.querySelector(".header");
        this._filtro = document.querySelector(".filtro");
    }


    monitoraScroll(){   

        this._header.style.top = "0"
        this._filtro.style.top = "0"
        let i = 0;
        let e = 0;
        var lastScrollTop = 0;

        window.addEventListener("scroll", () => {

            let verificadorBaixo = window.scrollY < lastScrollTop;
            let verificadorCima = window.scrollY > lastScrollTop;

            if (window.scrollY === lastScrollTop) return;
            
            if(verificadorBaixo && i < 0){
                i = i + 1;
            } 
            if(verificadorCima && i > -15){
                i = i - 1;
            }
            if(verificadorBaixo && e < 15){
                e = e + 1;
            }
            if(verificadorCima && e > 0){
                e = e - 1;
            }

            lastScrollTop = window.scrollY;
            this._header.style.top = `${i}vh`
            this._filtro.style.top = `${e}vh`
        })
    }
}

let teste = new HeaderScroll();
teste.monitoraScroll();


