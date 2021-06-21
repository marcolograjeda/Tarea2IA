// MIT License
// Copyright (c) 2020 Luis Espino
var contador = 0;
function reflex_agent(location, state){
   	if (state=="DIRTY") return "CLEAN";
   	else if (location=="A") return "RIGHT";
   	else if (location=="B") return "LEFT";
}

function test(states){
      	var location = states[0];		
      	var state = states[0] == "A" ? states[1] : states[2];
      	var action_result = reflex_agent(location, state);
      	document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result).concat(" | Estado: ").concat(states[0]).concat(",").concat(states[1]).concat(",").concat(states[2]);
      	if (action_result == "CLEAN"){
        	if (location == "A") states[1] = "CLEAN";
         	else if (location == "B") states[2] = "CLEAN";
      	}
      	else if (action_result == "RIGHT") states[0] = "B";
      	else if (action_result == "LEFT") states[0] = "A";		
        
        if(states[1] =="CLEAN" && states[2] =="CLEAN"){
            contador++;
            if(contador<8)document.getElementById("log").innerHTML+="<br>Estado "+(contador+1).toString();
            else document.getElementById("log").innerHTML+="<br>Estado 1";
            
            if(contador == 0){
                states[0] = "A";
                states[1] = "DIRTY";
                states[2] = "DIRTY";
            }else if(contador == 1){
                states[0] = "B";
                states[1] = "DIRTY";
                states[2] = "DIRTY";
            }else if(contador == 2){
                states[0] = "A";
                states[1] = "DIRTY";
                states[2] = "CLEAN";
            }else if(contador == 3){
                states[0] = "B";
                states[1] = "DIRTY";
                states[2] = "CLEAN";
            }else if(contador == 4){
                states[0] = "A";
                states[1] = "CLEAN";
                states[2] = "DIRTY";
            }else if(contador == 5){
                states[0] = "B";
                states[1] = "CLEAN";
                states[2] = "DIRTY";
            }else if(contador == 6){
                states[0] = "A";
                states[1] = "CLEAN";
                states[2] = "CLEAN";
            }else if(contador == 7){
                states[0] = "A";
                states[1] = "CLEAN";
                states[2] = "CLEAN";
            }else{
                contador = 0;
                
                return;
            }
        }
	setTimeout(function(){ test(states); }, 2000);
}

var states = ["A","DIRTY","DIRTY"];
test(states);