function openEditModal(){
    dialog.show();
}

function closeEditModal(){
    dialog.close();
}

function editPostModal(data){
    $('.postEdit').click(function(e){
        $('#title').attr('placeholder', `${data[$(this).parent().parent().attr("id")].title}`).css('text-transform', 'capitalize');
        $('#body').attr('placeholder', `${data[$(this).parent().parent().attr("id")].body}`);
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
}