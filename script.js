
let code = [
  {
    title:"شنو ي عمك "
  },
  {
    title:"دكتور"
  },
  {
    title:"مهندس!"
  },
  {
    title:"عامل توصيل مياه"
  },
  {
    title:"خدمات صحية"
  },
  {
    title:"خدمات مالية"
  },
  {
    title:"بيت للعجار"
  },
  {
    title:"سياره للعجار"
  },
  {
    title:"عامل نظافه"
  },
  {
    title:"خدمات توصيل"
  },
  {
    title:"نجار"
  },
  {
    title:"عامل بناء"
  },
  {
    title:"مدرس"
  },
  {
    title:"اخر"
  },


];

const section = document.querySelector("#section");

let html = '';
code.forEach((items, indext) =>{
 html += ` 
<div class="column">
<a href="#">
<div class="card">
    <!-- <img src="imges/dog.jpg" alt="" class="thumbnall"> -->
    <h3>${code[indext].title}</h3>
  </div>

</a>
  
</div>

`
})

section.innerHTML = html;
console.log(code)
