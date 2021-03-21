class UI {
    constructor(){
        this.converted = document.querySelector('.converted');
        this.convert = document.querySelector('.convert');
    };

    //show result
    showConverted(data, amount){

        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })

        this.converted.style.animation = 'fadeDown .5s ease-in forwards';

        this.converted.innerHTML = `
            <div class="amountConverted">
                <p class="equals">${amount} ${data.base_code} <i class="fas fa-caret-down"></i> </p>
                <h4> <b>${data.conversion_result} ${data.target_code}</b></h4>
                <p class="nextUpdate">Last Updated on - ${data.time_last_update_utc}</p>
            </div>

            <div class="rate-div">
                <p class="rate">Rate <i class="fas fa-caret-down"></i></p>
                <p class="rate-p"> 1 ${data.base_code} = ${data.conversion_rate} ${data.target_code}</p>
                <p class="rate-p-2"> 1 ${data.target_code} = ${1 / data.conversion_rate} ${data.base_code}</p>
            </div>
        `

    }
}