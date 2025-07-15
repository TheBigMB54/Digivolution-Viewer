const babyContainer = document.getElementById("baby-cards");
const evoStage = document.getElementById("evo-stage");

Object.keys(digimonStages).forEach(baby => {
  const card = createCard(baby, "Baby", digimonStages[baby]);
  babyContainer.appendChild(card);
});

function createCard(name, stage, data) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<h3>${name}</h3><p>Stage: ${stage}</p>`;
  card.addEventListener("click", () => {
    evoStage.innerHTML = "";
    if (data.evolvesTo && data.evolvesTo.length > 0) {
      data.evolvesTo.forEach(next => {
        const nextCard = createCard(next.name, next.stage, next);
        evoStage.appendChild(nextCard);
      });
    } else {
      evoStage.innerHTML = "<p style='margin-left:10px;'>No further evolution.</p>";
    }
  });
  return card;
}