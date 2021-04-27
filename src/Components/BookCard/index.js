import React from "react";

const BookCard = () => {
    return(
        <div class="column">
        <div class="card" id="books-card">
        <img id="topics-img" src="https://images.unsplash.com/photo-1520387294843-fd994fd872e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" size="width:100%"/>
            <div class="container">
                <h3><b>Books</b></h3>
                <p>Click to select</p>
            </div>                    
        </div>
        </div>

    )
        
};
export default BookCard;