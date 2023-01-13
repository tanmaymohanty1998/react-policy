// Line Of Business
const Lob_Cd_Health = "11";
const Lob_Cd_PersonalAccident = "12";
const Lob_Cd_Funeral = "13";
const Lob_Cd_WorkerComp = "14";
const Lob_Cd_MortgageProtection = "11";
const Lob_Cd_Motor = "21";
const Lob_Cd_General = "31";
const Lob_Cd_Property = "41";
//Status Group
const Status_Closed = "Close";
const Policy_Status_Inforced = "IF";
const ClaimStatus_Approved = "AP2";
const ClaimStatus_Requested_Payment = "PY0";
const ClaimStatus_Bill = "CB0";
const ClaimStatus_Autoadjuticate = "ADJ";
const ClaimStatus_RecomApproval = "RFA";
const ClaimStatus_Intimation = "CR0";
const ClaimStatus_Investigation = "IN";

const Policy_Status_Booked = "Booked";
const Policy_Status_Disable_Edit = ["Rejected", "Booked", "Terminated", "QC", "Billing"]
const Policy_Status_Enable_Process = ["QC", "Billing"]
const Policy_Status_Canceled = "Canceled";
const Claim_Status_Reccomended = "BookedReccomended";
const PolicyReject = "DL";
//Product Schema Code             Terminated

const ProductSchema_Cd_GroupMicroInsurance = "GMI";
const ProductSchema_Cd_GroupTermLife = "GTL";
const ProductSchema_Cd_GroupMortgageProtection = "GMP";
const ProductSchema_Cd_GroupFuneral = "FUN";
const ProductSchema_Cd_GroupWorkersCompensation = "GWC";

const ProductSchema_Health = ["IHI", "IHC", "ILP", "ISP", "IH", "GHI"];
const ProductSchema_GroupHealth = ["GHI", "GHC", "GTP", "MSL", "EIS", "RHI", "IH"];
const ProductType_Group = ["02"];
const Proposal_Type_Policy = ["POLICY"];
const Proposal_Type_Policy_Certificate = ["POLICY", "CERTIFICATE"];
const ProductSchema_TopUp = ["ILP"];

const ProductSchema_General = ["GEN", "IMP", "ITL", "IPA"];
const ProductSchema_GroupGeneral = ["GPA", "GTL", "GMP", "GMI", "FUN", "GWC", "GIH"];

const ProductSchema_Motor = ["MOT"];
const ProductSchema_GroupMotor = ["GMT"];
//Mode
const CU_PageMode = "CU";
const VW_PageMode = "VW";

//Proposer Type
const ProposalType_Certificate = "CERTIFICATE";
const ProposalType_Endorsement = "ENDORSEMENT";
const ProposalType_Policy = "POLICY";
const ProposalType_Quote = "Quote";
const Renewal_Ind_Approved = "100";

///////////ASCII VALUE
const NAME_CHAR = [196, 61, 94, 37];

const PreventKeyCode = [3, 123];

const FreeLookUpPeriod = "103.1";

const Full_Term = "Full Term";
const Pro_Rata = "Pro Rata";
const No_Refund = "No Refund";

const Endorsment_Nill = ["101.1", "101.3", "101.10", "101.13", "101.12", "101.15"];
const Endorsment_Address = ["101.4", "101.2"];
const Premium_Cal_Type_Linear = "LI";
const Premium_Cal_Type_PerMile = "PM";
const Premium_Cal_Type_Fixed = "FP";
const Premium_Cal_Type_Factor = "FT";

const Male_Title = ["Mr"];
const Female = ["Mrs", "Ms"];
const RelationSelf = ["SELF"];
const RelationSPCH = ["CHILD", "SPOUSE"];

const ProductSchema_MortgageProtection = ["IMP"];
const ProductSchema_GroupMortgageProtection = ["GMP"];

const SchemeType_Fixed = "Fixed";
const SchemeType_Flexi = "Flexi";

const EndorsmentFor_Increase_Decrese_Salary = ["102.36", "102.37"];
const EndorsmentFor_Increase_Decrese_Suminsured = ["102.38", "102.39", "102.3"];

const Quotation_StatusFreez = "Q6";


const Pricing_Curved = ["11000054"];
const ViewUser_Role = "R001";

const Currency_API_ID = "8c3e440921054b3ca809230a3a0d61d2";

const um = "Software version";
const lm = "Loading.";

const gm = "Login Successful";
const pc = "Hospital";

const RegExData = "/[A-H][0-5][3-8][#%^@][G-U][O-Z][a-j][$#@][2-8][1-9][i-p][s-z][4-9][5-8][t-y][j-o][@!%^]/";

const TimeZone = 'Asia/Singapore';

var cpup = ""
var cpui = ""
var cpun = ""
var cpia = ""
var cpev = ""
var cpat = ""
var cpul = ""
var cprl = ""
var cpur = ""

/* ADDED LOB LIST 07-10-2021 */
const MOTOR_LOB = "46";
const MARINE_LOB = "42";
const FIRE_LOB = "45";
const AVIATION_LOB = "43";
const BURGLARY_LOB = "44";
const ENGINEERING_LOB = "47";
const Generic_LOB_List = ["47", "48", "49", "50", "51","52"];
const General_LOB_List = ["42", "43", "44", "45", "46"];
const CalType_List = ["Fixed", "Per Mile", "Rate"];

