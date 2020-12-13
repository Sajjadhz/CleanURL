// $('#loader').hide();
// function setResult(res, n=0) {
//   $("#res").html(res);
  
// }

function main(){
  let long_url = ""
  $("#btn").click(function (e) {
    long_url = $("#inpt").val();
    getUrl(long_url)
    .then((data)=>{
      // alert(data.result_url)
      $("#res").val(data['result_url']);
      $("#myLink").attr("href", data['result_url']);
    })
    .catch((err)=>{
      console.log(err)
    });
  });
}

function getUrl(url) {
  let promise = new Promise((resolve, reject)=> {
    $('#loader').show()
    $.ajax({
    type: "POST",
    url: "https://cleanuri.com/api/v1/shorten",
    data: { url: url },
    success: function (response) {      
      $('#loader').hide()      
      resolve(response);
    },
    fail: function(){
      reject();
    },
  });
  }); 
  return promise 
}
main()
// $("#btn").click(function (e) {
//   var longLink = $("#inpt").val();
//   getUrl(longLink);
//   setResult('', 1)
// });
