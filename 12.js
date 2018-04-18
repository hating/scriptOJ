/**
#12 覆盖默认样式

完成一个函数 getDefaultStyledPost，这个函数接受一个表示样式的对象作为参数，返回一个组件只有 <p> 元素的组件：

const Post = getDefaultStyledPost({ color: 'red' })
<Post /> // <p>任意内容</p>，颜色为红色
渲染出来的 <p> 元素要具有 getDefaultStyledPost 所接受对象所表示的样式。此外，返回的 Post 组件还要能够接受一个 style 对象作为 props，这个对象会和原来的样式进行合并显示：

const Post = getDefaultStyledPost({ color: 'red' })
<Post style={{ color: 'blue', fontSize: '13px' }} />
<Post style={{ fontSize: '12px' }} />
上面第一个 <Post /> 渲染结果为：颜色为蓝色，字体大小为 13px。
上面第二个 <Post /> 渲染结果为：颜色为红色，字体大小为 12px。

*/

const getDefaultStyledPost = (defaultStyle) => {
  /* TODO */
  return ({style}) => <p style={{...defaultStyle, ...style}} />;
}