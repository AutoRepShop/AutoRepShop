function validate() {
    const clientName = $('#clientName').val();
    const telephone = $('#telephone').val();
    const vehicle = $('#vehicle').val();
    var description = $('#description').val();

    if (clientName === '') {
        alert("Client name cannot be empty");
        return 'problem';
    }

    if (clientName.length > 50) {
        alert("Client name must be less than 50 symbols");
        return 'problem';
    }

    function isNumeric(telephone) {
        return !isNaN(parseFloat(telephone)) && isFinite(telephone);
      }
    
    if (!isNumeric(telephone)) {
        alert('Telephone must contain only digits');
        return 'problem';
    }

    if (telephone === '') {
        alert("Telephone cannot be empty");
        return 'problem';
    }

    if (telephone.lenght <= 3) {
        alert("Telephone must be more than 3 digits");
        return 'problem';
    }

    if (telephone.lenght > 20) {
        alert("Telephone must be less than 20 digits");
        return 'problem';
    }

    if (vehicle === '') {
        alert("Vehicle cannot be empty");
        return 'problem';
    }

    if (vehicle.lenght < 150) {
        alert("Vehicle can be no more than 150 symbols");
        return 'problem';
    }

    if (description.lenght < 300) {
        alert("Description can be no more than 300 symbols");
        return 'problem';
    }


};
