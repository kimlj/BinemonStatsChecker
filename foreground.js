
/*-----------------------creating a new div element-------------------------*/
function addElement (){
    //main container
    const ce_main_container = document.createElement("div");
    const ce_name = document.createElement("div");
    const ce_input = document.createElement("input");
    const ce_button = document.createElement("div");

    //adding class to the main_container
    ce_main_container.classList.add('ce_main');

    //adding id to the 3 child elements
    ce_name.id = 'ce_name';
    ce_input.id = 'ce_input';
    ce_button.id = 'ce_button';

    //appending the divs
    //the main_container is the main/parent so we are adding the name, input, and button as child element
    ce_main_container.appendChild(ce_name);
    ce_main_container.appendChild(ce_input);
    ce_main_container.appendChild(ce_button);

    //getting the id of tthe div you want to add before this div
    // const currentDiv = document.getElementById("root");

    //now appending the main container to the main page
    // document.body.insertBefore(ce_main_container, currentDiv);
    document.querySelector('body').appendChild(ce_main_container);
}

addElement();

function addElement2(){
    // Your existing code unmodified...
    var iDiv = document.createElement('div');
    iDiv.id = 'block';
    iDiv.className = 'block';
    document.getElementsByTagName('body')[0].appendChild(iDiv);

    // Now create and append to iDiv
    var innerDiv = document.createElement('div');
    innerDiv.className = 'block-2';

    // The variable iDiv is still good... Just append to it.
    iDiv.appendChild(innerDiv);

}

// addElement2();


// Selecting items element
// use this .css-30i7d6
// const item = document.querySelectorAll("div.css-30i7d6"); //this will return a list of elements
// console.log(item);


// //hover eventListener
// function hover(element, className){
//     element.addEventListener('mouseenter', e => element.classList.add(className))
//     element.addEventListener('mouseleave', e => element.classList.remove(className))
// }

// //convert nodelist to array using spread operator
// const itemList = [...items];
// //applying function to every item
// console.log(itemList);

//NOTE!!!!!! getElementsByClassName lang ang gumagana idkw
const items = document.getElementsByClassName('css-30i7d6');
// console.log(items);

const items2 = document.getElementsByClassName('css-30i7d6');
// console.log(items2);

//this one is working, either querySelectorAll or getElementsByTagName
// var x = document.querySelectorAll("img");

// // Set the background color of the first <p> element
// for (const item of x){
//     item.style.width = '20px';
// }

// var images = document.getElementsByTagName('a');
// console.log(images);