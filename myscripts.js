         

const display=document.getElementById('display');
   function createGrid(x){
   for(let i=0; i<x; i++){
       let columns=document.createElement('div');
       columns.classList.add('columns');
       display.appendChild(columns);
    if(i===(x-1)){
        display.lastChild.style="border:none"};
    for(let i=0; i<16; i++){
       let rows=document.createElement('div');
       rows.classList.add('rows');
       columns.appendChild(rows);
    if(i===(x-1)){
    columns.lastChild.style="border:none";
        }}}};
     createGrid(16);
    //creates 16x16 grid for display div 
     const columns=document.querySelectorAll('.columns');
     const rows=document.querySelectorAll('.rows');
   //you're calling array like objects-you need to loop to make them change
   for(const row of rows){
   row.addEventListener('mouseenter', (e)=>e.target.style="background-color:black")
};