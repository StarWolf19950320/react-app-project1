(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"all-rise",image:"./assets/images/all-rise.jpg",clicked:!1},{id:2,name:"angel-has-fallen",image:"./assets/images/angel-has-fallen.jpg",clicked:!1},{id:3,name:"aquarela",image:"./assets/images/aquarela.jpg",clicked:!1},{id:4,name:"crawl",image:"./assets/images/crawl.jpg",clicked:!1},{id:5,name:"fast&furious",image:"./assets/images/fast&furious.jpg",clicked:!1},{id:6,name:"luce",image:"./assets/images/luce.jpg",clicked:!1},{id:7,name:"my-spy",image:"./assets/images/my-spy.jpg",clicked:!1},{id:8,name:"overcomer",image:"./assets/images/overcomer.jpg",clicked:!1},{id:9,name:"round-of-your-life",image:"./assets/images/round-of-your-life.jpg",clicked:!1},{id:10,name:"spider-man",image:"./assets/images/spider-man.jpg",clicked:!1},{id:11,name:"stuber",image:"./assets/images/stuber.jpg",clicked:!1},{id:12,name:"the-informer",image:"./assets/images/the-informer.jpg",clicked:!1}]},,,function(e,a,i){e.exports=i(22)},,,,,,function(e,a,i){},function(e,a,i){},function(e,a,i){},function(e,a,i){},function(e,a,i){},function(e,a,i){},,function(e,a,i){"use strict";i.r(a);var t=i(0),s=i.n(t),n=i(2),c=i.n(n),r=(i(15),i(3)),o=i(4),m=i(7),l=i(5),d=i(8),u=i(6),g=(i(16),i(17),function(e){return s.a.createElement("header",{className:"header"},s.a.createElement("a",{href:"/",className:"brand-logo"},"Clicky Game"),s.a.createElement("div",null,e.isGuessed&&s.a.createElement("p",{className:"guessed"},"You Guessed!")),s.a.createElement("div",{className:"score-details"},s.a.createElement("div",null,s.a.createElement("strong",null,"Score")," ",e.score)," ","|"," ",s.a.createElement("div",null,s.a.createElement("strong",null,"High Score")," ",e.highScore," ")))}),v=(i(18),function(e){return s.a.createElement("footer",{className:"footer"},"Clicky Game")}),h=(i(19),i(20),function(e){return s.a.createElement("div",{onClick:function(){return e.imageClick(e.movie.id)},className:"card-box col-4 col-xs-4 col-sm-4 col-md-4 col-lg-2"},s.a.createElement("div",{className:"img-container"},s.a.createElement("img",{title:e.movie.name,alt:e.movie.name,src:e.movie.image,className:"img-thumbnail"})))}),f=function(e){return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},e.movies.map(function(a,i){return s.a.createElement(h,{key:a.id,imageClick:e.imageClick,movie:a})})))},k=function(e){function a(){var e,i;Object(r.a)(this,a);for(var t=arguments.length,s=new Array(t),n=0;n<t;n++)s[n]=arguments[n];return(i=Object(m.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(s)))).state={movies:u,clickedMovie:[],score:0,highScore:0,isGuessed:!1},i.randomGenerator=function(e,a){return Math.random()>.5?-1:1},i.imageClick=function(e){var a=e;if(i.state.clickedMovie.indexOf(a)>-1)i.setState({movies:i.state.movies.sort(i.randomGenerator),clickedMovie:[],score:0,highScore:0,isGuessed:!1}),alert("You lose. Play again?");else{var t=i.state.score,s=i.state.movies;i.setState({movies:i.state.movies.sort(i.randomGenerator),clickedMovie:i.state.clickedMovie.concat(a),score:t+1,highScore:Math.max(i.state.highScore,t),isGuessed:!0},function(){i.state.score===s.length&&(alert("Yay! You Win!"),i.setState({movies:i.state.movies.sort(i.randomGenerator),clickedMovie:[],score:0,highScore:0}))})}},i}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.state,a=e.movies,i=e.score,t=e.highScore,n=e.isGuessed;return s.a.createElement("div",{className:"application"},s.a.createElement(g,{score:i,highScore:t,isGuessed:n}),s.a.createElement("div",{className:"wrapper"},s.a.createElement(f,{movies:a,imageClick:this.imageClick})),s.a.createElement(v,null))}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i(21);c.a.render(s.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.98ab991c.chunk.js.map