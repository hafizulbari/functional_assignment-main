
// alert when player six
function deselect() {
  alert ('Unable to select six players!!!');
  return;
}

// common function to create li and insert player name

function playerName(inputFieldId){

const playerName1 = document.getElementById(inputFieldId);

    const playerName1Value = playerName1.innerText;
    
    const insert = document.getElementById('insert-ol');
    const orderList = document.createElement('li');

    //bonus part=== error handling=====alert function call==

    const liNumber = (document.getElementById('insert-ol').childNodes.length - 1);

		if(liNumber===5){
			deselect();
			orderList='';
				
			}			
	// bonus part end

    orderList.innerText = playerName1.innerText;
    insert.appendChild(orderList);

     return playerName1Value;

}
