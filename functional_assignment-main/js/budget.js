// player expense 
document.getElementById('btn-calculate').addEventListener('click', function () {
    const insertPlayer = (document.getElementById('insert-ol').childNodes.length - 1);

    const perPlayerCost = parseInt(document.getElementById('per-player-cost').value);

    const playerTotalCost = insertPlayer * perPlayerCost;
    document.getElementById('player-cost').value = playerTotalCost;
    return playerTotalCost;

})

// manager expense + coach expense + player expense

document.getElementById('btn-calculate-total').addEventListener('click', function () {

    const playerTotalCost = parseInt(document.getElementById('player-cost').value);

    const managerCost = parseInt(document.getElementById('manager-expense').value);

    const coachCost = parseInt(document.getElementById('coach-expense').value);

    const totalCost = playerTotalCost + managerCost + coachCost;

    document.getElementById('total-cost').value = totalCost;
})

