const btn = document.getElementById('btn');
const paragraph = document.getElementById("para");

btn.addEventListener('click', ()=>{
    paragraph.classList.toggle("active");

    if(paragraph.classList.contains("active"))
        btn.innerText = "Read more";
    else
        btn.innerText = "Read less";

    // using ternary operator
    btn.innerText = paragraph.classList.contains('active')? "Read more" : "Read less"
})