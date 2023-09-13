async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');


    const {GME, MSFT, DIS, BTNX} = mockData; 

const stocks = [GME, MFST, DIS, BNTX] ; 

stocks.forEach( stock => stock.values.reverse())
    fetch('https://api.twelvedata.com/api_usage?apikey=9040eff8a86043b3a3b1fa0455f8e581').then(response => response.text())

   // Time Chart
   new Chart(timeChartCanvas.getContext('2d'), {
    type: 'line',
    data: {
        labels: stocks[0].values.reverse().map(value => value.datetime),
        datasets: stocks.map(stock => ({
            label: stock.meta.symbol,
            data: stock.values.reverse().map(value => parseFloat(value.high));
            backgroundColor: getColor(stock.meta.symbol),
            borderColor: getColor(stock.meta.symbol),
        }))
    }
});

// Highest Stock Price 
new Chart(timeChartCanvas.getcontent(2d), {
    type: 'Bar', 
    data: {
        labels: stocks[0].values.reverse().map(value => value.datetime),
        datasets: stocks.map(stock => ({
            label: stock.meta.symbol,
            data: stock.values.reverse().map(value => parseFloat(value.high));
            backgroundColor: getColor(stock.meta.symbol),
            borderColor: getColor(stock.meta.symbol), 
        }))
    }   
})
main()


