function toggleSwitch(element){
    element.classList.toggle("active");

    const answer = elementNextElementSibling;
    if(answer.style.display === "block"){
        answer.style.display = "none";
        element.querySelector('.plus-sign').textContent = "+";
    } else{
        answer.style.display = "block";
        element.querySelector('.plus-sign').textContent = "-";
    }
}