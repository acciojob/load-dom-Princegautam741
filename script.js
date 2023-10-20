// Add an event listener to detect when the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Create a new paragraph element
    var paragraph = document.createElement("p");
    
    // Set the text content of the paragraph
    paragraph.textContent = "DOM load success";
    
    // Append the paragraph to the body of the page
    document.body.appendChild(paragraph);
});
