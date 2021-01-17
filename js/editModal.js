function openEditModal(){
    dialog.show();
}

function closeEditModal(){
    dialog.close();
    $('#title').val('');
    $('#body').val('');
}

function editPostModal(data){
    $('.postEdit').click(function(e){
        $('#editPost').text('Edit Post').css('color', 'var(--cyan-social)');
        $('#title').removeAttr('disabled').attr('placeholder', `${data[$(this).parent().parent().attr('id')].title}`).css('text-transform', 'capitalize');
        $('#body').removeAttr('disabled').attr('placeholder', `${data[$(this).parent().parent().attr('id')].body}`);
        $('#submitBtn').attr('value', 'Update Post');
        openEditModal()
    });

    $('#editClose').click(closeEditModal);
    $('#submitBtn').click(submitEditModal);
}

function deletePostModal(data){
    $('.postDelete').click(function(e){
        $('#editPost').text('Delete Post').css('color', 'var(--pink-title)');
        $('#title').attr('disabled', 'disabled').val(`${data[$(this).parent().parent().attr('id')].title}`).css('text-transform', 'capitalize');
        $('#body').attr('disabled', 'disabled').val(`${data[$(this).parent().parent().attr('id')].body}`);
        $('#submitBtn').attr('value', 'Delete Post');
        openEditModal()
    });
    $('#editClose').click(closeEditModal);
    $('#submitBtn').click(submitDeleteModal);
}

$('#form').submit(function (e) {
    e.preventDefault();
});

function submitEditModal(data){

    closeEditModal();
    $('.snippet').show();

    let editURL = link + data.id;
    $.ajax(editURL, {
        method: 'PATCH',
        data: JSON.stringify({'title':'title','body':'lorem'}),
    }).then(
        function success(commentsData, statusText, jqXHR){
            $('.snippet').fadeOut();
            $('.successMessage').removeClass('hidden').delay(3000).fadeOut();
            console.log('success');
        },
        function fail(jqXHR, errorStatusText, errorMessage){
            $('.snippet').fadeOut();
            console.log(errorMessage);
        }
    )
}

function submitDeleteModal(data){

    closeEditModal();
    $('.snippet').show();

    let editURL = link + data.id;
    $.ajax(editURL, {
        method: 'DELETE',
    }).then(
        function success(commentsData, statusText, jqXHR){
            $('.snippet').fadeOut();
            $('.successMessage').show().delay(3000).fadeOut();
            console.log('success delete');
        },
        function fail(jqXHR, errorStatusText, errorMessage){
            $('.snippet').fadeOut();
            console.log(errorMessage);
        }
    )
}