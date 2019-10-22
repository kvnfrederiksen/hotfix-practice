const fakeFunction = () => {
    console.log('this is a fake function');
};

const anotherFakeFunction = () => {
    console.log('this is the second fake function');
};

const myThirdFunction = () => {
    console.log('this is my third function');
};

const functionFour = (start) => {
    console.log('fake function four is here');
    return start + 1;
};

fakeFunction();
anotherFakeFunction();
myThirdFunction();
const currentValue = functionFour(4);
