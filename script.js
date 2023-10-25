let universal_map = {
    "mazrine" : "That's me! I make music and I need to land a job on programing soon... and I like <span style=\"color: rgb(186, 10, 240)\">purple</span>",
    "moonring" : "Great game! Not purple tho, it has many colors. You are not supposed to type <span style=\"color: rgb(10, 83, 240)\">blue</span> words... go back to the <span style=\"color: rgb(186, 10, 240)\">start</span>?",
    "blue" : "try <span style=\"color: rgb(186, 10, 240)\">purple</span>",
    "purple" : "it's a nice color I think. For this <span style=\"color: rgb(186, 10, 240)\">project</span> I mean.",
    "project" : "It was nice to figure out how to do it. <span style=\"color: rgb(186, 10, 240)\">friends</span> helped me with all the errors",
    "friends" : "I couldn't do it without them. Also, that's all for now... why don't you go back to the <span style=\"color: rgb(186, 10, 240)\">start</span>?",
    "start" : "Welcome. I am <span style=\"color: rgb(186, 10, 240)\">Mazrine</span> and this is a demo <span style=\"color: rgb(186, 10, 240)\">project</span> based on <span style=\"color: rgb(10, 83, 240)\">Moonring</span> dialogue system! Try typing the <span style=\"color: rgb(186, 10, 240)\">purple</span> words you see around!"
}

let label = document.getElementById("label-a") 
let input = document.getElementById("input-a") 
let form = document.getElementById("form-a")


form.addEventListener("submit", (event) => {
    let lowercase = input.value.toLowerCase();
    if(lowercase in universal_map){
        label.innerHTML = universal_map[lowercase]
    }

    input.value = ""
    event.preventDefault();
})

const slider = document.querySelector(".items");
		const slides = document.querySelectorAll(".item");
		const button = document.querySelectorAll(".button");

		let current = 0;
		let prev = 4;
		let next = 1;

		for (let i = 0; i < button.length; i++) {
			button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
		}

		const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

		const gotoNext = () => current < 4 ? gotoNum(current + 1) : gotoNum(0);

		const gotoNum = number => {
			current = number;
			prev = current - 1;
			next = current + 1;

			for (let i = 0; i < slides.length; i++) {
				slides[i].classList.remove("active");
				slides[i].classList.remove("prev");
				slides[i].classList.remove("next");
			}

			if (next == 5) {
				next = 0;
			}

			if (prev == -1) {
				prev = 4;
			}

			slides[current].classList.add("active");
			slides[prev].classList.add("prev");
			slides[next].classList.add("next");
		}

        const pressedButtonSelector = '[data-theme][aria-pressed="true"]';
        const defaultTheme = 'eyes';
        
        const applyTheme = (theme) => {
          const target = document.querySelector(`[data-theme="${theme}"]`);
          document.documentElement.setAttribute("data-selected-theme", theme);
          document.querySelector(pressedButtonSelector).setAttribute('aria-pressed', 'false');
          target.setAttribute('aria-pressed', 'true');
        };
        
        const handleThemeSelection = (event) => {
          const target = event.target;
          const isPressed = target.getAttribute('aria-pressed');
          const theme = target.getAttribute('data-theme');        
          
          if(isPressed !== "true") {
            applyTheme(theme);
            localStorage.setItem('selected-theme', theme);
          }
        }
        
        const setInitialTheme = () => {
          const savedTheme = localStorage.getItem('selected-theme');
          if(savedTheme && savedTheme !== defaultTheme) {
            applyTheme(savedTheme);
          }
        };
        
        setInitialTheme();
        
        const themeSwitcher = document.querySelector('.theme-switcher');
        const buttons = themeSwitcher.querySelectorAll('button');
        
        buttons.forEach((button) => {
           button.addEventListener('click', handleThemeSelection);
        });
        

const degreeToRadian = (angle) => {
    return angle * (Math.PI / 180);
  };
  
  const radius = 30;
  const diameter = radius * 2;
  
  const circle = document.querySelector("#circle");
  circle.style.width = `${diameter}px`;
  circle.style.height = `${diameter}px`;
  
  const text = circle.dataset.text;
  const characters = text.split("");
  
  const deltaAngle = 390 / characters.length;
  const characterOffsetAngle = 8;
  let currentAngle = -360;
  
  characters.forEach((character, index) => {
    const span = document.createElement("span");
    span.innerText = character;
    const xPos = radius * (1 + Math.cos(degreeToRadian(currentAngle)));
    const yPos = radius * (1 + Math.sin(degreeToRadian(currentAngle)));
  
    const transform = `translate(${xPos}px, ${yPos}px)`;
    const rotate = `rotate(${(index * deltaAngle) + characterOffsetAngle}deg)`;
    span.style.transform = `${transform} ${rotate}`;
  
    currentAngle += deltaAngle;
    circle.appendChild(span);
  });

  