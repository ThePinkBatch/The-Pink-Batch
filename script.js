// -------------------------
// THE PINK BATCH
// Luxury Animations
// -------------------------

window.addEventListener("load", () => {

const loader = document.querySelector(".loader");

setTimeout(()=>{
loader.style.display="none";
},2200);

});

// Smooth fade-in sections

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});

// Floating sparkles

function createSparkle(){

const sparkle=document.createElement("div");

sparkle.className="sparkle";

sparkle.innerHTML="✦";

sparkle.style.left=Math.random()*window.innerWidth+"px";

sparkle.style.top=window.innerHeight+"px";

sparkle.style.fontSize=(10+Math.random()*12)+"px";

sparkle.style.animationDuration=(4+Math.random()*4)+"s";

document.body.appendChild(sparkle);

setTimeout(()=>{

sparkle.remove();

},8000);

}

setInterval(createSparkle,700);

// Floating hearts occasionally

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="♡";

heart.style.left=Math.random()*window.innerWidth+"px";

heart.style.top=window.innerHeight+"px";

heart.style.animationDuration=(6+Math.random()*3)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createHeart,2500);

// Navbar shadow on scroll

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

header.style.boxShadow="0 8px 30px rgba(0,0,0,.06)";

}else{

header.style.boxShadow="none";

}

});

// Button ripple

document.querySelectorAll("button,.order-btn,.hero-buttons a").forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

const d=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=d+"px";

circle.style.height=d+"px";

circle.style.left=e.offsetX-d/2+"px";

circle.style.top=e.offsetY-d/2+"px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

// Cookie cards lift slightly while moving mouse

document.querySelectorAll(".cookie-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const x=e.offsetX/card.clientWidth-.5;

const y=e.offsetY/card.clientHeight-.5;

card.style.transform=
`rotateY(${x*10}deg) rotateX(${y*-10}deg) translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="rotateY(0) rotateX(0)";

});

});
// -------------------------
// BUILD YOUR BOX
// -------------------------

let totalCookies = 0;
const maxCookies = 6;

const totalDisplay = document.getElementById("totalCookies");
const priceDisplay = document.getElementById("price");
const progressBar = document.getElementById("progress");

function updateTotals() {

    totalDisplay.textContent = totalCookies;

  if (totalCookies === 6) {
    priceDisplay.textContent = 35;
} else {
    priceDisplay.textContent = totalCookies * 5;
}

    progressBar.style.width = (totalCookies / maxCookies) * 100 + "%";

}

document.querySelectorAll(".plus").forEach(button => {

    button.addEventListener("click", () => {

        const count = button.parentElement.querySelector(".count");

        let current = Number(count.textContent);

        if (totalCookies < maxCookies) {

            current++;
            totalCookies++;

            count.textContent = current;

            updateTotals();

        }

    });

});

document.querySelectorAll(".minus").forEach(button => {

    button.addEventListener("click", () => {

        const count = button.parentElement.querySelector(".count");

        let current = Number(count.textContent);

        if (current > 0) {

            current--;
            totalCookies--;

            count.textContent = current;

            updateTotals();

        }

    });

});

updateTotals();
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxRBckPIQgnBoO3msOrBjmD_awjHrvahDDbAMjEIUhBI3HRy6fhiLf7N0l6JY6ommcw2g/exec";

const orderButton = document.querySelector(".submit-order");

if (orderButton) {

orderButton.addEventListener("click", () => {

alert("Button clicked!");

let cookies = {};

document.querySelectorAll(".cookie-choice").forEach(card => {

let name = card.querySelector("span").textContent;
let amount = card.querySelector(".count").textContent;

cookies[name] = amount;

});


fetch(SCRIPT_URL, {
method: "POST",
mode: "no-cors",
headers: {
"Content-Type": "text/plain"
},
body: JSON.stringify({
name: document.getElementById("customerName").value,
phone: document.getElementById("customerPhone").value,
pickup: document.getElementById("pickupDate").value,
cookies: JSON.stringify(cookies),
total: totalCookies,
notes: document.getElementById("message").value
})

});

});

}
