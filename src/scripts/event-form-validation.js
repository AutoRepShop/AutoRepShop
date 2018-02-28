function validate() {
    const title = $('#title').val();
    const clientName = $('#clientName').val();
    const telephone = $('#telephone').val();
    const vehicle = $('#vehicle').val();
    const description = $('#description').val();
    const startDate = $('#starts-at').val();
    const endDate = $('#ends-at').val();

    if (title === '') {
        alert('Type of repair cannot be empty');
        return 'problem';
    }

    if (title.length > 50) {
        alert('Type of repair must be less than 50 symbols');
        return 'problem';
    }

    if (clientName === '') {
        alert('Client name cannot be empty');
        return 'problem';
    }

    if (clientName.length > 50) {
        alert('Client name must be less than 50 symbols');
        return 'problem';
    }

    if (telephone === '') {
        alert('Telephone cannot be empty');
        return 'problem';
    }

    function isNumeric(telephone) {
        return !isNaN(parseFloat(telephone)) && isFinite(telephone);
    }

    if (!isNumeric(telephone)) {
        alert('Telephone must contain only digits');
        return 'problem';
    }

    if (telephone.lenght <= 3) {
        alert('Telephone must be more than 3 digits');
        return 'problem';
    }

    if (telephone.lenght > 20) {
        alert('Telephone must be less than 20 digits');
        return 'problem';
    }

    if (vehicle === '') {
        alert('Vehicle info cannot be empty');
        return 'problem';
    }

    if (vehicle.lenght < 150) {
        alert('Vehicle info can be no more than 150 symbols');
        return 'problem';
    }

    if (description.lenght < 300) {
        alert('Description can be no more than 300 symbols');
        return 'problem';
    }

    if (startDate === '') {
        alert('Please enter a Start Date');
        return 'problem';
    }

    if (endDate === '') {
        alert('Please enter an End Date');
        return 'problem';
    }
};