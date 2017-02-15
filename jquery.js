$(document).ready(function() {
  $.ajax({
    url  : "http://localhost:3000/api/memo",
    method : "GET",
    success: function(data) {
      console.log(data);
      var arrTemp = ""
      for (var i = 0; i < data.length; i++){
        arrTemp += `<tr>
            <td>${data[i].memo}</td>
            <td>
              <button id="update-memo-${i}" class="waves-effect blue btn modal-trigger" href="#modal-update-${i}"><i class="material-icons">autorenew</i></button>
            </td>
            <td>
              <button id="delete-memo-${i}" onclick="preDelete('article-${i}', '${result[i]._id}')" class="waves-effect red btn modal-trigger" href="#modal-delete-${i}"><i class="material-icons">clear</i></button>
            </td>
          </tr>

        <div id="modal-update-${i}" class="modal modal-fixed-footer">
            <div class="modal-content">
              <h4><b>Update Memo</b></h4>
              <div class="row">
                <form class="col s12">
                  <div class="row">
                    <div class="input-field col s12">
                      <textarea id="textarea1" class="materialize-textarea"></textarea>
                      <label for="textarea1" placeholder="${data[i].memo}">Input here</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="modal-footer">
              <a href="#" class="modal-action modal-close waves-effect waves-light btn">Done</a>
            </div>


          `
      }
      $('#memo').append(arrTemp)
    }
  })
})

  $(document).ready(function() {
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').modal();
  })

function newMemo(){
  $(document).ready(function(){
    $.ajax({
      url  : "http://localhost:3000/api/memo/new",
      type : "POST",
      data: {
        memo: $('#newMemo').val()
      },
      success: function(data) {
        $('#memo').append(`<tr>
            <td>${data.memo}</td>
            <td>
              <button class="waves-effect blue btn modal-trigger" data-target="modal2"><i class="material-icons">autorenew</i></button>
            </td>
            <td>
              <a class="waves-effect red btn modal-trigger" onclick="deleteMemo()"><i class="material-icons">clear</i></a>
            </td>
          </tr>`
        )
      }
    })
  })
}

function preDelete(index, id) {
  let delete = `
        <div class="modal-content">
          <h4><b>Are you sure you want to permanently delete this memo ?</b></h4>
        </div>
        <div class="modal-footer">
          <a href="#" onclick="deleteMemo('${index}', '${id}' class="modal-action modal-close waves-effect red btn">DELETE</a>
          <a href="#" class="modal-action modal-close waves-effect blue btn">CANCEL</a>
        </div>
  `
  $('#modal-delete').append(edit)
}

function deleteMemo(index, id) {
  $(document).ready(function() {
    $.ajax({
      url   :  `http://localhost:3000/api/memo/${id}`
    })
  })
}





              // <div id="modal-update-${i}" class="modal modal-fixed-footer">
              //   <div class="modal-content">
              //     <h4><b>Update Memo</b></h4>
              //     <div class="row">
              //       <form class="col s12">
              //         <div class="row">
              //           <div class="input-field col s12">
              //             <textarea id="textarea1" class="materialize-textarea"></textarea>
              //             <label for="textarea1" placeholder="${data[i].memo}">Input here</label>
              //           </div>
              //         </div>
              //       </form>
              //     </div>
              //   </div>
              //   <div class="modal-footer">
              //     <a href="#" class="modal-action modal-close waves-effect waves-light btn">Done</a>
              //   </div>
              // </div>
