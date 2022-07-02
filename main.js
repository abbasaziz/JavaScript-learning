const x =23;
const color = x > 10 ? 'red' : 'blue';  // true : not true

switch (color) {
    case 'red':
        console.log('the color is red!!')
        break;
    case 'blue':
        console.log('the color is blue!!')
        break;
        default:
        console.log('color is NOT red or blue!!')
        break;
}