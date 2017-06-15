		$(document).ready(function () {

			var userForm = $("#newUserForm");

			$(document).on("submit", "#newUserForm", handleFormSubmit)
			var newPost;
			var ninSwitch, ps4, xbox1, nin3ds, ninwu, pc = false;

			function handleFormSubmit(event) {
				event.preventDefault();
				var firstName = $("#first_name").val().trim();
				var lastName = $("#last_name").val().trim();
				var email = $("#email").val().trim();
				var username = $("#username").val().trim();
				var password = $("#password").val().trim();
				// var genres = [];
				// var consoles=[];
				var fav1 = $("#fav1").val().trim();
				var fav2 = $("#fav2").val().trim();
				var fav3 = $("#fav3").val().trim();
				if ($('#Switch').is(":checked")) {
					// it is checked
					ninSwitch = $("#Switch").val().trim();
				}
				if ($('#PS4').is(":checked")) {
					// it is checked
					ps4 = $("#PS4").val().trim();
				}
				if ($('#Xbox').is(":checked")) {
					// it is checked
					xbox1 = $("#Xbox").val().trim();
				}
				if ($('#3DS').is(":checked")) {
					// it is checked
					nin3ds = $("#3DS").val().trim();
				}
				if ($('#Wii').is(":checked")) {
					ninwu = $("#Wii").val().trim();
				}
				if ($('#PC').is(":checked")) {
					pc = $("#PC").val().trim();
				}
				console.log(ninSwitch);
				console.log(ps4);
				console.log(xbox1);
				console.log(nin3ds);
				console.log(ninwu);
				console.log(pc);




				var newPost = {
					first_name: firstName,
					last_name: lastName,
					email: email,
					username: username,
					password: password,
					ninSwitch: ninSwitch,
					ps4: ps4,
					xbox1: xbox1,
					nin3ds: nin3ds,
					ninwu: ninwu,
					pc: pc,
					// genres: genres,
					FavGame1: fav1,
					FavGame2: fav2,
					FavGame3: fav3
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