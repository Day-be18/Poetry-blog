(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(9828)}])},9828:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return r}});var l=s(5893),a=s(7294);function r(){let[e,t]=(0,a.useState)([]),[s,r]=(0,a.useState)(""),[n,o]=(0,a.useState)(""),[i,d]=(0,a.useState)(null),[c,x]=(0,a.useState)(""),[u,m]=(0,a.useState)(""),[p,h]=(0,a.useState)(!0),[g,f]=(0,a.useState)(0),[b,w]=(0,a.useState)(!0),[j,v]=(0,a.useState)("Все категории"),[N,y]=(0,a.useState)("все"),D=["Философские","Пейзажные","Любовные","Мотивирующие","Духовные","Другое"];function C(e){localStorage.setItem("poems",JSON.stringify(e)),t(e)}(0,a.useEffect)(()=>{t(JSON.parse(localStorage.getItem("poems"))||[])},[]),(0,a.useEffect)(()=>{let e=()=>{let e=window.scrollY,t=document.querySelector(".poem-form");t&&w(t.getBoundingClientRect().top>0),e>g?h(!1):h(!0),f(e)};return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[g]);let k=e.filter(e=>{let t=e.title.toLowerCase().includes(c.toLowerCase()),s="все"===N||e.category===N;return t&&s});return(0,l.jsxs)("div",{className:"min-h-screen flex flex-col bg-[url('/Poetry-blog/images/parchment-background.png')] bg-cover bg-center bg-fixed bg-no-repeat overflow-x-hidden",style:{backgroundColor:"rgba(255, 252, 242, 0.85)",backgroundBlendMode:"overlay"},children:[(0,l.jsx)("header",{className:"\n          sticky top-0 w-full\n          transition-all duration-300 ease-in-out\n          bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400\n          shadow-lg z-[9999]\n          border-b border-blue-400/30\n        ",style:{transform:"translateY(".concat(g,"px)")},children:(0,l.jsx)("div",{className:"max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4",children:(0,l.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0",children:[(0,l.jsx)("div",{className:"flex items-center space-x-2 sm:space-x-3",children:(0,l.jsx)("h1",{className:"text-xl sm:text-2xl font-bold text-white hover:text-blue-100 transition-colors duration-300",children:(0,l.jsxs)("span",{className:"flex items-center gap-2",children:[(0,l.jsx)("span",{className:"text-2xl sm:text-3xl",children:"\uD83D\uDCDD"}),(0,l.jsx)("span",{className:"hidden xs:inline",children:"Блог стихотворений"}),(0,l.jsx)("span",{className:"xs:hidden",children:"Стихи"})]})})}),(0,l.jsx)("div",{className:"w-full sm:w-auto sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2",children:(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)("input",{type:"text",value:c,onChange:e=>x(e.target.value),placeholder:"Поиск стихотворений...",className:"w-full sm:w-[200px] md:w-[250px] lg:w-[300px] pl-10 pr-4 py-1.5 sm:py-2  rounded-full bg-blue-400/20 text-white placeholder-blue-100  border border-blue-400/30 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-blue-400/30"}),(0,l.jsx)("span",{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-100 text-base sm:text-lg md:text-xl",children:"\uD83D\uDD0D"})]})}),(0,l.jsx)("div",{className:"w-full sm:w-auto flex justify-center sm:justify-end",children:(0,l.jsxs)("select",{value:N,onChange:e=>y(e.target.value),className:"p-1.5 sm:p-2 md:p-3 rounded-full text-gray-800 text-sm sm:text-base  focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 max-w-[150px] sm:max-w-none",children:[(0,l.jsx)("option",{value:"все",children:"Все категории"}),D.map(e=>(0,l.jsx)("option",{value:e,children:e},e))]})})]})})}),(0,l.jsx)("main",{className:"pt-20 sm:pt-24 md:pt-28",children:(0,l.jsxs)("div",{className:"container mx-auto px-2 sm:px-4 md:px-6",children:[(0,l.jsxs)("div",{className:"bg-white/95 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-lg",children:[(0,l.jsxs)("h2",{className:"text-xl sm:text-2xl md:text-3xl font-serif italic mb-4 sm:mb-6 text-center flex items-center justify-center gap-2 sm:gap-3",children:[(0,l.jsx)("span",{children:"✨"})," Добавить стихотворение"]}),(0,l.jsxs)("div",{className:"space-y-4",children:[(0,l.jsx)("input",{type:"text",value:s,onChange:e=>r(e.target.value),placeholder:"Название стихотворения",className:"w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-300 transition-all duration-300"}),(0,l.jsx)("select",{value:j,onChange:e=>v(e.target.value),className:"w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-300 transition-all duration-300",children:D.map(e=>(0,l.jsx)("option",{value:e,children:e},e))}),(0,l.jsx)("textarea",{value:n,onChange:e=>o(e.target.value),placeholder:"Текст стихотворения",className:"w-full p-3 rounded-lg border h-32 focus:ring-2 focus:ring-blue-300 transition-all duration-300"}),(0,l.jsxs)("div",{className:"flex flex-wrap gap-3",children:[(0,l.jsx)("button",{onClick:function(){s&&n&&(i?(C(e.map(e=>e.id===i.id?{...e,title:s,content:n,category:j}:e)),d(null)):C([...e,{id:Date.now(),title:s,content:n,category:j,createdAt:new Date().toISOString()}]),r(""),o(""),v("Другое"))},className:"bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2",children:i?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{children:"\uD83D\uDCAB"})," Сохранить изменения"]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{children:"✨"})," Добавить стихотворение"]})}),(0,l.jsxs)("label",{className:"bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full cursor-pointer transition-all duration-300 flex items-center gap-2",children:[(0,l.jsx)("span",{children:"\uD83D\uDCC4"})," Загрузить .txt",(0,l.jsx)("input",{type:"file",accept:".txt",onChange:e=>{let t=e.target.files[0];if(!t)return;if("text/plain"!==t.type){m("Пожалуйста, загрузите файл в формате .txt");return}let s=new FileReader;s.onload=e=>{o(e.target.result),r(t.name.replace(".txt","")),m("")},s.onerror=()=>{m("Ошибка при чтении файла")},s.readAsText(t)},className:"hidden"})]})]})]}),u&&(0,l.jsx)("p",{className:"text-red-500 mt-3 text-base md:text-lg",children:u})]}),(0,l.jsx)("div",{className:"container mx-auto px-2 sm:px-4",children:(0,l.jsx)("ul",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 relative z-20",children:k.map(t=>(0,l.jsxs)("li",{className:"relative rounded-lg shadow-lg p-3 sm:p-4 md:p-6 lg:p-8 hover:shadow-xl  transition-all duration-300 overflow-hidden z-30",style:{background:"linear-gradient(to bottom right, rgba(255, 253, 244, 0.95), rgba(255, 248, 230, 0.95))",borderLeft:"3px solid rgba(142, 107, 198, 0.5)"},children:[(0,l.jsx)("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300 opacity-50"}),(0,l.jsx)("div",{className:"absolute top-4 right-4",children:(0,l.jsx)("span",{className:"bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full",children:t.category})}),(0,l.jsx)("h2",{className:"text-xl md:text-2xl font-serif italic text-gray-900 mb-3 md:mb-4 font-bold text-center",children:t.title}),(0,l.jsx)("p",{className:"text-gray-800 mt-2 md:mt-3 font-serif leading-relaxed text-base md:text-lg whitespace-pre-wrap",children:t.content}),(0,l.jsx)("p",{className:"text-right italic mt-3 md:mt-4 text-gray-700 text-base md:text-lg",children:"- A.G"}),(0,l.jsx)("div",{className:"w-2/3 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent mx-auto my-4"}),(0,l.jsxs)("div",{className:"flex flex-wrap justify-center gap-2 md:gap-3 mt-4 md:mt-6",children:[(0,l.jsxs)("button",{onClick:()=>{d(t),r(t.title),o(t.content)},className:"bg-yellow-400/90 hover:bg-yellow-500 text-white font-bold text-sm px-3 py-1.5 rounded-full transition-all duration-300 flex items-center gap-1.5 min-w-[110px] justify-center hover:shadow-md hover:translate-y-[-1px]",children:[(0,l.jsx)("span",{children:"✏️"})," Редактировать"]}),(0,l.jsxs)("button",{onClick:()=>(function(e){let t=new Blob(["".concat(e.title,"\n\n").concat(e.content,"\n\n- A.G")],{type:"text/plain;charset=utf-8"}),s=URL.createObjectURL(t),l=document.createElement("a");l.href=s,l.download="".concat(e.title,".txt"),document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(s)})(t),className:"bg-green-500/90 hover:bg-green-600 text-white font-bold text-sm px-3 py-1.5 rounded-full transition-all duration-300 flex items-center gap-1.5 min-w-[110px] justify-center hover:shadow-md hover:translate-y-[-1px]",children:[(0,l.jsx)("span",{children:"\uD83D\uDCBE"})," Скачать"]}),(0,l.jsxs)("button",{onClick:()=>{var s;return s=t.id,void C(e.filter(e=>e.id!==s))},className:"bg-red-500/90 hover:bg-red-600 text-white font-bold text-sm px-3 py-1.5 rounded-full transition-all duration-300 flex items-center gap-1.5 min-w-[110px] justify-center hover:shadow-md hover:translate-y-[-1px]",children:[(0,l.jsx)("span",{children:"\uD83D\uDDD1️"})," Удалить"]})]}),(0,l.jsx)("div",{className:"absolute bottom-0 right-0 w-16 h-16 opacity-10",children:(0,l.jsx)("div",{className:"absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-purple-400 to-transparent transform rotate-45"})})]},t.id))})})]})}),(0,l.jsx)("footer",{className:"bg-blue-600 text-white py-4 relative z-20",children:(0,l.jsxs)("div",{className:"container mx-auto text-center px-4",children:[(0,l.jsxs)("p",{className:"text-sm md:text-base",children:["\xa9 ",new Date().getFullYear()," Блог стихотворений. Все права защищены."]}),(0,l.jsxs)("div",{className:"flex justify-center space-x-4 mt-2",children:[(0,l.jsx)("a",{href:"https://www.facebook.com",target:"_blank",rel:"noopener noreferrer",className:"text-sm md:text-base hover:underline",children:"Facebook"}),(0,l.jsx)("a",{href:"https://www.instagram.com",target:"_blank",rel:"noopener noreferrer",className:"text-sm md:text-base hover:underline",children:"Instagram"}),(0,l.jsx)("a",{href:"https://www.twitter.com",target:"_blank",rel:"noopener noreferrer",className:"text-sm md:text-base hover:underline",children:"Twitter"})]})]})})]})}}},function(e){e.O(0,[888,774,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);