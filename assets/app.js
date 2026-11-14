/* LLM Evolution Atlas — 交互逻辑
 *
 * 数据契约见 data/schema.md。每条记录至少包含：
 *   licenseType : open | closed | other
 *   entryType   : model | product | protocol | event | infrastructure
 *   countryGroup: CN | US | EU | other
 * 页面只按枚举筛选，不再猜测 license 字符串；缺失字段时自动回退到旧行为。
 */
(function () {
  'use strict';

  var GITHUB_REPO = 'https://github.com/TranslationSacrifice/llm-evolution-timeline';
  var TYPE_LABELS = {
    model: '模型',
    product: '产品 / 工具',
    protocol: '协议',
    event: '事件',
    infrastructure: '基础设施'
  };
  var FLAGS = { CN: '🇨🇳', US: '🇺🇸', EU: '🇪🇺' };
  var URL_KEYS = { country: 'c', license: 'l', type: 't', cat: 'cat', search: 'q' };
  var FILTER_GROUPS = ['country', 'license', 'type', 'cat'];

  var DATA = [];
  var state = { country: 'all', license: 'all', type: 'all', cat: 'all', search: '' };

  function $(id) { return document.getElementById(id); }

  function setText(id, value) {
    var el = $(id);
    if (el) el.textContent = value;
  }

  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
    });
  }

  function hasDigit(value) { return /\d/.test(String(value == null ? '' : value)); }
  function typeOf(record) { return record.entryType || 'model'; }
  function groupOf(record) { return record.countryGroup || 'other'; }

  /* ---------- 数据加载 ---------- */

  function loadData() {
    if (Array.isArray(window.TIMELINE_DATA)) {
      return Promise.resolve(window.TIMELINE_DATA);
    }
    var self = document.currentScript || document.querySelector('script[src$="app.js"]');
    var url = self && self.src ? new URL('../data/timeline.js', self.src).href : 'data/timeline.js';
    return new Promise(function (resolve, reject) {
      var script = document.createElement('script');
      script.src = url;
      script.onload = function () {
        if (Array.isArray(window.TIMELINE_DATA)) resolve(window.TIMELINE_DATA);
        else reject(new Error('已加载 ' + url + '，但没有得到 window.TIMELINE_DATA'));
      };
      script.onerror = function () { reject(new Error('无法加载数据文件：' + url)); };
      document.head.appendChild(script);
    });
  }

  /* ---------- 统计 ---------- */

  function modelsOnly(rows) {
    return rows.filter(function (row) { return typeOf(row) === 'model'; });
  }

  function renderStats() {
    var models = modelsOnly(DATA);
    var cn = models.filter(function (r) { return groupOf(r) === 'CN'; }).length;
    var us = models.filter(function (r) { return groupOf(r) === 'US'; }).length;
    var open = models.filter(function (r) { return r.licenseType === 'open'; }).length;
    var closed = models.filter(function (r) { return r.licenseType === 'closed'; }).length;
    var ratio = open + closed ? Math.round((open / (open + closed)) * 100) + '%' : '0%';

    setText('totalModelsCount', models.length);
    setText('cnModelsCount', cn);
    setText('usModelsCount', us);
    setText('openRatio', ratio);

    var others = DATA.length - models.length;
    setText('dataNote', '时间线共 ' + DATA.length + ' 条：' + models.length + ' 个模型' +
      (others ? '，另含 ' + others + ' 条产品 / 协议 / 事件 / 基础设施' : '') +
      '；开源比例仅按有明确授权属性的模型计算。');
  }

  /* ---------- 筛选 ---------- */

  function matches(record) {
    if (state.country !== 'all' && groupOf(record) !== state.country) return false;
    if (state.license !== 'all' && record.licenseType !== state.license) return false;
    if (state.type !== 'all') {
      var t = typeOf(record);
      if (state.type === 'meta' ? (t === 'model' || t === 'product') : t !== state.type) return false;
    }
    if (state.cat !== 'all' && record.category !== state.cat) return false;
    if (state.search) {
      var haystack = [
        record.name, record.company, record.highlight, record.category,
        record.parameters, record.contextWindow, record.era
      ].concat(record.keyTech || []).join(' ').toLowerCase();
      if (haystack.indexOf(state.search) === -1) return false;
    }
    return true;
  }

  /* ---------- 渲染 ---------- */

  function licenseBadge(record) {
    if (record.licenseType === 'open') return '<span class="badge badge-open">开源权重</span>';
    if (record.licenseType === 'closed') return '<span class="badge badge-closed">闭源</span>';
    return '<span class="badge badge-other">协议 / 论文</span>';
  }

  function cardHtml(record) {
    var type = typeOf(record);
    var specs = [];
    if (record.parameters && record.parameters !== 'N/A') {
      specs.push('<span><strong>参数:</strong> ' + esc(record.parameters) + '</span>');
    }
    if (hasDigit(record.contextWindow)) {
      specs.push('<span><strong>上下文:</strong> ' + esc(record.contextWindow) + '</span>');
    }
    if (type !== 'model') {
      specs.push('<span><strong>类型:</strong> ' + esc(TYPE_LABELS[type] || type) + '</span>');
    }
    var tags = (record.keyTech || []).slice(0, 6).map(function (tag) {
      return '<span class="tech-tag">' + esc(tag) + '</span>';
    }).join('');

    return '<div class="timeline-dot" aria-hidden="true"></div>' +
      '<div class="card" role="button" tabindex="0" data-id="' + esc(record.id) + '">' +
        '<div class="card-header">' +
          '<span class="card-date">' + esc(record.date) + '</span>' +
          '<div><span class="badge badge-cat">' + esc(record.category) + '</span>' +
          licenseBadge(record) + '</div>' +
        '</div>' +
        '<div class="card-title">' + esc(record.name) + '</div>' +
        '<div class="card-company">' + (FLAGS[groupOf(record)] || '🌐') + ' ' + esc(record.company) + '</div>' +
        (specs.length ? '<div class="card-specs">' + specs.join('') + '</div>' : '') +
        '<div class="card-highlight">' + esc(record.highlight) + '</div>' +
        (tags ? '<div class="tag-container">' + tags + '</div>' : '') +
      '</div>';
  }

  function renderTimeline() {
    var wrap = $('timelineContainer');
    if (!wrap) return;
    Array.prototype.slice.call(wrap.querySelectorAll('.timeline-item, .year-marker, .empty-state'))
      .forEach(function (node) { node.remove(); });

    var rows = DATA.filter(matches);
    if (!rows.length) {
      var empty = document.createElement('div');
      empty.className = 'empty-state';
      empty.textContent = '没有找到符合当前筛选条件的模型，试试放宽条件或点击"重置"。';
      wrap.appendChild(empty);
      return;
    }

    var fragment = document.createDocumentFragment();
    var previousYear = '';
    var index = 0;

    rows.forEach(function (record) {
      var year = String(record.date || '').slice(0, 4);
      if (year !== previousYear) {
        previousYear = year;
        var marker = document.createElement('div');
        marker.className = 'year-marker';
        marker.innerHTML = '<span>' + esc(year) + '</span>';
        fragment.appendChild(marker);
      }
      var item = document.createElement('div');
      item.className = 'timeline-item ' + (index % 2 === 0 ? 'left' : 'right');
      item.innerHTML = cardHtml(record);
      fragment.appendChild(item);
      index += 1;
    });

    wrap.appendChild(fragment);
  }

  /* ---------- 详情弹窗 ---------- */

  function openModal(id) {
    var record = DATA.filter(function (row) { return row.id === id; })[0];
    if (!record) return;

    var badgeClass = record.licenseType === 'open' ? 'badge-open'
      : record.licenseType === 'closed' ? 'badge-closed' : 'badge-other';

    setText('modalDate', record.date + ' · ' + record.category);
    setText('modalTitle', record.name);
    setText('modalHighlight', record.highlight);

    var company = $('modalCompany');
    if (company) {
      company.innerHTML = (FLAGS[groupOf(record)] || '🌐') + ' ' + esc(record.company) +
        ' <span class="badge ' + badgeClass + '" style="margin-left:0.5rem">' + esc(record.license) + '</span>' +
        (typeOf(record) !== 'model' ? ' <span class="badge badge-other" style="margin-left:0.4rem">' + esc(TYPE_LABELS[typeOf(record)]) + '</span>' : '');
    }

    var specs = $('modalSpecs');
    if (specs) {
      var parts = [];
      if (record.parameters && record.parameters !== 'N/A') parts.push('<span><strong>参数规模:</strong> ' + esc(record.parameters) + '</span>');
      if (hasDigit(record.contextWindow)) parts.push('<span><strong>上下文:</strong> ' + esc(record.contextWindow) + '</span>');
      parts.push('<span><strong>阶段:</strong> ' + esc(record.era || '—') + '</span>');
      specs.innerHTML = parts.join('');
    }

    var tags = $('modalTags');
    if (tags) {
      tags.innerHTML = (record.keyTech || []).map(function (tag) {
        return '<span class="tech-tag" style="font-size:0.85rem">' + esc(tag) + '</span>';
      }).join('');
    }

    var doc = $('modalDocLink');
    if (doc) {
      if (record.docLink) {
        doc.href = GITHUB_REPO + '/blob/main/' + record.docLink;
        doc.style.display = 'inline-block';
      } else {
        doc.style.display = 'none';
      }
    }

    var source = $('modalSource');
    if (source) {
      if (record.source) {
        source.href = record.source;
        source.textContent = '🔗 参考来源';
        source.style.display = 'inline-block';
      } else {
        source.style.display = 'none';
      }
    }

    var modal = $('detailModal');
    if (modal) modal.classList.add('active');
  }

  function closeModal() {
    var modal = $('detailModal');
    if (modal) modal.classList.remove('active');
  }

  /* ---------- 交互与 URL 状态 ---------- */

  function setFilter(event) {
    var el = event.currentTarget || event.target;
    var group = el.getAttribute('data-filter');
    var value = el.getAttribute('data-val');
    var parent = el.parentElement;
    if (parent) {
      Array.prototype.forEach.call(parent.querySelectorAll('.pill'), function (pill) {
        pill.classList.remove('active');
      });
    }
    el.classList.add('active');
    state[group] = value;
    renderTimeline();
    syncUrl();
  }

  function applyFilters() {
    var input = $('searchInput');
    state.search = input ? input.value.trim().toLowerCase() : '';
    renderTimeline();
    syncUrl();
  }

  function resetFilters() {
    state.country = 'all';
    state.license = 'all';
    state.type = 'all';
    state.cat = 'all';
    state.search = '';
    var input = $('searchInput');
    if (input) input.value = '';
    Array.prototype.forEach.call(document.querySelectorAll('.pill'), function (pill) {
      pill.classList.toggle('active', pill.getAttribute('data-val') === 'all');
    });
    renderTimeline();
    syncUrl();
  }

  function syncUrl() {
    try {
      var params = new URLSearchParams();
      Object.keys(URL_KEYS).forEach(function (key) {
        if (state[key] && state[key] !== 'all') params.set(URL_KEYS[key], state[key]);
      });
      var query = params.toString();
      history.replaceState(null, '', query ? location.pathname + '?' + query : location.pathname);
    } catch (err) {
      /* file:// 或不支持 history API 的环境直接忽略 */
    }
  }

  function readUrl() {
    var params;
    try { params = new URLSearchParams(location.search); } catch (err) { return; }
    state.country = params.get(URL_KEYS.country) || 'all';
    state.license = params.get(URL_KEYS.license) || 'all';
    state.type = params.get(URL_KEYS.type) || 'all';
    state.cat = params.get(URL_KEYS.cat) || 'all';
    state.search = (params.get(URL_KEYS.search) || '').toLowerCase();

    FILTER_GROUPS.forEach(function (group) {
      var pills = document.querySelectorAll('.pill[data-filter="' + group + '"]');
      var wanted = state[group];
      var found = false;
      Array.prototype.forEach.call(pills, function (pill) {
        var isMatch = pill.getAttribute('data-val') === wanted;
        pill.classList.toggle('active', isMatch);
        if (isMatch) found = true;
      });
      if (!found) {
        state[group] = 'all';
        Array.prototype.forEach.call(pills, function (pill) {
          pill.classList.toggle('active', pill.getAttribute('data-val') === 'all');
        });
      }
    });

    if (state.search) {
      var input = $('searchInput');
      if (input) input.value = state.search;
    }
  }

  function toggleTheme() {
    var root = document.documentElement;
    var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    var btn = $('themeBtn');
    if (btn) btn.textContent = next === 'light' ? '🌙 切换深色' : '☀️ 切换明亮';
  }

  function bindEvents() {
    var wrap = $('timelineContainer');
    if (wrap) {
      wrap.addEventListener('click', function (event) {
        var card = event.target.closest ? event.target.closest('.card') : null;
        if (card) openModal(card.getAttribute('data-id'));
      });
      wrap.addEventListener('keydown', function (event) {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        var card = event.target.closest ? event.target.closest('.card') : null;
        if (!card) return;
        event.preventDefault();
        openModal(card.getAttribute('data-id'));
      });
    }

    Array.prototype.forEach.call(document.querySelectorAll('.pill'), function (pill) {
      pill.addEventListener('click', setFilter);
      pill.addEventListener('keydown', function (event) {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        setFilter({ currentTarget: pill, target: pill });
      });
    });

    var input = $('searchInput');
    if (input) input.addEventListener('input', applyFilters);

    var reset = $('resetBtn');
    if (reset) reset.addEventListener('click', resetFilters);

    var theme = $('themeBtn');
    if (theme) theme.addEventListener('click', toggleTheme);

    var modal = $('detailModal');
    if (modal) {
      modal.addEventListener('click', function (event) {
        if (event.target === modal) closeModal();
      });
      var close = $('modalClose');
      if (close) close.addEventListener('click', closeModal);
    }

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeModal();
    });
  }

  /* ---------- 启动 ---------- */

  function showError(message) {
    var wrap = $('timelineContainer');
    if (!wrap) return;
    var banner = document.createElement('div');
    banner.className = 'err-banner';
    banner.textContent = '数据加载失败：' + message + '。请确认 data/timeline.js 存在（或通过本地静态服务器打开）。';
    wrap.parentNode.insertBefore(banner, wrap);
  }

  function init() {
    return loadData().then(function (rows) {
      DATA = rows;
      readUrl();
      renderStats();
      renderTimeline();
      bindEvents();
      syncUrl();
      return rows;
    }).catch(function (err) {
      showError(err.message);
      return [];
    });
  }

  window.__atlas = {
    init: init,
    applyFilters: applyFilters,
    setFilter: setFilter,
    resetFilters: resetFilters,
    state: state,
    getData: function () { return DATA; }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();