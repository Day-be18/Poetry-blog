(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return l(9828)}])},9828:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return s}});var a=l(5893),r=l(7294);function s(){let[e,t]=(0,r.useState)([]),[l,s]=(0,r.useState)(""),[n,i]=(0,r.useState)(""),[o,d]=(0,r.useState)(null),[c,u]=(0,r.useState)(""),[x,m]=(0,r.useState)(""),[p,h]=(0,r.useState)(!0),[g,f]=(0,r.useState)(0),[b,w]=(0,r.useState)("Все категории"),[j,v]=(0,r.useState)("все"),N=["Любовные","Пейзажные","Философские","Мотивирующие","Духовные","Другое"];function y(e){localStorage.setItem("poems",JSON.stringify(e)),t(e)}(0,r.useEffect)(()=>{t(JSON.parse(localStorage.getItem("poems"))||[])},[]),(0,r.useEffect)(()=>{let e=()=>{let e=window.scrollY;e<g||e<50?h(!0):h(!1),f(e)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[g]);let D=e.filter(e=>{let t=e.title.toLowerCase().includes(c.toLowerCase()),l="все"===j||e.category===j;return t&&l});return(0,a.jsxs)("div",{className:"min-h-screen flex flex-col bg-[url('/Poetry-blog/images/parchment-background.png')] bg-cover bg-center bg-fixed bg-no-repeat overflow-x-hidden",style:{backgroundColor:"rgba(255, 252, 242, 0.85)",backgroundBlendMode:"overlay"},children:[(0,a.jsx)("header",{className:"bg-blue-600/95 backdrop-blur-sm text-white py-4 shadow-lg fixed w-full transition-transform duration-300 ease-in-out z-[9999] ".concat(p?"translate-y-0":"-translate-y-full"),children:(0,a.jsx)("div",{className:"container mx-auto px-4",children:(0,a.jsxs)("div",{className:"flex flex-col md:flex-row justify-between items-center gap-4",children:[(0,a.jsxs)("div",{className:"flex items-center gap-3 shrink-0",children:[(0,a.jsx)("span",{className:"text-2xl md:text-3xl",children:"\uD83D\uDCDA"}),(0,a.jsx)("h1",{className:"text-xl md:text-3xl font-serif italic",style:{fontFamily:"'Playfair Display', serif"},children:"Блог стихотворений"})]}),(0,a.jsx)("div",{className:"w-full md:w-96 lg:w-[32rem] md:ml-8 md:translate-x-[15px]",children:(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("input",{type:"text",value:c,onChange:e=>u(e.target.value),placeholder:"Поиск стихотворений...",className:"w-full p-2 md:p-3 rounded-full pl-10 md:pl-12 text-gray-800 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"}),(0,a.jsx)("span",{className:"absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg md:text-xl",children:"\uD83D\uDD0D"})]})}),(0,a.jsx)("div",{className:"w-full md:w-auto flex gap-4 items-center",children:(0,a.jsxs)("select",{value:j,onChange:e=>v(e.target.value),className:"p-2 md:p-3 rounded-full text-gray-800 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300",children:[(0,a.jsx)("option",{value:"все",children:"Все категории"}),N.map(e=>(0,a.jsx)("option",{value:e,children:e},e))]})})]})})}),(0,a.jsx)("main",{className:"pt-24 md:pt-28",children:(0,a.jsxs)("div",{className:"container mx-auto p-4",children:[(0,a.jsxs)("div",{className:"bg-white/95 backdrop-blur-sm rounded-lg p-6 md:p-8 mb-8 shadow-lg",children:[(0,a.jsxs)("h2",{className:"text-2xl md:text-3xl font-serif italic mb-6 text-center flex items-center justify-center gap-3",children:[(0,a.jsx)("span",{children:"✨"})," Добавить стихотворение"]}),(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsx)("input",{type:"text",value:l,onChange:e=>s(e.target.value),placeholder:"Название стихотворения",className:"w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-300 transition-all duration-300"}),(0,a.jsx)("select",{value:b,onChange:e=>w(e.target.value),className:"w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-300 transition-all duration-300",children:N.map(e=>(0,a.jsx)("option",{value:e,children:e},e))}),(0,a.jsx)("textarea",{value:n,onChange:e=>i(e.target.value),placeholder:"Текст стихотворения",className:"w-full p-3 rounded-lg border h-32 focus:ring-2 focus:ring-blue-300 transition-all duration-300"}),(0,a.jsxs)("div",{className:"flex flex-wrap gap-3",children:[(0,a.jsx)("button",{onClick:function(){l&&n&&(o?(y(e.map(e=>e.id===o.id?{...e,title:l,content:n,category:b}:e)),d(null)):y([...e,{id:Date.now(),title:l,content:n,category:b,createdAt:new Date().toISOString()}]),s(""),i(""),w("любовная"))},className:"bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2",children:o?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{children:"\uD83D\uDCAB"})," Сохранить изменения"]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{children:"✨"})," Добавить стихотворение"]})}),(0,a.jsxs)("label",{className:"bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full cursor-pointer transition-all duration-300 flex items-center gap-2",children:[(0,a.jsx)("span",{children:"\uD83D\uDCC4"})," Загрузить .txt",(0,a.jsx)("input",{type:"file",accept:".txt",onChange:e=>{let t=e.target.files[0];if(!t)return;if("text/plain"!==t.type){m("Пожалуйста, загрузите файл в формате .txt");return}let l=new FileReader;l.onload=e=>{i(e.target.result),s(t.name.replace(".txt","")),m("")},l.onerror=()=>{m("Ошибка при чтении файла")},l.readAsText(t)},className:"hidden"})]})]})]}),x&&(0,a.jsx)("p",{className:"text-red-500 mt-3 text-base md:text-lg",children:x})]}),(0,a.jsx)("div",{className:"container mx-auto px-4",children:(0,a.jsx)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-20",children:D.map(t=>(0,a.jsxs)("li",{className:"relative rounded-lg shadow-lg p-4 md:p-6 lg:p-8 hover:shadow-xl transition-all duration-300 overflow-hidden z-30",style:{background:"linear-gradient(to bottom right, rgba(255, 253, 244, 0.95), rgba(255, 248, 230, 0.95))",borderLeft:"3px solid rgba(142, 107, 198, 0.5)"},children:[(0,a.jsx)("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300 opacity-50"}),(0,a.jsx)("div",{className:"absolute top-4 right-4",children:(0,a.jsx)("span",{className:"bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full",children:t.category})}),(0,a.jsx)("h2",{className:"text-xl md:text-2xl font-serif italic text-gray-900 mb-3 md:mb-4 font-bold text-center",children:t.title}),(0,a.jsx)("p",{className:"text-gray-800 mt-2 md:mt-3 font-serif leading-relaxed text-base md:text-lg whitespace-pre-wrap",children:t.content}),(0,a.jsx)("p",{className:"text-right italic mt-3 md:mt-4 text-gray-700 text-base md:text-lg",children:"- A.G"}),(0,a.jsx)("div",{className:"w-2/3 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent mx-auto my-4"}),(0,a.jsxs)("div",{className:"flex flex-wrap justify-center gap-2 md:gap-3 mt-4 md:mt-6",children:[(0,a.jsxs)("button",{onClick:()=>{d(t),s(t.title),i(t.content)},className:"bg-yellow-400/90 hover:bg-yellow-500 text-white font-bold text-sm px-3 py-1.5 rounded-full transition-all duration-300 flex items-center gap-1.5 min-w-[110px] justify-center hover:shadow-md hover:translate-y-[-1px]",children:[(0,a.jsx)("span",{children:"✏️"})," Редактировать"]}),(0,a.jsxs)("button",{onClick:()=>(function(e){let t=new Blob(["".concat(e.title,"\n\n").concat(e.content,"\n\n- A.G")],{type:"text/plain;charset=utf-8"}),l=URL.createObjectURL(t),a=document.createElement("a");a.href=l,a.download="".concat(e.title,".txt"),document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(l)})(t),className:"bg-green-500/90 hover:bg-green-600 text-white font-bold text-sm px-3 py-1.5 rounded-full transition-all duration-300 flex items-center gap-1.5 min-w-[110px] justify-center hover:shadow-md hover:translate-y-[-1px]",children:[(0,a.jsx)("span",{children:"\uD83D\uDCBE"})," Скачать"]}),(0,a.jsxs)("button",{onClick:()=>{var l;return l=t.id,void y(e.filter(e=>e.id!==l))},className:"bg-red-500/90 hover:bg-red-600 text-white font-bold text-sm px-3 py-1.5 rounded-full transition-all duration-300 flex items-center gap-1.5 min-w-[110px] justify-center hover:shadow-md hover:translate-y-[-1px]",children:[(0,a.jsx)("span",{children:"\uD83D\uDDD1️"})," Удалить"]})]}),(0,a.jsx)("div",{className:"absolute bottom-0 right-0 w-16 h-16 opacity-10",children:(0,a.jsx)("div",{className:"absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-purple-400 to-transparent transform rotate-45"})})]},t.id))})})]})}),(0,a.jsx)("footer",{className:"bg-blue-600 text-white py-4 relative z-20",children:(0,a.jsxs)("div",{className:"container mx-auto text-center px-4",children:[(0,a.jsxs)("p",{className:"text-sm md:text-base",children:["\xa9 ",new Date().getFullYear()," Блог стихотворений. Все права защищены."]}),(0,a.jsxs)("div",{className:"flex justify-center space-x-4 mt-2",children:[(0,a.jsx)("a",{href:"https://www.facebook.com",target:"_blank",rel:"noopener noreferrer",className:"text-sm md:text-base hover:underline",children:"Facebook"}),(0,a.jsx)("a",{href:"https://www.instagram.com",target:"_blank",rel:"noopener noreferrer",className:"text-sm md:text-base hover:underline",children:"Instagram"}),(0,a.jsx)("a",{href:"https://www.twitter.com",target:"_blank",rel:"noopener noreferrer",className:"text-sm md:text-base hover:underline",children:"Twitter"})]})]})})]})}}},function(e){e.O(0,[888,774,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);