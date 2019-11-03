import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import MdEdit from '@src/components/markdown-edit'
import MarkdownControls from '@src/components/markdown-edit/markdown-controls.js'

class BlogInfo extends React.Component {
    state = { 
        value: '',
        htmlMode: 'raw'
    }

    componentDidMount = () => {
        console.log(this.props.match.params);
    }

    handleMarkdownChange = (evt) => {
        this.setState({value: evt.target.value})
    }

    handleControlsChange = (mode) => {
        this.setState({ htmlMode: mode })
    }

    render() {
        return (
            <div style={{ width: 200 }}>
                <MarkdownControls onChange={this.handleControlsChange} mode={this.state.htmlMode} />
                <MdEdit value={this.state.value} onChange={this.handleMarkdownChange} />
                <ReactMarkdown
                        className="result"
                        source={this.state.value}
                        escapeHtml={false}
                    />
            </div>
        );
    }
}

export default BlogInfo;