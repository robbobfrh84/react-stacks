(this.webpackJsonpKiss_The_Sky=this.webpackJsonpKiss_The_Sky||[]).push([[0],Array(18).concat([function(e,t,a){e.exports=a.p+"static/media/paginate_arrow.3553549d.svg"},,function(e){e.exports=JSON.parse('[{"pistil":"#E0993E","petal":"#C90606"},{"pistil":"#E0993E","petal":"#E8B741"},{"pistil":"#E0993E","petal":"#E76335"},{"pistil":"#E0993E","petal":"#889ACD"},{"pistil":"#E0993E","petal":"#30C1B3"},{"pistil":"#E0993E","petal":"#A330C1"},{"pistil":"#E0993E","petal":"#F5E8A8"},{"pistil":"#E0993E","petal":"#EEEEEE"},{"pistil":"#E0993E","petal":"#FF0DCB"},{"pistil":"#E0993E","petal":"#0E7FD9"}]')},function(e,t,a){e.exports=a.p+"static/media/icon_loading.ec8e459a.svg"},function(e,t,a){e.exports=a.p+"static/media/icon_check_green.288cc37e.svg"},function(e,t,a){e.exports=a.p+"static/media/icon_exit_modal_red.562ce5e1.svg"},,,,,function(e,t,a){e.exports=a.p+"static/media/title_header_dark.51aa020b.png"},,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/icon_exit_modal_black.fcac8229.svg"},function(e,t,a){e.exports=a.p+"static/media/edit_icon.0d511424.svg"},function(e,t,a){e.exports=a.p+"static/media/icon_menu.be660857.svg"},function(e,t,a){e.exports=a.p+"static/media/title_header_light.0dc8ca49.png"},function(e,t,a){e.exports=a.p+"static/media/resume_button.f48696c0.svg"},function(e,t,a){e.exports=a.p+"static/media/start_button.f48696c0.svg"},,function(e,t,a){e.exports=a.p+"static/media/icon_exit_modal.906a3591.svg"},,function(e,t,a){e.exports=a(93)},,,,,function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,,,,,,function(e,t,a){},,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/icon_menu_close.6431d77a.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(36),o=a.n(r),i=(a(54),a(55),a(4)),c=a(5),l=a(7),p=a(6),m=a(3),u=a(2),d=a(26),g=a.n(d),h=a(37),f=a(8),v=a.n(f),E=function(){return v.a.put("/api/manifest")},S=function(){return v.a.get("/api/user")},y=function(e){return v.a.post("/api/user",e)},b=function(){return v.a.get("/api/user/logout")},w=function(e){return v.a.post("/api/user/signup",e)},N=function(e){return v.a.post("/api/user/checkavailable",e)},k=function(e){return v.a.put("/api/user/changeAvatar",e)},O=function(e){return v.a.post("/api/saved",e)},C=function(e){return v.a.put("/api/saved",e)},I=function(e){return v.a.post("/api/saved/resume",{_id:e})},M=function(e){return v.a.post("/api/saved/delete",e)},_=function(e){return v.a.put("/api/saved/update",e)},x=function(e){return v.a.post("/api/winner",e)},L=function(e){var t=e.difficulty,a=e.page;return v.a.get("/api/winner/leaderboard/"+t+"/"+a)},F=function(e){return v.a.get("/api/winner/myhighscores")},Y=a(20),j={getUser:function(e){var t=this;console.log("\ud83d\udcdc check for logged in session user"),S().then((function(a){a.data.user?t.updateUser(e,a.data.user):(console.log(" - \ud83d\udcdc No Session User Logged In"),e.set({waitingforSession:!1}),e.fn("handleHash"))})).catch((function(e){return console.log(e)}))},updateUser:function(e,t){t.username?console.log(" - \ud83d\udcdc \ud83d\udc64 User Logged In > ",t):console.log(" - \ud83d\udcdc \ud83d\udc64 User Logged Out"),e.set({username:t.username,created_at:t.created_at,_id:t._id,avatar:t.avatar||!1,waitingforSession:!1,signUpLogIn:!1}),window.resume()},logIn:function(e,t){var a=this,n=t.username,s=t.password;console.log("\ud83d\udc64 Log In: user: ",n),y({username:n,password:s}).then((function(t){t.data._id?a.updateUser(e,t.data,t.data.avatar):alert(t.data.message)})).catch((function(e){return console.log(e)}))},signUp:function(e,t){var a=this,n=t.username,s=t.password,r=t.email;console.log("\ud83d\udc46 Sign UP > newUser: ",n);var o={colors:Y[window._rand(0,Y.length-1)]};w({username:n,password:s,email:r,avatar:o}).then((function(t){t.data._id?a.logIn(e,{username:n,password:s}):alert(t.data.errors)})).catch((function(e){return console.log(e)}))},logOut:function(e){console.log("\u270c\ufe0f log Out: user: ",e.username),b().then((function(e){window.location.href="/"})).catch((function(e){return console.log(e)})).finally((function(){e.set({forceClose:!0})}))},checkAvailable:function(){var e=Object(h.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("\ud83d\udcdd Check if "+JSON.stringify(t)+" is available"),e.abrupt("return",N(t).then((function(e){return e.data})).catch((function(e){return console.log(e)})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),changeAvatar:function(e,t){console.log("\ud83c\udf38 Change Avatar ",e),k(e).then((function(e){t.set({avatar:{colors:e.data.updatedColor}})})).catch((function(e){return console.log(e)}))}},D=function(e){console.log("\ud83e\uddee requesting manifest from API"),E().then((function(t){console.log(" - \ud83e\uddee manifest :",t.data),e.set({manifest:t.data})})).catch((function(e){return console.log(e)}))};a(75);var U=function(){return s.a.createElement("div",{className:"e404"},s.a.createElement("div",{className:"e404-title"},"404 Unknown Page"),s.a.createElement(m.b,{to:"/",className:"kts-link"},"/home"))},G=function(e){x(e).then((function(e){return console.log(" - \ud83c\udf86 \ud83c\udf1f \ud83d\udc64 new winning score! :",e.data)})).catch((function(e){return console.log(e)}))},A=function(e,t,a){L({difficulty:t,page:a}).then((function(n){console.log("\n \ud83c\udf1f leaderboard \ud83c\udf1f ",n.data),e.set({leaderboard:n.data.leaderboard,leaderboardRef:{difficulty:t,page:a}})})).catch((function(e){return console.log(e)}))},P=function(e){F().then((function(t){console.log(" - \ud83c\udf1f \ud83d\udc64 user high scores :",t.data),e.set({myHighScores:t.data||[]})})).catch((function(e){return console.log(e)}))},B={saved:function(e){e.set({savedGames:[]}),O().then((function(t){console.log(" - \ud83d\udc64 \ud83d\udcbe\ud83d\udcbe\ud83d\udcbe \ud83c\udf3a savedGames :",t.data),e.set({savedGames:t.data||[]})})).catch((function(e){return console.log(e)}))},save:function(e,t){if(window.pause(),window.localSavedGameData={},window.saveGame(),e.username&&e._id){var a=JSON.parse(window.localSavedGameData);C({username:e.username,manifest:{title:t,date:a.timeStamp,ambientMode:a.ambientMode,gameDifficulty:a.gameDifficulty,currentSeason:a.currentSeason,currentYear:a.currentYear,highestRedFlowerPct:a.highestRedFlowerPct},game:window.localSavedGameData}).then((function(e){alert("game saved \ud83d\udc4d"),window.resume(),console.log(" - \ud83d\udc64 \ud83d\udcbe \ud83c\udf3a save :",e.data)})).catch((function(e){return console.log(e)}))}else e.fn("handleHash","login"),e.set({forceClose:!0})},resume:function(e,t){I(e).then((function(e){console.log(" - \ud83d\udc64 \ud83d\udcbe \ud83d\udca5 \ud83c\udf3a resume saved game :",e),window.resumeState(e.data),t.push("/game"),setTimeout((function(){Array.from(document.querySelectorAll(".header_item")).map((function(e){return e.style.display="block"}))}),10)})).catch((function(e){return console.log(e)}))},delete:function(e,t,a){var n=this;M({saved_id:t,_id:a}).then((function(t){console.log(" - \ud83d\udc64 \ud83d\udcdb \ud83c\udf3a deleted :",t.data),n.saved(e)})).catch((function(e){return console.log(e)}))},update:function(e,t,a,n,s){var r=this;_({saved_id:t,_id:a,field:n,value:s}).then((function(t){console.log(" - \ud83d\udc64 \u261d\ufe0f \ud83c\udf3a updated :",t.data),r.saved(e)})).catch((function(e){return console.log(e)}))}},R=(a(81),function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={opacity:1},e.gameWon=function(t){t.avatar=e.props.appState.avatar,G(t)},e.gameSave=function(){if(console.log(e.props.appState),e.props.appState.username){var t=prompt("Save Session as... (You can change this name later)","untitled");t&&B.save(e.props.appState,t)}else alert("Please log in to save.")},e.toggleIcon=function(){e.props.appState.set({showIcon:!0})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=document.getElementById("game");t.style.display="block",t.style.opacity=1;var a=this.props.history.location.pathname;(this.props.gameLoaded||["/","/game","/landing","/home"].includes(a))&&window.requestAnimationFrame((function(){e.setState({opacity:0})})),this.props.appState.set({gameLoaded:!0}),window.createReactCallbacks(this.gameWon,this.gameSave,this.toggleIcon)}},{key:"componentWillUnmount",value:function(){document.getElementById("game").style.display="none"}},{key:"render",value:function(){return s.a.createElement("div",{className:"game",style:{opacity:"".concat(this.state.opacity)}})}}]),a}(n.Component)),W=a(94),T=a(95),H=a(96),z=a(15),Z=a.n(z),q=(a(83),a(84),function(e){return s.a.createElement("svg",{alt:"flower avatar",className:"flower-avatar",style:{maxWidth:"".concat(e.hide?"0px":e.size+"px"),paddingRight:"".concat(e.hide?"12px":"0px")},width:e.hide?"0px":e.size+"px",height:e.hide?"0px":e.size+"px",viewBox:"0 0 43 49",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("g",{id:"Symbols",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},s.a.createElement("g",{id:"page-header-right",transform:"translate(-41.000000, -1.000000)",fillRule:"nonzero"},s.a.createElement("g",{id:"header-right"},s.a.createElement("g",{id:"header-right-(logged-in,-closed)"},s.a.createElement("g",{id:"avatar",transform:"translate(37.000000, 0.000000)"},s.a.createElement("g",{id:"flower-avatar",transform:"translate(4.000000, 1.000000)"},s.a.createElement("polygon",{id:"hex",fill:e.colors?e.colors.pistil:"#E0993E",points:"25.1 17.2 29.2 24.0996728 25.2 31 17.1 31.1 13 24.0996728 17 17.3044867"}),s.a.createElement("path",{id:"petals",fill:e.colors?e.colors.petal:"#0E7FD9",d:"M17.1278935,17.3044867 C13.7293999,10.6254606 15.0510363,4.85729839 21.0928027,0 C27.134569,4.85729839 28.4562054,10.6254606 25.0577118,17.3044867 L17.1278935,17.3044867 Z M25.0577118,17.3044867 C29.2041618,11.052751 34.9134596,9.30120091 42.1856053,12.0498364 C40.955226,19.6557703 36.5675645,23.6723824 29.022621,24.0996728 L25.0577118,17.3044867 Z M29.022621,24.0996728 C36.5675645,24.5269632 40.955226,28.5435753 42.1856053,36.1495092 C34.9134596,38.8981447 29.2041618,37.1465946 25.0577118,30.8948589 L29.022621,24.0996728 Z M25.0577118,30.8948589 C28.4562054,37.573885 27.134569,43.3420472 21.0928027,48.1993456 C15.0510363,43.3420472 13.7293999,37.573885 17.1278935,30.8948589 L25.0577118,30.8948589 Z M17.1278935,30.8948589 C12.9814436,37.1465946 7.27214573,38.8981447 2.84217094e-14,36.1495092 C1.23037938,28.5435753 5.61804082,24.5269632 13.1629843,24.0996728 L17.1278935,30.8948589 Z M13.1629843,24.0996728 C5.61804082,23.6723824 1.23037938,19.6557703 1.10134124e-13,12.0498364 C7.27214573,9.30120091 12.9814436,11.052751 17.1278935,17.3044867 L13.1629843,24.0996728 Z"}))))))))}),K=a(40),J=a.n(K),$=a(41),Q=a.n($),V=(a(85),function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).checkForSavedGames=function(){B.saved(e.props.appState)},e.resume=function(t){B.resume(e.props.appState.savedGames[t].saved_id,e.props.history)},e.update=function(t){var a=e.props.appState.savedGames[t].title,n=prompt("Change Saved Session title.",a);n?B.update(e.props.appState,e.props.appState.savedGames[t].saved_id,e.props.appState.savedGames[t]._id,"title",n):console.log("cancel update")},e.delete=function(t){var a=e.props.appState.savedGames[t].title;window.confirm('Are you sure you want to delete "'+a+'"?')?B.delete(e.props.appState,e.props.appState.savedGames[t].saved_id,e.props.appState.savedGames[t]._id):console.log("cancel delete")},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.checkForSavedGames()}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"savedSessions"},this.props.appState.savedGames.length>0&&this.props.appState.savedGames.map((function(t,a){var n=Z()(t.date,"YYYY-MM-DD").format("M/D/YY").replace(/0/g,"O");return s.a.createElement("div",{className:"saved-container",key:a},s.a.createElement("table",null,s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("th",{className:"details",onClick:function(){return e.resume(a)}},s.a.createElement("div",{className:"title",title:t.title},t.title.replace(/0/g,"O")),s.a.createElement("div",{className:"date"},n),s.a.createElement("div",{className:"mode"},t.ambientMode?"Ambient Mode":"Game Mode ("+window._cap(t.gameDifficulty)+", "+Math.floor(t.highestRedFlowerPct).toString().replace(/0/g,"O")+"%)"),s.a.createElement("div",{className:"year"},"Year ",t.currentYear.toString().replace(/0/g,"O"),", ",t.currentSeason)),s.a.createElement("th",{className:"icons-container",onClick:function(){return e.update(a)}},s.a.createElement("div",{className:"icons"},s.a.createElement("img",{className:"edit",src:Q.a,alt:"edit icon"}))),s.a.createElement("th",{className:"icons-container",onClick:function(){return e.delete(a)}},s.a.createElement("div",{className:"icons"},s.a.createElement("img",{className:"exit",src:J.a,alt:"delete saved session button"})))))))})),this.props.appState.savedGames.length<=0&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"no-saved-sessions"}," ... no saved sessions ... ")))}}]),a}(n.Component)),X=(a(86),a(18)),ee=a.n(X),te=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={scoresPage:1},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){P(this.props.appState)}},{key:"render",value:function(){var e,t,a,n,r=this,o=this.props.appState.myHighScores;o&&(e=o.filter((function(e){return"beginner"===e.difficulty})).sort((function(e,t){return e.years-t.years}))[0],t=o.filter((function(e){return"intermediate"===e.difficulty})).sort((function(e,t){return e.years-t.years}))[0],a=o.filter((function(e){return"expert"===e.difficulty})).sort((function(e,t){return e.years-t.years}))[0],n=o.sort((function(e,t){return e.years-t.years})).slice(10*(this.state.scoresPage-1),10*this.state.scoresPage));return s.a.createElement("div",{className:"myHighScores"},s.a.createElement("div",{className:"best"},"Best Scores"),s.a.createElement("div",{className:"score-card beginner"},s.a.createElement("div",{className:"title"}," Beginner "),s.a.createElement("div",{className:"sub-title"}," Red Flower Garden "),e&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"rank"}," #",e.rank.toString().replace(/0/g,"O")," "),"You kissed the sky in",s.a.createElement("div",{className:"years"}," ",e.years.replace(/0/g,"O")," "),"years",s.a.createElement("div",{className:"date"},"on ",Z()(e.date,"YYYY-MM-DD").format("M/D/YY").replace(/0/g,"O"))),!e&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"none-yet"}," None yet. "),s.a.createElement("div",{className:"keep-trying"}," Keep trying! ")),s.a.createElement("a",{href:"/leaderboard/beginner",class:"leaderboard-links"}," Beginner Leaderboard > ")),s.a.createElement("div",{className:"score-card intermediate"},s.a.createElement("div",{className:"title"}," Intermediate "),s.a.createElement("div",{className:"sub-title"}," Colorful Flower Garden "),t&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"rank"}," #",t.rank.toString().replace(/0/g,"O")," "),"You kissed the sky in",s.a.createElement("div",{className:"years"}," ",t.years.replace(/0/g,"O")," "),"years",s.a.createElement("div",{className:"date"},"on ",Z()(t.date,"YYYY-MM-DD").format("M/D/YY").replace(/0/g,"O"))),!t&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"none-yet"}," None yet. "),s.a.createElement("div",{className:"keep-trying"}," Keep trying! ")),s.a.createElement("a",{href:"/leaderboard/intermediate",class:"leaderboard-links"}," Intermediate Leaderboard > ")),s.a.createElement("div",{className:"score-card expert"},s.a.createElement("div",{className:"title"}," Expert "),s.a.createElement("div",{className:"sub-title"}," Tiny White Flower "),a&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"rank"}," #",a.rank.toString().replace(/0/g,"O")," "),"You kissed the sky in",s.a.createElement("div",{className:"years"}," ",a.years.replace(/0/g,"O")," "),"years",s.a.createElement("div",{className:"date"},"on ",Z()(a.date,"YYYY-MM-DD").format("M/D/YY").replace(/0/g,"O"))),!a&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"none-yet"}," None yet. "),s.a.createElement("div",{className:"keep-trying"}," Keep trying! ")),s.a.createElement("a",{href:"/leaderboard/expert",class:"leaderboard-links"}," Expert Leaderboard > ")),this.props.appState.myHighScores.length>0&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"all"},"All Scores"),s.a.createElement("div",{className:"scores-container"},n.map((function(e,t){return s.a.createElement("div",{className:"score-container",key:t},s.a.createElement("div",{className:"rank"},"#",e.rank.toString().replace(/0/g,"O"),"\xa0 \xa0",e.difficulty),Z()(e.date,"YYYY-MM-DD").format("M/D/YY").replace(/0/g,"O"),s.a.createElement("div",{style:{float:"right"}},e.years.replace(/0/g,"O")," years"))}))),s.a.createElement("button",{className:"paginate "+(this.state.scoresPage>1?"":"disable"),onClick:function(){return r.setState({scoresPage:r.state.scoresPage-1})}},s.a.createElement("img",{className:"arrow left",src:ee.a,alt:"icon menu"})),s.a.createElement("button",{className:"paginate "+(10*this.state.scoresPage<o.length?"":"disable"),onClick:function(){return r.setState({scoresPage:r.state.scoresPage+1})}},s.a.createElement("img",{className:"arrow right",src:ee.a,alt:"icon menu"}))))}}]),a}(n.Component),ae=(a(87),function(e){return s.a.createElement("div",{className:"settings"},"Select alternate flower avatar. ",s.a.createElement("br",null),s.a.createElement("br",null),Y.map((function(t,a){return s.a.createElement("div",{className:"flower-options",key:a,onClick:function(){!function(t){j.changeAvatar(t,e.appState)}(t)}},s.a.createElement("div",{className:"flower-avatar-container"},s.a.createElement(q,{colors:t,size:50,appState:e.appState})))})),s.a.createElement("div",{className:"message"},"For questions and support,",s.a.createElement("br",null),"email us at ",s.a.createElement("br",null),s.a.createElement("a",{href:"support@kissthesky.game"},"support@kissthesky.app")))}),ne=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={opacity:0,history:e.props.history,route:""},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.appState.set({showGame:!1}),window.requestAnimationFrame((function(){e.setState({opacity:1})})),window.pause()}},{key:"componentWillUnmount",value:function(){this.props.appState.set({showGame:!0})}},{key:"componentDidUpdate",value:function(){this.props.appState.username||this.props.appState.waitingforSession||this.state.history.push("/")}},{key:"render",value:function(){var e=this.props.history.location.pathname.split("/");e[2]||(e[2]="savedsessions");var t=Z()(this.props.appState.created_at,"YYYY-MM-DD").format("MMM, Do YYYY").replace(/0/g,"O");return s.a.createElement("div",{className:"dashboard",style:{opacity:"".concat(this.state.opacity)}},s.a.createElement("div",{className:"title"},s.a.createElement("div",{className:"flower-avatar-container"},s.a.createElement(q,{hide:!this.props.appState.username,colors:this.props.appState.avatar.colors,size:60,appState:this.props.appState})),s.a.createElement("div",{className:"user"},s.a.createElement("div",{className:"username"},this.props.appState.username),s.a.createElement("div",{className:"member"},this.props.appState.created_at&&s.a.createElement(s.a.Fragment,null,"Member since ",t)))),s.a.createElement(W.a,null,s.a.createElement(T.a,{className:"dashboard-levels"},s.a.createElement(H.a,{md:4,className:"container"},s.a.createElement(m.b,{to:"/dashboard/savedsessions",className:"link"},s.a.createElement("div",{className:"title "+("savedsessions"===e[2]?"active":"")},"Saved Sessions"))),s.a.createElement(H.a,{md:4,className:"container"},s.a.createElement(m.b,{to:"/dashboard/myhighscores",className:"link"},s.a.createElement("div",{className:"title "+("myhighscores"===e[2]?"active":"")},"My High Scores"))),s.a.createElement(H.a,{md:4,className:"container"},s.a.createElement(m.b,{to:"/dashboard/settings",className:"link"},s.a.createElement("div",{className:"title "+("settings"===e[2]?"active":"")},"Settings"))))),s.a.createElement(W.a,{className:"dashboard-container"},(!e[2]||"savedsessions"===e[2])&&s.a.createElement(s.a.Fragment,null,s.a.createElement(V,{appState:this.props.appState,history:this.state.history})),"myhighscores"===e[2]&&s.a.createElement(s.a.Fragment,null,s.a.createElement(te,{appState:this.props.appState,viewMyScores:this.state.viewMyScores})),"settings"===e[2]&&s.a.createElement(s.a.Fragment,null,s.a.createElement(ae,{appState:this.props.appState}))))}}]),a}(n.Component),se=(a(88),function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={opacity:0},e.toggledDifficulty=function(t){A(e.props.appState,t,1)},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.appState.set({showGame:!1}),window.requestAnimationFrame((function(){e.setState({opacity:1})})),window.pause();var t=this.props.history.location.pathname.split("/");t[2]||(t[2]="expert"),A(this.props.appState,t[2],this.props.appState.leaderboardRef.page)}},{key:"componentWillUnmount",value:function(){this.props.appState.set({showGame:!0})}},{key:"paginate",value:function(e){A(this.props.appState,this.props.appState.leaderboardRef.difficulty,this.props.appState.leaderboardRef.page+("left"===e?-1:1))}},{key:"render",value:function(){var e=this,t=this.props.history.location.pathname.split("/");t[2]||(t[2]="expert");var a=this.props.appState.leaderboard.length,n=this.props.appState.leaderboardRef.page;return s.a.createElement("div",{className:"leaderboard",style:{opacity:"".concat(this.state.opacity)}},s.a.createElement("div",{className:"leaderboard-header"},"Leaderboard",s.a.createElement("div",{className:"leaderboard-subtitle"},"All-Time High Scores")),s.a.createElement(W.a,null,s.a.createElement(T.a,{className:"leaderboard-levels"},s.a.createElement(H.a,{md:4,className:"container "+("beginner"===t[2]?"active":"")},s.a.createElement(m.b,{to:"/leaderboard/beginner",className:"link",onClick:function(){return e.toggledDifficulty("beginner")}},s.a.createElement("div",{className:"level beg"},s.a.createElement("div",{className:"title"},"Beginner"),s.a.createElement("div",{className:"subtitle"}," Red Flower Garden ")))),s.a.createElement(H.a,{md:4,className:"container "+("intermediate"===t[2]?"active":"")},s.a.createElement(m.b,{to:"/leaderboard/intermediate",className:"link",onClick:function(){return e.toggledDifficulty("intermediate")}},s.a.createElement("div",{className:"level int"},s.a.createElement("div",{className:"title"},"Intermediate"),s.a.createElement("div",{className:"subtitle"}," Colorful Garden ")))),s.a.createElement(H.a,{md:4,className:"container "+("expert"===t[2]?"active":"")},s.a.createElement(m.b,{to:"/leaderboard/expert",className:"link",onClick:function(){return e.toggledDifficulty("expert")}},s.a.createElement("div",{className:"level exp"},s.a.createElement("div",{className:"title"},"Expert"),s.a.createElement("div",{className:"subtitle"}," Tiny White Flower ")))))),s.a.createElement(W.a,{className:"leaderboard-ranks"},this.props.appState.leaderboard.length>0&&this.props.appState.leaderboard.map((function(t,a){var n=a+10*(e.props.appState.leaderboardRef.page-1)+1;n=n.toString().replace(/0/g,"O");var r=t.username.toString().replace(/0/g,"O"),o=Z()(t.date,"YYYY-MM-DD").format("M/D/YY").replace(/0/g,"O"),i=t.years.replace(/0/g,"O");return s.a.createElement(T.a,{className:"details-container",key:a},s.a.createElement(H.a,{md:8,className:"left-col"},s.a.createElement("div",{className:"rank"},n,"."),s.a.createElement("div",{className:"flower-avatar-container"},s.a.createElement(q,{size:20,colors:t.avatar.colors,appState:e.props.appState})),s.a.createElement("div",{className:"username"},"\xa0 ",r),s.a.createElement("div",{className:"date"},o)),s.a.createElement(H.a,{md:4,className:"right-col"},s.a.createElement("div",null,i," years")))})),s.a.createElement("button",{className:"paginate "+(n>1?"":"disable"),onClick:function(){return e.paginate("left")}},s.a.createElement("img",{className:"arrow left",src:ee.a,alt:"icon menu"})),s.a.createElement("button",{className:"paginate "+(a>9?"":"disable"),onClick:function(){return e.paginate("right")}},s.a.createElement("img",{className:"arrow right",src:ee.a,alt:"icon menu"}))))}}]),a}(n.Component)),re=a(42),oe=a.n(re),ie=(a(89),a(28)),ce=a.n(ie),le=a(43),pe=a.n(le),me=a(44),ue=a.n(me),de=a(45),ge=a.n(de),he=(a(90),a(46)),fe=a(9),ve=a(47),Ee=a.n(ve),Se=a(21),ye=a.n(Se),be=a(22),we=a.n(be),Ne=a(23),ke=a.n(Ne),Oe=(a(91),a(92),function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={username:"",email:"",newpassword:"",password:"",confirm:"",signup:{title:"Your garden is evolving! Nice.",subTitle:"Sign up to save progress and track high scores.",button:"SIGN UP",routeTo:"login",option1:{message:"It's cool. I just want to ",link:"keep playing without signing in."},option2:{message:"Already a member? ",link:"Log in."}},login:{title:"Welcome back.",subTitle:"Log in to save progress and track high scores.",button:"LOG IN",routeTo:"signup",option1:{message:"",link:""},option2:{message:"Don't have an account? ",link:"Sign up."}}},e.handleInput=function(t){e.setState(Object(fe.a)({},t.target.name,t.target.value))},e.focusIn=function(t){var a;e.setState((a={},Object(fe.a)(a,t+"State",!1),Object(fe.a)(a,t+"FontColor",""),a))},e.focusOut=function(t){var a;""!==e.state[t]&&"signup"===e.props.appState.signUpLogIn&&["username","email"].includes(t)?(e.setState((a={},Object(fe.a)(a,t+"State",ye.a),Object(fe.a)(a,t+"FontColor","#666"),a)),j.checkAvailable(Object(fe.a)({},t,e.state[t])).then((function(a){var n,s;a.available?e.setState((n={},Object(fe.a)(n,t+"State",we.a),Object(fe.a)(n,t+"FontColor","#51C856"),n)):e.setState((s={},Object(fe.a)(s,t+"State",ke.a),Object(fe.a)(s,t+"FontColor","#A70000"),s))}))):e.setState(Object(fe.a)({},t+"State",!0))},e.submit=function(){if("login"===e.props.appState.signUpLogIn)j.logIn(e.props.appState,e.state);else if(e.state.password===e.state.confirm){var t=Object(he.a)({},e.state);delete t.confirm,j.signUp(e.props.appState,t)}else alert("your PASSWORD does NOT match your CONFIRM password")},e}return Object(c.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.appState.signUpLogIn&&("signup"===e.appState.signUpLogIn&&this.setState({username:"",email:"",password:"",confirm:""}),window.location.hash=e.appState.signUpLogIn||""),this.props.appState.signUpLogIn&&(e.appState.waitingforSession||(window.location.hash=e.appState.signUpLogIn||""))}},{key:"render",value:function(){var e=this,t=this.props.appState.signUpLogIn||"login",a="login"===t?"signup":"login",n=this.state[t].title;return window.gameHasBegun||(n="Welcome to Kiss The Sky!"),s.a.createElement("div",{className:"signup-login"},s.a.createElement("div",{className:"signup-login-container"},s.a.createElement("img",{id:"icon_exit_modal",src:Ee.a,alt:"exit modal button",onClick:function(){e.props.toggleSignUpLogIn(!1)}}),s.a.createElement("div",{className:"title"},n),s.a.createElement("div",{className:"sub-title"},this.state[t].subTitle),s.a.createElement("div",{className:"input-container"},s.a.createElement("div",{className:"inputs-container",onFocus:function(){e.focusIn("username")},onBlur:function(){e.focusOut("username")}},s.a.createElement("input",{name:"username",placeholder:"Username",spellCheck:"false",value:this.state.username,onChange:this.handleInput,style:{color:this.state.usernameFontColor}}),"signup"===this.props.appState.signUpLogIn&&this.state.usernameState&&""!==this.state.username&&s.a.createElement("img",{className:"icon_loading "+(this.state.usernameState===ye.a?" rotate":""),src:this.state.usernameState,alt:this.state.usernameState})),"signup"===t&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"inputs-container",onFocus:function(){e.focusIn("email")},onBlur:function(){e.focusOut("email")}},s.a.createElement("input",{name:"email",placeholder:"Email",spellCheck:"false",value:this.state.email,onChange:this.handleInput,style:{color:this.state.emailFontColor}}),this.state.emailState&&""!==this.state.email&&s.a.createElement("img",{className:"icon_loading "+(this.state.emailState===ye.a?" rotate":""),src:this.state.emailState,alt:this.state.emailState})),s.a.createElement("div",{className:"inputs-container",onFocus:function(){e.focusIn("password")},onBlur:function(){e.focusOut("password")}},s.a.createElement("input",{name:"password",type:"password",placeholder:"Password",spellCheck:"false",autoComplete:"new-password",value:this.state.password,onChange:this.handleInput}),""!==this.state.password&&this.state.passwordState&&s.a.createElement("img",{className:"icon_loading",src:this.state.password.length>=6?we.a:ke.a,alt:"Password Check Icon"}))),"login"===t&&s.a.createElement("input",{name:"password",type:"password",placeholder:"Password",spellCheck:"false",value:this.state.password,onChange:this.handleInput}),"signup"===t&&s.a.createElement("div",{className:"inputs-container",onFocus:function(){e.focusIn("confirm")},onBlur:function(){e.focusOut("confirm")}},s.a.createElement("input",{name:"confirm",type:"password",placeholder:"Confirm Password",spellCheck:"false",value:this.state.confirm,onChange:this.handleInput}),""!==this.state.confirm&&this.state.confirmState&&s.a.createElement("img",{className:"icon_loading",src:this.state.password.length>=6&&this.state.password===this.state.confirm?we.a:ke.a,alt:"Password Check Icon"}))),s.a.createElement("div",{className:"bottom-container"},s.a.createElement("button",{className:"btn",onClick:this.submit},this.state[t].button),s.a.createElement("br",null),s.a.createElement("div",{className:"options-container"},s.a.createElement("div",{className:"keep-playing"},this.state[t].option1.message,s.a.createElement("span",{className:"link",onClick:function(){e.props.toggleSignUpLogIn(!1,!0)}},this.state[t].option1.link)),this.state[t].option2.message,s.a.createElement("span",{className:"link",onClick:function(){e.props.toggleSignUpLogIn(a,!0)}},this.state[t].option2.link)))))}}]),a}(n.Component)),Ce=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={icon:oe.a,open:!1,history:e.props.history},e.toggleMenu=function(){e.props.appState.set({openMenu:!e.state.open}),e.setState({open:!e.state.open})},e.toggleSignUpLogIn=function(t,a){e.props.appState.set({signUpLogIn:t}),t&&!a&&e.toggleMenu(),t?window.pause():window.resume()},e.overrideLightModeOnDashboardScreens=function(){e.props.appState.showGame||(document.body.style.background="#202020",document.getElementById("logo").src=ce.a)},e.resumeLightModeIfOn=function(){window.darkMode||(document.body.style.background="#FFFFFF",document.getElementById("logo").src=pe.a)},e.resumeGame=function(){window.gamePaused&&window.gameHasBegun&&(window.resume(),e.state.history.push("/game"),e.props.appState.set({showGame:!0}),e.resumeLightModeIfOn())},e.startGame=function(){e.state.history.push("/game")},e}return Object(c.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.appState.openMenu&&!this.state.open&&(this.toggleMenu(),this.setState({open:!0}),window.menuOpen=!0),e.appState.forceClose&&(this.toggleMenu(),this.props.appState.set({forceClose:!1}))}},{key:"render",value:function(){var e=this,t=this.props.history.location.pathname.split("/"),a="leaderboard"===t[1]?"leaderboard":t[2];a||(a="savedsessions"),this.props.appState.showGame&&(a="");var n=""!==t[1]&&"game"!==t[1],r=this.props.appState.showIcon,o=window.gameHasBegun;return this.overrideLightModeOnDashboardScreens(),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"menu"},s.a.createElement("img",{id:"logo",src:ce.a,alt:"logo",style:{opacity:"".concat(r||n?1:0),pointerEvents:"".concat(r||n?"":"none")}}),s.a.createElement("div",{className:"start-resume-container",onClick:o?this.resumeGame:this.startGame,style:{opacity:"".concat(n?1:0),pointerEvents:"".concat(n?"":"none")}},s.a.createElement("img",{className:"start-resume-button",src:o?ue.a:ge.a,alt:"Resume Game Button"}),s.a.createElement("div",{className:o?"resume-text":"start-text"},o?"RESUME":"START")),s.a.createElement("div",{id:"menu_icon_container",className:"noListen menu-toggler",onClick:this.toggleMenu},s.a.createElement("svg",{id:"menu-icon-svg",viewBox:"0 0 100 100",style:{right:"".concat(this.props.appState.username?"57px":"2px")}},s.a.createElement("polyline",{id:"top-line",points:"7 20 50 20 93 20 "}),s.a.createElement("path",{id:"middle-line",d:"M7,50 L93,50 Z"}),s.a.createElement("path",{id:"bottom-line",d:"M7,80 L93,80 Z"})),s.a.createElement("div",{className:"flower-avatar-container"},s.a.createElement(q,{hide:!this.props.appState.username,colors:this.props.appState.avatar.colors,size:40,appState:this.props.appState}))),s.a.createElement("div",{id:"menu_dropdown_container",className:"noListen",style:{opacity:"".concat(this.state.open?1:0),pointerEvents:"".concat(this.state.open?"":"none")}},this.props.appState.username&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"username"},this.props.appState.username),s.a.createElement(m.b,{to:"/dashboard/savedsessions",className:"link menu-toggler",onClick:this.toggleMenu},s.a.createElement("div",{className:"btn "+("savedsessions"===a?"active":"")},"saved sessions")),s.a.createElement(m.b,{to:"/dashboard/myhighscores",className:"link menu-toggler",onClick:this.toggleMenu},s.a.createElement("div",{className:"btn "+("myhighscores"===a?"active":"")},"my high scores")),s.a.createElement(m.b,{to:"/dashboard/settings",className:"link menu-toggler",onClick:this.toggleMenu},s.a.createElement("div",{className:"btn "+("settings"===a?"active":"")},"settings"))),s.a.createElement(m.b,{to:"/leaderboard",className:"link menu-toggler",onClick:this.toggleMenu},s.a.createElement("div",{className:"btn leaderboard-btn "+("leaderboard"===a?"active":"")},"leaderboard")),s.a.createElement("div",{className:"divider"}),!this.props.appState.username&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"link btn menu-toggler",onClick:function(){e.toggleSignUpLogIn("signup")}},"sign up"),s.a.createElement("div",{className:"link btn menu-toggler",onClick:function(){e.toggleSignUpLogIn("login")}},"log in")),this.props.appState.username&&s.a.createElement("div",{className:"btn",onClick:function(){j.logOut(e.props.appState)}},"log out"))),s.a.createElement("div",{className:"signUpLogIn-container",style:{opacity:"".concat(this.props.appState.signUpLogIn?1:0),pointerEvents:"".concat(this.props.appState.signUpLogIn?"":"none")}},s.a.createElement(Oe,{toggleSignUpLogIn:this.toggleSignUpLogIn,appState:this.props.appState})))}}]),a}(n.Component);function Ie(){return s.a.createElement(s.a.Fragment,null)}var Me=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={manifest:{},username:null,_id:null,avatar:!1,created_at:!1,savedGames:!1,myHighScores:!1,showIcon:!1,leaderboardRef:{difficulty:"expert",page:1},leaderboard:[],openMenu:!1,waitingforSession:!0,showGame:!0,gameLoaded:!1,signUpLogIn:!1,fn:function(t,a){e[t](a)},set:function(t){e.setState(t)}},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){window.scaleLanding(),window.updateUI(),D(this.state),j.getUser(this.state)}},{key:"handleHash",value:function(e){e?this.setState({signUpLogIn:e}):window.location.hash&&["#login","#signup"].includes(window.location.hash)&&this.setState({signUpLogIn:window.location.hash.split("#")[1]})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"app"},s.a.createElement(m.a,null,s.a.createElement(u.a,{render:function(t){return s.a.createElement(Ce,Object.assign({},t,{appState:e.state}))}}),this.state.showGame&&s.a.createElement(u.a,{render:function(t){return s.a.createElement(R,Object.assign({},t,{appState:e.state}))}}),s.a.createElement(u.c,null,s.a.createElement(u.a,{exact:!0,path:"/(|landing|game|home)/",render:function(){return s.a.createElement(Ie,null)}}),s.a.createElement(u.a,{exact:!0,path:"/dashboard(|/savedsessions|/myhighscores|/settings)/",render:function(t){return s.a.createElement(ne,Object.assign({},t,{appState:e.state}))}}),s.a.createElement(u.a,{exact:!0,path:"/leaderboard(|/beginner|/intermediate|/expert)/",render:function(t){return s.a.createElement(se,Object.assign({},t,{appState:e.state}))}}),s.a.createElement(u.a,{path:"*",render:function(){return s.a.createElement(U,{appState:e.state})}}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(Me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}]),[[49,1,2]]]);
//# sourceMappingURL=main.8bd888e9.chunk.js.map