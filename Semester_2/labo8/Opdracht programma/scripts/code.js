const setup = () => {
    let student1 = {
        firstName: "PietJan",
        lastName: "VanKnikker",
        age: new Date(2004, 1, 1, 0, 10, 30),
        eyeColor: "blue"
    };

    let jsonString = JSON.stringify(student1);
    console.log(jsonString);

    let parsedStudent = JSON.parse(jsonString);
    parsedStudent.age = new Date(parsedStudent.age);

    console.log(parsedStudent.firstName);
};

window.addEventListener("load", setup);
