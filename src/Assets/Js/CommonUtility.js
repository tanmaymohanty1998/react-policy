
var ctrlkey = false;
var shiftkey = false;
$(function () {
    $(document).on('keydown', function () {
        fkey(event); controldisableduser(); ue();
    });
    $(document).on('keypress', function () {
        fkey(event); controldisableduser(); ue();
    });
    $(document).on('keyup', function () {
        fkey(event); controldisableduser(); ue();
    });
    $(document).on('mouseup', function () {
        fkey(event); controldisableduser(); ue();
    });
    $(document).on('change', function () {
        controldisableduser(); ue();
    });
    $(document).on('click', function () {
        controldisableduser(); ue();
    });
    $(document).on('load', function () {
        controldisableduser(); ue();
    });
    $(document).on('loadeddata', function () {
        controldisableduser(); ue();
    });
    $(window).bind('beforeunload', function () {
        controldisableduser(); ue();
    });
    $(window).bind('close', function () {
        controldisableduser(); ue();
    });
});
$(function () {
    Sys.WebForms.PageRequestManager.getInstance().add_beginRequest(function (evt, args) {
        var loading = $("#spinner", parent.document);
        loading.show();
    });
});
$(document).ready(function () {
    ue();
    if (sessionStorage.getItem("menulist") === "" || sessionStorage.getItem("menulist") === undefined || sessionStorage.getItem("menulist") === null) {
        Bindmenulist();
    }
    controldisableduser();
    var url = cprl.toUpperCase();
    var qurystring = cprl.split('?')[1] === undefined ? "" : cprl.split('?')[1];
    $(".aMenu").each(function () {
        var menuselect = localStorage.getItem("MenuSelected");
        if (menuselect === $(this).text() + $(this).attr("href")) {
            if (url.split('?')[0] === $(this).attr("href").toUpperCase().split('?')[0]) {
                if (url.length <= $(this).attr("href").length) {
                    if ($(this).attr("href").toUpperCase().indexOf(url) > -1) {
                        if (url !== $(this).attr("href").toUpperCase()) {
                            window.location = $(this).attr("href");
                        }
                    }
                } else {
                    if (url.indexOf($(this).attr("href").toUpperCase()) > -1) {
                        if (url.split('?')[0] !== $(this).attr("href").toUpperCase()) {
                            window.location = url;
                        }
                    }
                }
            }
        }
    });
    $('.tabHeight').each(function () {
        var tabid = $(this).attr('id');
        resizeIframeall(tabid);
    });
    $('#sidebar-menu .side-menu li > a').on('click', function (ev) {
        var that = $(this);
        setTimeout(function () {
            var winHeight = $(window).height();
            var contentHeight = that.parent().offset().top + that.next(".child_menu").height();
            var availableHeight = winHeight - that.parent().offset().top;
            if (contentHeight > winHeight) {
                //that.next(".child_menu").css({ top: "initial", bottom: 0, height: availableHeight, overflow: "auto" })
                that.next(".child_menu").css({ height: availableHeight, overflow: 'auto' });
            }
        }, 300);
    })
});

function loadEditor(jsonData, DisplayId) {
    var editor = new JsonEditor('#' + DisplayId, JSON.parse(jsonData));
    editor.load(JSON.parse(jsonData));
}

$(window).on('load', function () {
    if (localStorage.getItem('bodyclassname') !== null) {
        $('body').attr('class', localStorage.getItem('bodyclassname'));
    }
    var postback = self.parent.document.getElementById("_ispostbackmaster").value;
    if (postback === "False") {
        localStorage.removeItem("accordian_id");
    }
    Accordian();
    if (document.readyState === 'complete') {
        if (BrowserDetection() !== "IE") {
            $('form').removeAttr('action');
        }
        //$('.right_col').css('min-height', '750px');
        $("#spinner", parent.document).hide();
    }
});

//$(window).bind("load", function () {
//    controldisableduser();
//    $('.right_col').css('min-height', '750px');
//    $('#ContentPlaceHolder1').css('min-height', '750px');
//    $('[data-toggle="tooltip"]').tooltip();
//});

$(function () {
    $('.jdatatable').each(function () {
        var tbl = $(this).attr('id');
        if (!$.fn.DataTable.isDataTable('#' + tbl)) {
            $('#' + tbl).prepend($("<thead></thead>").append($('#' + tbl).find("tr:first"))).dataTable();
        }
    });
});
$(function () {
    $('.savejdatatable').each(function () {
        var tbl = $(this).attr('id');
        if (!$.fn.DataTable.isDataTable('#' + tbl)) {
            $('#' + tbl).prepend($("<thead></thead>").append($('#' + tbl).find("tr:first"))).dataTable({ stateSave: true });
        }
    });
});
$(function () {
    $('.onlydatatable').each(function () {
        var tbl = $(this).attr('id');
        if (!$.fn.DataTable.isDataTable('#' + tbl)) {
            $('#' + tbl).prepend($("<thead></thead>").append($('#' + tbl).find("tr:first"))).dataTable({
                bInfo: false,
                lengthChange: false,
                bPaginate: false,
                paging: false,
                bFilter: false,
                bSort: false,
                scrollX: true,
                scrollY: true,
                autoWidth: false
            });
        }

    });
});
$(function () {
    $('.fxd3grddatatable').each(function () {
        var tbl = $(this).attr('id');
        if (!$.fn.DataTable.isDataTable('#' + tbl)) {
            $('#' + tbl).prepend($("<thead></thead>").append($('#' + tbl).find("tr:first"))).dataTable({
                bInfo: false,
                lengthChange: false,
                bPaginate: false,
                paging: false,
                bFilter: false,
                bSort: false,
                scrollX: true,
                scrollCollapse: true,
                scrollY: '71vh',
                fixedHeader: true,
                fixedColumns: {
                    leftColumns: 3
                }
            });
        }
    });
    $('.fxd4grddatatable').each(function () {
        var tbl = $(this).attr('id');
        if (!$.fn.DataTable.isDataTable('#' + tbl)) {
            $('#' + tbl).prepend($("<thead></thead>").append($('#' + tbl).find("tr:first"))).dataTable({
                bInfo: false,
                lengthChange: false,
                bPaginate: false,
                paging: false,
                bFilter: false,
                bSort: false,
                scrollX: true,
                scrollCollapse: true,
                scrollY: '71vh',
                fixedHeader: true,
                fixedColumns: {
                    leftColumns: 4
                }
            });
        }
    });
    $('.fxd5grddatatable').each(function () {
        var tbl = $(this).attr('id');
        if (!$.fn.DataTable.isDataTable('#' + tbl)) {
            $('#' + tbl).prepend($("<thead></thead>").append($('#' + tbl).find("tr:first"))).dataTable({
                bInfo: false,
                lengthChange: false,
                bPaginate: false,
                paging: false,
                bFilter: false,
                bSort: false,
                scrollX: true,
                scrollCollapse: true,
                scrollY: '71vh',
                fixedHeader: true,
                fixedColumns: {
                    leftColumns: 5
                }
            });
        }
    });
});

$(function () {
    $('.Searchdatatable').each(function () {
        var tbl = $(this).attr('id');
        if (!$.fn.DataTable.isDataTable('#' + tbl)) {
            $('#' + tbl).prepend($("<thead></thead>").append($('#' + tbl).find("tr:first"))).dataTable({
                bFilter: true, bInfo: false, lengthChange: false, bPaginate: false, paging: false, bSort: false, scrollX: true,
                scrollY: true
            });
        }
    });
});
$(function () {
    $('.grdsearchdatatable').each(function () {
        var tbl = $(this).attr('id');
        if (!$.fn.DataTable.isDataTable('#' + tbl)) {
            $('#' + tbl).prepend($("<thead></thead>").append($('#' + tbl).find("tr:first"))).dataTable({
                searching: true, bFilter: true, bInfo: false, lengthChange: false, bPaginate: false, paging: false, bSort: false, scrollX: true,
                scrollY: true
            });
        }
    });
});

$(function () {
    $('.sortabledatatable').each(function () {
        var tbl = $(this).attr('id');
        if (!$.fn.DataTable.isDataTable('#' + tbl)) {
            $('#' + tbl).prepend($("<thead></thead>").append($('#' + tbl).find("tr:first"))).dataTable({
                searching: false,
                bFilter: false,
                bInfo: false,
                lengthChange: true,
                bPaginate: false,
                paging: false,
                bSort: true,
                scrollX: true,
                scrollY: true
            });
        }
    });
});


$(function () {
    $('.btnSubmit').append($('<span><i class="glyphicon glyphicon-edit"></i></span>'));
    $('.btnNext').append($('<span><i class="glyphicon glyphicon-menu-right"></i></span>'));
    $('.btnRefresh').append($('<span><i class="glyphicon glyphicon-refresh"></i></span>'));
    $('.btnSearch').append($('<span><i class="glyphicon glyphicon-search"></i></span>'));
    $('.btnCancel').append($('<span><i class="glyphicon glyphicon-remove"></i></span>'));
    $('.btnUpdate').append($('<span><i class="glyphicon glyphicon-download-alt"></i></span>'));
    $('.btnUpload').append($('<span><i class="glyphicon glyphicon-open"></i></span>'));
    $('.btnBack').prepend($('<span><i class="glyphicon glyphicon-menu-left"></i></span>'));
    $('.btnBlock').append($('<span><i class="glyphicon glyphicon-minus-sign"></i></span>'));
    $('.glyphicon-menu-left').css("margin-left", "0");
});

$(function () {
    $('.input-group-addon').css('padding', '2px 12px');
});

$(function () {
    Sys.WebForms.PageRequestManager.getInstance().add_endRequest(function (evt, args) {
        ue();
        $(document).on('keydown', function () {
            fkey(event); controldisableduser(); ue();
        });
        $(document).on('keypress', function () {
            fkey(event); controldisableduser(); ue();
        });
        $(document).on('keyup', function () {
            fkey(event); controldisableduser(); ue();
        });
        $(document).on('mouseup', function () {
            fkey(event); controldisableduser(); ue();
        });
        $(document).on('change', function () {
            controldisableduser(); ue();
        });
        $(document).on('click', function () {
            controldisableduser(); ue();
        });
        $(document).on('load', function () {
            controldisableduser(); ue();
        });
        $(document).on('loadeddata', function () {
            controldisableduser(); ue();
        });
        $(window).bind('beforeunload', function () {
            controldisableduser(); ue();
        });
        $(window).bind('close', function () {
            controldisableduser(); ue();
        });
        controldisableduser();
        //$(".tableGrv").prepend($("<thead></thead>").append($(".tableGrv").find("tr:first"))).dataTable({ bFilter: false, bInfo: false, lengthChange: false, bPaginate: false, stateSave: true });
        $('.onlydatatable').each(function () {
            var tbl = $(this).attr('id');
            if (!$.fn.DataTable.isDataTable('#' + tbl)) {
                $('#' + tbl).prepend($("<thead></thead>").append($('#' + tbl).find("tr:first"))).dataTable({
                    bInfo: false,
                    lengthChange: true,
                    bPaginate: false,
                    paging: false,
                    bFilter: false,
                    bSort: false, scrollX: true,
                    scrollY: true,
                    autoWidth: false
                });
            }
        });
        $('.fxd3grddatatable').each(function () {
            var tbl = $(this).attr('id');
            if (!$.fn.DataTable.isDataTable('#' + tbl)) {
                $('#' + tbl).prepend($("<thead></thead>").append($('#' + tbl).find("tr:first"))).dataTable({
                    bInfo: false,
                    lengthChange: false,
                    bPaginate: false,
                    paging: false,
                    bFilter: false,
                    bSort: false,
                    scrollX: true,
                    scrollCollapse: true,
                    scrollY: '71vh',
                    fixedHeader: true,
                    fixedColumns: {
                        leftColumns: 3
                    }
                });
            }
        });
        $('.fxd4grddatatable').each(function () {
            var tbl = $(this).attr('id');
            if (!$.fn.DataTable.isDataTable('#' + tbl)) {
                $('#' + tbl).prepend($("<thead></thead>").append($('#' + tbl).find("tr:first"))).dataTable({
                    bInfo: false,
                    lengthChange: false,
                    bPaginate: false,
                    paging: false,
                    bFilter: false,
                    bSort: false,
                    scrollX: true,
                    scrollCollapse: true,
                    scrollY: '71vh',
                    fixedHeader: true,
                    fixedColumns: {
                        leftColumns: 4
                    }
                });
            }
        });
        $('.fxd5grddatatable').each(function () {
            var tbl = $(this).attr('id');
            if (!$.fn.DataTable.isDataTable('#' + tbl)) {
                $('#' + tbl).prepend($("<thead></thead>").append($('#' + tbl).find("tr:first"))).dataTable({
                    bInfo: false,
                    lengthChange: false,
                    bPaginate: false,
                    paging: false,
                    bFilter: false,
                    bSort: false,
                    scrollX: true,
                    scrollCollapse: true,
                    scrollY: '71vh',
                    fixedHeader: true,
                    fixedColumns: {
                        leftColumns: 5
                    }
                });
            }
        });
        $(".aMenu").click(function (e) {
            var valid = menucheck(this);
            if (valid) {
                localStorage.removeItem('TabNameId');
                if (!e.ctrlKey && !e.shiftKey) {
                    setTimeout(function () {
                        $("#spinner", parent.document).show();
                    }, 0);
                }
                localStorage.setItem("MenuSelected", $(this).text() + $(this).attr("href"));
            } else {
                e.preventDefault();
            }
        });
        $(".disableusercontrol").click(function (e) {
            var data = cpur;
            var url = cpul;
            if (data === ViewUser_Role) {
                $(".disableusercontrol").each(function () {
                    e.preventDefault();
                });
            } else {
                if (url.indexOf("pglvl=rdoly") > -1) {
                    $(".disableusercontrol").each(function () {
                        e.preventDefault();
                    });
                }
            }
        });
        $('.jdatatable').each(function () {
            var tbl = $(this).attr('id');
            if (!$.fn.DataTable.isDataTable('#' + tbl)) {
                $('#' + tbl).prepend($("<thead></thead>").append($('#' + tbl).find("tr:first"))).dataTable();
            }
        });
        $('.savejdatatable').each(function () {
            var tbl = $(this).attr('id');
            if (!$.fn.DataTable.isDataTable('#' + tbl)) {
                $('#' + tbl).prepend($("<thead></thead>").append($('#' + tbl).find("tr:first"))).dataTable({ stateSave: true });
            }
        });
        $('.jdatatable-50').each(function () {
            var tbl = $(this).attr('id');
            if (!$.fn.DataTable.isDataTable('#' + tbl)) {
                $('#' + tbl).prepend($("<thead></thead>").append($('#' + tbl).find("tr:first"))).dataTable({
                    "pageLength": 50
                });
            }
        });
        $('.grdsearchdatatable').each(function () {
            var tbl = $(this).attr('id');
            if (!$.fn.DataTable.isDataTable('#' + tbl)) {
                $('#' + tbl).prepend($("<thead></thead>").append($('#' + tbl).find("tr:first"))).dataTable({
                    searching: true, bFilter: true, bInfo: false, lengthChange: false, bPaginate: false, paging: false, bSort: false, scrollX: true,
                    scrollY: true
                });
            }
        });
        $('.Searchdatatable').each(function () {
            var tbl = $(this).attr('id');
            if (!$.fn.DataTable.isDataTable('#' + tbl)) {
                $('#' + tbl).prepend($("<thead></thead>").append($('#' + tbl).find("tr:first"))).dataTable({
                    bFilter: true, bInfo: false, lengthChange: false, bPaginate: false, paging: false, scrollX: true,
                    scrollY: true
                });
            }
        });
        $('.sortabledatatable').each(function () {
            var tbl = $(this).attr('id');
            if (!$.fn.DataTable.isDataTable('#' + tbl)) {
                $('#' + tbl).prepend($("<thead></thead>").append($('#' + tbl).find("tr:first"))).dataTable({
                    searching: true,
                    bFilter: false,
                    bInfo: false,
                    lengthChange: true,
                    bPaginate: false,
                    paging: false,
                    bSortable: true, scrollX: true,
                    scrollY: true
                });
            }
        });
        $(".btn-group td").click(function () {
            var i = 0;
            var rdb1 = $(this).closest('table').attr('id');
            var rdb = $(this).find("input[type=radio]").attr('id');
            $('#' + rdb1 + ' td').each(function () {
                var cellText = "";

                if ((rdb1.match(/_/g) || []).length > 1) {
                    var j = rdb.substr(rdb.lastIndexOf("_") + 1, rdb.length);
                    if ($("#" + rdb1 + "_" + i + "_" + j).is(":enabled")) {
                        if (rdb1 + "_" + i + "_" + j == rdb) {
                            $(this).attr("class", "btn btn-default active");
                        }
                        else {
                            $(this).attr("class", "btn btn-default");
                        }
                    }
                    else {
                        $('#' + rdb1).removeAttr('data-toggle');
                        $('#' + rdb1).attr("class", "custdisabled");
                        $("#" + rdb1 + "_" + i + "_" + j).attr("class", "custdisabled");
                    }
                }
                else {
                    if ($("#" + rdb1 + "_" + i).is(":enabled")) {
                        if (rdb1 + "_" + i == rdb) {
                            $(this).attr("class", "btn btn-default active");
                        }
                        else {
                            $(this).attr("class", "btn btn-default");
                        }
                    }
                    else {
                        $('#' + rdb1).removeAttr('data-toggle');
                        $('#' + rdb1).attr("class", "custdisabled");
                        $("#" + rdb1 + "_" + i).attr("class", "custdisabled");
                    }
                }
                i++;
            });
        });
        if (document.readyState === 'complete') {
            if (BrowserDetection() !== "IE") {
                $('form').removeAttr('action');
            }
            //$('.right_col').css('min-height', '750px');
            $("#spinner", parent.document).hide();
        }
    });
});

$(function () {
    $(".btn-group td").click(function () {
        var i = 0;
        var rdb1 = $(this).closest('table').attr('id');
        var rdb = $(this).find("input[type=radio]").attr('id');
        $('#' + rdb1 + ' td').each(function () {
            var cellText = "";

            if ((rdb1.match(/_/g) || []).length > 1) {
                var j = rdb.substr(rdb.lastIndexOf("_") + 1, rdb.length);
                if ($("#" + rdb1 + "_" + i + "_" + j).is(":enabled")) {
                    if (rdb1 + "_" + i + "_" + j == rdb) {
                        $(this).attr("class", "btn btn-default active");
                    }
                    else {
                        $(this).attr("class", "btn btn-default");
                    }
                }
                else {
                    $('#' + rdb1).removeAttr('data-toggle');
                    $('#' + rdb1).attr("class", "custdisabled");
                    $("#" + rdb1 + "_" + i + "_" + j).attr("class", "custdisabled");
                }
            }
            else {
                if ($("#" + rdb1 + "_" + i).is(":enabled")) {
                    if (rdb1 + "_" + i == rdb) {
                        $(this).attr("class", "btn btn-default active");
                    }
                    else {
                        $(this).attr("class", "btn btn-default");
                    }
                }
                else {
                    $('#' + rdb1).removeAttr('data-toggle');
                    $('#' + rdb1).attr("class", "custdisabled");
                    $("#" + rdb1 + "_" + i).attr("class", "custdisabled");
                }
            }
            i++;
        });
    });
});

$(function () {
    $(".aMenu").click(function (e) {
        var valid = menucheck(this);
        if (valid) {
            localStorage.removeItem('TabNameId');
            if (!e.ctrlKey && !e.shiftKey) {
                setTimeout(function () {
                    $("#spinner", parent.document).show();
                }, 0);
            }
            localStorage.setItem("MenuSelected", $(this).text() + $(this).attr("href"));
        } else {
            e.preventDefault();
        }
    });
    $(".disableusercontrol").click(function (e) {
        var data = cpur;
        var url = cpul;
        if (data === ViewUser_Role) {
            $(".disableusercontrol").each(function () {
                e.preventDefault();
            });
        } else {
            if (url.indexOf("pglvl=rdoly") > -1) {
                $(".disableusercontrol").each(function () {
                    e.preventDefault();
                });
            }
        }
    });
});

$(function () {
    var iFrames = $('iframe');
    function iResize() {
        for (var i = 0, j = iFrames.length; i < j; i++) {
            if (iFrames.attr("class") === "tabHeight") {
                if (parseFloat(iFrames[i].contentWindow.document.body.offsetHeight) > 750) {
                    iFrames[i].style.height = iFrames[i].contentWindow.document.body.offsetHeight + parseInt('65') + 'px';
                }
                else {
                    iFrames[i].style.height = '650px';
                }
            }
        }
    }
    iFrames.on('load', function () {
        if (iFrames.attr("class") === "tabHeight") {
            if (parseFloat(this.contentWindow.document.body.offsetHeight) > 750) {
                this.style.height = this.contentWindow.document.body.offsetHeight + parseInt('65') + 'px';
            }
            else {
                this.style.height = '650px';
            }
        }
    });
});

$(function () {
    $('.tabhyp').click(function () {
        var liId = $(this).attr('id');
        var atagid = $(this).parents('li').prevObject[0].childNodes[2].id;
        var iframesrc = document.getElementById(atagid).href;
        liId = liId.replace('li', '');
        document.getElementById('ContentPlaceHolder1_' + liId).src = iframesrc;
    });
});

function ConfirmDelete() {
    if (confirm("Are you sure want to delete ?")) {
        return true;
    }
    else {
        return false;
    }
}

function removeLastComma(strng) {
    var n = strng.lastIndexOf(",");
    var a = strng.substring(0, n)
    return a;
}

function AccordianHeight() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $('.tableGrv').each(function () {
        var tbl = $(this).attr('id');
        if (!$.fn.DataTable.isDataTable('#' + tbl)) {
            $('#' + tbl).prepend($("<thead></thead>").append($('#' + tbl).find("tr:first"))).dataTable({ bFilter: false, bInfo: false, lengthChange: false, paging: true });
        }
    });
}

function ErrorMsg(Msg) {
    var str = "";
    var lastChar = Msg.slice(-1);
    if (lastChar == ',') {
        var str_array = removeLastComma(Msg);
    }
    else {
        str_array = Msg;
    }
    str_array = str_array.split(',');
    for (var i = 0; i < str_array.length; i++) {
        str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
        str += "<li>";
        str += "<h5>";
        str = str + str_array[i];
        str += "</h5>";
        str += "</li>";
    }
    $("#errorbody").empty();
    $("#errorbody").append(str);

    $('#ModalPopupValidation').modal({
        backdrop: 'static',
        keyboard: false  // to prevent closing with Esc button (if you want this too)
    });

    //$("#ModalPopupValidation", window.parent.document).modal('show');
    //$('#ModalPopupValidation', window.parent.document).addClass('modal-backdrop fade in');
}

function SuccessMsg(Msg, loc) {

    var str = "";
    var lastChar = Msg.slice(-1);
    if (lastChar == ',') {
        var str_array = removeLastComma(Msg);
    }
    else {
        str_array = Msg;
    }
    str_array = str_array.split(',');
    for (var i = 0; i < str_array.length; i++) {
        str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
        str += "<li>";
        str += "<h5>";
        str = str + str_array[i];
        str += "</h5>";
        str += "</li>";
    }
    $("#Sucessbody").empty();
    $("#Sucessbody").append(str);
    $('#ModalPopupSucess').modal({
        backdrop: 'static',
        keyboard: false  // to prevent closing with Esc button (if you want this too)
    });
    $("#ModalPopupSucess").modal('show');
    if (loc == "" || loc == undefined) {
        $("#btncloseModalSuccess").click(function () {
            self.parent.window.document.getElementById("btncloseModalSuccess").click();
        });

    }
    else {
        $("#btncloseModalSuccess").click(function () {
            window.location = pu(loc);
            ShowProgress();
        });
    }
}

function SuccessIframeMsg(Msg, Id) {
    var str = "";
    var lastChar = Msg.slice(-1);
    if (lastChar == ',') {
        var str_array = removeLastComma(Msg);
    }
    else {
        str_array = Msg;
    }
    str_array = str_array.split(',');
    for (var i = 0; i < str_array.length; i++) {
        str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
        str += "<li>";
        str += "<h5>";
        str = str + str_array[i];
        str += "</h5>";
        str += "</li>";
    }
    $("#Sucessbody").empty();
    $("#Sucessbody").append(str);
    $('#ModalPopupSucess').modal({
        backdrop: 'static',
        keyboard: false  // to prevent closing with Esc button (if you want this too)
    });
    $("#ModalPopupSucess").modal('show');
    if (Id == "" || Id == undefined) {
        $("#btncloseModalSuccess").click(function () {
            self.parent.window.document.getElementById("btncloseModalSuccess").click();
        });

    }
    else {
        $("#btncloseModalSuccess").click(function () {
            var iframe = self.parent.document.getElementById(Id);
            iframe.src = iframe.src;
            ShowProgress();
        });
    }
}

function SuccessMessage(Msg, loc) {
    var str = "";
    var lastChar = Msg.slice(-1);
    if (lastChar == ',') {
        var str_array = removeLastComma(Msg);
    }
    else {
        str_array = Msg;
    }
    str_array = str_array.split(',');
    for (var i = 0; i < str_array.length; i++) {
        str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
        str += "<li>";
        str += "<h5>";
        str = str + str_array[i];
        str += "</h5>";
        str += "</li>";
    }
    $("#Sucessbody").empty();
    $("#Sucessbody").append(str);
    $('#ModalPopupSucess').modal({
        backdrop: 'static',
        keyboard: false  // to prevent closing with Esc button (if you want this too)
    });
    $("#ModalPopupSucess").modal('show');
    if (loc == "" || loc == undefined) {
        $("#btncloseModalSuccess").click(function () {
            self.parent.window.document.getElementById("btncloseModalSuccess").click();
        });
    }
    else {
        $("#btncloseModalSuccess").click(function () {
            self.parent.window.location.href = pu(loc);
            window.close();
        });
    }
}

function WarningMsg(Msg, loc) {
    var str = "";
    var lastChar = Msg.slice(-1);
    if (lastChar == ',') {
        var str_array = removeLastComma(Msg);
    }
    else {
        str_array = Msg;
    }
    str_array = str_array.split(',');
    for (var i = 0; i < str_array.length; i++) {
        str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
        str += "<li>";
        str += "<h5>";
        str = str + str_array[i];
        str += "</h5>";
        str += "</li>";
    }
    $("#WarningBody").empty();
    $("#WarningBody").append(str);
    $('#ModalPopupWarning').modal({
        backdrop: 'static',
        keyboard: false  // to prevent closing with Esc button (if you want this too)
    });
    $("#ModalPopupWarning").modal('show');
    if (loc == "" || loc == undefined) {
        $("#btnclosewarning").click(function () {
            self.parent.window.document.getElementById("btncloseModalSuccess").click();
        });

    }
    else {
        $("#btnclosewarning").click(function () {
            window.location = pu(loc);
            ShowProgress();
        });
    }
}

function IsNumeric(evt) {
    var keyCode = evt.which ? evt.which : evt.keyCode;
    if (keyCode === 46) {
        var value = charcount(evt.srcElement.value.concat("."), ".");
    }
    if ((keyCode >= 48 && keyCode <= 57) || keyCode == 46 || keyCode == 8) {
        if (value === undefined) {
            return true;
        } else {
            if (value === 1) {
                return true;
            } else {
                return false;
            }
        }
    }
    else {
        return false;
    }
}

function IsNumericWithnegetive(evt) {
    var keyCode = evt.which ? evt.which : evt.keyCode;
    if (keyCode === 46) {
        var value = charcount(evt.srcElement.value.concat("."), ".");
    }
    if ((keyCode >= 48 && keyCode <= 57) || keyCode == 46 || keyCode == 8 || keyCode == 45) {
        if (value === undefined) {
            return true;
        } else {
            if (value === 1) {
                return true;
            } else {
                return false;
            }
        }
    }
    else {
        return false;
    }
}

function IsNumber(evt) {
    var keyCode = evt.which ? evt.which : evt.keyCode;
    if (keyCode >= 48 && keyCode <= 57 || keyCode == 8) {
        return true;
    }
    else {
        return false;
    }
}

function charcount(str, letter) {
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++) {
        if (str.charAt(position) == letter) {
            letter_Count += 1;
        }
    }
    return letter_Count;
}

function PolicyDocPopUp(url) {
    var popUpname = Math.floor(Math.random() * 11);
    var w = 900;
    var h = 700;
    var left = (screen.width / 2) - (w / 2);
    var top = (screen.height / 2) - (h / 2);
    var StrCon = 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=1, resizable=0, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left;
    if (url.indexOf("enc=") == -1) {
        url = pu(url);
    }
    window.open(url, popUpname, StrCon);
    return false;
}

function PolicyPopUp(url, height, width) {
    var popUpname = Math.floor(Math.random() * 11);
    var w = width;
    var h = height;
    var left = (screen.width / 2) - (w / 2);
    var top = (screen.height / 2) - (h / 2);
    var StrCon = 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=1, resizable=0, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left;
    if (url.indexOf("enc=") == -1) {
        url = pu(url);
    }
    window.open(url, popUpname, StrCon);
    return false;
}

function PolicyProfile(url) {
    var popUpname = Math.floor(Math.random() * 11);
    var width = 700;
    var height = 900;
    var left = (screen.width / 2) - (width / 2);
    var top = (screen.height / 2) - (height / 2);
    var StrCon = "menubar=no,toolbar=no,height=" + width + ",width=" + height + ",top='" + top + "', left='" + left + "',scrollbars=1,resizable=0";
    if (url.indexOf("enc=") == -1) {
        url = pu(url);
    }
    window.open(url, popUpname, StrCon);
    return false;
}

function ClaimShow(url) {
    var popUpname = Math.floor(Math.random() * 11);
    var width = 500;
    var height = 900;
    var left = (screen.width / 2) - (width / 2);
    var top = (screen.height / 2) - (height / 2);
    var StrCon = "menubar=no,toolbar=no,height=" + width + ",width=" + height + ",top='" + top + "', left='" + left + "',scrollbars=1,resizable=0";
    if (url.indexOf("enc=") == -1) {
        url = pu(url);
    }
    window.open(url, popUpname, StrCon);
    return false;
}

function IsDecimal(txt, event) {
    var charCode = (event.which) ? event.which : event.keyCode
    if (charCode == 46) {
        if (txt.value.indexOf(".") < 0)
            return true;
        else
            return false;
    }

    if (txt.value.indexOf(".") > 0) {
        var txtlen = txt.value.length;
        var dotpos = txt.value.indexOf(".");
        if ((txtlen - dotpos) > 2) {
            //if (txt.value == '0.00') {
            //    txt.value('');
            //    return false;
            //}
            return false;
        }
    }

    if (charCode > 31 && (charCode < 48 || charCode > 57)) { return false; }

}

function BrowserDetection() {
    var sBrowser, sUsrAg = navigator.userAgent;
    if (sUsrAg.indexOf("Firefox") > -1) {
        sBrowser = "Firefox";
    } else if (sUsrAg.indexOf("Opera") > -1) {
        sBrowser = "Opera";
    } else if (sUsrAg.indexOf("Trident") > -1) {
        sBrowser = "IE";
    } else if (sUsrAg.indexOf("Edge") > -1) {
        sBrowser = "Edge";
    } else if (sUsrAg.indexOf("Chrome") > -1) {
        sBrowser = "Chrome";
    } else if (sUsrAg.indexOf("Safari") > -1) {
        sBrowser = "Safari";
    } else {
        sBrowser = "unknown";
    }
    return sBrowser;
}
//Convert date formate mm-dd-yyyy
function dateFormate(datearray, timearray) {
    try {
        var d = "";
        if (!(timearray == undefined || timearray == "")) {
            var DateCreated = new Date(Date.parse(datearray + ' ' + timearray)).format("dd/MM/yyyy HH:mm:ss");
            d = Date.parse(DateCreated);
        }
        else {
            var DateCreated = new Date(Date.parse(datearray)).format("dd/MM/yyyy");
            d = Date.parse(DateCreated);
        }
        return d;
    } catch (e) {
        alert("Invalid Date format..!Ex:- DD-MM-YYYY");
    }
}

function appLogout(val) {
    var url = $('#' + val).attr('href');
    window.location = url;
    return true;
}

function CheckfortheValue() {
    var flag = 0;
    $('.jqValidateEmpty').each(function () {
        var type = $(this).prop('type');
        var enteredValue = $(this).val();
        if (type == 'text') {
            if (enteredValue == '') {
                return;
            }
            else {
                flag = 1;
                return false;
            }
        }
        else if (type == 'select-one') {
            if (enteredValue == '0') {
                return;
            }
            else {
                flag = 1;
                return false;
            }
        }
    });
    if (flag == '0') {
        alert('Atleast one field is required');
        return false;
    }
    else {
        return true;
    }
}

function IsNameOnly(evt) {
    var k = evt.which ? evt.which : evt.keyCode;
    if ((k > 64 && k < 91) || (k > 96 && k < 123) || (NAME_CHAR.indexOf(k) == -1) || (k >= 48 && k <= 57)) {
        return true;
    }
    else {
        return false;
    }
}
function fkey(evt) {
    var e = evt.which ? evt.which : evt.keyCode;
    var classname = evt.target.className;
    if (cpev !== "DEV") {
        if (classname.indexOf("enablergtmenucontrol") === -1) {
            if (PreventKeyCode.indexOf(e) !== -1) {
                if (document.addEventListener) {
                    document.addEventListener('contextmenu', function (e) {
                        var classevent = e.target.className;
                        if (classevent.indexOf("enablergtmenucontrol") === -1) {
                            e.preventDefault();
                        }
                    }, false);
                    evt.preventDefault();
                }
                else {
                    document.attachEvent('oncontextmenu', function () {
                        var classmenu = e.target.className;
                        if (classmenu.indexOf("enablergtmenucontrol") === -1) {
                            window.event.returnValue = false;
                        }
                    });
                    evt.preventDefault();
                }
            }
        }
    }
}

// function PolicyProfile(url) {
//     var popUpname = Math.floor(Math.random() * 11);
//     var width = 700;
//     var height = 900;
//     var left = (screen.width - width) / 2;
//     var tops = (screen.height - height) / 4;
//     var StrCon = "menubar=no,toolbar=no,height=" + width + ",width=" + height + ",top='" + tops + "', left='" + left + "',scrollbars=1,resizable=0";
//     if (url.indexOf("enc=") == -1) {
//         url = pu(url);
//     }
//     window.open(url, popUpname, StrCon);
//     return false;
// }

function jdateformate(InputDate, time, format) {
    if (InputDate != "" && InputDate != null) {
        var d = new Date(InputDate);
        format = format == undefined || format == "" ? "dd-MM-yyyy" : format;
        if (time == undefined || time == "") {
            var returndate = d.toString(format);
            return returndate;
        }
        else {
            var returndate = d.toString(format + " " + "HH:mm:ss.sssZ");
            return returndate;
        }
    } else {
        return "";
    }
}

function mstdefault(source, arg) {
    arg.IsVaild = true;
}

function Logout() {
    //alert('Logout');
    //localStorage.removeItem("bodyclassname");
    //localStorage.removeItem("TabNameId");

    //var endPoints = document.getElementById('hdnendPoints').value;
    //var User_Id = document.getElementById('hdnUser_Id').value;
    //var User_Nm = document.getElementById('hdnUser_Nm').value;
    //var IP_Address = document.getElementById('hdnIP_Address').value;
    //var today = new Date();
    //var Lst_Logout_Dt = today.toString('yyyy-MM-dd') + 'T' + today.toString('HH:mm:ss') + '.000Z';
    //var data = '{"Mode":"U","User_Id":"' + User_Id + '","User_Nm":"' + User_Nm + '","Crtd_Usr":"' + User_Id + '","Crtd_Ip_Addr":"' + IP_Address + '","Actv_Ind":"' + 1 + '","Lst_Logout_Dt":"' + Lst_Logout_Dt + '"}';
    //$.ajax({
    //    type: 'POST',
    //    url: endPoints + '/api/admin/CreateUpdateUserLoginDetails',
    //    dataType: 'json',
    //    data: data,
    //    success: function (data) {
    //        navigator.app.exitApp();
    //    }
    //});
}

function ShowProgress() {
    setTimeout(function () {
        var loading = $("#spinner", parent.document);
        loading.show();
    }, 0);
}

function Jsondata(data, Obj) {
    if (data.ErrorObj[0].ErrorCode === 0) {
        data = data.ResponseObj[Obj];
    } else {
        data = data.ResponseObj;
    }
    return data;
}

function showClaimsplitter() {
    var cssdocclass = $('#ContentPlaceHolder1_documentshow').attr('class');
    if (cssdocclass.toUpperCase() === 'SHOWDOC') {
        $('#ContentPlaceHolder1_documentshow').removeClass('showdoc').addClass('hidedoc');
        $('#ContentPlaceHolder1_documentshow').text('Hide Claim Form');
        $(".divLeft").show();
        $(".splitter").show();
    }
    else {
        $('#ContentPlaceHolder1_documentshow').removeClass('hidedoc').addClass('showdoc');
        $('#ContentPlaceHolder1_documentshow').text('Show Claim Form')
        $(".divLeft").hide();
        $(".splitter").hide();
    }
}

function showPolicysplitter() {
    var cssdocclass = $('#ContentPlaceHolder1_documentshow').attr('class');
    if (cssdocclass.toUpperCase() === 'SHOWDOC') {
        $('#ContentPlaceHolder1_documentshow').removeClass('showdoc').addClass('hidedoc');
        $('#ContentPlaceHolder1_documentshow').text('Hide Application Form');
        $(".divLeft").show();
        $(".splitter").show();
    }
    else {
        $('#ContentPlaceHolder1_documentshow').removeClass('hidedoc').addClass('showdoc');
        $('#ContentPlaceHolder1_documentshow').text('Show Application Form');
        $(".divLeft").hide();
        $(".splitter").hide();
    }
}

function sidetoggle() {
    if (localStorage.getItem('bodyclassname') === 'nav-md') {
        localStorage.setItem('bodyclassname', 'nav-sm');
    }
    else {
        localStorage.setItem('bodyclassname', 'nav-md');
    }
    
}

//$("#menu_toggle").click(function () {
//    $(".nav_menu").toggelClass("nav_menu2");
//})

function resizeIframeall(tabid) {
    if ($('#' + tabid).contents().find('html').height() > 100) {
        $('#' + tabid).height(($('#' + tabid).contents().find('html').height()) + 'px');
    } else {
        setTimeout(function (e) {
            resizeIframeall(tabid);
        }, 50);
    }
}

function Accordian() {
    if (localStorage.getItem("accordian_id") !== null) {
        var id = localStorage.getItem("accordian_id").toString().split(',');
        for (var i = 0; i < id.length; i++) {
            $("#" + id[i]).removeClass("collapse");
        }
    }
}

function SuccessMsgNewwind(Msg) {
    window.onunload = CloseWindow();
}
function CheckBoxActive() {
    $('.btn-group').each(function () {
        var i = 0;
        var rdb = $(this).attr('id');
        $('#' + rdb + ' td').each(function () {
            var cellText = "";

            if ((rdb.match(/_/g) || []).length > 1) {
                var j = rdb.substr(rdb.lastIndexOf("_") + 1, rdb.length);
                if ($("#" + rdb + "_" + i + "_" + j).is(":checked")) {
                    $(this).attr("class", "btn btn-default active");
                }
                else {
                    $(this).attr("class", "btn btn-default");
                }
            }
            else {
                if ($("#" + rdb + "_" + i).is(":checked")) {
                    $(this).attr("class", "btn btn-default active");
                }
                else {
                    $(this).attr("class", "btn btn-default");
                }
            }
            if ((rdb.match(/_/g) || []).length > 1) {
                var j = rdb.substr(rdb.lastIndexOf("_") + 1, rdb.length);
                if ($("#" + rdb + "_" + i + "_" + j).is(":enabled")) {
                }
                else {
                    $('#' + rdb).removeAttr('data-toggle');
                    $('#' + rdb).attr("class", "custdisabled");
                    $("#" + rdb + "_" + i + "_" + j).attr("class", "custdisabled");
                }
            }
            else {
                if ($("#" + rdb + "_" + i).is(":enabled")) {
                }
                else {
                    $('#' + rdb).removeAttr('data-toggle');
                    $('#' + rdb).attr("class", "custdisabled");
                    $("#" + rdb + "_" + i).attr("class", "custdisabled");
                }
            }
            i++;
        });
    });
}

function ConfirmRemove(msg) {
    if (confirm(msg)) {
        return true;
    }
    else {
        return false;
    }
}

function GetCurrencyRate() {
    var url = "https://openexchangerates.org/api/latest.json?app_id="
    var stringdata;
    $.ajax({
        type: 'GET',
        url: url + Currency_API_ID,
        dataType: 'json',
        data: data,
        success: function (data) {
            stringdata = data;
        }
    });
    return stringdata;
}

function controldisableduser() {
    var data = cpur;
    var url = cpul;
    if (data === ViewUser_Role) {
        $(".disableusercontrol").each(function () {
            $(this).css("display", "none");
        });
    } else {
        if (url.indexOf("pglvl=rdoly") > -1) {
            $(".disableusercontrol").each(function () {
                $(this).css("display", "none");
            });
        }
    }
    $('.btn-group').each(function () {
        var i = 0;
        var rdb = $(this).attr('id');
        $('#' + rdb + ' td').each(function () {
            var cellText = "";

            if ((rdb.match(/_/g) || []).length > 1) {
                var j = rdb.substr(rdb.lastIndexOf("_") + 1, rdb.length);
                if ($("#" + rdb + "_" + i + "_" + j).is(":checked")) {
                    $(this).attr("class", "btn btn-default active");
                }
                else {
                    $(this).attr("class", "btn btn-default");
                }
            }
            else {
                if ($("#" + rdb + "_" + i).is(":checked")) {
                    $(this).attr("class", "btn btn-default active");
                }
                else {
                    $(this).attr("class", "btn btn-default");
                }
            }
            if ((rdb.match(/_/g) || []).length > 1) {
                var j = rdb.substr(rdb.lastIndexOf("_") + 1, rdb.length);
                if ($("#" + rdb + "_" + i + "_" + j).is(":enabled")) {
                }
                else {
                    $('#' + rdb).removeAttr('data-toggle');
                    $('#' + rdb).attr("class", "custdisabled");
                    $("#" + rdb + "_" + i + "_" + j).attr("class", "custdisabled");
                }
            }
            else {
                if ($("#" + rdb + "_" + i).is(":enabled")) {
                }
                else {
                    $('#' + rdb).removeAttr('data-toggle');
                    $('#' + rdb).attr("class", "custdisabled");
                    $("#" + rdb + "_" + i).attr("class", "custdisabled");
                }
            }
            i++;
        });
    });
}
function GeneratePolicyNotes(Policy_Id, Type, PageMode) {
    if (Policy_Id != undefined) {
        var url2 = "";
        url2 = "PolicyNotes";
        url2 += "?policyid=" + Policy_Id;
        url2 += "&type=" + (Type == undefined ? "" : Type);
        url2 += "&pagemode=" + (PageMode == undefined ? "" : PageMode);
        PolicyPopUp(url2, '600', '700');
    }
}
function CheckBoxBind() {
    var validdata = true;
    $('form input[type=search]').each(function () {
        if ($(this).attr("class").indexOf("input-sm") > -1) {
            if ($(this).val() !== "") {
                //alert('Clear search parameter from table');
                validdata = false;
                return false;
            }
        }
    });
    return validdata;
}
function rounddigit(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}
function ModalCalRiskBenefit(riderid, cover, type) {
    var url = "../policy/cu-policygroupbenefit?riderid=" + riderid + "&cover=" + cover + "&type=" + type;
    PolicyDocPopUp(url);
}
function InformationRequiredForPageInt(Uep, uid, unm, ip, ev, at, url, rwurl, ur) {
    cpup = Uep;
    cpui = uid;
    cpun = unm;
    cpia = ip;
    cpev = ev;
    cpat = at;
    cpul = url;
    cprl = rwurl;
    cpur = ur;
}
function ue() {
    var random = RendomNumberGenerate();
    $("a").each(function () {
        if (this.href.indexOf("?") > -1 && this.href.indexOf("enc=") == -1 && this.href.indexOf("_DoPostBackWithOptions") == -1 && this.href.indexOf("TreeView") == -1 && this.href.indexOf("_doPostBack") == -1 && this.href.indexOf("__doPostBack") == -1 && this.href.indexOf("amazonaws.com") == -1) {
            if (this.href.indexOf("tk=") > -1) {
                $(this).attr("href", this.href.split('?')[0].replace('.aspx', '') + "?enc=" + ea(this.href.split('?')[1]));
            }
            else {
                if (this.href.indexOf("('") > -1) {
                    var data = this.href.substring(this.href.indexOf("('") + 2, this.href.lastIndexOf("')")).split('?')[1];
                    if (this.href.substring(this.href.indexOf("('") + 2, this.href.lastIndexOf("')")).split('?')[1].indexOf("tk=") > -1) {
                        var EncyData = "enc=" + ea(this.href.substring(this.href.indexOf("('") + 2, this.href.lastIndexOf("')")).split('?')[1]);
                    } else {
                        var EncyData = "enc=" + ea(this.href.substring(this.href.indexOf("('") + 2, this.href.lastIndexOf("')")).split('?')[1] + "&tk=" + random);
                    }
                    this.href = this.href.replace(data, EncyData).replace('.aspx', '');
                } else {
                    $(this).attr("href", this.href.split('?')[0].replace('.aspx', '') + "?enc=" + ea(this.href.split('?')[1] + "&tk=" + random));
                }
            }
        }
        if (this.href.indexOf("?") == -1 && this.href.indexOf("#") == -1 && this.href.indexOf("TreeView") == -1 && this.href !== "" && this.href.indexOf("_DoPostBackWithOptions") == -1 && this.href.indexOf("_doPostBack") == -1 && this.href.indexOf("__doPostBack") == -1 && this.href.indexOf("amazonaws.com") == -1) {
            $(this).attr("href", this.href.replace('.aspx', '') + "?enc=" + ea("&tk=" + random));
        }
        if (this.outerHTML.substring(this.outerHTML.indexOf("('") + 2, this.outerHTML.lastIndexOf("')")).indexOf("?") > -1 && this.outerHTML.substring(this.outerHTML.indexOf("('") + 2, this.outerHTML.lastIndexOf("')")).indexOf("enc=") == -1 && this.outerHTML.indexOf("onclick=") > -1 && this.href.indexOf("_DoPostBackWithOptions") == -1 && this.href.indexOf("_doPostBack") == -1 && this.href.indexOf("__doPostBack") == -1 && this.outerHTML.indexOf("return") == -1 && this.outerHTML.indexOf("amazonaws.com") == -1) {
            var data = this.outerHTML.substring(this.outerHTML.indexOf("('") + 2, this.outerHTML.lastIndexOf("')")).split('?')[1];
            if (data.indexOf("',") > -1) {
                var encryptdata = "enc=" + ea(data.split("',")[0] + "&tk=" + random);
                data = data.split("',")[0];
            } else {
                if (this.outerHTML.substring(this.outerHTML.indexOf("('") + 2, this.outerHTML.lastIndexOf("')")).split('?')[1].indexOf("tk=") > -1) {
                    var EncyData = "enc=" + ea(this.outerHTML.substring(this.outerHTML.indexOf("('") + 2, this.outerHTML.lastIndexOf("')")).split('?')[1]);
                } else {
                    var EncyData = "enc=" + ea(this.outerHTML.substring(this.outerHTML.indexOf("('") + 2, this.outerHTML.lastIndexOf("')")).split('?')[1] + "&tk=" + random);
                }
            }
            if (encryptdata != "" && encryptdata != undefined) {
                this.outerHTML = this.outerHTML.replace(data, encryptdata).replace('.aspx', '');
            } else {
                this.outerHTML = this.outerHTML.replace(data, EncyData).replace('.aspx', '');
            }
        }
    });
    $("iframe").each(function () {
        
        if ((this.src.indexOf("amazonaws.com") > -1 || this.src.indexOf("default.aspx") > -1 || this.src.indexOf("DocProccess") > -1 || this.src.indexOf("vw-document") > -1 || this.src.indexOf("EntityDocument") > -1 || this.src.indexOf("cu-uploadDMS") > -1 || this.src.indexOf("cu-AddthumbImg") > -1)) {
            
            if (this.src.indexOf("?") > -1 && this.src.indexOf("enc=") == -1) {
                if (this.src.indexOf("ReportViewerWebControl") == -1) {
                    if (this.src.indexOf("tk=") == -1) {
                        $(this).attr("src", this.src.split('?')[0].replace('.aspx', '') + "?enc=" + ea(this.src.split('?')[1] + "&tk=" + random));
                    } else {
                        $(this).attr("src", this.src.split('?')[0].replace('.aspx', '') + "?enc=" + ea(this.src.split('?')[1]));
                    }
                }
            }
        }
    });
}
function ea(q) {
    var k = CryptoJS.enc.Utf8.parse(sh(um));
    var i = CryptoJS.enc.Utf8.parse(sh(lm));
    var et = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(q), k,
        {
            iv: i,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
    return et;
}
function r(n) {
    var k = CryptoJS.enc.Utf8.parse(sh(gm));
    var i = CryptoJS.enc.Utf8.parse(sh(pc));
    var et = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(n), k,
        {
            iv: i,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
    return et;
}
function dr(n) {
    var k = CryptoJS.enc.Utf8.parse(sh(gm));
    var i = CryptoJS.enc.Utf8.parse(sh(pc));
    var et = CryptoJS.AES.decrypt(n, k,
        {
            iv: i,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
    return et.toString(CryptoJS.enc.Utf8);
}
function RendomNumberGenerate() {
    var numberdata = new RandExp(RegExData).gen();
    return r(numberdata);
}
function pu(url) {
    if (url.indexOf("amazonaws.com") == -1) {
        url = url.replace('.aspx', '');
        var reurl = url.split('?')[0];
        var qury = url.split('?')[1];
        var encrptrandomnum = RendomNumberGenerate();
        if (url.indexOf("tk=") == -1) {
            if (qury === undefined) {
                qury = "tk=" + encrptrandomnum;
            } else {
                qury += "&tk=" + encrptrandomnum;
            }
        } else {
            if (qury.indexOf("&tk") > -1) {
                var data = qury.split("&tk=")[1];
                if (data.indexOf("&") > -1) {
                    data = data.substring(0, data.indexOf('&'));
                    var removedata = data;
                } else {
                    var removedata = data;
                }
                //data = data.substring(44, data.length - 44);
                qury = qury.replace("&tk=" + removedata, "");
                qury += "&tk=" + encrptrandomnum;
            } else if (url.indexOf("?tk=") > -1) {
                qury = "?tk=" + encrptrandomnum;
            }
            else {
                qury += "&tk=" + encrptrandomnum;
            }
        }
        return reurl + "?enc=" + ea(qury);
    } else {
        return url;
    }
}

function sh(str) {
    var ar = [];
    for (var i = 0; i < str.length; i++) {
        ar[i] = (str.charCodeAt(i).toString(16));
    }
    var d = ar.join();
    return d.replace(/,/g, "");
}
// function menucheck() {
//     var valid = true;
//     $("#accordion").find('a').each(function () {
//         var data = this.innerHTML;
//         var plist = sessionStorage.getItem("menulistdata");
//         if (plist.indexOf(data) === -1) {
//             var url = $("#unauth").attr('href');
//             window.location = url;
//             valid = false;
//         }
//     });
//     return valid;
// }
function menucheck(a) {
    var valid = true;
    if (sessionStorage.getItem("menulist") !== "" && sessionStorage.getItem("menulist") !== undefined && sessionStorage.getItem("menulist") !== null) {
        var validmenu = sessionStorage.getItem("menulist");
        validmenu = JSON.parse(dr(validmenu));
    }
    var checkv = a.innerHTML;
    var pagelist = validmenu.filter(function (e) {
        return e.Page_Title === checkv;
    }).length;
    if (pagelist <= 0) {
        var url = $("#unauth").attr('href');
        window.location = url;
        valid = false;
    }
    return valid;
}
function Bindmenulist() {
    $.ajax({
        type: "GET",
        url: cpup + "api/admin/UserMenuPages?User_Id=" + cpui,
        dataType: "json",
        contentType: "application/json",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + cpat);
        },
        success: function (res) {
            var valuedata = Jsondata(res, "Menupages");
            sessionStorage.setItem("menulist", r(JSON.stringify(valuedata)));
        }
    });
}


