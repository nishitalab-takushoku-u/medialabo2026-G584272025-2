function changeDom(){
    let l=document.createElement('li');
    l.textContent='ヨット';
    let u=document.querySelector('ul#kazoeuta'); 
    u.insertAdjacentElement('beforeend', l); 
    
    let a=document.createElement('a'); 
    a.textContent='拓殖大学HP'; 
    let i=document.querySelector('img#bluemoon');
    i.setAttribute('src', 'bulemoon.jpg'); 
    a.setAttribute('href', 'https://www.takushoku-u.ac.jp'); 
    let p = document.querySelector('p#takudai');
    p.insertAdjacentElement('afterend', a); 

    l=document.querySelector('li#mochi'); 
    l.remove();
    li=document.querySelector('ul#kassen');
    li.remove();

    i = document.querySelector('img#bluemoon'); 
    i.setAttribute('src', 'bluemoon.jpg');

    a =document.createElement('a');                  
    a.setAttribute('href', 'https://www.takushoku-u.ac.jp');
    p = document.querySelector('p#takudai');
    p.insertAdjacentElement('afterend', a);

    u = document.createElement('ul'); 
    l = document.createElement('li');
    l.textContent = '赤';
    u.insertAdjacentElement('beforeend', l); 
    l = document.createElement('li');
    l.textContent = '緑';     
    u.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');
    l.textContent = '青';     
    u.insertAdjacentElement('beforeend', l);
    p = document.querySelector('p#primary'); 
    p.insertAdjacentElement('afterend', u);
}
let b = document.querySelector('button#henkou');
b.addEventListener('click', changeDom); 