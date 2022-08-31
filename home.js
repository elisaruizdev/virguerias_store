const booksContainer = document.getElementById('items');
let shoopingCard = document.querySelector('.shopping');
let buttonClick = document.querySelector('button-add');
const addBookCart = document.querySelector('addMore');
let getClassDiv = document.querySelector('productBook');
let cart = [];
let stockArray = [];


//Consumir la api que he creado. Con el Fetch

document.addEventListener('DOMContentLoaded', () => {
    fetchBooks()
});

booksContainer.addEventListener('click', e => {
    addCart(e)
})

const fetchBooks = async () => {
    try {
        const res = await fetch('api.json');
        const data = await res.json();
        createCards(data);

    } catch (error) {
        console.log(error)
    }
}


const createCards = data => {
    data.forEach((elem) => {

        const div = document.createElement('div');
        div.className = ('books-container');

        div.innerHTML = `    
         <h3 class="title-book">${elem.title}</h3>
         <a href="${elem.url}"><img class="img-book" src="${elem.src}"></a>
         <p class="title-book">${elem.price}€</p>
         <button id="${elem.stock}" class="button-add">Agregar al carrito</button>
         `
        booksContainer.appendChild(div);
    });

}


const addCart = (e) => {
    if (e.target.classList.contains('button-add')) {

        const titleBook = e.target.parentElement.querySelector('h3').textContent;
        const price = e.target.parentElement.querySelector('p').textContent;
        console.log(titleBook, price);

        const priceNoEuro = price.substring(0, price.length - 1);
        const priceToNumber = parseFloat(priceNoEuro);

        cart.push({ titleBook, priceToNumber });

        cart.forEach((elem) => {

            const titleArray = elem.titleBook;
            const priceArray = elem.priceToNumber;

            const divCart = document.createElement('div');
            divCart.className = ('shopping-op');


            divCart.innerHTML = `
        <h3>Carrito de compra</h3>
        <div class="description-cart">
                <table class="tableCart">
                <thead>
                  <tr>
                     <th>Producto</th>
                     <th>Precio</th>
                     <th>Unidades</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                      <th>${titleArray}</th>
                      <th>${priceArray}€</th>
                      <th>1</th>
                      <th><button class="addMore">+</button></th> 
                      <th><button class="noMore">-</button></th>     
                    </tr>
                    <tr>
                    <th>Total</th>
                    <th>1</th>
                    </tr>
                </tbody>
        </div>
        `
            shoopingCard.appendChild(divCart);

            
        })

    }
   
}





    
    




/* `<div class="books-container">
            <h3>Aguamala</h3>
            <a href="/html/aguamala.html"><img src="images/Aguamala-416x656.jpg" /></a>
            <h3>20€</h3>
            <button class="button-add" >Añadir al carrito</button>
        </div>
        <div class="books-container">
            <h3>Baudelaire el irreductible</h3>
            <a href="/html/baude.html"><img src="images/Baudelaire-el-irreductible-416x657.jpg" /></a>
            <h3>15€</h3>
            <button class="button-add">Añadir al carrito</button>
        </div>
        <div class="books-container">
            <h3>Beethoven</h3>
            <a href="/html/beethoven.html"><img src="images/Beethoven-416x656.jpg" /></a>
            <h3>18€</h3>
            <button class="button-add">Añadir al carrito</button>
        </div>
        <div class="books-container">
            <h3>Correspondencia</h3>
            <a href="/html/correspondencia.html"><img src="images/Correspondencia-1-416x657.jpg" /></a>
            <h3>18€</h3>
            <button class="button-add">Añadir al carrito</button>
        </div>
        <div class="books-container">
            <h3>Tres coronas para un rey</h3>
            <a href="/html/trescoronas.html"><img src="images/Tres-coronas-para-un-rey-416x657.jpg" /></a>
            <h3>18€</h3>
            <button class="button-add">Añadir al carrito</button>
        </div>
        <div class="books-container">
            <h3>Vidas provisionales</h3>
            <a href="/html/vidasProvisionales.html"><img src="images/Vidas-provisionales-416x657.jpg" /></a>
            <h3>15€</h3>
            <button class="button-add">Añadir al carrito</button>
        </div>
        <div class="books-container">
            <h3>La aurora cuando surge</h3>
            <a href="/html/laaurora.html"><img src="images/La-aurora-cuando-surge-416x657.jpg" /></a>
            <h3>17.95€</h3>
            <button class="button-add">Añadir al carrito</button>
        </div>
        <div class="books-container">
            <h3>La ventana</h3>
            <a href="/html/laventana.html"><img src="images/La-ventana-416x657.jpg" /></a>
            <h3>18.50€</h3>
            <button class="button-add">Añadir al carrito</button>
        </div>` */
