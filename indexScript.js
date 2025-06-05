const snowContainer = document.querySelector(".snow-container");
const numberOfSnowflakes = 10; // Adjust for more or fewer snowflakes
	
//Music stuff

//let music = false;
//const musicToggleButton = document.querySelector(".toggleMusic");
//const musicDisplay = document.querySelector(".musicDisplay");

function createSnowflake() {
const snowflake = document.createElement("div");
snowflake.classList.add("snowflake");
	
snowflake.style.backgroundImage = "url(\"indexImages/leaf" + Math.floor(Math.random() * 2 + 1) + ".png\")";
	
snowflake.style.left = `${Math.random() * 100}vw`;
snowflake.style.animationDuration = `${Math.random() * 10 + 2}s`; // Random animation duration
snowflake.style.opacity = Math.random() + 6; // Random opacity
snowflake.style.fontSize = `${Math.random() * 5 + 10}px`; // Random size

snowflake.style.transform = "translateX(" + Math.random() * 100 + 1 + "vw";

snowContainer.appendChild(snowflake);
	
//musicDisplay.style.color = "white";
	
// Remove snowflake after it falls off screen
snowflake.addEventListener("animationiteration", () => {
snowflake.remove();
createSnowflake(); // Create a new snowflake to replace the old one
	});
}

// Create initial snowflakes
for (let i = 0; i < numberOfSnowflakes; i++) {
	createSnowflake();
}

/*
musicToggleButton.addEventListener("click", () => {
if(music)
{
	console.log("Music set to false");
	music = false;
	musicDisplay.animation = "musicTextFade linear 0.5s reversed";
}
else
{
	console.log("Music set to true");
	music = true;
	musicDisplay.animation = "musicTextFade linear 0.5s normal";
}
});
*/
