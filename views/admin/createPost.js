const layout = require('../layout');

module.exports = () => {
    return layout({
        content: `
        <div class="text-toolbar">
            <a href="javascript:void(0)" onclick="format('bold')"><span class="fas fa-bold"></span></a>
            <a href="javascript:void(0)" onclick="format('italic')"><span class="fas fa-italic"></span></a>
            <a href="javascript:void(0)" onclick="format('insertunorderedlist')"><span class="fas fa-list"></span></a>
            <a href="javascript:void(0)" onclick="setUrl()"><span class="fas fa-link"></span></a>
            <span><input id="txtFormatUrl" placeholder="url" class="form-control"></span>
        </div>
        
        <div class="editor"></div>
        <button onclick="parseInput()">Submit</button>
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
        <script src="/scripts/text-editor.js"></script>
        `
    });
}