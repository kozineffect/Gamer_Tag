$(document).ready(function () {
    var firstName = $("#first_name");
    var lastName = $("#last_name");
    var email = $("#email");
    var username = $("#username");
    var password = $("#password");
    // var genres = [];
    // var consoles=[];
    var fav1 = $("#fav1");
    var fav2 = $("#fav2");
    var fav3 = $("#fav3");
    var ninSwitch = $("#Switch");
    var ps4 = $("#PS4");
    var xbox1 = $("#Xbox");
    var nin3ds = $("#3DS");
    var ninwu = $("#Wii");
    var pc = $("#PC");
    var userForm = $("#newUserForm");
    console.log(ninSwitch);
    console.log(ps4);
    console.log(xbox1);
    console.log(nin3ds);
    console.log(ninwu);
    console.log(pc);
    
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
            // genres: genres,
            FavGame1: fav1.val().trim(),
            FavGame2: fav2.val().trim(),
            FavGame3: fav3.val().trim()
            // consoles: consoles
            
        };
        submitPost(newPost);
    }

    function submitPost(post) {
        $.post("/api/users", post, function () {
            console.log(post);
                      
        })
    }

});