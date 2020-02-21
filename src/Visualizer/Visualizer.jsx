import React from 'react';
import './Visualizer.css';
import * as Algorithms from './Algorithms.js';

class Visualizer extends React.Component{
    constructor(p){
        super(p);
        this.state = { numArray: [] };
    }

    render(){
        const {numArray} = this.state;
        return(
        //Displaying buttons and creating a div for each value in the array
        <>   
            <div class = "buttonPanel">
                <button class = "button" onClick = {() => this.changeNumbers()}>Randomize Numbers</button> 
                <button class = "button" onClick = {() => this.selectionSort()}>Selection Sort</button>
                <button class = "button" onClick = {() => this.bubbleSort()}>Bubble Sort</button>
                <button class = "button" onClick = {() => this.mergeSort()}>Merge Sort</button>
                <button class = "button" onClick = {() => this.heapSort()}>Heap Sort</button>
            </div> 
            <div class= "window">  
                {numArray.map(num => (
                    <div class = "bar" style = {{width: `${num}px`}}></div>                      
                ))}
            </div>   
        </>    
        );
    }
    
    selectionSort(){
        var animations = Algorithms.selectionSort(this.state.numArray); //Retrieving each animation that needs to be performed
        var numBars = document.getElementsByClassName('bar'); //Mapping all of the bar div's to an array
        let i = 0;
        for(i; i < animations.length; i++){                     
            const {value, flag} = animations[i]; //Storing the vales of the indecies and a flag which indicates a swap or comparison.

            //Non-swapping elements of animations array
            if ((i+1) % 3 !== 0){
                //On the first pass-through, highlight the comparison with blue, reverse back to green on second pass-through
                const color = (i+1) % 3 === 1 ? 'blue' : 'greenyellow';
                setTimeout(() => {
                    numBars[value[0]].style.backgroundColor = color;
                    numBars[value[1]].style.backgroundColor = color;
                }, i*3);
            //Handling swapping (third pass-through)
            }else{
                //Only continue if the swap flag is set. 
                if(flag === "s"){
                    setTimeout(() => {
                        var temp = numBars[value[0]].style.width;
                        numBars[value[0]].style.width =  numBars[value[1]].style.width;
                        numBars[value[1]].style.width = temp;
                        numBars[value[1]].style.backgroundColor = 'purple';
                    }, i*3);
                }
            }
        }
    }

    bubbleSort(){
        var animations = Algorithms.bubbleSort(this.state.numArray); //Retrieving each animation that needs to be performed
        var numBars = document.getElementsByClassName('bar'); //Mapping all of the bar div's to an array
        let i = 0;
        for(i; i < animations.length; i++){                     
            const {value, flag} = animations[i]; //Storing the vales of the indecies and a flag which indicates a swap or comparison.

            //Non-swapping elements of animations array
            if ((i+1) % 3 !== 0){
                //On the first pass-through, highlight the comparison with blue, reverse back to green on second pass-through
                const color = (i+1) % 3 === 1 ? 'blue' : 'greenyellow';
                setTimeout(() => {
                    numBars[value[0]].style.backgroundColor = color;
                    numBars[value[1]].style.backgroundColor = color;
                }, i*3);
            //Handling swapping (third pass-through)
            }else{
                //Only continue if the swap flag is set.
                if(flag === "s"){
                    setTimeout(() => {
                        var temp = numBars[value[0]].style.width;
                        numBars[value[0]].style.width =  numBars[value[1]].style.width;
                        numBars[value[1]].style.width = temp;
                    }, i*3);
                }
            }
        }
    }

    mergeSort(){
        //TODO
    }

    heapSort(){
        //TODO
    }

    componentDidMount(){
        this.changeNumbers(); //Display bars on load
    }

    //Create array with random values.
    changeNumbers(){
        var numArray = [];
        var i = 0;
        for(i; i < 50; i++){
            numArray.push(randomInt());
        }
        this.setState({numArray});
    }

}

//Randomizer function.
function randomInt(){
    return Math.floor(Math.random()*701 + 10); //Minimum width set to 10 so the bars are always visible
}
export default Visualizer;