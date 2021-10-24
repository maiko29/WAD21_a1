/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


// TASK 4
/*
$(function() {
    $.get("https://maiko29.github.io/WAD21_a1/json/data_hosted.json", function(posts) {
        for (post of posts) {
            let divMain = $('<div class="flex-items">');

            let divHeader = $('<div class="flex-items-header">');
            let divImage = $('<div class="flex-items-image">');
            let divContent = $('<div class="flex-items-content">');
            let divUser = $('<div class="flex-items-avatar">');

            let dateTime = $('<p>').text(post.time);
            let name = $('<p>').text(post.username);
            let content = $('<p>').text(post.content);

            divUser.append('<img src="' + post.avatar + '" alt="User icon" width="32" height="32"/>');
            divUser.append(name);
            divHeader.append(divUser);
            divHeader.append(dateTime);

            if (post.image != null) {
                divImage.append('<img src="' + post.image + '" alt="User uploaded image" width="100%" height="auto"/>');
            }

            divContent.append(content);
            divContent.append('<button>&#128077;</button>')

            divMain.append(divHeader);
            divMain.append(divImage);
            divMain.append(divContent);

            $('.main-flex-container').append(divMain)
        }
    })
});
*/

// Task 5
$(function() {
    $.get("/json/data.json", function (records){
    for (record of records){

        // main div which will hold "subdivs" of rows
        let divMain = $('<div class="flex-items">');

        //subdiv for first header row
        let divHeader = $('<div class="flex-items-header">');

        //subdiv for picture row
        let divImage = $('<div class="flex-items-image">');

        // main text content of a post record
        let divContent = $('<div class="flex-items-content">');

        // div for avatar
        let divUser = $('<div class="flex-items-avatar">');

        //put timestamp into between <p> tags
        let dateTime = $('<p>').text(record.time);

        // put the author name between <p> tags
        let name = $('<p>').text(record.username);

        //put the post content between <p> tags
        let content = $('<p>').text(record.content);

        //put avatar image and user name into same div with class="flex-items-avatar"
        divUser.append('<img src="' + record.avatar + '" alt="User icon" width="32" height="32"/>');
        divUser.append(name);

        // put header elements into <div class="flex-items-header">
        divHeader.append(divUser);
        divHeader.append(dateTime);

        // if there is present the image URL
        if (record.image != null) {
            divImage.append('<img src="' + record.image + '" alt="User uploaded image" width="100%" height="auto"/>');
        }

        // main content into main "row"
        divContent.append(content);

        //add the like button
        divContent.append('<button>&#128077;</button>')

        //combine all three layout rows into post container
        divMain.append(divHeader);
        divMain.append(divImage);
        divMain.append(divContent);

        // append the result into webpage
        $('.main-flex-container').append(divMain)
    }
    })
});
