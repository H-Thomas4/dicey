let dieArray = [];

let Dice = function(){
    this.value = this.roll();
    this.div = document.createElement('div');
    this.div.innerText = this.value;
    this.div.className = 'dice';
    document.getElementById('container').appendChild(this.div);
    this.div.addEventListener('click',function(){
        this.value = this.roll();
        this.div.innerText = this.value;
    }.bind(this));
    this.div.addEventListener('dblclick', function(){
        this.div.remove();
         let id = dieArray.indexOf(this);
        dieArray.splice(id,1);
    }.bind(this))
}

Dice.prototype.roll = function(){
    return rand();
}

function rand(){
    return Math.floor(Math.random() * 6) + 1;
}

document.getElementById('getDie').addEventListener('click',function(){
    let d = new Dice();
    dieArray.push(d);
})

document.getElementById('rollDie').addEventListener('click', function(){
        for(let i = 0; i<dieArray.length;i++){
            dieArray[i].value = dieArray[i].roll();
            dieArray[i].div.innerText = dieArray[i].value;
        }
})
    
    document.getElementById('rollDie').addEventListener('click', function(){
            for(let i = 0; i<dice.length;i++){
                dice[i].value = dice[i].roll();
                dice[i].div.innerText = dice[i].value;
            }
    })
  






