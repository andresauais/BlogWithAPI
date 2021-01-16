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
        $('#title').removeAttr("disabled").attr('placeholder', `${data[$(this).parent().parent().attr("id")].title}`).css('text-transform', 'capitalize');
        $('#body').removeAttr("disabled").attr('placeholder', `${data[$(this).parent().parent().attr("id")].body}`);
        $('#submitBtn').attr('value', 'Update Post');
        openEditModal()
    });
    $('#editClose').click(closeEditModal);
    $('#submitBtn').click(submitEditModal);
}

function deletePostModal(data){
    $('.postDelete').click(function(e){
        $('#editPost').text('Delete Post').css('color', 'var(--pink-title)');
        $('#title').attr("disabled", "disabled").val(`${data[$(this).parent().parent().attr("id")].title}`).css('text-transform', 'capitalize');
        $('#body').attr("disabled", "disabled").val(`${data[$(this).parent().parent().attr("id")].body}`);
        $('#submitBtn').attr('value', 'Delete Post');
        openEditModal()
    });
    $('#editClose').click(closeEditModal);
    $('#submitBtn').click(submitEditModal);
}

$('#form').submit(function (e) {
    e.preventDefault();
});

function submitEditModal(){
    closeEditModal();
    $(".snippet").show().delay(3000).fadeOut(10, function(){
        $(".successMessage").show().delay(3000).fadeOut();
    });
}
