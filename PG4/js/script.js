const mainBoard = document.getElementById('mainBoard');
    const playerBoardsContainer = document.getElementById('playerBoardsContainer');
    const additionalBoardContainer = document.getElementById('additionalBoardContainer');
    const drawButton = document.getElementById('drawButton');
    const clearButton = document.getElementById('clearButton');
    const generatePlayerBoardsButton = document.getElementById('generatePlayerBoards');
    const numPlayerBoardsInput = document.getElementById('numPlayerBoards');
    const drawnNumbersContainer = document.getElementById('drawnNumbers');
    const selectedNumbers = new Set();
    
  
    createBoard(mainBoard, 'mainBoard',24);
    createBoard(additionalBoardContainer, 'additionalBoard',76);

    drawButton.addEventListener('click', drawNumber);
    clearButton.addEventListener('click', clearAll);
    generatePlayerBoardsButton.addEventListener('click', generatePlayerBoards);
    
    
    function createBoard(boardContainer, id, numberOfCells) {
      const board = document.createElement('div');
      board.id = id;
      board.classList.add('board');
    
      const fragment = document.createDocumentFragment();
    
      let boardNumbers = [];
      for (let i = 0; i < numberOfCells; i++) {
        let randomNumber = Math.floor(Math.random() * 76) + 1;
        while (boardNumbers.includes(randomNumber)) {
          randomNumber = Math.floor(Math.random() * 76) + 1;
        }
    
        boardNumbers.push(randomNumber);
    
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = randomNumber;
        cell.addEventListener('click', () => toggleCell(cell, randomNumber));
        fragment.appendChild(cell);
      }
    
      board.appendChild(fragment);
      boardContainer.appendChild(board);
    }
  

  function drawNumber() {
    let randomNumber = Math.floor(Math.random() * 76) + 1;

    while (selectedNumbers.has(randomNumber)) {
        randomNumber = Math.floor(Math.random() * 76) + 1;
    }

    selectedNumbers.add(randomNumber);
    displayDrawnNumber(randomNumber);
    highlightCell(randomNumber);
}

  function displayDrawnNumber(number) {
    const drawnNumberDiv = document.createElement('div');
    drawnNumberDiv.textContent = `Drawn Number: ${number}`;
    drawnNumbersContainer.innerHTML = '';
    drawnNumbersContainer.appendChild(drawnNumberDiv);
  }

  function highlightCell(number) {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        if (cell.textContent == number) {
            cell.classList.add('selected');
        }
    });
}


    function addNumber(cell, number) {
      selectedNumbers.add(number);
      cell.classList.add('selected');
  }
  
  function removeNumber(cell, number) {
      selectedNumbers.delete(number);
      cell.classList.remove('selected');
  }
  
  function toggleCell(cell, number) {
      if (!selectedNumbers.has(number)) {
          addNumber(cell, number);
      } else {
          removeNumber(cell, number);
      }
  }
  

  function generatePlayerBoards() {
    const numPlayerBoards = parseInt(numPlayerBoardsInput.value, 10);

    if (isNaN(numPlayerBoards)) {
        console.error('Invalid number of player boards.');
        return;
    }

    playerBoardsContainer.innerHTML = '';

    for (let i = 1; i <= numPlayerBoards; i++) {
        let playerBoard = [];

        
        for (let j = 0; j < 24; j++) {
            let randomNumber = Math.floor(Math.random() * 76) + 1;

             while (playerBoard.includes(randomNumber)) {
                randomNumber = Math.floor(Math.random() * 76) + 1;
            }

            playerBoard.push(randomNumber);
        }

        const boardDiv = document.createElement('div');
        boardDiv.classList.add('board');

        playerBoard.forEach(number => {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.textContent = number;
            cell.addEventListener('click', () => toggleCell(cell, number));
            boardDiv.appendChild(cell);
        });

        playerBoardsContainer.appendChild(boardDiv);
    }
}



function clearAll() {
  if (selectedNumbers) {
      selectedNumbers.clear();
  }

  if (drawnNumbersContainer) {
      drawnNumbersContainer.innerHTML = '';
  }

  if (mainBoard) {
      clearBoard(mainBoard);
  }

  if (playerBoardsContainer) {
      clearBoard(playerBoardsContainer);
  }
}


    function clearBoard(boardContainer) {
        const cells = boardContainer.querySelectorAll('.cell');
        cells.forEach(cell => cell.classList.remove('selected'));
    }