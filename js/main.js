const link = 'https://jsonplaceholder.typicode.com/posts/';

$.ajax(link, {
    method: 'GET'
}).then(
    function success(data, statusText, jqXHR){
        console.log(data);
        createPost(data);
    },
    function fail(jqXHR, errorStatusText, errorMessage){
        console.log(errorMessage);
    }
)

function createPost(data){
    for(index in data){
        let div = $('<div></div>')
        div.attr("id", index);
        div.addClass("postContainer");
        $('#container').append(div);
        div.append(createTitle(data[index].title));
        div.append(createBody(data[index].body));
    }

    function createTitle(postTitle){
        let h = $('<h3></h3>');
        h.addClass("postTitle");
        h.text(postTitle);
        return h;
    }

    function createBody(postBody){
        let p = $('<p></p>');
        p.addClass("postBody");
        p.text(postBody);
        return p;
    }
    createModal(data);
}