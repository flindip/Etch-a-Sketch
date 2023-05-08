const button=document.getElementById('grid-button');
  button.addEventListener('click' , (e)=>{
    input=prompt('Enter Grid dimension number between 1-100');
    if(input===null){
      return;}
    x=Number(input);
    if(x>100 || x<=0 || isNaN(x)){
      return alert("Error");}
    gridReset();
    createGrid(x);});
    //button that creates new grid by number limit, reset, and building new grid
    
 const display=document.getElementById('display');
   function createGrid(x){ 
   for(let i=0; i<x; i++){
       let columns=document.createElement('div');
       columns.classList.add('columns');
       display.appendChild(columns);
    if(i===(x-1)){
        display.lastChild.style="border:none"};
    for(let i=0; i<x; i++){
       let rows=document.createElement('div');
       rows.classList.add('rows');
       columns.appendChild(rows);
    if(i===(x-1)){
    columns.lastChild.style="border:none";
    mouse();
        }}}};
    //creates 16x16 grid for display div
    createGrid(16);
     const columns=document.querySelectorAll('.columns');
     const rows=document.querySelectorAll('.rows');
   //you're calling array like objects-you need to loop to make them change
   function mouse(){
   const rows=document.querySelectorAll('.rows');
   for(const row of rows){
    let x=0;
    row.addEventListener('mouseover', (e)=>e.target.style=`background-color: ${randomColor()},${x+=.1}`);
}};
function gridReset(){
const display=document.getElementById('display');
const columns=document.querySelectorAll('.columns');
for(const column of columns){
display.removeChild(column);}
}
function randomColor(){
let valueOne=Math.floor(Math.random()*256);
let valueTwo=Math.floor(Math.random()*256);
let valueThree=Math.floor(Math.random()*256);
return`RGB(${valueOne}, ${valueTwo}, ${valueThree}`;
}

const resetButton=document.getElementById('reset-button');
resetButton.addEventListener('click', (e)=>{
x=display.childElementCount;
gridReset();
createGrid(x);
})