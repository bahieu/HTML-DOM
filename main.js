// var x = document.getElementById("form1");
// for (var i = 0; i < x.length; i++) {
//   if (x.elements[i].value != 'Submit') {
//     console.log(x.elements[i].value);
//   }
// }
//change background button
var buttons = document.querySelectorAll('button');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].style.background = `${buttons[i].innerText}`;
}

function makeRedColor() {
  document.getElementById('content').style.color = 'red';
}
function makeBlueColor() {
  document.getElementById('content').style.color = 'blue';
}
function makeOrangeColor() {
  document.getElementById('content').style.color = 'orange';
}

function changeText() {
  document.getElementById('content').innerHTML = 'Tôi đang học HTML DOM '
}

function resetText() {
 var  textReset = document.getElementById('content');
  textReset.style.color = 'black';
  textReset.innerHTML = ' Văn học hay ngữ văn (gọi tắt là văn) theo cách nói chung nhất, là bất kỳ tác phẩm nào bằng văn bản. Hiểu theo nghĩa hẹp hơn, thì văn học là dạng văn bản được coi là một hình thức nghệ thuật, hoặc bất kỳ một bài viết nào được coi là có giá trị nghệ thuật hoặc trí tuệ, thường là do cách thức triển khai ngôn ngữ theo những cách khác với cách sử dụng bình thường. Trong các định nghĩa hiện đại hơn, văn học bao hàm cả các văn bản được nói ra hoặc được hát lên (văn học truyền miệng). Sự phát triển trong công nghệ in ấn đã cho phép phân phối và phát triển các tác phẩm chữ viết, và tạo ra loại văn học điện tử.'
}