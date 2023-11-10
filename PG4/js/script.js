const mainBoard = document.getElementById('mainBoard');
    const playerBoardsContainer = document.getElementById('playerBoardsContainer');
    const drawButton = document.getElementById('drawButton');
    const clearButton = document.getElementById('clearButton');
    const generatePlayerBoardsButton = document.getElementById('generatePlayerBoards');
    const numPlayerBoardsInput = document.getElementById('numPlayerBoards');
    const drawnNumbersContainer = document.getElementById('drawnNumbers');
    const selectedNumbers = new Set();

    createBoard(mainBoard, 'mainBoard');

    drawButton.addEventListener('click', drawNumber);
    clearButton.addEventListener('click', clearAll);
    generatePlayerBoardsButton.addEventListener('click', generatePlayerBoards);

    function createBoard(boardContainer, id) {
      const board = document.createElement('div');
      board.id = id;
      board.classList.add('board');
  
      const fragment = document.createDocumentFragment();
  
      for (let i = 1; i <= 76; i++) {
          const cell = document.createElement('div');
          cell.classList.add('cell');
          cell.textContent = i;
          cell.addEventListener('click', () => toggleCell(cell, i));
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
        drawnNumbersContainer.appendChild(drawnNumberDiv);
    }

    function highlightCell(number) {
        const cell = document.querySelector(`#mainBoard .cell:nth-child(${number})`);
        cell.classList.add('selected');
    }

    function toggleCell(cell, number) {
        if (!selectedNumbers.has(number)) {
            selectedNumbers.add(number);
            cell.classList.add('selected');
        } else {
            selectedNumbers.delete(number);
            cell.classList.remove('selected');
        }
    }

    function generatePlayerBoards() {
        const numPlayerBoards = parseInt(numPlayerBoardsInput.value, 10);
        playerBoardsContainer.innerHTML = '';

        for (let i = 1; i <= numPlayerBoards; i++) {
            const playerBoard = document.createElement('div');
            playerBoard.classList.add('board');
            createBoard(playerBoard, `playerBoard${i}`);
            playerBoardsContainer.appendChild(playerBoard);
        }
    }

    function clearAll() {
        selectedNumbers.clear();
        drawnNumbersContainer.innerHTML = '';
        clearBoard(mainBoard);
        clearBoard(playerBoardsContainer);
    }

    function clearBoard(boardContainer) {
        const cells = boardContainer.querySelectorAll('.cell');
        cells.forEach(cell => cell.classList.remove('selected'));
    }