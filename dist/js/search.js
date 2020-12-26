function searchFunction() {
    var input, filter, list_of_subjects, each_subject, a, i;
    input = document.getElementById('myinput');
    filter = input.value.toUpperCase();
    list_of_subjects = document.getElementById('subjects');
    each_subject = list_of_subjects.getElementsByClassName('subject');

    for (i = 0; i < each_subject.length; i++) {
        a = each_subject[i].getElementsByTagName('p')[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            each_subject[i].style.display = "";
        }

        else {
            each_subject[i].style.display = 'none';
        }
    }
}
