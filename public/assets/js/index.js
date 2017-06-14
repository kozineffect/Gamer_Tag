$(document).ready(function () {
    var firstName = $("#first_name").val().trim();
    var lastName = $("#last_name").val().trim();
    var email = $("#email").val().trim();
    var username = $("#username".val().trim());
    var password = $("#password").val().trim();
    var genres = $(".form-check-label").val();
    var consoles=$("consoles").val().trim();
    var fav1 = $("#fav1").val().trim();
    var fav2 = $("#fav2").val().trim();
    var fav3 = $("#fav3").val().trim();
    
    var userForm = $("#newUserForm");

    $(document).on("submit", "#newUserForm", handleFormSubmit)
    var newPost;

    function handleFormSubmit(event) {
        event.preventDefault();

       


        var newPost = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            username: username,
            password: password,
            genres: genres,
            FavGame1: fav1,
            FavGame2: fav2,
            FavGame3: fav3,
            consoles: consoles
            
        };
        submitPost(newPost);
    }

    function submitPost(post) {
        $.post("/api/users", post, function () {
            console.log(post);
            
        })
    }



});