"use strict";

//push adds at the end
//shift returns the first and removes it

$(document).ready(() => {

//initialize an array of objects with whatever properties i want
    let array = [
        {   name:"problem",
            description:"bad problem"
        },
        {   name:"problem2",
            description:"bad problem2"
        },
    ];

    //get data from user input buttons and place them at the end of the array
    document.querySelector(".input-btn").addEventListener("click", () => {
        const inputs = document.querySelectorAll(".input-field");
        array.push({
            name: inputs[0].value,
            description: inputs[1].value
            });
        console.log(array);
        
        //remove the last line of html and
        //add the data from the array into the HTML
        $(".out-text").remove();

        $(".display").append(`
        <section class="out-text">
            <p class="out-text-name">bug name: ${array[0].name}</p>
            <p class="out-text-desc">bug description: ${array[0].description}</p>
            <button type="button" class="completed-btn">completed</button>
        </section>
        `);
    });

        //when user pushes remove button, run the shift command
        $(document).on("click", ".completed-btn", (event) => {
            $(".out-text").remove();
            array.shift();
            console.log(array);
        
            if (array.length != 0) {
            $(".display").append(`
            <section class="out-text">
                <p class="out-text-name">bug name: ${array[0].name}</p>
                <p class="out-text-desc">bug description: ${array[0].description}</p>
                <button type="button" class="completed-btn">completed</button>
            </section>
            `);
            }

         })





});