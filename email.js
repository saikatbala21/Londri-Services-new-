let book= document.getElementsByClassName("book")[0];
book.addEventListener("click", ()=>{ 
    const bookInstructions = document.getElementById("book-instructions");
    bookInstructions.innerHTML = "Thank you for booking the service We will back to you soon";
    bookInstructions.style.color = "green";
    bookInstructions.style.fontSize = "8px";
    bookInstructions.style.paddingLeft = "4rem";
    alert("Thank you for booking the service We will back to you soon");
})
