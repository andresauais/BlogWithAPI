const link = 'https://jsonplaceholder.typicode.com/posts/',
    success = (data, statusText, jqXHR) => createPost(data),
    fail = (jqXHR, errorStatusText, errorMessage) => console.log(errorMessage);

const createPost = data => {
    const createTitle = title => $('<h3></h3>').addClass('postTitle').text(title);
    const createBody = body => $('<p></p>').addClass('postBody').text(body);

    data.forEach((post, index) => {
        const $article = $('<article></article>');
        const $title = createTitle(post.title);
        const $body = createBody(post.body);

        div.id = index;
        div.addClass('postContainer');
        div.append($title);
        div.append($body);
        $('#container').append($article);
    });

    createModal(data);
}

$.ajax(link, { method: 'GET' })
    .then(success, fail);