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