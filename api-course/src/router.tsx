import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import UseStateDemo from "./course/useState/Demo";
import UseStateDemo2 from "./course/useState/Rectangle"; //useState demo
import DemoByClass from "./course/introduce/demoByClass"; //简单对比demo
import DemoByHooks from "./course/introduce/demoByHooks"; //简单对比demo
import DemoByControl from "./course/introduce"; //对比受控组件
import UseEffectDemo1 from "./course/useEffect/demo01";
import UseEffectDemo2 from "./course/useEffect/demo02";
import UseEffectDemo3 from "./course/useEffect/demo03";
import CustomHooksDemo from "./course/customHooks/app";
import UseContextDemo1 from "./course/useContext";
import UseContextDemo2 from "./course/useContext/demo";
import UseReducerDemo1 from "./course/useReducer";
import UseReducerDemo2 from "./course/useReducer/Counter";
import UseContextWithReducerDemo from "./course/useContextWithReducer";
import UseRefDemo from "./course/useRef";
import UseCallbackDemo from "./course/useCallback";

// 比较两个数组是否相等
import EqualArrPlus from "./course/customHooks/EqualArrPlus";
// 获取知乎日报最新列表
import ZhihuFeed2 from "./course/customHooks/ZhihuFeed2";
// 获取鼠标位置
import MousePos from "./course/customHooks/MousePos";

export default function RouterConfig() {
	return (
		<Router>
			<Route path='/' component={UseStateDemo}></Route>
			<Route path='/useRef' component={UseRefDemo}></Route>
			<Route path='/useCallback' component={UseCallbackDemo}></Route>
			<Route path='/useState2' component={UseStateDemo2}></Route>
			<Route path='/demoByClass' component={DemoByClass}></Route>
			<Route path='/demoByHooks' component={DemoByHooks}></Route>
			<Route path='/demoByControl' component={DemoByControl}></Route>
			<Route path='/useEffect1' component={UseEffectDemo1}></Route>
			<Route path='/useEffect2' component={UseEffectDemo2}></Route>
			<Route path='/useEffect3' component={UseEffectDemo3}></Route>
			<Route path='/customHooks' component={CustomHooksDemo}></Route>
			<Route path='/useContext1' component={UseContextDemo1}></Route>
			<Route path='/useContext2' component={UseContextDemo2}></Route>
			<Route path='/useReducer1' component={UseReducerDemo1}></Route>
			<Route path='/useReducer2' component={UseReducerDemo2}></Route>
			<Route
				path='/useContextWithReducer'
				component={UseContextWithReducerDemo}></Route>
			<Route path='/EqualArrPlus' component={EqualArrPlus}></Route>
			<Route path='/ZhihuFeed2' component={ZhihuFeed2}></Route>
			<Route path='/MousePos' component={MousePos}></Route>
		</Router>
	);
}
