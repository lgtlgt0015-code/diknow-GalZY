(function() {
    'use strict';

    const form = document.querySelector('.search-form');
    const input = form ? form.querySelector('input[name="keyword"]') : null;
    const resultContainer = document.querySelector('.search-result');
    const resultTitle = document.querySelector('.search-result--title');
    const resultList = document.querySelector('.search-result--list');
    const jsonUrl = form ? form.dataset.json : null;

    if (!form || !input || !resultContainer || !resultList || !jsonUrl) return;

    let data = [];
    let fuse = null;

    // Load Fuse.js from CDN
    const fuseScript = document.createElement('script');
    fuseScript.src = 'https://cdn.jsdelivr.net/npm/fuse.js@7.0.0/dist/fuse.min.js';
    fuseScript.onload = initSearch;
    document.head.appendChild(fuseScript);

    function initSearch() {
        fetch(jsonUrl)
            .then(r => r.json())
            .then(items => {
                data = items;
                fuse = new Fuse(items, {
                    keys: ['title', 'content'],
                    threshold: 0.4,
                    includeMatches: true
                });
            })
            .catch(err => console.error('Search load failed:', err));
    }

    function escapeHtml(str) {
        return str.replace(/[&<>"]/g, function(c) {
            return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];
        });
    }

    function highlight(text, matches) {
        if (!matches || !matches.length) return escapeHtml(text.substring(0, 200));
        let result = '';
        let last = 0;
        const m = matches[0];
        for (let i = 0; i < m.indices.length; i++) {
            const [s, e] = m.indices[i];
            result += escapeHtml(text.substring(last, s));
            result += '<mark>' + escapeHtml(text.substring(s, e + 1)) + '</mark>';
            last = e + 1;
        }
        result += escapeHtml(text.substring(last, last + 200));
        return result;
    }

    function doSearch(keyword) {
        if (!fuse || !keyword.trim()) {
            resultContainer.classList.add('hidden');
            return;
        }

        const results = fuse.search(keyword.trim());
        resultContainer.classList.remove('hidden');

        if (resultTitle) {
            resultTitle.textContent = (window.searchResultTitleTemplate || '找到 {n} 个结果')
                .replace('{n}', results.length);
        }

        resultList.innerHTML = results.map(r => {
            const item = r.item;
            const title = escapeHtml(item.title);
            const snippet = highlight(item.content, r.matches);
            const date = item.date ? new Date(item.date).toLocaleDateString('zh-CN') : '';
            return `
                <article class="article-list--compact">
                    <a href="${item.permalink}">
                        <div class="article-details">
                            <h2 class="article-title">${title}</h2>
                            <section class="article-content">${snippet}...</section>
                            <footer class="article-meta">${date}</footer>
                        </div>
                    </a>
                </article>
            `;
        }).join('');
    }

    let timeout;
    input.addEventListener('input', function() {
        clearTimeout(timeout);
        timeout = setTimeout(() => doSearch(input.value), 200);
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        doSearch(input.value);
    });
})();
