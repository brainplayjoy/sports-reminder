```javascript
const cards = document.querySelectorAll(".team-card");
const removeAllBtn = document.getElementById("removeAllBtn");

cards.forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("selected");

    });

});

removeAllBtn.addEventListener("click", () => {

    cards.forEach(card => {

        card.classList.remove("selected");

    });

});
```
