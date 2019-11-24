let arr = [];

for (let i = 0; i < 90; i++) {
    arr.push(i + 1);
}


let length = arr.length;
let choosen;
let displayDiv = document.getElementById('current');
let message = document.getElementById('message');
let rowName;
let colName;
let flag = true;



function selectNumber() {
    if (!flag) {
        return;
    }
    if (length > 0) {
        flag = false;
        displayDiv.classList.add('anim');
        displayDiv.innerText = "";
        setTimeout(function(){
            rand = Math.floor(Math.random() * length);
            choosen = arr.splice(rand, 1);
            length--;
            displayDiv.innerText = choosen;
            colName = 'col' + choosen;
            document.getElementById(colName).classList.add('strikeOff');
            displayDiv.classList.remove('anim');
            flag = true;
        }, 2000);

    } else {
        displayDiv.innerText = "**";
        message.innerText = "There is no number available now !!"
    }
}









let count = 1;
let table = document.createElement('TABLE');
table.setAttribute('id', 'myTable');
document.getElementById('tableSpace').appendChild(table);
for (let i = 0; i < 9; i++) {
    rowName = 'row' + i;
    let row = document.createElement('TR');
    row.setAttribute('id', rowName);
    document.getElementById('myTable').appendChild(row);
    for (let j = 0; j < 10; j++) {
        let col = document.createElement('TD');
        colName = 'col' + count;
        col.setAttribute('id', colName);
        col.innerHTML = count;
        count++;
        document.getElementById(rowName).appendChild(col);
    }


}

