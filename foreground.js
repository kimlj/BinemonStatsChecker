
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
    document.querySelector('.css-1k06pwf').appendChild(ce_main_container);
}

// addElement();

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