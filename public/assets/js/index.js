$(document).ready(function () {
    var firstName = $("#first_name");
    var lastName = $("#last_name");
    var email = $("#email");
    var username = $("#username");
    var password = $("#password");
    var genres = $(".form-check-label");
    var consoles=$("");
    var fav1 = $("#fav1");
    var fav2 = $("#fav2");
    var fav3 = $("#fav3");
    
    var userForm = $("#newUserForm");

    $(document).on("submit", "#newUserForm", handleFormSubmit)
    var newPost;

    function handleFormSubmit(event) {
        event.preventDefault();

       


        var newPost = {
            first_name: firstName.val().trim(),
            last_name: lastName.val().trim(),
            email: email.val().trim(),
            username: username.val().trim(),
            password: password.val().trim(),
            genres: genres.val(),
            FavGame1: fav1.val().trim(),
            FavGame2: fav2.val().trim(),
            FavGame3: fav3.val().trim(),
            consoles: consoles.val()
            
        };
        submitPost(newPost);
    }

    function submitPost(post) {
        $.post("/api/users", post, function () {
            console.log(post);
            
        })
    }



});