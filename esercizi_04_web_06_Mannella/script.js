let data = {
    "Fish":
    {
        "trout": {},
        "salmon": {}
    },
    "Tree":
    {
        "Huge":
        {
            "sequoia": {},
            "oak": {}
        },
        "Flowering":
        {
            "appletree": {},
            "magnolia": {}
        }
    }
};

let container = document.getElementById('container');
createTree(container, data);

function createTree(container,data){
    
    container.appendChild(createNestedTree(data));
    
}

/**
 * Recursive function that creates an ul list for each nesting in the data
 */
function createNestedTree(elem){
    
    let ul = document.createElement("ul");

    for(const item in elem){

        let li = document.createElement("li");

        li.textContent = item;

        ul.appendChild(li);

        if(elem[item]){
            ul.appendChild(createNestedTree(elem[item]));
        }

    }

    return ul;
}