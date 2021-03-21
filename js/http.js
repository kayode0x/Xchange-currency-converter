class HTTP {
    constructor(){
        this.Apis = {
            headers: {
                exchangeRate: Apis.exchangeRate,
                currencyConverter: Apis.currencyConverter
            }
        }
    };

    async getSymbol(currencyFrom){
        //symbol of the selected currency
        const convertSymbol = await fetch(`https://free.currconv.com/api/v7/currencies?apiKey=${this.Apis.headers.currencyConverter}`)
        const symbolData = await convertSymbol.json();
        return symbolData
    }

    async getConversion(currencyFrom, currencyTo, amount){

        //regular currency converter
        const convertResponse = await fetch(`https://v6.exchangerate-api.com/v6/${this.Apis.headers.exchangeRate}/pair/${currencyFrom}/${currencyTo}/${amount}`)
        const responseData = await convertResponse.json();
        return responseData
    }
}