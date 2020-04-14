window.addEventListener('DOMContentLoaded', () => {

    // create header containing name
    const name = document.createElement('h1');
    name.setAttribute('id', 'name');
    const nameText = document.createTextNode('Charle Rae');
    name.appendChild(nameText);
    document.body.appendChild(name);


    // create unorderd list of 4+ details about myself
    const firstList = document.createElement('ul');
    firstList.setAttribute('id', 'firstList');

        // list items
    const oneItem = document.createElement('li');
    const twoItem = document.createElement('li');
    const threeItem = document.createElement('li');
    const fourItem = document.createElement('li');

        // list item text content
    const oneContent = document.createTextNode('Crochet');
    const twoContent = document.createTextNode('Drawing');
    const threeContent = document.createTextNode('Sewing');
    const fourContent = document.createTextNode('Macrame');

        // append list content to list items
    oneItem.appendChild(oneContent);
    twoItem.appendChild(twoContent);
    threeItem.appendChild(threeContent);
    fourItem.appendChild(fourContent);

        // append list items to ul element
    firstList.appendChild(oneItem);
    firstList.appendChild(twoItem);
    firstList.appendChild(threeItem);
    firstList.appendChild(fourItem);

        // append ul to document
    document.body.appendChild(firstList);


    // refactor to make list programmatic


    // add css classes and styles


    // add a clock with date object


    // add more sections to page like an image


    // use other element methods


    // fire javascript on different DOM events


    // make a countdown clock

})
