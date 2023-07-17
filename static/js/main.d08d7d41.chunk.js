(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{16:function(e,t,i){},17:function(e,t,i){},18:function(e,t,i){},20:function(e,t,i){"use strict";i.r(t);var a=i(7),n=i.n(a),c=(i(15),i(10)),s=i(3),r=i(1),l=(i(16),i(17),i(18),i(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(l.jsxs)("div",{className:"content",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbId)}))})},m=i(2),b=i(8),j=i.n(b);function u(e){return/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@,.\w_]*)#?(?:[,.!/\\\w]*))?)$/.test(e)}var h=function(e){var t=e.name,i=e.value,a=e.label,n=void 0===a?t:a,c=e.placeholder,o=void 0===c?"Enter ".concat(n):c,d=e.required,m=void 0!==d&&d,b=e.onChange,h=void 0===b?function(){}:b,g=Object(r.useState)((function(){return"".concat(t,"-").concat(Math.random().toFixed(16).slice(2))})),O=Object(s.a)(g,1)[0],p=Object(r.useState)(!1),v=Object(s.a)(p,2),f=v[0],w=v[1],x=Object(r.useState)(!1),M=Object(s.a)(x,2),N=M[0],U=M[1],I=f&&m&&!i;function T(e){var t=u(e);U((function(){return!t}))}return Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:O,children:n}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{type:"text",id:O,"data-cy":"movie-".concat(t),className:j()("input",{"is-danger":I}),placeholder:o,value:i,onChange:function(e){h(e.target.value),!f||"imgUrl"!==t&&"imdbUrl"!==t||T(e.target.value)},onBlur:function(){"imgUrl"!==t&&"imdbUrl"!==t||T(i),h(i.trim()),w(!0)}})}),I&&Object(l.jsx)("p",{className:"help is-danger",children:"".concat(n," is required")}),N&&!I&&Object(l.jsx)("p",{className:"help is-danger",children:"The URL is invalid"})]})},g={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""},O=function(e){var t=e.onAdd,i=Object(r.useState)(0),a=Object(s.a)(i,2),n=a[0],c=a[1],o=Object(r.useState)(g),d=Object(s.a)(o,2),b=d[0],j=d[1],O=u(b.imgUrl),p=u(b.imdbUrl),v=!b.title||!b.imgUrl||!b.imdbUrl||!b.imdbId||!O||!p;return Object(l.jsxs)("form",{className:"NewMovie",onSubmit:function(e){e.preventDefault(),v||(t(b),j(g),c((function(e){return e+1})))},children:[Object(l.jsx)("h2",{className:"title",children:"Add a movie"}),Object(l.jsx)(h,{name:"title",label:"Title",value:b.title,onChange:function(e){return j(Object(m.a)(Object(m.a)({},b),{},{title:e}))},required:!0}),Object(l.jsx)(h,{name:"description",label:"Description",value:b.description,onChange:function(e){return j(Object(m.a)(Object(m.a)({},b),{},{description:e}))}}),Object(l.jsx)(h,{name:"imgUrl",label:"Image URL",value:b.imgUrl,onChange:function(e){return j(Object(m.a)(Object(m.a)({},b),{},{imgUrl:e}))},required:!0}),Object(l.jsx)(h,{name:"imdbUrl",label:"Imdb URL",value:b.imdbUrl,onChange:function(e){return j(Object(m.a)(Object(m.a)({},b),{},{imdbUrl:e}))},required:!0}),Object(l.jsx)(h,{name:"imdbId",label:"Imdb ID",value:b.imdbId,onChange:function(e){return j(Object(m.a)(Object(m.a)({},b),{},{imdbId:e}))},required:!0}),Object(l.jsx)("div",{className:"field is-grouped",children:Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",disabled:v,children:"Add"})})})]},n)},p=i(9),v=function(){var e=Object(r.useState)(p),t=Object(s.a)(e,2),i=t[0],a=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(d,{movies:i})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(O,{onAdd:function(e){return t=e,void a((function(e){return[].concat(Object(c.a)(e),[t])}));var t}})})]})};n.a.render(Object(l.jsx)(v,{}),document.getElementById("root"))},9:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[20,1,2]]]);
//# sourceMappingURL=main.d08d7d41.chunk.js.map