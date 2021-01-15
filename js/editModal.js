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
        $('#title').attr('placeholder', `${data[$(this).parent().parent().attr("id")].title}`).css('text-transform', 'capitalize');
        $('#body').attr('placeholder', `${data[$(this).parent().parent().attr("id")].body}`);
        openEditModal()
    });
    $('#editClose').click(closeEditModal);
    $('#submitBtn').click(submitEditModal);
    $('#title').val('');
    $('#body').val('');
}

$('#form').submit(function (e) {
    e.preventDefault();
});

function submitEditModal(){
    closeEditModal();
}