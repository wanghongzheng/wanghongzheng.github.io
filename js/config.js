//系统名称
const SYS_NAME = "XXXXXXXXXXXXXXXX在线监测系统";
//公司名称
const COMPANY_NAME = "XXXXXXXXX股份有限公司";
//版权信息
const COPYRIGHT_INFO = "&nbsp;XXXXXXXX股份有限公司&nbsp;&nbsp;联系电话：022-XXXXXXXX";

/**
 * 设置checkob标题
 */
function setCheckTitle(){
    $(".vauleCheckTitle").html(CHECK_TITLE);
}

/**
 * 加载web版登录界面的logo
 * @param path 路径
 */
function setLogoWeb(path){
    $("#companyLogoId").html("");
    var htmlStr = '<img src="'+ path + 'images/logo.jpg" alt="公司标志1" class="titleImg" />';
    $("#companyLogoId").append(htmlStr);
}

/**
 * 加载web版主页logo
 * @param path
 */
function setMainLogoWeb(path){
    $("#mainLogoId").html("");
    var htmlStr = '<img src="' + path + 'images/logox.png" alt="712logo" style="float:left;margin-top:13px;"/>';
    $("#mainLogoId").append(htmlStr);
}
