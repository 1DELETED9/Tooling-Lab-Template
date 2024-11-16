
  export class RockPaperScissors {
      constructor(username) {
          this.username = username;
      }

  generateCPUResponse() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  generateCPUResponse(){
      var acceptedValues = [ `rock`, `paper`, `scissors` ];
    const randomIndexNumber = Math.floor(Math.random() * 3); 

    return acceptedValues[randomIndexNumber];
  }

  determineWinner(userSelection, cpuSelection) {
    if (userSelection === cpuSelection) {
      return 'tie'; 
    }
    
    if (
      (userSelection === 'rock' && cpuSelection === 'scissors') ||
      (userSelection === 'paper' && cpuSelection === 'rock') ||
      (userSelection === 'scissors' && cpuSelection === 'paper')
    ) {
      return 'win'; 
    }
    
      return 'lose'; 
    }
  
  determineWinner(userSelection, cpuSelection){
    if (userSelection == cpuSelection) { 
         return 'tie'; 
    }
    else if(
      (userSelection == 'paper' && cpuSelection == 'rock') || 
      (userSelection == 'scissors' && cpuSelection == 'paper') || 
      (userSelection == 'rock' && cpuSelection == 'scissors')
    ) { 
      return 'win'; 
    }
    else { 
      return 'lose'; 
    }
  }

  play(userSelection) {
    const validChoices = ['rock', 'paper', 'scissors'];
    if (!validChoices.includes(userSelection)) {
      throw new Error(`Invalid selection: ${userSelection}. Please choose 'rock', 'paper', or 'scissors'.`);
    }
  }

  play(userSelection){
    const cpuSelection = this.generateCPUResponse(); 
    const results = this.determineWinner(userSelection, cpuSelection); 
    
    if(results == 'win') { 
       this.score.user++; 
    }
    if(results == 'lose') { 
          this.score.cpu++; 
    }

    this.gameHistoryLog.push(` ${this.username} selected ${userSelection}. CPU selected ${cpuSelection}: ${this.username} ${results}s`);
  }

}