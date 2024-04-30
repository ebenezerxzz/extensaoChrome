document.getElementById('btn-upload').addEventListener('clic', function() {
    const fileInput = document.getElementById('fil-input');
    const file = fileInput.files[0];

    if(!file) {
        window.alert('Selecione um arquivo');
        return
    };

    const formData = new formData();
    formData.append('file', file)

    fetch('ulr', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if(!response.ok) {
            throw new Error('Ocorreu um erro no envio, tente novamente')
        };
    })
    .then(data => {
        window.alert('Arquivo envi')
    })
});