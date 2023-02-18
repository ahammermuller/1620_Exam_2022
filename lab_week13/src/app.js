//Clone

//Select the div .copy-container and .original-container from index
const copy_container = document.querySelector('.copy-container');
const original_section = document.querySelector('.original-container')

//function to append an eventlistener to the element original_section. Test the delegation condition if the event target is different from .copy-container and than insert the element copy.container inside the element, after its last child.
function copydiv(evt){
    original_section.addEventListener("click", (evt) => {
    copy_container.insertAdjacentHTML("beforeend", evt.target.innerHTML)
    })
}
copydiv(copy_container)

// Delete

//function to append an eventlistener to the button clear copies. The button when clicked delete/returns the HTML content from the element copy_container.
function clearcopies(evt){
    const clear_copies = document.querySelector("button");
    clear_copies.addEventListener("click", (evt) => {
    copy_container.innerHTML = "";
    
    })
}
clearcopies(copy_container)