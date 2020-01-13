let form = document.getElementById("myForm"),
    result = document.getElementById("result");

const getChange = event => {
    event.preventDefault();

    const sum = document.getElementById("sum").value;
    const price = document.getElementById("price").value;

    const change = sum - price;
    const [ dollars, cents ] = change.toFixed(2).split('.');

    const coins = getChangeCents(cents);
    let resultCoin = coins.map(([coin, count]) => count > 1 ? ` ${coin}*${count} центів` : ` ${coin} центів`);

    result.innerHTML = `Ваша решта: ${dollars} долари, ${cents} центів. (по номіналу ${dollars}, ${resultCoin}.)`;
    result.className = "mt-3 alert alert-info";
}

form.addEventListener("submit", getChange);

const getChangeCents = cents => {
    const denominations = [1, 5, 10, 25, 50];
    let result = [];

    while (cents > 0) {
        let coin = denominations.pop(); 
        let count = Math.floor(cents/coin); 
        cents -= count * coin;
        if (count) result.push([coin, count]);
    }

    return result;
}