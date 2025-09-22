$.PAYLOAD = new Object();

$(document).ready(function(){
    $("#file").change(handleFileSelect);
 });

function handleFileDrop(evt) {
  evt.stopPropagation();
  evt.preventDefault();

  var files = evt.dataTransfer.files; 
  console.log('Caught a File!');
  doUpload(files[0]);
  console.log($.PAYLOAD);
}

function handleDragOver(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  // loading data
  // change color etc
}

var dropzone = $('#dropzone');
dropzone.addEventListener('dragover', handleDragOver, false);
dropzone.addEventListener('drop', handleFileDrop, false);

function doUpload(e) { 
  console.log('attempt');
  Papa.parse(e, {
    header:true,
    before: function(file, inputElem){ console.log('Attempting to Parse...')},
    error: function(err, file, inputElem, reason){ console.log(err); },
    complete: function(results, file){ $.PAYLOAD = results; }
  });
}

function dropzoneClick(evt){
  $('#file').click();
}

 
 
function handleFileSelect(evt) {
  var file = evt.target.files[0];

  Papa.parse(file, {
    header: true,
    dynamicTyping: true,
    complete: function(results) {
      console.log(results);
    }
  });
}
 
  
