//for convertInfo
const fromCountries = document.querySelector('.fromCountries')
const toCountries = document.querySelector('.toCountries');
const convertInfo = document.querySelector('.convertInfo');
const input = document.querySelector('#amount');
let convertInfoEdited = false;

//live edit of the convertInfo
input.addEventListener('keyup', (e) => {
    const currencyFrom = document.querySelector('#fromCountry').value;
    const currencyTo = document.querySelector('#toCountry').value;

    if (convertInfoEdited == true) {
        convertInfo.innerHTML = `
        <h2>Convert ${e.target.value} ${currencyFrom} to ${currencyTo}</h2>
    `
    }
})

//set the currency you want to convert from
fromCountries.addEventListener('change', (e) => {
    const currencyFrom = document.querySelector('#fromCountry').value;
    const symbol = document.querySelector('.symbol');
    
    http = new HTTP;
    http.getSymbol(currencyFrom)
        .then (data => {
            const newSymbol = (data["results"][`${currencyFrom}`]["currencySymbol"])
            if (newSymbol == undefined) {
                symbol.textContent = '';
                symbol.textContent = '?'
            } else {
                symbol.textContent = newSymbol;
            }
            
        })
        .catch(err => console.error(err));

    const currencyTo = document.querySelector('#toCountry').value;
    const amount = document.querySelector('#amount').value;
    convertInfo.style.marginBottom = '-1rem';
    convertInfo.innerHTML = `
        <h2>Convert ${amount} ${e.target.value} to ${currencyTo}</h2>
    `
    convertInfoEdited = true;
})

//set the currency you want to convert to
toCountries.addEventListener('change', (e) => {
    const currencyFrom = document.querySelector('#fromCountry').value;
    const amount = document.querySelector('#amount').value;
    // convertInfo.style.display = 'flex';
    convertInfo.style.marginBottom = '-1rem';
    convertInfo.innerHTML = `
        <h2>Convert ${amount} ${currencyFrom} to ${e.target.value}</h2>
    `
    convertInfoEdited = true;
})

//sticky navbar
window.addEventListener('scroll', ()=>{
    const navFixed = document.querySelector('.navbar');
    navFixed.classList.toggle("sticky", window.scrollY > 0)
})

//mobile nav bar
document.querySelector('.burger').addEventListener('click', () => {
    const openMenu = document.querySelector('.open');
    const closeMenu = document.querySelector('.close');
    const body = document.getElementsByTagName('BODY')[0];
    const nav = document.querySelector('.mainLi');
    
    if (nav.style.display !== 'block') {
        body.style.overflow = 'hidden';
        openMenu.classList.remove('menuOpen')
        openMenu.classList.add('menuClose')
        closeMenu.classList.remove('menuClose')
        closeMenu.classList.add('menuOpen')
        nav.style.display = 'block';
        nav.style.animation = 'navFadeIn 1s ease forwards';
    } else {
        body.style.overflow = '';
        body.style.backgroundColor = '';
        closeMenu.classList.add('menuClose')
        closeMenu.classList.remove('menuOpen')
        openMenu.classList.add('menuOpen')
        openMenu.classList.remove('menuClose')
        nav.style.animation = 'navFadeOut .5s ease forwards';
        setTimeout(() =>{
            nav.style.display = 'none';
        }, 500)
    }
    
});

    function getDate(){
        const dateParagraph = document.querySelector('.lead');
        const date = new Date();
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        dateParagraph.textContent = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}. Next update in ${(24 - date.getHours())} hrs`;
        
    }

    getDate();

//switch currencies
document.querySelector('.btn').addEventListener('click', ()=>{
    //backend
    http = new HTTP;
    ui = new UI;

    const amount = document.querySelector('#amount').value;
    const currencyFrom = document.querySelector('#fromCountry').value;
    const currencyTo = document.querySelector('#toCountry').value;

    http.getConversion(currencyFrom, currencyTo, amount)
        .then(data => {
            //regular conversion
            if(amount <= 0){
                alert('Enter a valid amount')
            } else {
                if (data.result == "success") {
                    ui.showConverted(data, amount);
                } else {
                    alert("Error: " + data.result + "Please try again.")
                }
            }
        })
        .catch(err => alert(err))
})