function userInformationHTML() {
    return `
        <h2>${user.name}
            <span class='small-name>
                (@<a href='${user.html_url}' target='_blank'></a>
            </span>
        </h2>
    `
}

function fetchGitHubInformation(event) {
    var username = $('#gh-username').val();
    if(!username) {
        $('#gh-user-data').html(`<h2>Please enter a GitHub username.</h2>`);
        return;
    }

    $('#gh-user-data').html(
        `<div id='loader'>
            <img src='assets/css/loader.gif' alt='loading...'>
        </div>`
    )

    $.when(
        $.getJSON(`https://api.github.com/users/${username}`)
    ).then(
        function(response) {
            var userData = response;
            $('#gh-user-data').html(userInformationHTML(userData));
        }, function(errorResponse) {
            if (errorResponse.status === 404) {
                $('#hg-user-data').html(`<h2>No info found for user ${username}</h2>`)
            } else {
                console.log(errorResponse);
                $('#hg-user-data').html(
                    `<h2>Error: ${errorResponse.responseJSON.message}</h2>`
                );
            }
        })

}