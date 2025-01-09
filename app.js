// let para1 = document.createElement('p');
// para1.innerText="Hey, I am red!";
// document.querySelector('body').append(para1);
// para1.classList.add('red');
// let head3= document.createElement('h3');
// head3.innerText = "I'm a Blue H3!";
// document.querySelector('body').append(head3);
// head3.classList.add('red');
// let box= document.createElement('div');
// // let head1= document.createElement('h1');
// // let para = document.createElement('p');
// // head1.innerText="I'm in a div";
// // para.innerText="ME TOO!";
// // document.querySelector('body').append(box);
// // box.appendChild(head1);
// // box.appendChild(para);
// // box.classList.add('box');
// // document.querySelector('body').prepend(box);
// // --------------------------;

// let btns = document.querySelectorAll("button");
// for(btn of btns){
//     btn.addEventListener("dblclick",sayHello);
// }
// function sayHello(){
//     console.log("Say Hello");
// } 

let btn= document.querySelector("button");
btn.addEventListener("click",function(){
    let h3=document.querySelector("h3");
    let RandomColor=getRandomColor();
    h3.innerText=RandomColor;
    let box=document.querySelector("div");
    box.style.backgroundColor=RandomColor;
    console.log("color generated");
});
function getRandomColor() {
    let red=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
    return color;
};

