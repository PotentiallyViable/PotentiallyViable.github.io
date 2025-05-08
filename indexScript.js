const snowContainer = document.querySelector('.snow-container');
	const numberOfSnowflakes = 10; // Adjust for more or fewer snowflakes

	function createSnowflake() {
	const snowflake = document.createElement('div');
	snowflake.classList.add('snowflake');
	
	snowflake.style.backgroundImage = "url(\"leaf" + Math.round(Math.random() * 2 + 1) + ".png\")";
	
	snowflake.style.left = `${Math.random() * 100}vw`;
	snowflake.style.animationDuration = `${Math.random() * 10 + 2}s`; // Random animation duration
	snowflake.style.opacity = Math.random() + 6; // Random opacity
	snowflake.style.fontSize = `${Math.random() * 5 + 10}px`; // Random size

	snowflake.style.transform = "translateX(" + Math.random() * 100 + 1 + "vw";

	snowContainer.appendChild(snowflake);

	// Remove snowflake after it falls off screen
	snowflake.addEventListener('animationiteration', () => {
	snowflake.remove();
	createSnowflake(); // Create a new snowflake to replace the old one
		});
	}

	// Create initial snowflakes
	for (let i = 0; i < numberOfSnowflakes; i++) {
		createSnowflake();
	}