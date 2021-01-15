const users = 'https://jsonplaceholder.typicode.com/users';
const comments = 'https://jsonplaceholder.typicode.com/posts/';

function createModal(data){
    $('.postContainer').click(function(e){
        if(e.target.classList == "postTitle" || e.target.classList == "postBody"){
            var modalRoot = $('#modal-post');
        var modal = $('.postModal');

        var modalPostCloseTop = $("#modalPostCloseTop");
        modalPostCloseTop.click(function(){rootClick();});

        setUpModal();
        openModal();
        //modalRoot.click(()=> {rootClick()});
        //modal.click(function() {modalClick(e)});

        //$('#modalPostLoad').on("click", loadComments(data[e.currentTarget.id].id));

        function setUpModal(){
            var dataId = data[event.currentTarget.id].id;
            $("#modalPostTitle").text(data[event.currentTarget.id].title);
            $("#modalPostBody").text(data[event.currentTarget.id].body);
            var userIdPost = data[event.currentTarget.id].userId;
            $.ajax(users, {
                method: 'GET'
            }).then(
                function success(usersData, statusText, jqXHR){
                    matchUserWithPost(usersData, userIdPost);
                    $('#modalPostUserId').text(matchUserWithPost(usersData, userIdPost)[0]);
                    $('#modalPostEmail').text(matchUserWithPost(usersData, userIdPost)[1]);
                    $('#modalPostLoad').on("click", ()=>{
                        loadComments(dataId);
                        dataId = undefined;
                    })
                },
                function fail(jqXHR, errorStatusText, errorMessage){
                    console.log(errorMessage);
                }
            )
        }
        }

        function rootClick() {
            modalRoot.removeClass('visible');
            $('#comments').empty();
            $('#commentsContainer').empty();
            $('#modalPostLoad').show();
        }

        function openModal() {
            modalRoot.addClass('visible');
        }

        function modalClick(e) {
            e.stopPropagation();
            e.stopImmediatePropagation();
            return false;
        }
    })
}

function matchUserWithPost(usersData, userIdPost){
    for(index in usersData){
        if (usersData[index].id == userIdPost){
            return [usersData[index].username, usersData[index].email];
        }
    }
}

function loadComments(postId){
    console.log(postId);
    $('#modalPostLoad').hide();
    let commentsContainer = $('<div></div>')
    commentsContainer.attr('id','commentsContainer');
    $('#comments').append(commentsContainer);
    var commentsURL = comments + postId + "/comments";
    $.ajax(commentsURL, {
        method: 'GET'
    }).then(
        function success(commentsData, statusText, jqXHR){
            createComments(commentsData);
            console.log(commentsData);
        },
        function fail(jqXHR, errorStatusText, errorMessage){
            console.log(errorMessage);
        }
    )
}

function createComments(commentsData){
    for(index in commentsData){
        let div = $('<div></div>');
        div.addClass('commentsContainer');
        $('#commentsContainer').append(div);
        div.append(createCommentName(commentsData[index].name));
        div.append(createCommentBody(commentsData[index].body));
        div.append(createCommentEmail(commentsData[index].email));
    }
    function createCommentName(name){
        let p = $('<p></p>');
        p.addClass("commentName");
        p.text(name);
        return p;
    }
    function createCommentBody(body){
        let p = $('<p></p>');
        p.addClass("commentBody");
        p.text(body);
        return p;
    }
    function createCommentEmail(email){
        let p = $('<p></p>');
        p.addClass("commentEmail");
        p.text(email);
        return p;
    }
}