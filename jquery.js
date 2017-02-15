$(document).ready(function() {

  $('.modal').modal();

    $.ajax({
      url  : "http://localhost:3000/api/memo",
      method : "GET",
      success: function(data) {
        var arrTemp = ""
        for (var i = 0; i < data.length; i++){
          arrTemp += `
          <tr id="memo-${i}">
              <td>${data[i].memo}</td>
              <td>
                <a id="update-memo-${i}" class="waves-effect blue btn modal-trigger" onclick="preUpdate('memo-${i}', '${data[i]._id}')" href="#modalUpdate"><i class="material-icons">autorenew</i></a>
              </td>
              <td>
                <a id="delete-memo-${i}" onclick="preDelete('memo-${i}', '${data[i]._id}')" href="#modalDelete" class="waves-effect red btn modal-trigger"><i class="material-icons">clear</i></a>
              </td>
            </tr>
            `
          }
        $('#memo').append(arrTemp)
      }
    })

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
        location.reload();
      }
    })
  })
}

function formReset() {
  $('#form-delete').remove()
}

function preUpdate (index, id) {
  formReset()

  let memo = $(`#${index} td`)[0].innerHTML

  let updateMemo = `
    <div id="form-delete">
      <div class="modal-content">
      <h4><b>Update Memo</b></h4>
        <div class="row">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s12">
                <textarea id="updateMemo" class="materialize-textarea">${memo}</textarea>
                <label for="newMemo"></label>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="modal-footer">
        <a class="modal-action modal-close waves-effect waves-light btn" onclick="update('${index}', '${id}')" type="submit" name="button">Done</a>
      </div>
    </div>
  `
  $('#modalUpdate').append(updateMemo)
}

function update(index, id) {
  $(document).ready(function(){
    $.ajax({
      url  : `http://localhost:3000/api/memo/${id}`,
      type : "PUT",
      data: {
        memo   : $('#updateMemo').val()
      },
      success: function(result) {
        $(`#${index} td`)[0].innerHTML = result.memo
      }
    })
  })
}

function preDelete(index, id) {
  formReset()

  let deleteMemo = `
  <div id="form-delete">
    <div class="modal-content">
        <h4><b>Are you sure you want to permanently delete this memo ?</b></h4>
    </div>
    <div class="modal-footer">
        <a onclick="deleteMemo('${index}', '${id}')" class="modal-action modal-close waves-effect red btn">DELETE</a>
        <a class="modal-action modal-close waves-effect blue btn">CANCEL</a>
    </div>
  </div>`
  $('#modalDelete').append(deleteMemo)
}

function deleteMemo(index, id) {
  $(document).ready(function() {
    $.ajax({
      url  :  `http://localhost:3000/api/memo/${id}`,
      type : "DELETE",
      success: function(result) {
        $(`#${index}`).remove()
      }
    })
  })
}
