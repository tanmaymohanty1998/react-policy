///////////////ENTITY/////////////////////////
function CheckSearchClient(source, args) {
    var txtclientcode = document.getElementById("ContentPlaceHolder1_txtclientcode").value;
    var txtclientname = document.getElementById("ContentPlaceHolder1_txtclientname").value;
    var txtclientemail = document.getElementById("ContentPlaceHolder1_txtclientemail").value;
    var txtclientmobilenumber = document.getElementById("ContentPlaceHolder1_txtclientmobilenumber").value;
    var txtclientuid = document.getElementById("ContentPlaceHolder1_txtclientuid").value;
    var Search = txtclientcode + txtclientname + txtclientemail + txtclientmobilenumber + txtclientuid;
    if (Search == "") {
        return args.IsValid = false;
    }
    else {
        return args.IsValid = true;
    }
}
function CheckSearchCompany(source, args) {
    var txtclientcode = document.getElementById("ContentPlaceHolder1_txtclientcode").value;
    var txtclientname = document.getElementById("ContentPlaceHolder1_txtclientname").value;
    var txtclientemail = document.getElementById("ContentPlaceHolder1_txtclientemail").value;
    var txtclientmobilenumber = document.getElementById("ContentPlaceHolder1_txtclientmobilenumber").value;
    var txtcompanyRegno = document.getElementById("ContentPlaceHolder1_txtcompanyRegno").value;
    var Search = txtclientcode + txtclientname + txtclientemail + txtclientmobilenumber + txtcompanyRegno;
    if (Search == "") {
        return args.IsValid = false;
    }
    else {
        return args.IsValid = true;
    }
}

function CheckSearchPayment(source, args) {
    var txtvoucher = document.getElementById("ContentPlaceHolder1_txtvoucher").value;
    var txttrans_num = document.getElementById("ContentPlaceHolder1_txttrans_num").value;
    var ddlpayment_type = document.getElementById("ContentPlaceHolder1_ddlpayment_type").value;
    var txtpayee_code = document.getElementById("ContentPlaceHolder1_txtpayee_code").value;
    var txtpayee_name = document.getElementById("ContentPlaceHolder1_txtpayee_name").value;
    var txtrefund = document.getElementById("ContentPlaceHolder1_txtrefund").value;
    var txtapproved = document.getElementById("ContentPlaceHolder1_txtapproved").value;
    var txtlast_up_dt = document.getElementById("ContentPlaceHolder1_txtlast_up_dt").value;
    var Search = txtvoucher + txttrans_num + txtpayee_code + txtpayee_name + txtrefund + txtapproved + txtlast_up_dt;
    if (Search == "" && ddlpayment_type == 0) {
        return args.IsValid = false;
    }
    else {
        return args.IsValid = true;
    }
}

// function CheckSearchUsers(source, args) {
//     var txtbranch_code = document.getElementById("ContentPlaceHolder1_txtbranch_code").value;
//     var txtuser_Nm = document.getElementById("ContentPlaceHolder1_txtuser_Nm").value;
//     var txtemp_code = document.getElementById("ContentPlaceHolder1_txtemp_code").value;
//     var txtuser_full_Nm = document.getElementById("ContentPlaceHolder1_txtuser_full_Nm").value;
//     var Search = txtbranch_code + txtuser_Nm + txtemp_code + txtuser_full_Nm;
//     if (Search == "") {
//         return args.IsValid = false;
//     }
//     else {
//         return args.IsValid = true;
//     }
// }

function CheckSearchUserGroup(source, args) {
    var txtusername = document.getElementById("ContentPlaceHolder1_txtusername").value;
    var ddlusergrp_type = document.getElementById("ContentPlaceHolder1_ddlusergrp_type").value;

    var Search = txtusername;
    if (Search == "" && ddlusergrp_type == 0) {
        return args.IsValid = false;
    }
    else {
        return args.IsValid = true;
    }
}

function CheckSearchUsers(source, args) {
    var txtbranch_code = document.getElementById("ContentPlaceHolder1_txtbranch_code").value;
    var txtemp_code = document.getElementById("ContentPlaceHolder1_txtemp_code").value;
    var txtFirst_Nm = document.getElementById("ContentPlaceHolder1_txtFirst_Nm").value;
    var txtLast_Nm = document.getElementById("ContentPlaceHolder1_txtLast_Nm").value;
    var txtusernm = document.getElementById("ContentPlaceHolder1_txtusernm").value;
    var Search = txtbranch_code + txtemp_code + txtFirst_Nm + txtLast_Nm + txtusernm;
    if (Search == "") {
        return args.IsValid = false;
    }
    else {
        return args.IsValid = true;
    }
}
function CheckSearchCountry1(source, args) {
    var txtcountry = document.getElementById("ContentPlaceHolder1_txtcountry").value;
    var txtcurrencyCd = document.getElementById("ContentPlaceHolder1_txtcurrencyCd").value;
    var Search = txtcountry + txtcurrencyCd;
    if (Search == "") {
        return args.IsValid = false;
    }
    else {
        return args.IsValid = true;
    }
}

function CheckSearchgrouprights(source, args) {
    var txtbranch_code = document.getElementById("ContentPlaceHolder1_txtbranch_code").value;
    var txtuser_Nm = document.getElementById("ContentPlaceHolder1_txtuser_Nm").value;
    var txtemp_code = document.getElementById("ContentPlaceHolder1_txtemp_code").value;
    var txtuser_full_Nm = document.getElementById("ContentPlaceHolder1_txtuser_full_Nm").value;
    var Search = txtbranch_code + txtuser_Nm + txtemp_code + txtuser_full_Nm;
    if (Search == "") {
        return args.IsValid = false;
    }
    else {
        return args.IsValid = true;
    }
}





function CheckSearchInterMediary(source, args) {
    var txtBranchCode = document.getElementById("ContentPlaceHolder1_txtBranchCode").value;
    var txtBranchName = document.getElementById("ContentPlaceHolder1_txtBranchName").value;
    var txtSalesmanagerCode = document.getElementById("ContentPlaceHolder1_txtSalesmanagerCode").value;
    var txtSalesManagerName = document.getElementById("ContentPlaceHolder1_txtSalesManagerName").value;
    var txtintermediarycode = document.getElementById("ContentPlaceHolder1_txtintermediarycode").value;
    var txtintermediaryname = document.getElementById("ContentPlaceHolder1_txtintermediaryname").value;
    var Search = txtBranchCode + txtBranchName + txtSalesmanagerCode + txtSalesManagerName + txtintermediarycode + txtintermediaryname;
    if (Search == "") {
        return args.IsValid = false;
    }
    else {
        return args.IsValid = true;
    }
}
function CheckSearchHouseBank(source, args) {
    var txtBranchCd = document.getElementById("ContentPlaceHolder1_txtBranchCd").value;
    var txtBranchNm = document.getElementById("ContentPlaceHolder1_txtBranchNm").value;
    var txtBankCd = document.getElementById("ContentPlaceHolder1_txtBankCd").value;
    var txtBankNm = document.getElementById("ContentPlaceHolder1_txtBankName").value;
    var ddlTransactionType = document.getElementById("ContentPlaceHolder1_ddlTransactionType").value;
    var ddlInstrumentType = document.getElementById("ContentPlaceHolder1_ddlInstrumentType").value;
    var Search = txtBranchCd + txtBranchNm + ddlTransactionType + ddlInstrumentType + txtBankCd + txtBankNm;
    if (Search == "") {
        return args.IsValid = false;
    }
    else {
        return args.IsValid = true;
    }
}
//function CheckSearchFinancialYr(source, args) {
//    var txtfinancialYr = document.getElementById("ContentPlaceHolder1_txtfinancialYr").value;
//    var txtValidityStrtDt = document.getElementById("ContentPlaceHolder1_txtValidityStrtDt").value;
//    var txtValidityEndDt = document.getElementById("ContentPlaceHolder1_txtValidityEndDt").value;
//    var Search = txtfinancialYr + txtValidityStrtDt + txtValidityEndDt;
//    if (Search == "") {
//        return args.IsValid = false;
//    }
//    else {
//        return args.IsValid = true;
//    }
//}
//////////////////////////////////////////////////////////////

///////////////POLICY/////////////////////////
function CheckSearchPolicyInward(source, args) {
    
    var txtClientCode = document.getElementById("ContentPlaceHolder1_txtClientCode").value;
    var txtIntermediarCode = document.getElementById("ContentPlaceHolder1_txtIntermediarCode").value;
    var txtPolicyDateStart = document.getElementById("ContentPlaceHolder1_txtPolicyDateStart").value;
    var txtproposalno = document.getElementById("ContentPlaceHolder1_txtproposalno").value;
    var txtDCNNumber = document.getElementById("ContentPlaceHolder1_txtDCNNumber").value;
    var txtPolicyNo = document.getElementById("ContentPlaceHolder1_txtPolicyNo").value;
    var txtQuotationNo = document.getElementById("ContentPlaceHolder1_txtQuotationNo").value;
    var ddlBusinessType = document.getElementById("ContentPlaceHolder1_ddlBusinessType").value;
    var ddlPolicyStatus = document.getElementById("ContentPlaceHolder1_ddlPolicyStatus").value;
    var ddlApplicationType = document.getElementById("ContentPlaceHolder1_ddlApplicationType").value;
    var ddlContractType = document.getElementById("ContentPlaceHolder1_ddlContractType").value;
    var txtGroupNumber = document.getElementById("ContentPlaceHolder1_txtGroupNumber").value;
    var txtPolicyServicing = document.getElementById("ContentPlaceHolder1_txtPolicyServicingCode");
    if (txtPolicyServicing != null) {
        var txtPolicyServicingCode = document.getElementById("ContentPlaceHolder1_txtPolicyServicingCode").value;
    }
    else {
        var txtPolicyServicingCode = "";
    }
    var txtPolicyServicingCode = document.getElementById("ContentPlaceHolder1_txtPolicyServicingCode").value;
    var Search = txtClientCode + txtIntermediarCode + txtPolicyDateStart + txtproposalno + txtDCNNumber + txtPolicyNo + txtQuotationNo + txtGroupNumber + txtPolicyServicingCode;
    if (Search == "" && ddlBusinessType == 0 && ddlPolicyStatus == 0 && ddlApplicationType == 0 && ddlContractType == 0) {
        return args.IsValid = false;
    }
    else {
        return args.IsValid = true;
    }
}
function CheckSearchQuoteInward(source, args) {
    var txtClientCode = document.getElementById("ContentPlaceHolder1_txtClientCode").value;
    var txtIntermediarCode = document.getElementById("ContentPlaceHolder1_txtIntermediarCode").value;
    var txtPolicyDateStart = document.getElementById("ContentPlaceHolder1_txtPolicyDateStart").value;
    var txtDCNNumber = document.getElementById("ContentPlaceHolder1_txtDCNNumber").value;
    var txtQuotationNo = document.getElementById("ContentPlaceHolder1_txtQuotationNo").value;
    var ddlProduct = document.getElementById("ContentPlaceHolder1_ddlProduct").value;
    var ddlScheme = document.getElementById("ContentPlaceHolder1_ddlScheme").value;
    var ddlBusinessType = document.getElementById("ContentPlaceHolder1_ddlBusinessType").value;
    var ddlPolicyStatus = document.getElementById("ContentPlaceHolder1_ddlPolicyStatus").value;
    var Search = txtClientCode + txtIntermediarCode + txtPolicyDateStart + txtDCNNumber + txtQuotationNo;
    if (Search == "" && ddlProduct == 0 && ddlScheme == 0 && ddlBusinessType == 0 && ddlPolicyStatus == 0) {
        return args.IsValid = false;
    }
    else {
        return args.IsValid = true;
    }
}
///////////////////////////////////////////////////////////////////////


////////////////////////PRODUCT/////////////////////////////
function CheckCoverageSearch(source, args) {
    var ddlLobCd = document.getElementById("ContentPlaceHolder1_ddlLobCd").value;
    var ddlProductCd = document.getElementById("ContentPlaceHolder1_ddlProductCd").value;
    var txtCoverCd = document.getElementById("ContentPlaceHolder1_txtCoverCd").value;
    var txtCoverNm = document.getElementById("ContentPlaceHolder1_txtCoverNm").value;
    var Search = txtCoverCd + txtCoverNm;
    if (Search == "" && ddlLobCd == 0 && ddlProductCd == 0) {
        args.IsValid = false;
    }
    else {
        args.IsValid = true;
    }
}

function CheckSearchCoverLoadingDiscount(source, args) {
    var txtCoverCd = document.getElementById("ContentPlaceHolder1_txtCoverCd").value;
    var txtCoverNm = document.getElementById("ContentPlaceHolder1_txtCoverNm").value;

    var Search = txtCoverCd + txtCoverNm;
    if (Search == "") {
        args.IsValid = false;
    }
    else {
        args.IsValid = true;
    }
}


function CheckSearchMemberType(source, args) {
    var ddlFamilyTypeCd = document.getElementById("ContentPlaceHolder1_ddlFamilyTypeCd").value;
    var txtFamilyTypeDesc = document.getElementById("ContentPlaceHolder1_txtFamilyTypeDesc").value;
    var Search = txtFamilyTypeDesc;
    if (Search == "" && ddlFamilyTypeCd == 0) {
        args.IsValid = false;
    }
    else {
        args.IsValid = true;
    }
}


function CheckProductSearch(source, args) {
    var ddlLob = document.getElementById("ContentPlaceHolder1_ddlLob").value;
    var txtProductCd = document.getElementById("ContentPlaceHolder1_txtProductCd").value;
    var txtProductNm = document.getElementById("ContentPlaceHolder1_txtProductNm").value;
    var Search = txtProductCd + txtProductNm;
    if (Search == "" && ddlLob == 0) {
        args.IsValid = false;
    }
    else {
        args.IsValid = true;
    }
}


function CheckSearchProductCoverage(source, args) {
    var ddlProductCd = document.getElementById("ContentPlaceHolder1_ddlProductCd").value;
    var ddlSchemeCd = document.getElementById("ContentPlaceHolder1_ddlSchemeCd").value;
    var Search = ddlProductCd + ddlSchemeCd;
    if (Search == "" && ddlProductCd == 0 && ddlSchemeCd == 0) {
        args.IsValid = false;
    }
    else {
        args.IsValid = true;
    }
}


function CheckSearchFamilyType(source, args) {
    var ddlProductCd = document.getElementById("ContentPlaceHolder1_ddlProductCd").value;
    var ddlLobCd = document.getElementById("ContentPlaceHolder1_ddlLobCd").value;
    var txtFamilyTypeCd = document.getElementById("ContentPlaceHolder1_txtFamilyTypeCd").value;
    var txtFamilyTypeNm = document.getElementById("ContentPlaceHolder1_txtFamilyTypeNm").value;

    var Search = txtFamilyTypeCd + txtFamilyTypeNm;
    if (Search == "" && ddlProductCd == 0 && ddlLobCd == 0) {
        args.IsValid = false;
    }
    else {
        args.IsValid = true;
    }
}


function CheckSearchProductFamilyType(source, args) {
    var ddlProductCd = document.getElementById("ContentPlaceHolder1_ddlProductCd").value;
    var ddlLobCd = document.getElementById("ContentPlaceHolder1_ddlLobCd").value;
    var Search = ddlProductCd + ddlLobCd;
    if (Search == "" && ddlProductCd == 0 && ddlLobCd == 0) {
        args.IsValid = false;
    }
    else {
        args.IsValid = true;
    }
}


function CheckSearchMedicalTest(source, args) {
    var txtMedicalTstCd = document.getElementById("ContentPlaceHolder1_txtMedicalTstCd").value;
    var txtMedicalTstNm = document.getElementById("ContentPlaceHolder1_txtMedicalTstNm").value;
    var Search = txtMedicalTstCd + txtMedicalTstNm;
    if (Search == "") {
        args.IsValid = false;
    }
    else {
        args.IsValid = true;
    }
}


function CheckSearchProductOccupation(source, args) {
    var ddlProductCd = document.getElementById("ContentPlaceHolder1_ddlProductCd").value;
    var txtRiskClassCd = document.getElementById("ContentPlaceHolder1_txtRiskClassCd").value;
    if (txtRiskClassCd == "" && ddlProductCd == 0) {
        args.IsValid = false;
    }
    else {
        args.IsValid = true;
    }
}

function CheckSearchProductQuestion(source, args) {
    var ddlLobCd = document.getElementById("ContentPlaceHolder1_ddlLobCd").value;
    var ddlProductCd = document.getElementById("ContentPlaceHolder1_ddlProductCd").value;

    var Search = ddlLobCd + ddlProductCd;
    if (Search == "" && ddlLobCd == 0 && ddlProductCd == 0) {
        args.IsValid = false;
    }
    else {
        args.IsValid = true;
    }
}


function CheckSearchProductRelation(source, args) {
    var ddlProductCd = document.getElementById("ContentPlaceHolder1_ddlProductCd").value;
    var ddlSchemeCd = document.getElementById("ContentPlaceHolder1_ddlSchemeCd").value;
    if (ddlProductCd == 0 && ddlSchemeCd == 0) {
        args.IsValid = false;
    }
    else {
        args.IsValid = true;
    }
}


function CheckSearchProductRICover(source, args) {
    var ddlProductCd = document.getElementById("ContentPlaceHolder1_ddlProductCd").value;
    var ddlSchemeCd = document.getElementById("ContentPlaceHolder1_ddlSchemeCd").value;
    var txtCessionCd = document.getElementById("ContentPlaceHolder1_txtCessionCd").value;
    var txtCessionNm = document.getElementById("ContentPlaceHolder1_txtCessionNm").value;


    var Search = txtCessionCd + txtCessionNm;
    if (Search == "" && ddlProductCd == 0 && ddlSchemeCd == 0) {
        args.IsValid = false;
    }
    else {
        args.IsValid = true;
    }
}


function CheckSearchRelation(source, args) {
    var txtProductCd = document.getElementById("ContentPlaceHolder1_txtProductCd").value;
    var txtSchemeCd = document.getElementById("ContentPlaceHolder1_txtSchemeCd").value;
    var txtRelationCd = document.getElementById("ContentPlaceHolder1_txtRelationCd").value;
    var txtRelationNm = document.getElementById("ContentPlaceHolder1_txtRelationNm").value;
    var Search = txtProductCd + txtSchemeCd + txtRelationCd + txtRelationNm;
    if (Search == "") {
        args.IsValid = false;
    }
    else {
        args.IsValid = true;
    }
}


function CheckSearchScheme(source, args) {
    var ddlProduct = document.getElementById("ContentPlaceHolder1_ddlProduct").value;
    var ddlscheme = document.getElementById("ContentPlaceHolder1_ddlplan").value;
    var Search = ddlProduct + ddlscheme;
    if (Search == "" && ddlProduct == 0 && ddlscheme == 0) {
        args.IsValid = false;
    }
    else {
        args.IsValid = true;
    }
}

////////////////////////////////////////////////////////////////////////



////////////////////////GENERAL/////////////////////////////////////////

function CheckSearchDepartment(source, args) {
    var txtDepCd = document.getElementById("ContentPlaceHolder1_txtDepCd").value;
    var txtDepNm = document.getElementById("ContentPlaceHolder1_txtDepNm").value;
    var Search = txtDepCd + txtDepNm;
    if (Search == "") {
        args.IsValid = false;
    }
    else {
        args.IsValid = true;
    }
}



function CheckSearchDiscrepency(source, args) {
    var txtDiscrepancyCd = document.getElementById("ContentPlaceHolder1_txtDiscrepancyCd").value;
    var txtDiscrepancyNm = document.getElementById("ContentPlaceHolder1_txtDiscrepancyNm").value;
    var ddlType = document.getElementById("ContentPlaceHolder1_ddlType").value;
    var ddlCategories = document.getElementById("ContentPlaceHolder1_ddlCategories").value;
    var Search = txtDiscrepancyCd + txtDiscrepancyNm + ddlType + ddlCategories;
    if (Search == "") {
        args.IsValid = false;
    }
    else {
        args.IsValid = true;
    }
}


function CheckSearchDocumentList(source, args) {
    var txtDocCd = document.getElementById("ContentPlaceHolder1_txtDocCd").value;
    var txtDocNm = document.getElementById("ContentPlaceHolder1_txtDocNm").value;
    var Search = txtDocCd + txtDocNm;
    if (Search == "") {
        args.IsValid = false;
    }
    else {
        args.IsValid = true;
    }
}


function CheckSearchExclusion(source, args) {
    var txtExclusionCd = document.getElementById("ContentPlaceHolder1_txtExclusionCd").value;
    var txtExclusionNm = document.getElementById("ContentPlaceHolder1_txtExclusionNm").value;
    var Search = txtExclusionCd + txtExclusionNm;
    if (Search == "") {
        args.IsValid = false;
    }
    else {
        args.IsValid = true;
    }
}


function CheckSearchIndustry(source, args) {
    var txtIndustryCd = document.getElementById("ContentPlaceHolder1_txtIndustryCd").value;
    var txtIndustryNm = document.getElementById("ContentPlaceHolder1_txtIndustryNm").value;
    var Search = txtIndustryCd + txtIndustryNm;
    if (Search == "") {
        args.IsValid = false;
    }
    else {
        args.IsValid = true;
    }
}


function CheckSearchProductMedicalTest(source, args) {

    var ddlLobCd = document.getElementById("ContentPlaceHolder1_ddlLobCd").value;
    var ddlProductCd = document.getElementById("ContentPlaceHolder1_ddlProductCd").value;
    var txtMedicalTstCd = document.getElementById("ContentPlaceHolder1_txtMedicalTstCd").value;
    var txtMedicalTstNm = document.getElementById("ContentPlaceHolder1_txtMedicalTstNm").value;
    var Search = txtMedicalTstCd + txtMedicalTstNm;
    if (Search == "" && ddlLobCd == 0 && ddlProductCd == 0) {
        args.IsValid = false;
    }
    else {
        args.IsValid = true;
    }
}



function CheckSearchOcccupation(source, args) {
    var txtOccCd = document.getElementById("ContentPlaceHolder1_txtOccCd").value;
    var txtOccNm = document.getElementById("ContentPlaceHolder1_txtOccNm").value;
    var Search = txtOccCd + txtOccNm;
    if (Search == "") {
        args.IsValid = false;
    }
    else {
        args.IsValid = true;
    }
}


function CheckSearchPreexisting(source, args) {
    var txtPedCd = document.getElementById("ContentPlaceHolder1_txtPedCd").value;
    var txtPedNm = document.getElementById("ContentPlaceHolder1_txtPedNm").value;
    var Search = txtPedCd + txtPedNm;
    if (Search == "") {
        args.IsValid = false;
    }
    else {
        args.IsValid = true;
    }
}


function CheckSearchRejectionList(source, args) {
    var txtRejectionCd = document.getElementById("ContentPlaceHolder1_txtRejectionCd").value;
    var txtRejectionNm = document.getElementById("contentPlaceHolder1_txrRejectionNm").value;
    var Search = txtRejectionCd + txrRejectionNm;
    if (Search == "") {
        args.IsValid = false;
    }
    else {
        args.IsValid = true;
    }

}


function CheckSearchRiskClass(source, args) {
    var txtRiskClassCd = document.getElementById("ContentPlaceHolder1_txtOccCd").value;
    var txtRiskClassNm = document.getElementById("ContentPlaceHolder1_txtOccNm").value;
    var Search = txtRiskClassCd + txtRiskClassNm;
    if (Search == "") {
        args.IsValid = false;
    }
    else {
        args.IsValid = true;
    }
}

function CheckSearchRICession(source, args) {
    var txtCessionCd = document.getElementById("ContentPlaceHolder1_txtCessionCd").value;
    var txtCessionNm = document.getElementById("ContentPlaceHolder1_txtCessionNm").value;
    var Search = txtCessionCd + txtCessionNm;
    if (Search == "") {
        args.IsValid = false;
    }
    else {
        args.IsValid = true;
    }
}

function CheckSearchBank(source, args) {
    var txtBankCd = document.getElementById("ContentPlaceHolder1_txtBankCd").value;
    var txtBankNm = document.getElementById("ContentPlaceHolder1_txtBankNm").value;
    var Search = txtBankCd + txtBankNm;
    if (Search == "") {
        args.IsValid = false;
    }
    else {
        args.IsValid = true;
    }
}
function CheckSearchAge(source, args) {
    var txtagebandcd = document.getElementById("ContentPlaceHolder1_txtagebandcd").value;
    var txtagebanddesc = document.getElementById("ContentPlaceHolder1_txtagebanddesc").value;
    var Search = txtagebandcd + txtagebanddesc;
    if (Search == "") {
        args.IsValid = false;
    }
    else {
        args.IsValid = true;
    }
}

function CheckSearchBankBranch(source, args) {
    var txtBankBCd = document.getElementById("ContentPlaceHolder1_txtBankBCd").value;
    var txtBankBNm = document.getElementById("ContentPlaceHolder1_txtBankBNm").value;
    var Search = txtBankBCd + txtBankBNm;
    if (Search == "") {
        args.IsValid = false;
    }
    else {
        args.IsValid = true;
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////Accounts/////////////////////////////////////////////////

function CheckSearchInvoice(source, args) {
    var txtinvoiceno = document.getElementById("ContentPlaceHolder1_txtinvoiceno").value;
    var txttransaction = document.getElementById("ContentPlaceHolder1_txttransaction").value;
    var txtIntermediarCode = document.getElementById("ContentPlaceHolder1_txtIntermediarCode").value;
    var txtIntermediarName = document.getElementById("ContentPlaceHolder1_txtIntermediarName").value;
    var ddlstatus = document.getElementById("ContentPlaceHolder1_ddlstatus").value;
    var txtinvoicedate = document.getElementById("ContentPlaceHolder1_txtinvoicedate").value;
    var Search = txtinvoiceno + txttransaction + txtIntermediarCode + txtIntermediarName + txtinvoicedate;
    if (Search == "" && ddlstatus == 0) {
        return args.IsValid = false;
    }
    else {
        return args.IsValid = true;
    }
}
function SearchClientorIntermediary(TextBox1ID, TextBox2ID) {
    var radiopayee = $('#ContentPlaceHolder1_rblPayerType input:checked').val();
    if (radiopayee === "CUSTOMER") {
        SearchClient(TextBox1ID, TextBox2ID);
    }
    else if (radiopayee === "PROVIDER") {
        SearchProvider3(TextBox2ID, TextBox1ID, '', '');
    }
    else if (radiopayee === "INTERMEDIARY" || radiopayee === "Channel Partner") {
        SearchIntermediaryNameCode2(TextBox1ID, TextBox2ID);
    }
    else if (radiopayee === "VENDOR") {
        SearchVendor(TextBox1ID, TextBox2ID, '');
    }
}
function SearchGroup(TextBox1ID, TextBox2ID) {

    SearchClient(TextBox1ID, TextBox2ID);
}

function CheckSearchCollection(source, args) {
    if (jQuery.trim($("#ContentPlaceHolder1_txtPayerName").val()).length == 0 && jQuery.trim($("#ContentPlaceHolder1_txtPayerName").val()).length == 0 &&
        jQuery.trim($("#ContentPlaceHolder1_txtInstrumentNo").val()).length == 0 && jQuery.trim($("#ContentPlaceHolder1_txtInstrumentNo").val()).length == 0 &&
        jQuery.trim($("#ContentPlaceHolder1_txtReceiptDate").val()).length == 0 && jQuery.trim($("#ContentPlaceHolder1_txtReceiptDate").val()).length == 0 &&
        jQuery.trim($("#ContentPlaceHolder1_txtPayerCode").val()).length == 0 && jQuery.trim($("#ContentPlaceHolder1_txtPayerCode").val()).length == 0 &&
        jQuery.trim($("#ContentPlaceHolder1_txtReceiptNo").val()).length == 0 && jQuery.trim($("#ContentPlaceHolder1_txtReceiptNo").val()).length == 0 &&
        jQuery.trim($("#ContentPlaceHolder1_txtEbfPaymentno").val()).length == 0 && jQuery.trim($("#ContentPlaceHolder1_txtEbfPaymentno").val()).length == 0 &&
        jQuery.trim($("#ContentPlaceHolder1_ddlInstrumentType  option:selected").val()) == '0') {
        return args.IsValid = false;
    }
    else {
        return args.IsValid = true;
    }
}
function CheckClientWallet(source, args) {
    var value1 = $("#ContentPlaceHolder1_txttransactionno").val();
    var value2 = $("#ContentPlaceHolder1_txtref_no").val();
    var value3 = $("#ContentPlaceHolder1_txtclientCode").val();
    var search = value1 + value2 + value3;
    if (search.length == 0) {
        return args.IsValid = false;
    }
}
function CheckSearchCollectionDeposit(source, args) {
    if (jQuery.trim($("#ContentPlaceHolder1_txtReceiptDateFrom").val()).length == 0 && jQuery.trim($("#ContentPlaceHolder1_txtReceiptDateFrom").val()).length == 0 &&
        jQuery.trim($("#ContentPlaceHolder1_txtPayerCode").val()).length == 0 && jQuery.trim($("#ContentPlaceHolder1_txtPayerName").val()).length == 0 &&
        jQuery.trim($("#ContentPlaceHolder1_txtInstrumentNo").val()).length == 0 && jQuery.trim($("#ContentPlaceHolder1_txtInstrumentNo").val()).length == 0 &&
        jQuery.trim($("#ContentPlaceHolder1_txtReceiptDateTo").val()).length == 0 && jQuery.trim($("#ContentPlaceHolder1_txtReceiptDateTo").val()).length == 0 &&
        jQuery.trim($("#ContentPlaceHolder1_txtBranchCd").val()).length == 0 && jQuery.trim($("#ContentPlaceHolder1_txtBranchCd").val()).length == 0 &&
        jQuery.trim($("#ContentPlaceHolder1_ddlCollectionMode").val()).length == 0 && jQuery.trim($("#ContentPlaceHolder1_ddlCollectionMode").val()).length == 0 &&
        jQuery.trim($("#ContentPlaceHolder1_ddlBankandaccount").val()).length == 0 && jQuery.trim($("#ContentPlaceHolder1_ddlBankandaccount").val()).length == 0
    ) {
        return args.IsValid = false;
    }
    else {
        return args.IsValid = true;
    }
}
function CheckSearchCollectionrecon(source, args) {
    if (jQuery.trim($("#ContentPlaceHolder1_txtReceiptDateFrom").val()).length == 0 && jQuery.trim($("#ContentPlaceHolder1_txtReceiptDateFrom").val()).length == 0 &&
        jQuery.trim($("#ContentPlaceHolder1_txtDepositNo").val()).length == 0 && jQuery.trim($("#ContentPlaceHolder1_txtDepositNo").val()).length == 0 &&
        jQuery.trim($("#ContentPlaceHolder1_txtReceiptDateTo").val()).length == 0 && jQuery.trim($("#ContentPlaceHolder1_txtReceiptDateTo").val()).length == 0
    ) {
        return args.IsValid = false;
    }
    else {
        return args.IsValid = true;
    }
}

function CheckSearchBankBranchNameCode(source, args) {
    if (jQuery.trim($("#ContentPlaceHolder1_txtbBankBranchCd").val()).length == 0 && jQuery.trim($("#ContentPlaceHolder1_txtbBankBranchCd").val()).length == 0 &&
        jQuery.trim($("#ContentPlaceHolder1_txtBankBranchNm").val()).length == 0 && jQuery.trim($("#ContentPlaceHolder1_txtBankBranchNm").val()).length == 0 &&
        jQuery.trim($("#ContentPlaceHolder1_ddlBankNm option:selected").val()) == 0
    ) {
        return args.IsValid = false;
    }
    else {
        return args.IsValid = true;
    }
}

function policycoverage(Policy_Id, policyrisk_Id) {
    var url = '../Policy/cu-riskcoverage';
    url += '?riskid=' + policyrisk_Id;
    url += '&policyid=' + Policy_Id;
    url += '&pagemode=VW';
    PolicyProfile(url);
}

function CheckClaimEfileDocument(source, args) {
    var txtDocNumber = document.getElementById("ContentPlaceHolder1_txtdocumentno").value;
    var txtClaimno = document.getElementById("ContentPlaceHolder1_txtClaimNo").value;
    var txtEntity = document.getElementById("ContentPlaceHolder1_txtInsuredCode").value;
    var Search = txtDocNumber + txtClaimno + txtIntermediarCode + txtEntity
    if (Search == "") {
        return args.IsValid = false;
    }
    else {
        return args.IsValid = true;
    }
}

function chkCollectionutilization(source, args) {
    var txtreceipt = document.getElementById("ContentPlaceHolder1_txtrecepitno").value;
    var txtrefno = document.getElementById("ContentPlaceHolder1_txtref_no").value;
    var txtrefno1 = document.getElementById("ContentPlaceHolder1_txtContractNo").value;
    var txtEntity = document.getElementById("ContentPlaceHolder1_txtIntermediarCode").value;
    var Search = txtreceipt + txtrefno + txtrefno1 + txtEntity
    if (Search == "") {
        return args.IsValid = false;
    }
    else {
        return args.IsValid = true;
    }
}

function chkJournalVoucher(source, args) {
    if (jQuery.trim($("#ContentPlaceHolder1_txtJournalVoucher").val()).length == 0 && jQuery.trim($("#ContentPlaceHolder1_txtJournalVoucher").val()).length == 0 &&
        jQuery.trim($("#ContentPlaceHolder1_txtEntityCode").val()).length == 0 && jQuery.trim($("#ContentPlaceHoldContentPlaceHolder1_txtEntityCodeer1_txtInstrumentNo").val()).length == 0 &&
        jQuery.trim($("#ContentPlaceHolder1_txtGlCode").val()).length == 0 && jQuery.trim($("#ContentPlaceHolder1_txtGlCode").val()).length == 0 &&
        jQuery.trim($("#ContentPlaceHolder1_ddlJVType  option:selected").val()) == '0') {
        return args.IsValid = false;
    }
    else {
        return args.IsValid = true;
    }
}

function CheckPaymentFollowUp(source, args) {
    if (jQuery.trim($("#ContentPlaceHolder1_txtinvoice").val()).length == 0 && jQuery.trim($("#ContentPlaceHolder1_txtEndDt").val()).length == 0 &&
        jQuery.trim($("#ContentPlaceHolder1_txtStartDt").val()).length == 0 && jQuery.trim($("#ContentPlaceHolder1_txtImdCd").val()).length == 0 &&
        jQuery.trim($("#ContentPlaceHolder1_ddlLetterTemp option:selected").val()) == 0) {
        return args.IsValid = false;
    }
    else {
        return args.IsValid = true;
    }
}