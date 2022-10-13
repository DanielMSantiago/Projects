$('button').on('change', function() {
    var reader = new FileReader();
    reader.onload = function(e) {
        $('#hand').attr('Cards', e.target.result);
    }

    if (!this.files.length) return;

    var randIndex = parseInt(Math.random() * this.files.length, 10);
    reader.readAsDataURL(this.files[randIndex]);

});