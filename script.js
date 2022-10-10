function getPlayerChoice() {
	while (true) {
		let playerChoice = prompt('Rock, paper or scissors?')

		if (playerChoice == null) {
			continue
		}
		
		playerChoice = playerChoice.toLowerCase()
		
		if (playerChoice === 'rock' ||
			playerChoice === 'paper' ||
			playerChoice === 'scissors') {
				return playerChoice
		}
	}
}


function getComputerChoice() {
	randomChoice = Math.floor(Math.random() * 3)

	if (randomChoice === 0) {
		return 'rock'
	} else if (randomChoice === 1) {
		return 'paper'
	} else {
		return 'scissors'
	}
}
