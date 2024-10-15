import './index.css';
import data from './data/db.json';

// 只拿sidebar的信息
// import {sidebar} from './data/db.json';
// console.log(data);


// const container = document.querySelector('.container');
// console.log(container);

// const list = document.querySelectorAll('.container');
// console.log(list);

// list.forEach((item) => {
//   console.log(item);
// })

const mainLeft = document.querySelector('.main-left');
// console.log(mainLeft);
mainLeft.innerHTML = null;
// console.log(mainLeft);

// mainLeft.innerHTML = `
//   <div class="btn btn-primary">Hello World</div>`
// 这种方式只有文字, 不可能有外界添加的功能
// mainLeft.textContent = 'hello world';

// const createDiv = document.createElement('div');
// 如果写重复的东西, 只会添加一次, 除非名字不同
// createDiv.classList.add("test")
// createDiv.classList.remove("test")
// 如果没有这个东西, 那么就加上, 如果有这个东西就删除
// createDiv.classList.toggle("test")
// createDiv.id = "test";
// 这样写相当于抹掉了原来的内容, 还是要用addchildList
// createDiv.className = "test";
// createDiv.textContent = "Hello World";
// mainLeft.appendChild(createDiv);

mainLeft.innerHTML = null;

const sideBar = document.createElement('div');
sideBar.classList.add('sidebar');
mainLeft.appendChild(sideBar);

const profile = document.createElement('div');
profile.classList.add('profile');
profile.innerHTML = ` <div class="profile-photo">
              <img src="/images 2/profile/profile_1.png" alt="profile">
            </div>
            <div class="profile-info">
              <h2>Elden Lord</h2>
              <p>@EldenRing</p>
            </div>`
sideBar.appendChild(profile);

const menuList = document.createElement('div');
menuList.classList.add('menu');
sideBar.appendChild(menuList);

data.sidebar.forEach((item) => {
  const sideBarList = document.createElement('a');
  sideBarList.classList.add('menu-item');
  const span = document.createElement('span');
  const i = document.createElement('i');
  item.icon_class_list.forEach((iconClass) => {
    i.classList.add(iconClass);
  })
  sideBarList.classList.add(item.name);
  const h2 = document.createElement('h2');
  h2.textContent = item.name;
  span.appendChild(i);
  sideBarList.appendChild(span);
  sideBarList.appendChild(h2);
  menuList.appendChild(sideBarList);
});  

const homeDom = document.querySelector('.Home');
console.log(homeDom);

// homeDom.addEventListener('click', () => {
//   // 按动的时候变成了按钮
//   homeDom.classList.toggle('btn');
//   homeDom.classList.toggle('btn-primary');
// });

const createPost = document.createElement('div');
createPost.classList.add('createPost');
const label = document.createElement('label');
label.setAttribute('for', 'create-post');
label.classList.add('btn','btn-primary');
label.textContent = 'Create Post';
createPost.appendChild(label);
sideBar.appendChild(createPost);

