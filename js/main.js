$(function() {
    $('.successMessage').hide();
    $('.snippet').hide();
});

const link = 'https://jsonplaceholder.typicode.com/posts/',
    success = (data, statusText, jqXHR) => createPost(data),
    fail = (jqXHR, errorStatusText, errorMessage) => console.log(errorMessage);

const createPost = data => {
    const createTitle = title => $('<h3></h3>').addClass('postTitle').text(title);
    const createBody = body => $('<p></p>').addClass('postBody').text(body);
    const createUserTitle = user => $('<h4></h4>').addClass('articleTitle').text(user);
    const createCommentTitle = user => $('<h4></h4>').addClass('articleTitle').text(user);

    data.forEach((post, index) => {
        const $article = $('<article></article>');
        const $title = createTitle(post.title);
        const $hr = $('<hr></hr>');
        const $divUser = $('<div></div>');
        const $calendarButton = $('<button></button>');
        const $calendarIcon = $('<i></i>');
        const $calendarTitle = $('<h4></h4>');
        const $userButton = $('<button></button>');
        const $userIcon = $('<i></i>');
        const $divEdit = $('<div></div>');
        const $editButton = $('<button></button>');
        const $editIcon = $('<i></i>');
        const $editTitle = $('<h4></h4>');
        const $deleteButton = $('<button></button>');
        const $deleteIcon = $('<i></i>');
        const $deleteTitle = $('<h4></h4>');
        const $commentButton = $('<button></button>');
        const $commentIcon = $('<i></i>');

        const $body = createBody(post.body);
        const $userTitle = createUserTitle(post.userId);

        $.ajax(users, {
            method: 'GET'
        }).then(
            function success(usersData, statusText, jqXHR){
                matchUserWithPost(usersData, post.userId);
                $userTitle.text(matchUserWithPost(usersData, post.userId)[0]);
            },
            function fail(jqXHR, errorStatusText, errorMessage){
                console.log(errorMessage);
            }
        )
        const $commentTitle = createCommentTitle(post.userId);
        var commentsURL = comments + post.id + "/comments";
        $.ajax(commentsURL, {
            method: 'GET'
        }).then(
            function success(commentsData, statusText, jqXHR){
                $commentTitle.text(commentsData.length);
            },
            function fail(jqXHR, errorStatusText, errorMessage){
                console.log(errorMessage);
            }
        )

        $hr.addClass('hrPost');
        $divUser.addClass('divUser');
        $divEdit.addClass('divEdit');

        $calendarButton.addClass('btn').addClass('postButton');
        $calendarIcon.addClass('fa').addClass('fa-calendar').addClass('fa-lg');
        $calendarTitle.addClass('articleTitle').text('4:05 PM');

        $userButton.addClass('btn').addClass('postButton');
        $userIcon.addClass('fa').addClass('fa-user').addClass('fa-lg');

        $editButton.addClass('btn').addClass('postButton').addClass('postEdit');
        $editIcon.addClass('fa').addClass('fa-edit').addClass('fa-lg');
        $editTitle.addClass('articleTitle').text('Edit');

        $deleteButton.addClass('btn').addClass('postButton').addClass('postDelete');
        $deleteIcon.addClass('fa').addClass('fa-trash').addClass('fa-lg');
        $deleteTitle.addClass('articleTitle').text('Delete');

        $commentButton.addClass('btn').addClass('postButton');
        $commentIcon.addClass('fa').addClass('fa-comment').addClass('fa-lg');

        $article.attr('id', index);
        $article.addClass('postContainer');
        $article.append($title);

        $calendarButton.append($calendarIcon);
        $calendarButton.append($calendarTitle);
        $userButton.append($userIcon);
        $userButton.append($userTitle);
        $divUser.append($calendarButton);
        $divUser.append($userButton);
        $($article).append($divUser);
        $($article).append($hr);

        $article.append($body);

        $editButton.append($editIcon);
        $editButton.append($editTitle);
        $deleteButton.append($deleteIcon);
        $deleteButton.append($deleteTitle);
        $commentButton.append($commentIcon);
        $commentButton.append($commentTitle);
        $divEdit.append($editButton);
        $divEdit.append($deleteButton);
        $divEdit.append($commentButton);
        $($article).append($divEdit);

        $('#container').append($article);
    });

    createModal(data);
    editPostModal(data);
    deletePostModal(data);
}

$.ajax(link, { method: 'GET' })
    .then(success, fail);
