// デモ用Javascript
// 作成日 2016/11/22
// 更新日 2016/11/24

function httpGet(url) {
  console.log("#### Start: httpGets(). ####");

  var ret = "";
  $.ajax({
    url: url,
    async: false,
    type: "GET",
    success: function(html) {
      //console.log("success: ");
      //console.log(html);
      ret = html;
    },
    error: function(XMLHttpRequest, textStatus, errorThrown){
      console.log("error: " + errorThrown);
    }
  });
  
  console.log("#### End: httpGets(). ####");
  
  return ret;
}

