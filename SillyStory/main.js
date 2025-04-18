const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "School had just ended for the day, so :insertx: left to :insertv: home as they always did. They turned to leave through the :insertu: when suddenly a wild :inserty: appeared and they had to battle! Swinging swords, harsh words that they would later regret, and sick flips for :insertz:; the battle was legendary. But in the end, :insertx: won the duel and was granted one wish by :inserty:. After thinking it over for a while, :insertx: finally decided that the one thing they wanted in the whole world was :insertw:. :inserty: twirled their fingers around and so it was, and :insertx: never felt the hollowness of life again. So anyway, that was my day. How about your day, :name:?";

const insertx = ["the Dell Monitor", "Mickey Mouse", "Ava", "a wild giraffe", "a Coelacanth", "John the Skeleton", "Windows XP", "Notepad++"]; //Main character
const inserty = ["the soup kitchen", "Firefox", "president of the United States", "the economy", "conformity"]; //Opponent
const insertz = ["30 minutes", "5 episodes", "43 days", "13 weeks and 4 schools"]; //Time spent dueling
const insertw = ["a kitkat", "\"A new school. I hate this school so much\"", "a Nintendo Switch 2", "\"None, for I am not tempted by mortal possesions... infnite wealth\"", "the power to traverse the multiverse", "a better housing market"]; //Wish granted
const insertv = ["walk", "slowly and painstakingly crawl", "sprint", "hover", "cartwheel", "gallop on all fours"]; //method of getting home
const insertu = ["main doors", "side door", "roof exit", "window"]; //Method of exit from school

randomize.addEventListener('click', result);

function result() {

	let xItem = randomValueFromArray(insertx);
	let yItem = randomValueFromArray(inserty);
	let zItem = randomValueFromArray(insertz);
	let wItem = randomValueFromArray(insertw);
	let vItem = randomValueFromArray(insertv);
	let uItem = randomValueFromArray(insertu);

	if(xItem === insertx[0])
	{
		story.style.background = '#6ee016'; //Green
	}
	else if(xItem === insertx[1])
	{
		story.style.background = '#ffc125'; //Orange (base)
	}
	else if(xItem === insertx[2])
	{
		story.style.background = '#97b6f7'; //Blue
	}
	else if(xItem === insertx[3])
	{
		story.style.background = '#f5897d'; //Red
	}
	else if(xItem === insertx[4])
	{
		story.style.background = '#c48efa'; //Purple
	}
	else if(xItem === insertx[5])
	{
		story.style.background = '#e0dd3f'; //Yellow
	}
	else if(xItem === insertx[6])
	{
		story.style.background = '#f7b0ef'; //Pink
	}
	else if(xItem === insertx[7])
	{
		story.style.background = '#66d4ce'; //Cyan
	}

	let newStory = storyText;
	newStory = newStory.replace(":insertx:", xItem);
	newStory = newStory.replace(":insertx:", xItem);
	newStory = newStory.replace(":insertx:", xItem);
	newStory = newStory.replace(":insertx:", xItem);
	
	newStory = newStory.replace(":inserty:", yItem);
	newStory = newStory.replace(":inserty:", yItem);
	newStory = newStory.replace(":inserty:", yItem);
	
	newStory = newStory.replace(":insertz:", zItem);
	newStory = newStory.replace(":insertw:", wItem);
	newStory = newStory.replace(":insertv:", vItem);
	newStory = newStory.replace(":insertu:", uItem);

	let name;
	if(customName.value !== '') {
		name = customName.value;
		newStory = newStory.replace(":name:", name);
	}
	else
	{
		name = "Dave";
		newStory = newStory.replace(":name:", name);
	}


	if(document.getElementById("uk").checked) {
		const weight = Math.round(300 * 0.0714286) + " stone";
		const temperature =  Math.round((94 - 32) * 5/9) + " centigrade";
		
		//I did it, I just didn't use it
		
		newStory = newStory.replace("94 fahrenheit", temperature);
		newStory = newStory.replace("300 pounds", weight);
		
		newStory = newStory.replace("School had just ended for the day,", "The place in which children typically go to learn for around 7 hours a day had just concluded its learning for the day, ");
		
		newStory = newStory.replace("home as they always did", "to their place of residence as they tended to do at this hour");
		newStory = newStory.replace("when suddenly a wild", "when, lo! A rampant and ravenous");
		newStory = newStory.replace("appeared and they had to battle!", "had emerged, forcing " + xItem + " to engage them in a duel of swords!");
		newStory = newStory.replace("Swinging swords, harsh words that they would later regret, and sick flips for ", "Broadswords clashing, the calling of ruffians which the two duelers would later come to regret, and spins colloquially known as \"sick,\" all over the course of ");
		newStory = newStory.replace("the battle was legendary.", "the battle would later go down in the history books of time as \"the best sword fight in the history of mankind.\"");
		newStory = newStory.replace("won the duel and was granted one wish by", "had achieved victory over " + yItem + " and was to be granted one lone wish for anything in the world by ");
		newStory = newStory.replace("After thinking it over for a while, ", "After pondering the offer for a good long while, ");
		newStory = newStory.replace("never felt the hollowness of life again", "would never feel the existential emptiness and loneliness of life ever again");
		newStory = newStory.replace("So anyway, that was my day. How about your day, ", "So that was what happened to me, " + xItem + ", today in the United Kingdom, god save the queen. How enjoyable was your day, ");
		
		//Time for all the names
		for(let i = 0; i < 6; i++)
		{
			newStory = newStory.replace("the Dell Monitor", "the monitor made by the company known as Dell");
		
			newStory = newStory.replace("Mickey Mouse", "the mouse known as Michael Mouse from its popular shows by the Company Walt Disney Animation Studios");
		
			newStory = newStory.replace("a wild giraffe", "an animal from Africa known as the Giraffe");
		
			newStory = newStory.replace("a Coelacanth", "a fish previously thought to be extinct");
		
			newStory = newStory.replace("John the Skeleton", "the skeleton, Johnathan Skeleton");
		
			newStory = newStory.replace("Windows XP", "the old windows operating system known as Windows Xp by the company Microsoft, released in 2001");
			
			newStory = newStory.replace("Notepad++", "a piece of software for personal computers called notepad++ that offers a text editor for editing code along with basic text");
		}
		//Had to move it down here because I used the characters name again at the end and couldn't change it like this from above
	}
	
	else if(document.getElementById("car").checked)
	{
		newStory = "Vroom vroomed vrum vroom nyoom, vrum Vryoom vroom vruum vroomed vrum. Skrrt vroom vrom vroomed beeped vrum zoom vrm vroom nyoom vrooom vrum skrrt! Vroom, vroom vrumm zoom, mmm vroom vroom vroom; vrum vroom skrrt. Vrom vroomm, nyoom vrummed vrr vroom vroom vrum zoom. Vroom nyoom vrum vroom'd, skrrt vroom vroom vrum vrrm vroom vrum nyoom vrum vroom. Vroom vroom vrum vroomm vrum vrom, vroom skrrt zoom vruum vroom'd vrm vroom. Vrum vroom, nyoom vrum vroom. Skrrt vroom vroom zoom, " + name + "?";
	}

	story.textContent = newStory;
	story.style.visibility = 'visible';
}
