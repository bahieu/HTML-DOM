# DOM: Document Object Model
<ul>
<li> Khi trang web được tải thì trình duyệt sẽ tạo ra 1 DOM
<li> Trình duyệt dựa vào quy chuẩn của W3C để tạo mô hình cây DOM
<li> DOM có 3 thành phần:
    <ul>
        <li> Element
        <li> Attribute
        <li>Text
    </ul>
<li> Node
<li> Khi sử dụng JS DOM có thể thay đổi các thành phần của Website
<li>  HTML DOM không phải JS
<li> Js cung cấp bộ công cụ để truy xuất HTML DOM
<li> Js chạy trên : Browser | Server (node js)
<li> Browser : HTML --> DOM --> WEB API 
<li> document là đại diện cho toàn bộ website
  </ul>

--------------------------------------------------------------------------------
# DOM Element:
<ol>
<li> getElementById: truy cập tới id  => element
<li> getElementsByIdClass: truy cập tới class => HTMLCollection 
<li> getElementsByTagName: truy cập theo tên thẻ => HTMLCollection 
CSS selector:
<li> querySelector => element
<li> querySelectorAll => NodeList
<li> HTML collection (img, form, a, ...) 
<li> document.write 
</ol>
<ul>
<li> Thêm 1 element vào 1 element có sẵn: 
<ul>
<li> element.innerHTML = 'element mới' (có thể thêm được tất cả các node, ghi element mới vào trong element đã có) 
<li> element.outerHTML = 'element mới' (ghi đè tại vị trí của element cũ)
</ul>
</ul>

--------------------------------------------------------------------------------

# DOM Attributes
<ul>
<li> Muốn tương tác vs attributes thì phải get element trước
<li> Thêm attribute: 
<ul>
<li> Cách 1: elenment.attribute = giá trị; ( attribute ở đây là những thuộc tính phải hợp lệ với element ).
<li> Cách 2: dùng setAttribute('tên attribute','giá trị'); dùng cách này có thể thêm 1 attribute tùy ý, có thể không phù hợp với element.
</ul>
<li> Lấy giá trị attribute:
<ul>
<li> Cách 1: element.attribute (attribute phải hợp lệ);
<li> Cách 2: Dùng getAttribute('attribute name'); (attribute không cần hợp lệ)
</ul>
</ul>

--------------------------------------------------------------------------------

# DOM Text

<ul>
<li> Muốn tương tác vs DOM Text thì phải get element trước
<li> get nội dung của textNode trong elementNode:
<ul>  
<li> element.innerText;
<li> element.textContent;
</ul>
<li> gán giá trị:
<ul>
<li> element.innerText  = 'giá trị';
<li> element.textContent  = 'giá trị';
</ul>
<li> Sự khác biệt innerText và textContent:
<ul>
<li> innerText: 
trả lại những gì bạn nhìn thấy
không tồn tại trên Text node
<li> textContent: 
trả về những gì thật sự là text node bên trong
Tồn tại trên cả text node 
</ul>
<li> innerText và textContent không thể thêm element vào DOM
</ul>
