/*
** 只在生成模式的客户端中使用
*/

if (process.env.NODE_ENV === 'production') {

  const copyText = () => {
    return [ '',
             '著作权乐器之乡所有。',
             '作者：乐器之乡',
             '链接：' + location.href,
             '来源：yueqizhixiang.com',
             ''
           ].join('\n')
  }

  // 拼接成html
  const buildText = content => {
    return content + copyText()
  }
  // 拼接成html
  const buildHtml = content => {
    return content + copyText()
  }
  document.addEventListener('copy', e => {
    if(!window.getSelection) return
    const content = window.getSelection().toString()
    e.clipboardData.setData('text/plain', buildText(content))
    e.clipboardData.setData('text/html', buildHtml(content))
    e.preventDefault()
  })
}
