let copy = document.querySelector("#copy");
let inp = document.querySelector("input");

function generatePassword() {
    let random_elements = [];

    for (let i = 0; i < 10; i++) {
        const arr = 'BCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+=-'.split('');
        var index = Math.floor(Math.random() * arr.length);
        var random_element = arr[index];
        random_elements.push(random_element);
    }

    let concatenated_string = random_elements.join('');
    inp.value = concatenated_string;
    
}

copy.addEventListener('click', () => {
    inp.select();
    document.execCommand('copy');
});


/* function generatePassword() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]|\\?<>,.';
    let password = '';
    for (let i = 0; i < 10; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    inp.value = password;
} */
