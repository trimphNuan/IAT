(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"5p4Y":function(e,t,a){"use strict";var n=a("Kx42"),l=a("9IiP");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("lsD8");var r=n(a("yedQ"));a("7yTU");var d=n(a("w1zo"));a("ZlAx");var i=n(a("bW8O"));a("IVmH");var u=n(a("9Gyq"));a("vOXO");var s=n(a("t1t9"));a("XcO7");var c=n(a("Nyip"));a("iUfc");var o=n(a("rMwF"));a("NDJR");var f=n(a("O/nY"));a("lSjZ");var m=n(a("DZHi"));a("A4tV");var p=n(a("iZNX")),h=n(a("2m73"));a("u+7c");var y=n(a("j5m9")),g=n(a("JcFD")),E=n(a("1JdC")),v=n(a("Ack4")),M=n(a("z8zN")),D=n(a("DcvJ"));a("okGu");var N=n(a("izsL"));a("lVCw");var C=n(a("elJD"));a("LpNo");var x=n(a("w3MI"));a("WINg");var I,T,_,j=n(a("sIBm")),S=l(a("fjaS")),z=a("32uE"),b=n(a("I2Kj")),A=n(a("GicG")),k=n(a("hHl9")),L=a("mj9/"),P=j.default.Content,w=j.default.Sider,O=x.default.TreeNode,q=C.default.Option,R=N.default.Group,Y=N.default.TextArea,K=(I=(0,z.connect)(function(e){var t=e.system,a=e.interfaceCase,n=e.loading;return{system:t,interfaceCase:a,loading:n.effects["interfaceCase/queryTreeInfo"],debugLoading:n.effects["interfaceCase/queryDebugSample"]}}),I((_=function(e){function t(e){var a;return(0,g.default)(this,t),a=(0,v.default)(this,(0,M.default)(t).call(this,e)),a.handleRightMenuClick=function(e){var t=e.key;switch(t){case"1":a.handleAddCase();break;case"2":a.handleAddSubFolder();break;case"4":a.handleDeleteSubFolder();break;case"5":a.handleCopyCase();break;case"6":a.hanldeDeleteCase();break;default:y.default.warning("\u51fa\u73b0\u4e86\u4ec0\u4e48\u9b3c")}},a.treeToList=function(e){var t=[{id:e[0].id,name:e[0].name,noteType:e[0].noteType,index_id:e[0].index_id,pid:0}],a=function e(a,n){return a.children.forEach(function(a){t.push({id:a.id,name:a.name,noteType:a.noteType,index_id:a.index_id,pid:n}),a.children&&a.children.length>0&&e(a,a.id)})};return a(e[0],e[0].id),t},a.handleAddCase=function(){var e=a.state.rightClickItem.dataRef.id,t=a.state.treeList,n=a.treeToList(t);n.push({id:null,name:"",type:"case",noteType:0,index_id:99,pid:e});var l=function e(t){var a=[];return n.forEach(function(n){null!==t&&n.pid===t&&a.push({id:n.id,name:n.name,index_id:n.index_id,type:n.type,noteType:n.noteType,children:e(n.id)})}),a},r=l(0);a.setState({treeList:r,expandedKeys:[e.toString()],clickId:e,autoExpandParent:!0},function(){return a.clearMenu()})},a.handleAddSubFolder=function(){var e=a.state.rightClickItem.dataRef.id,t=a.state.treeList,n=a.treeToList(t);n.push({id:null,name:"",type:"folder",noteType:0,index_id:99,pid:e});var l=function e(t){var a=[];return n.forEach(function(n){null!==t&&n.pid===t&&a.push({id:n.id,name:n.name,index_id:n.index_id,type:n.type,noteType:n.noteType,children:e(n.id)})}),a},r=l(0);a.setState({treeList:r,expandedKeys:[e.toString()],clickId:e,autoExpandParent:!0},function(){return a.clearMenu()})},a.handleDeleteSubFolder=function(){var e=a.state.rightClickItem.dataRef.id,t=a.props.dispatch;t({type:"interfaceCase/queryDeleteFolder",payload:{id:a.state.rightClickItem.dataRef.id}}).then(function(){a.queryTreeList(a.state.project),a.clearMenu(),a.clearSelect(e)})},a.hanldeDeleteCase=function(){var e=a.state.rightClickItem.dataRef.id,t=a.props.dispatch;t({type:"interfaceCase/queryDeleteCase",payload:{id:e}}).then(function(){a.queryTreeList(a.state.project),a.clearMenu(),a.clearSelect(e)})},a.handleCopyCase=function(){var e=a.props.dispatch;e({type:"interfaceCase/queryCopyCase",payload:{id:a.state.rightClickItem.dataRef.id}}).then(function(){a.queryTreeList(a.state.project),a.clearMenu()})},a.queryProjectList=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=a.props.dispatch;t({type:"system/queryProjectList",payload:{status:"1"}}).then(function(){var t=a.props.system;a.setState({projectList:t.projectList},function(){if(e)a.querySampleInfo(e,!0);else{var t=(0,L.getTage)();if(t){var n=t.projectId;a.setState({project:n},function(){a.handleProjectChange(a.state.project)})}}})})},a.queryExtractList=function(e){var t=a.props.dispatch;t({type:"interfaceCase/queryExtractList",payload:{id:e}}).then(function(){var e=a.props.interfaceCase;a.setState({extractList:e.extractList})})},a.queryTreeList=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=a.props.dispatch;n({type:"interfaceCase/queryTreeList",payload:{id:e}}).then(function(){var e=a.props.interfaceCase;a.setState({treeList:e.treeList},function(){t&&a.setState({selectedKeys:[a.state.caseId],expandedKeys:[a.state.caseId]})})})},a.querySampleInfo=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=a.props.dispatch;n({type:"interfaceCase/querySampleInfo",payload:{id:e}}).then(function(){var e=a.props.interfaceCase;e.sampleInfo?a.setState({info:e.sampleInfo,selectNoteType:2,infoName:e.sampleInfo.name,project:e.sampleInfo.projectId,infoPath:e.sampleInfo.path,infoMethod:e.sampleInfo.method,infoParams:e.sampleInfo.params,infoParamsFormatType:e.sampleInfo.paramType,infoAssertType:e.sampleInfo.asserts.assertsType,infoExtractType:e.sampleInfo.extract.extractType,infoAssertData:e.sampleInfo.asserts.assertData,infoExtractData:e.sampleInfo.extract.extractData},function(){t&&((0,L.setTage)({projectId:a.state.project}),a.queryTreeList(a.state.project,!0),a.queryExtractList(a.state.project))}):a.setState({info:{name:"",path:"",method:"GET",paramType:1,params:[],asserts:{assertsType:1,assertData:[]},extract:{extractType:0,extractData:[]}}})})},a.queryTreeInfo=function(e){var t=a.props.dispatch;t({type:"interfaceCase/queryTreeInfo",payload:{id:e}}).then(function(){var e=a.props.interfaceCase,t=a.state.info;t.name=e.infoData.name,a.setState({info:t,infoName:e.infoData.name})})},a.handleProjectChange=function(e){a.setState({project:e},function(){(0,L.setTage)({projectId:a.state.project}),a.queryTreeList(e),a.queryExtractList(e)})},a.onDrop=function(e){var t=e.node.props.eventKey,n=e.dragNode.props.eventKey,l=a.props.dispatch;l({type:"interfaceCase/queryUpdateTreeIndex",payload:{dropKey:t,dragKey:n}}).then(function(){a.queryTreeList(a.state.project)})},a.onSelect=function(e,t){e.length>0&&a.setState({selectedKeys:e,selectNoteType:t.node.props.dataRef.noteType,infoName:"",infoPath:"",infoMethod:"GET",infoParams:null,infoAssertType:1,infoExtractType:0,infoAssertData:null,infoExtractData:null},function(){a.queryTreeInfo(a.state.selectedKeys[0]),2===a.state.selectNoteType&&(a.querySampleInfo(a.state.selectedKeys[0]),a.queryExtractList(a.state.project))})},a.onCheck=function(e,t){console.log("onCheck",e,t)},a.getXY=function(e){var t=a.treeBox.scrollTop,n=e.offsetTop-t,l=e.offsetLeft;while(e.offsetParent)e=e.offsetParent,window.navigator.userAgent.indexOf("MSTE 8")>-1?(n+=e.offsetTop,l+=e.offsetLeft):(n+=e.offsetTop+e.clientTop,l+=e.offsetLeft+e.clientLeft);return{x:l,y:n}},a.handleOnRightClick=function(e){var t=a.getXY(e.event.currentTarget),n=t.x,l=t.y;a.setState({rightClickItem:{pageX:n+e.event.currentTarget.clientWidth,pageY:l+2,id:e.node.props.eventKey,noteType:e.node.props.noteType,dataRef:e.node.props.dataRef}})},a.clearMenu=function(){a.setState({rightClickItem:null})},a.clearSelect=function(e){a.state.selectedKeys&&a.state.selectedKeys[0]===e.toString()&&a.setState({selectedKeys:null})},a.submitAddFolder=function(e){if(!e)return y.default.warning("\u540d\u79f0\u4e0d\u53ef\u4e3a\u7a7a"),void a.queryTreeList(a.state.project);var t=a.props.dispatch;t({type:"interfaceCase/queryAddSubFolder",payload:{id:a.state.clickId,name:e}}).then(function(){a.queryTreeList(a.state.project)})},a.submitAddCase=function(e){if(!e)return y.default.warning("\u540d\u79f0\u4e0d\u53ef\u4e3a\u7a7a"),void a.queryTreeList(a.state.project);var t=a.props.dispatch;t({type:"interfaceCase/queryAddCase",payload:{id:a.state.clickId,name:e}}).then(function(){a.queryTreeList(a.state.project)})},a.hanldeNameChange=function(e){a.setState({infoName:e.target.value},function(){var e=a.props.dispatch;e({type:"interfaceCase/queryUpdateFolderName",payload:{id:a.state.selectedKeys[0],name:a.state.infoName}}).then(function(){a.queryTreeList(a.state.project)})})},a.handleMethodChange=function(e){var t=a.state.info;t.method=e;var n=a.props.dispatch;n({type:"interfaceCase/queryUpdateSample",payload:{id:a.state.selectedKeys[0],info:t}}).then(function(){a.querySampleInfo(a.state.selectedKeys[0])})},a.handleAssertTypeChange=function(e){var t=a.state.info;t.asserts.assertsType=e.target.value,2===e.target.value&&(t.asserts.assertData=[{id:(new Date).getTime(),key:"",value:""}]);var n=a.props.dispatch;n({type:"interfaceCase/queryUpdateSample",payload:{id:a.state.selectedKeys[0],info:t}}).then(function(){a.querySampleInfo(a.state.selectedKeys[0])})},a.handleParamsFormatTypeChange=function(e){var t=a.state.info;t.paramType=e.target.value;var n=a.props.dispatch;n({type:"interfaceCase/queryUpdateSample",payload:{id:a.state.selectedKeys[0],info:t}}).then(function(){a.querySampleInfo(a.state.selectedKeys[0])})},a.handleExtractTypeChange=function(e){var t=a.state.info;t.extract.extractType=e.target.value,1===e.target.value&&(t.extract.extractData=[{id:(new Date).getTime(),key:"",value:""}]);var n=a.props.dispatch;n({type:"interfaceCase/queryUpdateSample",payload:{id:a.state.selectedKeys[0],info:t}}).then(function(){a.querySampleInfo(a.state.selectedKeys[0])})},a.handleAssertDataChange=function(){var e=a.state.info;e.asserts.assertData=a.state.infoAssertData;var t=a.props.dispatch;t({type:"interfaceCase/queryUpdateSample",payload:{id:a.state.selectedKeys[0],info:e}}).then(function(){a.querySampleInfo(a.state.selectedKeys[0])})},a.handleExtractDataChange=function(){var e=a.state.info;e.extract.extractData=a.state.infoExtractData;var t=a.props.dispatch;t({type:"interfaceCase/queryUpdateSample",payload:{id:a.state.selectedKeys[0],info:e}}).then(function(){a.querySampleInfo(a.state.selectedKeys[0])})},a.queryUpdateSample=function(e,t){var n=a.state.info;n[e]=t;var l=a.props.dispatch;l({type:"interfaceCase/queryUpdateSample",payload:{id:a.state.selectedKeys[0],info:n}}).then(function(){a.querySampleInfo(a.state.selectedKeys[0])})},a.hanldePathChange=function(e){var t=a.state.info;t.path=e.target.value;var n=a.props.dispatch;n({type:"interfaceCase/queryUpdateSample",payload:{id:a.state.selectedKeys[0],info:t}}).then(function(){a.querySampleInfo(a.state.selectedKeys[0])})},a.handleAddParams=function(){var e={id:(new Date).getTime(),type:!1,key:"",value:""};if(a.state.infoParams){var t=a.state.infoParams.concat(e);a.setState({infoParams:t},function(){return a.queryUpdateSample("params",a.state.infoParams)})}else a.setState({infoParams:[e]},function(){return a.queryUpdateSample("params",a.state.infoParams)})},a.handleAddHeader=function(){var e={id:(new Date).getTime(),key:"",value:""};if(a.state.debugHeader){var t=a.state.debugHeader.concat(e);a.setState({debugHeader:t})}else a.setState({debugHeader:[e]})},a.handeAssertData=function(){var e={id:(new Date).getTime(),value:""};if(a.state.infoAssertData){var t=a.state.infoAssertData.concat(e);a.setState({infoAssertData:t},function(){return a.handleAssertDataChange()})}else a.setState({infoAssertData:[e]},function(){return a.handleAssertDataChange()})},a.handleParamsKeyChange=function(e,t){var n=a.state.infoParams;n[t].key=e.target.value,a.setState({infoParams:n})},a.handleAssertJsonKeyChange=function(e,t){var n=a.state.infoAssertData;n[t].key=e.target.value,a.setState({infoAssertData:n})},a.handleExtractJsonKeyChange=function(e,t){var n=a.state.infoExtractData;n[t].key=e.target.value,a.setState({infoExtractData:n})},a.handleHeaderKeyChange=function(e,t){var n=a.state.debugHeader;n[t].key=e.target.value,a.setState({debugHeader:n})},a.handleParamsValueChange=function(e,t){var n=a.state.infoParams;n[t].value=e.target.value,a.setState({infoParams:n})},a.handleParamsSelectValueChange=function(e,t){var n=a.state.infoParams;n[t].value=e,a.setState({infoParams:n},function(){return a.queryUpdateSample("params",a.state.infoParams)})},a.handleParamsTypeChange=function(e,t){var n=a.state.infoParams;n[t].type=e,n[t].value="",a.setState({infoParams:n},function(){return a.queryUpdateSample("params",a.state.infoParams)})},a.handleAssertJsonValueChange=function(e,t){var n=a.state.infoAssertData;n[t].value=e.target.value,a.setState({infoAssertData:n})},a.handleExtractJsonValueChange=function(e,t){var n=a.state.infoExtractData;n[t].value=e.target.value,a.setState({infoExtractData:n})},a.handleHeaderValueChange=function(e,t){var n=a.state.debugHeader;n[t].value=e.target.value,a.setState({debugHeader:n})},a.onAssertDataChange=function(e,t){var n=a.state.infoAssertData;n[t].value=e.target.value,a.setState({infoAssertData:n})},a.handleDeleteParams=function(e){var t=a.state.infoParams;0===e&&1===t.length?a.setState({infoParams:null},function(){a.queryUpdateSample("params",a.state.infoParams)}):(t.splice(e,1),a.setState({infoParams:t},function(){a.queryUpdateSample("params",a.state.infoParams)}))},a.handleDeleteHeader=function(e){var t=a.state.debugHeader;0===e&&1===t.length?a.setState({debugHeader:null}):(t.splice(e,1),a.setState({debugHeader:t}))},a.handleDeleteSection=function(e){var t=a.state.infoAssertData;0===e&&1===t.length?a.setState({infoAssertData:[]},function(){return a.handleAssertDataChange()}):(t.splice(e,1),a.setState({infoAssertData:t},function(){return a.handleAssertDataChange()}))},a.onExpandTree=function(e){a.setState({expandedKeys:e,autoExpandParent:!1})},a.handleDebug=function(){var e=a.props.dispatch,t={};a.state.debugHeader&&a.state.debugHeader.length>0&&a.state.debugHeader.forEach(function(e){t[e.key]=e.value}),e({type:"interfaceCase/queryDebugSample",payload:{id:a.state.selectedKeys[0],domain:a.state.debugDomain,headers:t}}).then(function(){var e=a.props.interfaceCase;a.setState({debugData:e.debugInfo.debugData,debugResult:e.debugInfo.debugResult})})},a.handleShowAddDebugHeader=function(){a.setState({showAddHeader:!a.state.showAddHeader,debugHeader:[]})},a.state={projectList:[],project:null,clickId:null,caseId:null,treeList:[],extractList:[],rightClickItem:null,debugDomain:null,selectNoteType:null,infoParamsFormatType:null,infoName:"",infoPath:"",infoMethod:"GET",infoParams:null,infoAssertData:null,infoExtractData:null,autoExpandParent:!0,showAddHeader:!1,debugHeader:[],info:{name:"",path:"",method:"GET",paramType:1,params:[],asserts:{assertsType:1,assertData:[]},extract:{extractType:0,extractData:[]}},debugData:{},debugResult:0},a.setDomTreeBoxRef=function(e){return a.treeBox=e},a}return(0,D.default)(t,e),(0,E.default)(t,[{key:"componentWillMount",value:function(){var e=this.props.location.search;if(-1!==e.indexOf("?")){var t=e.substr(1);t&&this.setState({caseId:t}),this.queryProjectList(t)}else this.queryProjectList()}},{key:"getNodeTreeMenu",value:function(){var e=(0,h.default)({},this.state.rightClickItem),t=e.pageX,a=e.pageY,n=e.noteType,l={position:"absolute",boxShadow:"3px 3px 1px #ecf0f1",border:"1px solid #ecf0f1",left:"".concat(t,"px"),top:"".concat(a-2,"px"),zIndex:999},r=1===n?S.default.createElement(m.default,{onClick:this.handleRightMenuClick,style:l,className:A.default.RightMenu},S.default.createElement(m.default.Item,{key:"1"},S.default.createElement(p.default,{type:"plus-circle"}),"\u6dfb\u52a0\u7528\u4f8b"),S.default.createElement(m.default.Item,{key:"2"},S.default.createElement(p.default,{type:"folder-add"}),"\u6dfb\u52a0\u5b50\u76ee\u5f55"),S.default.createElement(m.default.Item,{key:"4"},S.default.createElement(p.default,{type:"minus-square-o"}),"\u5220\u9664\u76ee\u5f55")):S.default.createElement(m.default,{onClick:this.handleRightMenuClick,style:l,className:A.default.RightMenu},S.default.createElement(m.default.Item,{key:"5"},S.default.createElement(p.default,{type:"copy"}),"\u590d\u5236\u7528\u4f8b"),S.default.createElement(m.default.Item,{key:"6"},S.default.createElement(p.default,{type:"minus-square-o"}),"\u5220\u9664\u7528\u4f8b"));return this.state.rightClickItem&&r}},{key:"render",value:function(){var e=this,t=this.state,a=t.projectList,n=t.project,l=t.treeList,m=t.rightClickItem,h=t.expandedKeys,y=t.selectedKeys,g=t.autoExpandParent,E=t.selectNoteType,v=t.infoName,M=t.infoPath,D=t.infoMethod,I=t.infoParams,T=t.infoAssertType,_=t.infoExtractType,z=t.infoAssertData,L=t.infoParamsFormatType,K=t.infoExtractData,U=t.debugDomain,H=t.debugData,Q=t.showAddHeader,G=t.debugHeader,B=t.debugResult,J=t.extractList,F=this.props,Z=F.loading,W=F.debugLoading,V=function t(a){return a.map(function(a){if(1===a.noteType)return S.default.createElement(O,{icon:S.default.createElement(p.default,{type:"folder",theme:"filled",style:{color:"#3498db"}}),key:a.id,dataRef:a,title:a.name,noteType:a.noteType},a.children&&t(a.children));if(0===a.noteType){if("folder"===a.type)return S.default.createElement(O,{icon:S.default.createElement(p.default,{type:"folder",theme:"filled",style:{color:"#3498db"}}),selectable:!1,title:S.default.createElement(N.default,{size:"small",style:{width:100},autoFocus:!0,onBlur:function(t){return e.submitAddFolder(t.target.value)},onPressEnter:function(t){return e.submitAddFolder(t.target.value)}}),key:"0-0-1"});if("case"===a.type)return S.default.createElement(O,{icon:S.default.createElement(p.default,{type:"api",theme:"filled"}),selectable:!1,title:S.default.createElement(N.default,{size:"small",style:{width:100},autoFocus:!0,onBlur:function(t){return e.submitAddCase(t.target.value)},onPressEnter:function(t){return e.submitAddCase(t.target.value)}}),key:"0-0-1"})}return S.default.createElement(O,{icon:S.default.createElement(p.default,{type:"api",theme:"filled"}),key:a.id,dataRef:a,title:a.name,noteType:a.noteType})})},X=S.default.createElement("div",null,S.default.createElement(f.default,{bordered:!1,className:A.default.right_empty_container},S.default.createElement("img",{src:k.default,alt:"empty",className:A.default.empty_image}))),$=S.default.createElement(f.default,{loading:Z,bordered:!1},S.default.createElement("div",{className:A.default.item_container},S.default.createElement("div",{className:A.default.item_label_container},S.default.createElement("span",null,"\u76ee\u5f55\u540d\u79f0\uff1a")),S.default.createElement("div",{className:A.default.item_content_container},S.default.createElement(N.default,{placeholder:"\u6807\u9898\u540d\u79f0",size:"small",value:v,onChange:function(t){e.setState({infoName:t.target.value})},onBlur:function(t){return e.hanldeNameChange(t)},className:A.default.item_item}))),S.default.createElement(o.default,null)),ee=S.default.createElement(f.default,{loading:Z,bordered:!1},S.default.createElement(o.default,{orientation:"left"},"\u57fa\u672c\u4fe1\u606f"),S.default.createElement("div",{className:A.default.item_container},S.default.createElement("div",{className:A.default.item_label_container},S.default.createElement("span",null,"\u7528\u4f8b\u540d\u79f0\uff1a")),S.default.createElement("div",{className:A.default.item_content_container},S.default.createElement(N.default,{placeholder:"\u6807\u9898\u540d\u79f0",size:"small",value:v,onChange:function(t){e.setState({infoName:t.target.value})},onBlur:function(t){return e.hanldeNameChange(t)},className:A.default.item_item}))),S.default.createElement(o.default,{orientation:"left"},"\u8bf7\u6c42\u8bbe\u7f6e"),S.default.createElement("div",{className:A.default.item_container},S.default.createElement("div",{className:A.default.item_label_container},S.default.createElement("span",null,"\u8bf7\u6c42\u8def\u5f84\uff1a")),S.default.createElement("div",{className:A.default.item_content_container},S.default.createElement(R,{className:A.default.item_item,compact:!0},S.default.createElement(C.default,{placeholder:"method",size:"small",value:D,style:{width:"20%"},onChange:function(t){return e.handleMethodChange(t)}},S.default.createElement(q,{value:"POST"},"POST"),S.default.createElement(q,{value:"GET"},"GET")),S.default.createElement(N.default,{style:{width:"80%"},placeholder:"\u8bf7\u6c42\u8def\u5f84eg:/path/path",size:"small",value:M,onChange:function(t){e.setState({infoPath:t.target.value})},onBlur:function(t){return e.hanldePathChange(t)}})))),"POST"===D&&S.default.createElement("div",{className:A.default.item_container},S.default.createElement("div",{className:A.default.item_label_container},S.default.createElement("span",null,"\u53c2\u6570\u7c7b\u578b\uff1a")),S.default.createElement("div",{className:A.default.item_content_container},S.default.createElement(c.default.Group,{value:L,onChange:function(t){return e.handleParamsFormatTypeChange(t)}},S.default.createElement(c.default,{value:1},"x-www-form-urlencoded"),S.default.createElement(c.default,{value:2},S.default.createElement(s.default,{title:"\u8bbe\u7f6e\u8be5\u7c7b\u578b\u53c2\u6570\u540e\uff0c\u5c06\u4e0d\u652f\u6301\u4efb\u52a1\u4e2d\u7684\u5168\u5c40\u9ed8\u8ba4\u53c2\u6570\u8bbe\u7f6e"},S.default.createElement("a",null,"json"))),S.default.createElement(c.default,{value:3},"form-data")))),S.default.createElement("div",{className:A.default.item_container},S.default.createElement("div",{className:A.default.item_label_container},S.default.createElement("span",null,"\u8bf7\u6c42\u53c2\u6570\uff1a")),S.default.createElement("div",{className:A.default.item_content_container},I&&I.map(function(t,a){return S.default.createElement(R,{size:"small",key:t.id,className:A.default.item_attrs_container},S.default.createElement(u.default,{span:6},S.default.createElement(N.default,{placeholder:"\u5c5e\u6027\u540d",value:t.key,onChange:function(t){return e.handleParamsKeyChange(t,a)},onBlur:function(){return e.queryUpdateSample("params",e.state.infoParams)}})),S.default.createElement(u.default,{span:10},t.type&&S.default.createElement(C.default,{placeholder:"\u9009\u62e9\u81ea\u5b9a\u4e49\u53c2\u6570",value:t.value,style:{width:"100%"},size:"small",onChange:function(t){return e.handleParamsSelectValueChange(t,a)}},J&&J.map(function(e){var t=e.extractKey.replace("${","").replace("}","");return S.default.createElement(q,{key:e.id,value:"${".concat(e.extractKey,"}"),title:e.caseName,disabled:K.length>0&&t===K[0].key},S.default.createElement("span",{style:K.length>0&&t===K[0].key?{}:{color:"blue"}},t))})),!t.type&&S.default.createElement(N.default,{placeholder:"\u5c5e\u6027\u503c",value:t.value,onChange:function(t){return e.handleParamsValueChange(t,a)},onBlur:function(){return e.queryUpdateSample("params",e.state.infoParams)}})),S.default.createElement(u.default,{span:2},S.default.createElement(i.default,{size:"small",checked:t.type,onChange:function(t){return e.handleParamsTypeChange(t,a)}})),S.default.createElement(u.default,{span:1},S.default.createElement(p.default,{type:"minus-circle",onClick:function(){return e.handleDeleteParams(a)}})))}),S.default.createElement(d.default,{type:"dashed",size:"small",onClick:function(){return e.handleAddParams()},className:A.default.item_item},S.default.createElement(p.default,{type:"plus"})," Add field"))),S.default.createElement(o.default,{orientation:"left"},"\u8fd4\u56de\u6821\u9a8c"),S.default.createElement("div",{className:A.default.item_container},S.default.createElement("div",{className:A.default.item_label_container},S.default.createElement("span",null,"\u6821\u9a8c\u7c7b\u578b\uff1a")),S.default.createElement("div",{className:A.default.item_content_container},S.default.createElement(c.default.Group,{value:T,onChange:function(t){return e.handleAssertTypeChange(t)}},S.default.createElement(c.default,{value:1},"\u54cd\u5e94\u65ad\u8a00"),S.default.createElement(c.default,{value:2},"JSON\u65ad\u8a00")))),S.default.createElement("div",{className:A.default.item_container},S.default.createElement("div",{className:A.default.item_label_container},S.default.createElement("span",null,"\u6821\u9a8c\u503c\uff1a")),S.default.createElement("div",{className:A.default.item_content_container},1===T&&S.default.createElement("div",null,S.default.createElement("div",{className:A.default.item_item},z&&z.map(function(t,a){return S.default.createElement("div",{style:{marginBottom:10,display:"flex",flexDirection:"row"},key:t.id},S.default.createElement(Y,{placeholder:'\u9700\u8981\u6821\u9a8c\u7684\u8fd4\u56de\u503c.eg: "code":0 ',value:t.value,autosize:{minRows:2,maxRows:6},onChange:function(t){return e.onAssertDataChange(t,a)},onBlur:function(){return e.handleAssertDataChange()}}),S.default.createElement("div",{className:A.default.section_delete},S.default.createElement(p.default,{type:"minus-circle",onClick:function(){return e.handleDeleteSection(a)}})))})),S.default.createElement(d.default,{type:"dashed",onClick:function(){return e.handeAssertData()},className:A.default.item_item,style:{height:60}},S.default.createElement(p.default,{type:"plus"})," Add field")),2===T&&S.default.createElement("div",null,z&&z.map(function(t,a){return S.default.createElement(R,{size:"small",className:A.default.item_attrs_container,key:t.id},S.default.createElement(u.default,{span:10},S.default.createElement(N.default,{placeholder:"json\u8def\u5f84.eg: content.testdata.xxx ",value:t.key,onChange:function(t){return e.handleAssertJsonKeyChange(t,a)},onBlur:function(){return e.handleAssertDataChange()}})),S.default.createElement(u.default,{span:10},S.default.createElement(N.default,{placeholder:"\u5b57\u6bb5\u503c",value:t.value,onChange:function(t){return e.handleAssertJsonValueChange(t,a)},onBlur:function(){return e.handleAssertDataChange()}})))})))),S.default.createElement(o.default,{orientation:"left"},"\u53c2\u6570\u5316\u8bbe\u7f6e"),S.default.createElement("div",{className:A.default.item_container},S.default.createElement("div",{className:A.default.item_label_container},S.default.createElement("span",null,"\u63d0\u53d6\u65b9\u5f0f\uff1a")),S.default.createElement("div",{className:A.default.item_content_container},S.default.createElement(c.default.Group,{value:_,onChange:function(t){return e.handleExtractTypeChange(t)}},S.default.createElement(c.default,{value:0},"\u4e0d\u63d0\u53d6"),S.default.createElement(c.default,{value:1},"JSON\u63d0\u53d6")))),S.default.createElement("div",{className:A.default.item_container},S.default.createElement("div",{className:A.default.item_label_container},S.default.createElement("span",null,"\u5b9a\u4e49\u53c2\u6570\uff1a")),S.default.createElement("div",{className:A.default.item_content_container},1===_&&S.default.createElement("div",null,K&&K.map(function(t,a){return S.default.createElement(R,{size:"small",className:A.default.item_attrs_container,key:t.id},S.default.createElement(u.default,{span:10},S.default.createElement(N.default,{placeholder:"\u53c2\u6570\u540d\u79f0",style:{color:"blue"},value:t.key,onChange:function(t){return e.handleExtractJsonKeyChange(t,a)},onBlur:function(){return e.handleExtractDataChange()}})),S.default.createElement(u.default,{span:10},S.default.createElement(N.default,{placeholder:"json\u8def\u5f84.eg: content.testdata.xxx ",value:t.value,onChange:function(t){return e.handleExtractJsonValueChange(t,a)},onBlur:function(){return e.handleExtractDataChange()}})))}))))),te=S.default.createElement(r.default,{spinning:W||!1},S.default.createElement(f.default,{bordered:!1},S.default.createElement("div",{className:A.default.debug_label_container},S.default.createElement("span",null,"\u8c03\u8bd5\u57df\u540d\uff1a")),S.default.createElement("div",{className:A.default.item_container},S.default.createElement("div",{className:A.default.debug_content_container},S.default.createElement(N.default,{placeholder:"eg:https://app.xxxx.com",size:"small",value:U,onChange:function(t){e.setState({debugDomain:t.target.value})}})),S.default.createElement(d.default,{type:"primary",size:"small",onClick:function(){return e.handleDebug()}},"\u8c03\u8bd5")),S.default.createElement("div",{className:A.default.debug_header_container},S.default.createElement("div",{className:A.default.debug_add_header},S.default.createElement("a",{onClick:function(){return e.handleShowAddDebugHeader()}},"\u8bf7\u6c42\u5934\u8bbe\u7f6e"))),Q&&S.default.createElement("div",{className:A.default.debug_header_content},G&&G.map(function(t,a){return S.default.createElement(R,{size:"small",key:t.id,className:A.default.item_attrs_container},S.default.createElement(u.default,{span:8},S.default.createElement(N.default,{placeholder:"\u5c5e\u6027\u540d",value:t.key,onChange:function(t){return e.handleHeaderKeyChange(t,a)}})),S.default.createElement(u.default,{span:10},S.default.createElement(N.default,{placeholder:"\u5c5e\u6027\u503c",value:t.value,onChange:function(t){return e.handleHeaderValueChange(t,a)}})),S.default.createElement("div",{className:A.default.action_icon},S.default.createElement(p.default,{type:"minus-circle",onClick:function(){return e.handleDeleteHeader(a)}})))}),S.default.createElement(d.default,{type:"dashed",size:"small",onClick:function(){return e.handleAddHeader()},className:A.default.item_item},S.default.createElement(p.default,{type:"plus"})," Add field")),S.default.createElement("div",{className:A.default.debug_label_container},S.default.createElement("span",null,"\u54cd\u5e94\u4fe1\u606f\uff1a")),S.default.createElement("div",{className:A.default.item_container},S.default.createElement("div",{className:A.default.debug_response_container},0!==B&&S.default.createElement(b.default,{id:"json-pretty",data:H}))),S.default.createElement("div",{className:A.default.debug_label_container},S.default.createElement("span",null,"\u6821\u9a8c\u7ed3\u679c\uff1a")),S.default.createElement("div",{className:A.default.item_container},S.default.createElement("div",{className:A.default.debug_assert_container},1===B&&S.default.createElement("div",{className:A.default.success},S.default.createElement(p.default,{type:"check-circle",theme:"filled",style:{fontSize:22}}),S.default.createElement("div",null,"\u6d4b\u8bd5\u901a\u8fc7")),2===B&&S.default.createElement("div",{className:A.default.fail},S.default.createElement(p.default,{type:"close-circle",theme:"filled",style:{fontSize:22}}),S.default.createElement("div",null,"\u6d4b\u8bd5\u5931\u8d25"))))));return S.default.createElement(P,null,S.default.createElement(j.default,{style:{background:"#fff",borderRadius:"5px"},onClick:function(){return e.clearMenu()}},S.default.createElement(w,{width:220,style:{background:"#fff",borderRight:"1px solid #e8e8e8",padding:10,height:"80vh"}},S.default.createElement(C.default,{placeholder:"\u8bf7\u9009\u62e9\u9879\u76ee",value:n||void 0,style:{width:"100%"},size:"small",onChange:this.handleProjectChange},a&&a.map(function(e){return S.default.createElement(q,{value:e.id,key:e.id},e.name)})),S.default.createElement("div",{className:A.default.left_container,ref:this.setDomTreeBoxRef},S.default.createElement(x.default,{showIcon:!0,draggable:!0,autoExpandParent:g,defaultExpandAll:!0,selectedKeys:y,expandedKeys:h,onSelect:this.onSelect,onDrop:this.onDrop,onCheck:this.onCheck,onExpand:this.onExpandTree,onRightClick:function(t){return e.handleOnRightClick(t)}},l&&V(l)))),S.default.createElement("div",{style:{display:"flex",flexDirection:"row",width:"100%"}},S.default.createElement(P,{style:{background:"#fff",padding:10,height:"80vh",width:"70%",borderRight:"1px solid #e8e8e8"}},S.default.createElement("div",{className:A.default.right_container},!(y&&y.length>0)&&X,y&&1===E&&$,y&&2===E&&ee)),S.default.createElement(P,{style:{background:"#fff",padding:10,height:"80vh",width:"30%"}},S.default.createElement("div",{className:A.default.right_container},y&&2===E&&te)))),m&&this.getNodeTreeMenu())}}]),t}(S.Component),T=_))||T),U=K;t.default=U},GicG:function(e,t,a){e.exports={left_container:"antd-pro\\pages\\-i-a-t\\-interface\\index-left_container",RightMenu:"antd-pro\\pages\\-i-a-t\\-interface\\index-RightMenu",right_container:"antd-pro\\pages\\-i-a-t\\-interface\\index-right_container",item_container:"antd-pro\\pages\\-i-a-t\\-interface\\index-item_container",item_label_container:"antd-pro\\pages\\-i-a-t\\-interface\\index-item_label_container",debug_label_container:"antd-pro\\pages\\-i-a-t\\-interface\\index-debug_label_container",section_delete:"antd-pro\\pages\\-i-a-t\\-interface\\index-section_delete",action_icon:"antd-pro\\pages\\-i-a-t\\-interface\\index-action_icon",debug_content_container:"antd-pro\\pages\\-i-a-t\\-interface\\index-debug_content_container",debug_response_container:"antd-pro\\pages\\-i-a-t\\-interface\\index-debug_response_container",debug_assert_container:"antd-pro\\pages\\-i-a-t\\-interface\\index-debug_assert_container",success:"antd-pro\\pages\\-i-a-t\\-interface\\index-success",fail:"antd-pro\\pages\\-i-a-t\\-interface\\index-fail",debug_header_container:"antd-pro\\pages\\-i-a-t\\-interface\\index-debug_header_container",debug_header_content:"antd-pro\\pages\\-i-a-t\\-interface\\index-debug_header_content",debug_add_header:"antd-pro\\pages\\-i-a-t\\-interface\\index-debug_add_header",item_content_container:"antd-pro\\pages\\-i-a-t\\-interface\\index-item_content_container",item_item:"antd-pro\\pages\\-i-a-t\\-interface\\index-item_item",item_editor:"antd-pro\\pages\\-i-a-t\\-interface\\index-item_editor",right_empty_container:"antd-pro\\pages\\-i-a-t\\-interface\\index-right_empty_container",empty_image:"antd-pro\\pages\\-i-a-t\\-interface\\index-empty_image"}},hHl9:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI4NDI2NDE4OTU1IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijk2NzMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMTAyLjQgNzQ0LjcyNzI3MyAxMzkuNjM2MzY0IDc0NC43MjcyNzNsMC0xMzkuNjM2MzY0TDEwMi40IDYwNS4wOTA5MDljMCAwLTU1Ljg1NDU0NSAwLTU1Ljg1NDU0NSA2OS44MTgxODJTMTAyLjQgNzQ0LjcyNzI3MyAxMDIuNCA3NDQuNzI3MjczeiIgcC1pZD0iOTY3NCIgZmlsbD0iI2RiZGJkYiI+PC9wYXRoPjxwYXRoIGQ9Ik0xMDIuNCAzMjUuODE4MTgyIDEzOS42MzYzNjQgMzI1LjgxODE4MiAxMzkuNjM2MzY0IDE4Ni4xODE4MTggMTAyLjQgMTg2LjE4MTgxOEMxMDIuNCAxODYuMTgxODE4IDQ2LjU0NTQ1NSAxODYuMTgxODE4IDQ2LjU0NTQ1NSAyNTZTMTAyLjQgMzI1LjgxODE4MiAxMDIuNCAzMjUuODE4MTgyeiIgcC1pZD0iOTY3NSIgZmlsbD0iI2RiZGJkYiI+PC9wYXRoPjxwYXRoIGQ9Ik0xMDIuNCA1MTIgMTM5LjYzNjM2NCA1MTIgMTM5LjYzNjM2NCAzNzIuMzYzNjM2IDEwMi40IDM3Mi4zNjM2MzZDMTAyLjQgMzcyLjM2MzYzNiA0Ni41NDU0NTUgMzcyLjM2MzYzNiA0Ni41NDU0NTUgNDQyLjE4MTgxOFMxMDIuNCA1MTIgMTAyLjQgNTEyeiIgcC1pZD0iOTY3NiIgZmlsbD0iI2RiZGJkYiI+PC9wYXRoPjxwYXRoIGQ9Ik0xMDIuNCA5MzAuOTA5MDkxIDEzOS42MzYzNjQgOTMwLjkwOTA5MWwwLTEzOS42MzYzNjRMMTAyLjQgNzkxLjI3MjcyN2MwIDAtNTUuODU0NTQ1IDAtNTUuODU0NTQ1IDY5LjgxODE4MlMxMDIuNCA5MzAuOTA5MDkxIDEwMi40IDkzMC45MDkwOTF6IiBwLWlkPSI5Njc3IiBmaWxsPSIjZGJkYmRiIj48L3BhdGg+PHBhdGggZD0iTTE4Ni4xODE4MTggMTM5LjI2NGwwIDgzOC41NjI5MDlDMTg2LjE4MTgxOCAxMDAzLjMzMzgxOCAyMDcuMDgwNzI3IDEwMjQgMjMzLjA5OTYzNiAxMDI0bDYwNC4zOTI3MjcgMEM4NjMuMzcxNjM2IDEwMjQgODg0LjM2MzYzNiAxMDAyLjgyMTgxOCA4ODQuMzYzNjM2IDk3Ny44MjY5MDlMODg0LjM2MzYzNiAxMzkuMjY0Qzg4NC4zNjM2MzYgMTEzLjc1NzA5MSA4NjMuNDY0NzI3IDkzLjA5MDkwOSA4MzcuNDQ1ODE4IDkzLjA5MDkwOUwyMzMuMDk5NjM2IDkzLjA5MDkwOUMyMDcuMTczODE4IDkzLjA5MDkwOSAxODYuMTgxODE4IDExNC4yNjkwOTEgMTg2LjE4MTgxOCAxMzkuMjY0ek04MzcuODE4MTgyIDEzOS42MzYzNjRsMCA4MzcuODE4MTgyTDIzMi43MjcyNzMgOTc3LjQ1NDU0NSAyMzIuNzI3MjczIDEzOS42MzYzNjQgODM3LjgxODE4MiAxMzkuNjM2MzY0eiIgcC1pZD0iOTY3OCIgZmlsbD0iI2RiZGJkYiI+PC9wYXRoPjxwYXRoIGQ9Ik05NzcuNDU0NTQ1IDkzMC45MDkwOTEgOTc3LjQ1NDU0NSAwIDI3OS4yNzI3MjcgMCAyNzkuMjcyNzI3IDQzLjY1OTYzNiA5MzQuOTEyIDQzLjY1OTYzNiA5MzQuOTEyIDkzMC45MDkwOTFaIiBwLWlkPSI5Njc5IiBmaWxsPSIjZGJkYmRiIj48L3BhdGg+PC9zdmc+"},"mj9/":function(e,t,a){"use strict";function n(){return JSON.parse(localStorage.getItem("iat-tage"))||""}function l(e){var t=JSON.stringify(e);return localStorage.setItem("iat-tage",t)}Object.defineProperty(t,"__esModule",{value:!0}),t.getTage=n,t.setTage=l}}]);