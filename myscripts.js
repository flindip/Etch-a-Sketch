const display=document.getElementById('display');
   function createGrid(){
   for(let i=0; i<16; i++){
       let columns=document.createElement('div');
       columns.classList.add('columns');
       display.appendChild(columns);
    if(i===15){
        display.lastChild.style="border:none"};
    for(let i=0; i<16; i++){
       let rows=document.createElement('div');
       rows.classList.add('rows');
       columns.appendChild(rows);
    if(i===15){
    columns.lastChild.style="border:none";
        }}}};
     createGrid();
    //creates 16x16 grid for display div 
     const columns=document.getElementsByClassName('column');
     const rows=document.getElementsByClassName('rows');
 