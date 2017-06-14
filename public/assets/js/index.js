$(document).ready(function () {
    var firstName = $("#first_name");
    var lastName = $("#last_name");
    var email = $("#email");
    var username = $("#username");
    var password = $("#password");
    var consoles = $("#consoles");
    var zipcode = $("#zipcode");
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
            consoles: consoles.val().trim(),
            zipcode: zipcode.val().trim()
        };
        submitPost(newPost);
    }

    function submitPost(post) {
        $.post("/api/users", post, function () {
            console.log(post);
            
        })
    }



});