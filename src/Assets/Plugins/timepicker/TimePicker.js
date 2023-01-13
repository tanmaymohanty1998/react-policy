
$(function () {
    Sys.WebForms.PageRequestManager.getInstance().add_endRequest(function (evt, args) {

        //$('.datepicker').daterangepicker({
        //    singleDatePicker: true,
        //    showDropdowns: true,
        //    minYear: 1901,
        //    autoUpdateInput: true,
        //    autoApply: true,
        //    isInvalidDate: function (date) {
        //        var disabled_start = moment('01/11/2021', 'DD-MM-YYYY');
        //        var disabled_end = moment('20/11/2021', 'DD-MM-YYYY');
        //        return date.isAfter(disabled_start) && date.isBefore(disabled_end);
        //    }
        //}, function (start, end) {
        //    var years = moment().diff(start, 'years');
        //    alert("Current Date " + moment().toDate(start));
        //    alert("You are " + years + " years old!");
        //});

        $('.datepicker').daterangepicker({
            singleDatePicker: true,
            showDropdowns: true,
            autoUpdateInput: true,
            autoApply: true,
            minYear: 1950,

            "locale": {
                "format": "DD-MM-YYYY"
            }
        });

        $('.predatesdisableddatepicker').daterangepicker({      // use this datepicker class for disabling dates before current date
            singleDatePicker: true,
            showDropdowns: true,
            autoUpdateInput: true,
            autoApply: true,
            minYear: 1950,
            minDate: new Date(),

            "locale": {
                "format": "DD-MM-YYYY"
            }
        });

        $('.postdatesdisableddatepicker').daterangepicker({     // use this datepicker class for disabling dates after current date
            singleDatePicker: true,
            showDropdowns: true,
            autoUpdateInput: true,
            autoApply: true,
            minYear: 1950,
            maxDate: new Date(),

            "locale": {
                "format": "DD-MM-YYYY"
            }
        });
               
        $('.datepicker').blur(function () {                                                  // Used For Checking Valid Date Format(dd-MM-yyyy)
            
            var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;            
            var Val_date_id = document.getElementsByClassName('datepicker')[0].id;
            var Val_date = $('#' + Val_date_id).val();
            if (dateformat.test(Val_date)) {
                var seperator1 = Val_date.split('/');
                var seperator2 = Val_date.split('-');

                if (seperator1.length > 1) {
                    var splitdate = Val_date.split('/');
                }
                else if (seperator2.length > 1) {
                    var splitdate = Val_date.split('-');
                }
                var dd = parseInt(splitdate[0]);
                var mm = parseInt(splitdate[1]);
                var yy = parseInt(splitdate[2]);
                var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                if (mm == 1 || mm > 2) {
                    if (dd > ListofDays[mm - 1]) {
                        alert('Invalid date format!');
                        return false;
                    }
                }
                if (mm == 2) {
                    var lyear = false;
                    if ((!(yy % 4) && yy % 100) || !(yy % 400)) {
                        lyear = true;
                    }
                    if ((lyear == false) && (dd >= 29)) {
                        alert('Invalid date format!');
                        return false;
                    }
                    if ((lyear == true) && (dd > 29)) {
                        alert('Invalid date format!');
                        return false;
                    }
                }
            }
            else {
                alert("Invalid date format!");

                return false;
            }
                        
        });

        $('.predatesdisableddatepicker').blur(function () {                                 // Used For Checking Valid Date Format(dd-MM-yyyy)

            var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
            var Val_date_id = document.getElementsByClassName('predatesdisableddatepicker')[0].id;
            var Val_date = $('#' + Val_date_id).val();
            if (dateformat.test(Val_date)) {
                var seperator1 = Val_date.split('/');
                var seperator2 = Val_date.split('-');

                if (seperator1.length > 1) {
                    var splitdate = Val_date.split('/');
                }
                else if (seperator2.length > 1) {
                    var splitdate = Val_date.split('-');
                }
                var dd = parseInt(splitdate[0]);
                var mm = parseInt(splitdate[1]);
                var yy = parseInt(splitdate[2]);
                var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                if (mm == 1 || mm > 2) {
                    if (dd > ListofDays[mm - 1]) {
                        alert('Invalid date format!');
                        return false;
                    }
                }
                if (mm == 2) {
                    var lyear = false;
                    if ((!(yy % 4) && yy % 100) || !(yy % 400)) {
                        lyear = true;
                    }
                    if ((lyear == false) && (dd >= 29)) {
                        alert('Invalid date format!');
                        return false;
                    }
                    if ((lyear == true) && (dd > 29)) {
                        alert('Invalid date format!');
                        return false;
                    }
                }
            }
            else {
                alert("Invalid date format!");

                return false;
            }

        });

        $('.postdatesdisableddatepicker').blur(function () {                                // Used For Checking Valid Date Format(dd-MM-yyyy)
            var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
            var Val_date_id = document.getElementsByClassName('postdatesdisableddatepicker')[0].id;
            var Val_date = $('#' + Val_date_id).val();
            if (dateformat.test(Val_date)) {
                var seperator1 = Val_date.split('/');
                var seperator2 = Val_date.split('-');

                if (seperator1.length > 1) {
                    var splitdate = Val_date.split('/');
                }
                else if (seperator2.length > 1) {
                    var splitdate = Val_date.split('-');
                }
                var dd = parseInt(splitdate[0]);
                var mm = parseInt(splitdate[1]);
                var yy = parseInt(splitdate[2]);
                var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                if (mm == 1 || mm > 2) {
                    if (dd > ListofDays[mm - 1]) {
                        alert('Invalid date format!');
                        return false;
                    }
                }
                if (mm == 2) {
                    var lyear = false;
                    if ((!(yy % 4) && yy % 100) || !(yy % 400)) {
                        lyear = true;
                    }
                    if ((lyear == false) && (dd >= 29)) {
                        alert('Invalid date format!');
                        return false;
                    }
                    if ((lyear == true) && (dd > 29)) {
                        alert('Invalid date format!');
                        return false;
                    }
                }
            }
            else {
                alert("Invalid date format!");

                return false;
            }
        });

    });
});

$(function () {

    //$('.datepicker').keyup(function () {      // Added for Handling "0" error validation while entering date by class with common inputs
    //    var txtDate = document.getElementsByClassName("datepicker");
    //    if (parseFloat(txtDate[0].value) <= 0) {
    //        txtDate[0].value = '';
    //        alert('Please enter valid date Format')
    //    }
    //});
       
    $('.datepicker').blur(function () {                                                  // Used For Checking Valid Date Format(dd-MM-yyyy)

        var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
        var Val_date_id = document.getElementsByClassName('datepicker')[0].id;
        var Val_date = $('#' + Val_date_id).val();
        if (dateformat.test(Val_date)) {
            var seperator1 = Val_date.split('/');
            var seperator2 = Val_date.split('-');

            if (seperator1.length > 1) {
                var splitdate = Val_date.split('/');
            }
            else if (seperator2.length > 1) {
                var splitdate = Val_date.split('-');
            }
            var dd = parseInt(splitdate[0]);
            var mm = parseInt(splitdate[1]);
            var yy = parseInt(splitdate[2]);
            var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            if (mm == 1 || mm > 2) {
                if (dd > ListofDays[mm - 1]) {
                    alert('Invalid date format!');
                    return false;
                }
            }
            if (mm == 2) {
                var lyear = false;
                if ((!(yy % 4) && yy % 100) || !(yy % 400)) {
                    lyear = true;
                }
                if ((lyear == false) && (dd >= 29)) {
                    alert('Invalid date format!');
                    return false;
                }
                if ((lyear == true) && (dd > 29)) {
                    alert('Invalid date format!');
                    return false;
                }
            }
        }
        else {
            alert("Invalid date format!");

            return false;
        }

    });

    $('.predatesdisableddatepicker').blur(function () {                                 // Used For Checking Valid Date Format(dd-MM-yyyy)

        var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
        var Val_date_id = document.getElementsByClassName('predatesdisableddatepicker')[0].id;
        var Val_date = $('#' + Val_date_id).val();
        if (dateformat.test(Val_date)) {
            var seperator1 = Val_date.split('/');
            var seperator2 = Val_date.split('-');

            if (seperator1.length > 1) {
                var splitdate = Val_date.split('/');
            }
            else if (seperator2.length > 1) {
                var splitdate = Val_date.split('-');
            }
            var dd = parseInt(splitdate[0]);
            var mm = parseInt(splitdate[1]);
            var yy = parseInt(splitdate[2]);
            var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            if (mm == 1 || mm > 2) {
                if (dd > ListofDays[mm - 1]) {
                    alert('Invalid date format!');
                    return false;
                }
            }
            if (mm == 2) {
                var lyear = false;
                if ((!(yy % 4) && yy % 100) || !(yy % 400)) {
                    lyear = true;
                }
                if ((lyear == false) && (dd >= 29)) {
                    alert('Invalid date format!');
                    return false;
                }
                if ((lyear == true) && (dd > 29)) {
                    alert('Invalid date format!');
                    return false;
                }
            }
        }
        else {
            alert("Invalid date format!");

            return false;
        }

    });

    $('.postdatesdisableddatepicker').blur(function () {                                // Used For Checking Valid Date Format(dd-MM-yyyy)
        var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
        var Val_date_id = document.getElementsByClassName('postdatesdisableddatepicker')[0].id;
        var Val_date = $('#' + Val_date_id).val();
        if (dateformat.test(Val_date)) {
            var seperator1 = Val_date.split('/');
            var seperator2 = Val_date.split('-');

            if (seperator1.length > 1) {
                var splitdate = Val_date.split('/');
            }
            else if (seperator2.length > 1) {
                var splitdate = Val_date.split('-');
            }
            var dd = parseInt(splitdate[0]);
            var mm = parseInt(splitdate[1]);
            var yy = parseInt(splitdate[2]);
            var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            if (mm == 1 || mm > 2) {
                if (dd > ListofDays[mm - 1]) {
                    alert('Invalid date format!');
                    return false;
                }
            }
            if (mm == 2) {
                var lyear = false;
                if ((!(yy % 4) && yy % 100) || !(yy % 400)) {
                    lyear = true;
                }
                if ((lyear == false) && (dd >= 29)) {
                    alert('Invalid date format!');
                    return false;
                }
                if ((lyear == true) && (dd > 29)) {
                    alert('Invalid date format!');
                    return false;
                }
            }
        }
        else {
            alert("Invalid date format!");

            return false;
        }
    });

    $('.Time').each(function () {
        var time = $(this).find("input[type=text]").attr('id');
        if ($('#' + time).val() === "") {
            $('#' + time).val('00:00:00');
        }
    });

    $('.datepicker').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        autoUpdateInput: true,
        autoApply: true,
        minYear: 1950,

        "locale": {
            "format": "DD-MM-YYYY"
        }
    });

    $('.predatesdisableddatepicker').daterangepicker({      // use this datepicker class for disabling dates before current date
        singleDatePicker: true,
        showDropdowns: true,
        autoUpdateInput: true,
        autoApply: true,
        minYear: 1950,
        minDate: new Date(),

        "locale": {
            "format": "DD-MM-YYYY"
        }
    });

    $('.postdatesdisableddatepicker').daterangepicker({     // use this datepicker class for disabling dates after current date
        singleDatePicker: true,
        showDropdowns: true,
        autoUpdateInput: true,
        autoApply: true,
        minYear: 1950,
        maxDate: new Date(),

        "locale": {
            "format": "DD-MM-YYYY"
        }
    });

});




