import "./style.css"

//Intro game

const game = ()=>{
	let pScore = 0;
    let cScore = 0;

	const startGame = ()=> {
		const playBtn = document.querySelector(".intro button");
		const introScreen = document.querySelector (".intro");
		const match = document.querySelector (".match");

			playBtn.addEventListener("click", ()=>{
				introScreen.classList.add("fadeOut");
				match.classList.add("fadeIn");
		})

	}
	startGame()


//Match!!

	const score = ()=>{
		const playerScore = document.querySelector(".player p");
		const computerScore = document.querySelector(".computer p");
		playerScore.textContent = pScore;
		computerScore.textContent = cScore;
}
	const btns = document.querySelectorAll("[data-btn]");
		btns.forEach((btn)=> {
		btn.addEventListener("click",()=>{
			const number = Math.random()
			const result = document.querySelector(".result")
				if (number >= 0 && number < 1 / 3) {
					pScore++;
					score();
					result.textContent = "You Won";
			if (pScore === 3){
		  			const outroScreen = document.querySelector (".outro");
					const match = document.querySelector (".match");
		  			outroScreen.classList.add("fadeIn");
					match.classList.remove("fadeIn");
		
				}
				  
	}		else if (number>= 1 / 3 && number < 2 / 3) {
				cScore++;
				score();
				result.textContent = "You Lost";
			if (cScore === 3){ const outroScreen = document.querySelector (".outro");
				const match = document.querySelector (".match");
				outroScreen.classList.add("fadeIn");
				match.classList.remove("fadeIn");
				  }

	}		else if ( number >= 2 / 3 && number < 1 ){
				result.textContent = "It´s a tie";
		
	}
	})  
  }) 
	const endGame = ()=>{
		const endBtn = document.querySelector(".outro button");
		endBtn.addEventListener("click", ()=>{
			window.location.reload();

	})
 }
 endGame()


} 
game ()
