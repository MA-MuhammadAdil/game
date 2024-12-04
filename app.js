// var boxs = document.querySelectorAll(".box");

// var resetbtn = document.querySelector("#reset-btn");

// var newGamebtn = document.querySelector("#new-btn");

// var msgContainer = document.querySelector(".msg-container");
// var msg = document.querySelector("#msg")

// var trunO = true;

// var winPatterns = [
//     [0,1,2],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [2,5,8],
//     [2,4,6],
//     [3,4,5],
//     [6,7,8],
// ];

// var reset = () =>{
//     trunO = true;
//     enableBox();
//     msgContainer.classList.add("hide")
// }




// boxs.forEach(function(box){
//     box.addEventListener("click",function(){
//         if(trunO ){
//             box.innerText  = 'O'
//             trunO = false
//         }
//         else{
//             box.innerText  = 'X'
//             trunO =  true

//         }
//         box.disabled = true;

//         checkWinner();

//     })
// });

// var disabledBox = () => {
//     for(var box of boxs){
//         box.disabled = true
//     }
// };

// var enableBox = () => {
//     for(var box of boxs){
//         box.disabled =  false;
//         box.innerHTML = " "
//     }
// }

// var showWinner  = (wninner)=>{
//     msg.innerText = ` Winner is ${wninner}`;
//     msgContainer.classList.remove("hide");
//     disabledBox()
// }

// var  checkWinner = ()=>{
//     for(var pattern of winPatterns){
         
//         var pos1Val = boxs[pattern[0]].innerText;

//         var pos2Val = boxs[pattern[1]].innerText;

//         var pos3Val = boxs[pattern[2]].innerText;

//         if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
//             if(pos1Val === pos2Val && pos2Val === pos3Val){
                
//                 showWinner(pos1Val);

                
//             }
//         }

//     }
// };


// newGamebtn.addEventListener("click",reset);
// resetbtn.addEventListener("click",reset);


// My try =======/// 

let boxes = document.querySelectorAll(".box");

let turn = "X";
let isGameOver = false;

boxes.forEach(e =>{
    e.innerHTML = ""
    e.addEventListener("click", ()=>{
        if(!isGameOver && e.innerHTML === ""){
            e.innerHTML = turn;
            cheakWin();
            cheakDraw();
            changeTurn();
        }
    })
})

function changeTurn(){
    if(turn === "X"){
        turn = "O";
        document.querySelector(".bg").style.left = "85px";
    }
    else{
        turn = "X";
        document.querySelector(".bg").style.left = "0";
    }
}

function cheakWin(){
    let winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    for(let i = 0; i<winConditions.length; i++){
        let v0 = boxes[winConditions[i][0]].innerHTML;
        let v1 = boxes[winConditions[i][1]].innerHTML;
        let v2 = boxes[winConditions[i][2]].innerHTML;

        if(v0 != "" && v0 === v1 && v0 === v2){
            isGameOver = true;
            document.querySelector("#results").innerHTML = turn + " win";
            document.querySelector("#play-again").style.display = "inline"

            for(j = 0; j<3; j++){
                boxes[winConditions[i][j]].style.backgroundColor = "#08D9D6"
                boxes[winConditions[i][j]].style.color = "#000"
            }
        }
    }
}

function cheakDraw(){
    if(!isGameOver){
        let isDraw = true;
        boxes.forEach(e =>{
            if(e.innerHTML === "") isDraw = false;
        })

        if(isDraw){
            isGameOver = true;
            document.querySelector("#results").innerHTML = "Draw";
            document.querySelector("#play-again").style.display = "inline"
        }
    }
}

document.querySelector("#play-again").addEventListener("click", ()=>{
    isGameOver = false;
    turn = "X";
    document.querySelector(".bg").style.left = "0";
    document.querySelector("#results").innerHTML = "";
    document.querySelector("#play-again").style.display = "none";

    boxes.forEach(e =>{
        e.innerHTML = "";
        e.style.removeProperty("background-color");
        e.style.color = "#fff"
    })
})