const calculateSum = (limit) => {
    let sum = 0;
    for (let i = 0; i < limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
};

const setup = () => {
    const input = document.getElementById("limit");
    const result = document.getElementById("result");

    const updateSum = () => {
        const limit = parseInt(input.value, 10);
        result.textContent = calculateSum(limit);
    };

    input.addEventListener("input", updateSum);
    updateSum();
};

window.addEventListener("load", setup);

