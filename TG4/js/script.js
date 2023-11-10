let now = new Date();
let calendar = document.querySelector('#calendar');
let apointments = [];


function creaCalendario() {
    let lastDayDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    let lastDayOftheMonth = lastDayDate.getDate();
    let h2 = document.querySelector('h1');
    h2.innerText = nomeMese(now.getMonth() + 1);

    for (let i = 1; i <= lastDayOftheMonth; i++) {
        const dayCellNode = document.createElement('div');
        dayCellNode.className = 'day';
        const cellNode = document.createElement('h3');
        cellNode.innerHTML = i;
        let today = now.getDate();
        if (today === i) {
            dayCellNode.className = 'color-epic';
        }
        dayCellNode.appendChild(cellNode);
        calendar.appendChild(dayCellNode);
    }
}

function creaarrayapontamento() {
    for (let i = 0; i < lastDayOftheMonth, i++) {
        apointments[i] = "O"
    }
    
}


function nomeMese(m) {
    switch (m) {
        case 1: return 'gennaio';
        case 2: return 'febbraio';
        case 3: return 'marzo';
        case 4: return 'aprile';
        case 5: return 'maggio';
        case 6: return 'giugno';
        case 7: return 'luglio';
        case 8: return 'agosto';
        case 9: return 'settembre';
        case 10: return 'ottobre';
        case 11: return 'novembre';
        case 12: return 'dicembre';
        default: break;
    }
}

creaCalendario();