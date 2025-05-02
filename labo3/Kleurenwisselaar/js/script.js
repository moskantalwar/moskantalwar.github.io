const setup = () => {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');

    const toggleColor = (button) => {
        let currentColor = button.style.backgroundColor;
        if (currentColor === 'lightblue') {
            button.style.backgroundColor = 'white';
            button.style.color = 'black';
        } else {
            button.style.backgroundColor = 'lightblue';
            button.style.color = 'white';
        }
    };

    button1.addEventListener('click', () => toggleColor(button1));
    button2.addEventListener('click', () => toggleColor(button2));
    button3.addEventListener('click', () => toggleColor(button3));
};


setup();
