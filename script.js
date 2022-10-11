function playGame(rounds = 5) {
	console.log(`Rock Paper Scissors! Best of ${rounds}`)

	let roundsPlayed = 0
	let playerWins = 0
	let computerWins = 0
	let gameHasWinner = false

	while (true) {
		const playerSelection = getPlayerChoice()
		const computerSelection = getComputerChoice()

		const result = playRound(playerSelection, computerSelection)
		roundsPlayed += 1

		const capitalizedPlayerSelection = capitalizeString(playerSelection)
		const capitalizedComputerSelection = capitalizeString(computerSelection)
		let resultMessageText = ''
		let resultMessageColor = 'inherit'

		if (result === 'win') {
			resultMessageText = `Round ${roundsPlayed}: ${capitalizedPlayerSelection} wins against ${capitalizedComputerSelection} :)`
			resultMessageColor = 'green'
			playerWins += 1
		} else if (result === 'lose') {
			resultMessageText = `Round ${roundsPlayed}: ${capitalizedPlayerSelection} loses against ${capitalizedComputerSelection} :(`
			resultMessageColor = 'red'
			computerWins += 1
		} else {
			resultMessageText = `Round ${roundsPlayed}: ${capitalizedPlayerSelection} draws with ${capitalizedComputerSelection} :|`
			resultMessageColor = 'yellow'
		}

		console.log(`%c${resultMessageText}`, `color: ${resultMessageColor}`)

		// If there's no winner after the specified number of rounds,
		// the first player to score a point wins the game
		if (roundsPlayed >= rounds) {
			if (playerWins !== computerWins) {
				gameHasWinner = true
			}
		} else {
			let remainingRounds = rounds - roundsPlayed
			// Check if there's a mathematical winner
			if (
				(playerWins > (computerWins + remainingRounds))
				|| (computerWins > (playerWins + remainingRounds))
			) {
				gameHasWinner = true
			}
		}

		if (gameHasWinner) {
			if (playerWins > computerWins) {
				console.log('Victory :)')
			} else {
				console.log('Defeat :(')
			}

			break
		}
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


function getPlayerChoice() {
	while (true) {
		let playerChoice = prompt('Rock, Paper or Scissors?')

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


function capitalizeString(str) {
	return str.charAt(0).toUpperCase() + str.slice(1)
}


playGame()
