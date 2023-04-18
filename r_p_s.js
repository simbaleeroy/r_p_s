
let rock = 1, paper = 2, scissors = 3;
function comp()
    {
        let response = Math.floor(Math.random() * 3) + 1;
        let ans = "1";
        if (response == 1)
            {
                ans = "rock";
            }
        else if (response == 2)
            {
                ans = "paper";
            }
        else if (response == 3)
            {
                ans = "scissors";
            }
            
        return ans;
    }

let player = "paper";
comp = comp();
alert(`you chose ${player}, and the computer chose ${comp}`);

