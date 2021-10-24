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


// Dynamic posts with Json and jQuery
$(function() {
    $.get("https://maiko29.github.io/WAD21_a1/json/data.json", function(posts) {
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
