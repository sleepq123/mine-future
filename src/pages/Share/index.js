import React from 'react'
import MdEditor from 'react-markdown-editor-lite'
import MarkdownIt from 'markdown-it'
// import emoji from 'markdown-it-emoji'
// import subscript from 'markdown-it-sub'
// import superscript from 'markdown-it-sup'
// import footnote from 'markdown-it-footnote'
// import deflist from 'markdown-it-deflist'
// import abbreviation from 'markdown-it-abbr'
// import insert from 'markdown-it-ins'
// import mark from 'markdown-it-mark'
// import tasklists from 'markdown-it-task-lists'
// import 'highlight.js/styles/github.css'
 
const MOCK_DATA = "Hello.\n\n * This is markdown.\n * It is fun\n * Love it or leave it."
export default class Share extends React.Component {
  mdEditor = null
  mdParser = null
  constructor(props) {
    super(props)
    // initial a parser
    this.mdParser = new MarkdownIt({
      html: true,
      linkify: true,
      typographer: true,
    })
    // .use(emoji)
    // .use(subscript)
    // .use(superscript)
    // .use(footnote)
    // .use(deflist)
    // .use(abbreviation)
    // .use(insert)
    // .use(mark)
    // .use(tasklists, { enabled: this.taskLists })
    this.renderHTML = this.renderHTML.bind(this)
  }
  handleEditorChange({html, text}, event) {
    console.log('handleEditorChange', html, text, event)
  }
  handleImageUpload(file, callback) {
    const reader = new FileReader()
    reader.onload = () => {      
      const convertBase64UrlToBlob = (urlData) => {  
        let arr = urlData.split(','), mime = arr[0].match(/:(.*?);/)[1]
        let bstr = atob(arr[1])
        let n = bstr.length
        let u8arr = new Uint8Array(n)
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n)
        }
        return new Blob([u8arr], {type:mime})
      }
      const blob = convertBase64UrlToBlob(reader.result)
      setTimeout(() => {
        // setTimeout 模拟异步上传图片
        // 当异步上传获取图片地址后，执行calback回调（参数为imageUrl字符串），即可将图片地址写入markdown
        callback('https://avatars0.githubusercontent.com/u/21263805?s=40&v=4')
      }, 1000)
    }
    reader.readAsDataURL(file)
  }
  renderHTML(text) {
    // 模拟异步渲染Markdown
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.mdParser.render(text))
      }, 1000)
    })
  }

  render() {
    return (      
      <div>
        <section style={{ height: 500 }}>
          <MdEditor 
            ref={node => this.mdEditor = node}
            value={MOCK_DATA}
            style={{height: '500px'}}
            renderHTML={this.renderHTML}
            config={{
              view: {
                menu: true,
                md: true,
                html: true
              },
              imageUrl: 'https://octodex.github.com/images/minion.png'
            }}
            onChange={this.handleEditorChange} 
            onImageUpload={this.handleImageUpload}
          />
        </section>                        
      </div>      
    )
  }
}