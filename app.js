const prompt = require("prompt-sync")()

const player = {
	name: '',
	health: 100,
	weapons: [
		{
			name: 'Blaster',
			amo: 20,
			damage: 10
		}
	],
	alive: true
}

const alien = {
	name: "Alien",
	health: 100,
	weapons: [
		{
			name: 'Teeth',
			damage: 20
		}
	],
	alive: true
}

const crew = [
	{
		name: "John",
		age: 40,
		occupation: "navigator",
		alive: true
	},
	{
		name: "Alice",
		age: 37,
		occupation: "cook",
		alive: true
	},
	{
		name: "Fred",
		age: 35,
		occupation: "engineer",
		alive: true
	},
	{
		name: "Mary",
		age: 32,
		occupation: "nurse",
		alive: true
	},
	{
		name: "Bob",
		age: 35,
		occupation: "engineer",
		alive: true
	},
	{
		name: "Thomas",
		age: 34,
		occupation: "engineer",
		alive: true
	},
]

const exitGame = () => {
	process.exit();
}

const decision = (option1, option2, function1, function2) => {

	let answer = ''
	
	while (answer !== option1 && answer !== option2){
		if(answer === 'exit') exitGame();
		answer = prompt(`Please type '${option1}' or '${option2}' (or type 'exit' to exit the game): `);
	}
	
	console.clear()
	
	if (answer === option1){
		function1()
	} else if (answer === option2){
		function2()
	} else {
		exitGame();
	}
}

const beginGame = () => {

	console.clear()
  
	console.log("Welcome to this Choose Your Own Adventure game. Let's begin.")
	
	const username = prompt("Please type your name (or type 'exit' to exit the game): ")
	
	if (username === 'exit') exitGame()
	
	player.name = username;
	
	console.clear()
	
	console.log(player)

	console.log(`Welcome, ${username}! The year is 3035. You are on a spaceship on a reconnaissance mission.`)
	
	console.log('You will always see your stats at the top.')
	
	hearDistressCall()
}

const hearDistressCall = () => {
  
	console.log('Suddenly your ship receives a distress beacon. Looking into it further it seems to be coming from another ship. Do you want to answer it or ignore it?')
	
	decision('answer', 'ignore', answeringCall, ignoringCall)
}

const ignoringCall = () => {
	console.log('Lame. You are not a real space hero. GAME OVER!')
}

const answeringCall = () => {
  
  	console.clear()
	console.log(player)

	console.log('Way to go! Congratulations for taking on this challenge!!')
	console.log('You take your ship to the other ship and doc at its docking station.')
	console.log("You open the hatch to the ship and it's all quiet. Not a sound to be heard")
	console.log("There are two passageways, one leading up and one leading down. Which way do you want to go?")  

	decision('up', 'down', up, down)
}

const up = () => {
	
	console.clear()
	console.log(player)

	console.log('Ok. You cautiously proceed upwards. And you go down a long dark passageway. Not a sound to be heard.')
	console.log("Suddenly, you hear a SCREETCH! Something dark and strangely shaped is running towards you from behind. What do you want to do? Run or stand and fight?")

	decision('fight', 'run', fightUp, run)
}

const run = () => {
	console.clear()
	console.log("Coward! An alien creature catches up to you and eats you. GAME OVER!")
}

const fightUp = () => {

	console.clear()
	console.log(player)
	console.log(alien)

	console.log("Good for you! You chose to stand and fight the alien! It's stats are now at the top along with yours.")
	console.log('What do you want to do now, fire your blaster or turn and run?')
	
	decision('fire', 'run', fire1Up, run)
}

const fire1Up = () => {

	console.clear()
	player.health -= 20;
	player.weapons[0].amo -= 5;
	alien.health -=50;

	console.log(player)
	console.log(alien)
	
	console.log('You fire your blaster five times. Now look at the damage you caused to the alien. But the alien also managed to bite you! Look at your health.')
	console.log("Ok. So you've taken some damage. The alien can do serious damage with its teeth. But you've also done some serious damage to the alien with only five shots. What do you want to do now, run or fire again?")

	decision('fire', 'run', fire2Up, run)
}

const fire2Up = () => {

	console.clear()
	
	player.health -= 20;
	player.weapons[0].amo -= 5;
	alien.health -=50;
	alien.alive = false
	
	console.log(player)
	console.log(alien)
	
	console.log("You fire your blaster five times again. Again, you took some damage. It's pretty serious.")
	console.log("But look! You killed the alien! It's health points have gone to zero. Congratulations!")
	console.log("You're seriously hurt now. But you hear voice off in the distance. What do you want to do? Do you want to go back to your ship and get medical supplies for your wounds? Or do you want to go on and see what those voices are?")
	
	decision('keep going', 'go back to the ship', keepGoingUp, run)
}

const keepGoingUp = () => {
	
	console.clear()
	
	console.log(player)
	
	console.log("Fantastic! My brave hero! Although seriously wounded, you decide to keep going.")
	console.log("You find the other voices. They are the crew of the endagered ship.")
	console.log("You saved:")
	
	crew.forEach(x=>{
		console.log(`${x.name} who is ${x.age} years old and is an ${x.occupation}.`)
	})
	
	console.log("Congratulations! YOU WIN THE GAME!!!")
}

const down = () => {
	
	console.clear()
	
	console.log(player)

	console.log('Ok. You decide to go the lower route. Off in the distance you hear voices. What do you want to do? Go investigate? Or go back to the ship?')

	decision('keep going', 'go back to the ship', keepGoingDown, run)
}

const keepGoingDown = () => {
	
	console.clear()
	
	console.log(player)

	console.log("Ok. You keep going and finally you run into the crew. They are:")
	
	crew.forEach(x=>{
		console.log(`${x.name} who is ${x.age} years old and is an ${x.occupation}.`)
	})
	
	console.log("You talk to the crew, and they tell you that there is an alien on board, that has already killed and eaten several of their crew.")
	console.log("You start leading the crew back to your ship. Suddenly you hear a loud SCREETCH!! You turn and see a strange creature with large teeth running towards you and the crew. What do you want to do? Stand and fight or run back to the ship?")

	decision('fight', 'run', fightDown, run)
} 

const fightDown = () => {
	
	console.clear()
	
	console.log(player)
	console.log(alien)

	console.log("Good for you! You chose to stand and fight the alien! It's stats are now at the top along with yours.")
	console.log('What do you want to do now, fire your blaster or turn and run?')
	
	decision('fire', 'run', fire1Down, run)
}

const fire1Down = () => {
	
	console.clear()
	
	player.health -= 20;
	player.weapons[0].amo -= 5;
	alien.health -=50;
	
	console.log(player)
	console.log(alien)
	
	console.log('You fire your blaster five times. Now look at the damage you caused to the alien. But the alien also managed to bite you! Look at your health.')
	console.log("Ok. So you've taken some damage. The alien can do serious damage with its teeth. But you've also done some serious damage to the alien with only five shots. What do you want to do now, run or fire again?")

	decision('fire', 'run', fire2Down, run)
}

const fire2Down = () => {

	console.clear()
	
	player.health -= 20;
	player.weapons[0].amo -= 5;
	alien.health -=50;
	alien.alive = false
	
	console.log(player)
	console.log(alien)
	
	console.log("You fire your blaster five times again. Again, you took some damage. It's pretty serious.")
	console.log("But look! You killed the alien! It's health points have gone to zero. Congratulations!")
	console.log("But now you see that there is a second alien that has killed and eaten two members of the crew: ")
	crew[crew.length - 1].alive = false;
	crew[crew.length - 2].alive = false;
	
	crew.forEach(x=>{
		if (x.alive === false){
			console.log(`${x.name} is dead.`)
		}
	})
	
	console.log("What do you want to do? Fight or try to run back to the ship?")

	decision('fight', 'run back to the ship', fight2Down, run)
}

const fight2Down = () => {
	
	console.clear()
	console.log(player)
	
	alien.name = 'Second Alien';
	alien.health = 100
	alien.alive = true
	
	console.log(alien)

	console.log("Good for you! You chose to stand and fight the alien! It's stats are now at the top along with yours.")
	console.log('What do you want to do now, fire your blaster or turn and run?')
	
	decision('fire', 'run', fire3Down, run)
}

const fire3Down = () => {
	
	console.clear()
	
	player.health -= 20;
	player.weapons[0].amo -= 5;
	alien.health -=50;
	
	console.log(player)
	console.log(alien)
	
	console.log('You fire your blaster five times. Now look at the damage you caused to the alien. But the alien also managed to bite you! Look at your health.')
	console.log("Ok. So you've taken some damage. The alien can do serious damage with its teeth. But you've also done some serious damage to the alien with only five shots. What do you want to do now, run or fire again?")

	decision('fire', 'run', fire4Down, run)
}

const fire4Down = () => {
	
	console.clear()
	
	player.health -= 20;
	player.weapons[0].amo -= 5;
	alien.health -=50;
	alien.alive = false;
	
	console.log(player)
	console.log(alien)
	
	console.log("You fire your blaster five times again. Again, you took some damage. It's pretty serious.")
	console.log("But look! You killed the alien! It's health points have gone to zero. Congratulations!")
	console.log("You saved:")
	
	crew.forEach(x=>{
		if (x.alive === true){
			console.log(`${x.name} who is ${x.age} years old and is an ${x.occupation}.`)
		}
	})
	
	console.log("Congratulations! YOU WIN THE GAME!!!")
}

beginGame()