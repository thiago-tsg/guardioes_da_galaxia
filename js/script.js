const members = [
    { name: 'Peter Quill', id: 'peter' },
    { name: 'Gamora Titan', id: 'gamora' },
    { name: 'Drax o Destruidor', id: 'drax' },
    { name: 'Mantis', id: 'mantis' },
    { name: 'Rocket Raccoon', id: 'rocket' },
    { name: 'I am Groot', id: 'groot' },
]

let activeMember = 0;
const images = document.getElementById('images');
const menu = document.getElementById('menu');
const navigation = document.getElementById('navigation');
const memberName = document.getElementById('member_name');

function changeStatusButtons(){
    const prev = document.getElementById('button_prev');
    const isFirst = activeMember === 0;
    prev.disabled = isFirst;

    const next = document.getElementById('button_next');
    const isLast = activeMember === members.length - 1;
    next.disabled = isLast;
}

function changeMember(memberId) {
    activeMember = memberId
    const member = members[activeMember];
    images.style.transform = `translateY(${-100 * activeMember}vh)`;
    memberName.className = member.id;
    changeName(member.name);
    changeStatusButtons();
}

function navigationMember(direction){
    changeMember(activeMember + direction)
}

function changeMenu(){
    menu.classList.toggle('active');
    navigation.classList.toggle('active');
}

function setMember(memberId){
    changeMember(memberId);
    changeMenu()
}



// Efeito nome 

let interval = null;
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function randomLetter() {
    const randomNumber = Math.floor(Math.random() * letters.length);
    return letters[randomNumber];
}

function changeName(newName) {
    const name = document.getElementById("member_name");  // Corrigido para usar o ID correto

    name.innerText = newName;
    name.setAttribute('data-value', newName);

    let iteration = 0;
  
    clearInterval(interval);
  
    interval = setInterval(() => {
        let text = name.innerText.split("");

        text = text.map((_, index) => {
            const isCorrectLetter = index < iteration;
            return isCorrectLetter ? newName[index] : randomLetter();
        });

        name.innerText = text.join("");
    
        if(iteration >= newName.length){ 
            clearInterval(interval);
        }
    
        iteration += 1;
    }, 60);
}
