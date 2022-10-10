function getPlayerChoice() {
	while (true) {
		let playerChoice = prompt('Rock, paper or scissors?')

		if (playerChoice == null) {
			continue
		}

		playerChoice = playerChoice.toLowerCase()

		if (
			playerChoice === 'rock' ||
			playerChoice === 'paper' ||
			playerChoice === 'scissors'
		) {
				return playerChoice
		}
	}
}


function getComputerChoice() {
	const randomChoice = Math.floor(Math.random() * 3)

	if (randomChoice === 0) {
		return 'rock'
	} else if (randomChoice === 1) {
		return 'paper'
	} else {
		return 'scissors'
	}
}


function playRound(playerSelection, computerSelection) {
	switch (true) {
		case playerSelection === computerSelection:
			return 'draw'
		case (playerSelection === 'rock') && (computerSelection === 'scissors'):
		case (playerSelection === 'paper') && (computerSelection === 'rock'):
		case (playerSelection === 'scissors') && (computerSelection === 'paper'):
			return 'win'
		default:
			return 'lose'
	}
}


function capitalizeString(str) {
	return str.charAt(0).toUpperCase() + str.slice(1)
}


function playGame(rounds = 5) {
	for (let i = 0; i < rounds; i++) {
		const playerSelection = getPlayerChoice()
		const computerSelection = getComputerChoice()

		const capitalizedPlayerSelection = capitalizeString(playerSelection)
		const capitalizedComputerSelection = capitalizeString(computerSelection)

		const result = playRound(playerSelection, computerSelection)

		let resultMessageText = ''
		let resultMessageColor = 'inherit'

		if (result === 'win') {
			resultMessageText = `${capitalizedPlayerSelection} wins against ${capitalizedComputerSelection} :)`
			resultMessageColor = 'green'
		} else if (result === 'lose') {
			resultMessageText = `${capitalizedPlayerSelection} loses against ${capitalizedComputerSelection} :(`
			resultMessageColor = 'red'
		} else {
			resultMessageText = `${capitalizedPlayerSelection} draws with ${capitalizedComputerSelection} :|`
			resultMessageColor = 'yellow'
		}

		console.log(`%c${resultMessageText}`, `color: ${resultMessageColor}`)
	}
}

playGame()
