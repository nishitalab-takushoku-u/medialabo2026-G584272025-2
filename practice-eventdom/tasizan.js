function greeting() {
  let i=document.querySelector('input#left'); 
  let q=i.value; 
  let i2=document.querySelector('input[name="right"]');
  let p=i2.value; 
  let n1=Number(q);
  let n2=Number(p); 
  let sum=Math.floor(q)+Math.floor(p); 
  let wa=document.querySelector('span#answer');
  wa.textContent=sum;
}
let b = document.querySelector('button#calc');
b.addEventListener('click', greeting); 