const myModal = document.getElementById('exampleModal')
// myModal.addEventListener('show.bs.modal', event => {
//     // Button that triggered the modal
//     const button = event.relatedTarget;
//     // Extract info from data-bs-* attributes
//     const recipient = button.getAttribute('data-name');
//     // If necessary, you could initiate an AJAX request here
//     // and then do the updating in a callback.

//     //-------------------- Update the modal's content---------------------------//
//     const modalTitle = myModal.querySelector('.modal-title');
//     //const modalBodyInput = myModal.querySelector('.modal-body input');

//     modalTitle.textContent = `${recipient} to twitter`;
//     //modalBodyInput.value = recipient;
// });

myModal.addEventListener('hidden.bs.modal', event => {
    //alert("Modal closed");
    location.reload();
});


//------------------jQuery code------------------------------//
// $('#exampleModal').on('show.bs.modal', function (event) {
//     var button = $(event.relatedTarget);
//     var recipient = button.data('name');
//     var modal = $(this);
//     modal.find('.modal-title').text('New message to ' + recipient);
// });

// $("#exampleModal").on("hidden.bs.modal", function (event) {
//     alert("Modal closed!");
// });