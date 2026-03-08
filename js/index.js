const productListDom = document.getElementById('productList');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const quoteFloatBar = document.getElementById('quoteFloatBar');
const selectedCountDom = document.getElementById('selectedCount');
const totalAmountDom = document.getElementById('totalAmount');
const clearQuoteBtn = document.getElementById('clearQuoteBtn');
const exportQuoteBtn = document.getElementById('exportQuoteBtn');
const passwordModal = document.getElementById('passwordModal');
const passwordInput = document.getElementById('passwordInput');
const passwordSubmit = document.getElementById('passwordSubmit');
const passwordCancel = document.getElementById('passwordCancel');
const quoteModal = document.getElementById('quoteModal');
const quotePreview = document.getElementById('quotePreview');
const printQuoteBtn = document.getElementById('printQuoteBtn');
const closeQuoteModal = document.getElementById('closeQuoteModal');
const aboutLink = document.getElementById('aboutLink');
const contactLink = document.getElementById('contactLink');
const aboutModal = document.getElementById('aboutModal');
const contactModal = document.getElementById('contactModal');
const closeAboutModal = document.getElementById('closeAboutModal');
const closeContactModal = document.getElementById('closeContactModal');
const exportExcelBtn = document.getElementById('exportExcelBtn');

let activeCategory = "全部商品";
let selectedProducts = {};
let wholesaleUnlocked = false;
const CORRECT_PASSWORD = "123456";

function renderProduct(list) {
    productListDom.innerHTML = "";

    if (list.length === 0) {
        productListDom.innerHTML = '<div style="text-align:center;padding:50px;color:#999;">暂无匹配的商品</div>';
        return;
    }

    list.forEach(product => {
        const isSelected = selectedProducts[product.id];
        const quantity = isSelected ? selectedProducts[product.id].quantity : 1;
        const wholesaleDisplay = wholesaleUnlocked 
            ? `批发价：¥${product.wholesalePrice.toFixed(2)}`
            : '批发价：🔒 点击解锁';

        const productCard = `
            <div class="product-card ${isSelected ? 'selected' : ''}" data-id="${product.id}">
                <input type="checkbox" class="product-select" ${isSelected ? 'checked' : ''} data-id="${product.id}">
                <div class="product-img" style="background-image: url('${product.imgUrl}')" data-img="${product.imgUrl}"></div>
                <div class="product-info">
                    <div class="product-name" title="${product.name}">${product.name}</div>
                    <div class="product-price">
                        <span class="retail-price">零售价：¥${product.retailPrice.toFixed(2)}</span>
                        <span class="wholesale-price ${wholesaleUnlocked ? '' : 'locked'}" data-id="${product.id}">
                            ${wholesaleDisplay}
                        </span>
                    </div>
                    <div class="product-quantity">
                        <label>数量：</label>
                        <input type="number" min="1" value="${quantity}" data-id="${product.id}" class="quantity-input">
                    </div>
                </div>
            </div>
        `;
        productListDom.innerHTML += productCard;
    });

    bindProductEvents();
    handleImageError();
}

function bindProductEvents() {
    document.querySelectorAll('.product-select').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const id = parseInt(e.target.dataset.id);
            const card = e.target.closest('.product-card');
            const quantityInput = card.querySelector('.quantity-input');
            const quantity = parseInt(quantityInput.value) || 1;

            if (e.target.checked) {
                const product = productList.find(p => p.id === id);
                selectedProducts[id] = {
                    ...product,
                    quantity: quantity
                };
                card.classList.add('selected');
            } else {
                delete selectedProducts[id];
                card.classList.remove('selected');
            }

            updateQuoteBar();
        });
    });

    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', (e) => {
            const id = parseInt(e.target.dataset.id);
            let quantity = parseInt(e.target.value) || 1;
            if (quantity < 1) quantity = 1;
            e.target.value = quantity;

            if (selectedProducts[id]) {
                selectedProducts[id].quantity = quantity;
                updateQuoteBar();
            }
        });
    });

    document.querySelectorAll('.wholesale-price.locked').forEach(el => {
        el.addEventListener('click', () => {
            passwordModal.classList.add('show');
            passwordInput.focus();
        });
    });
}

function handleImageError() {
    document.querySelectorAll('.product-img').forEach(img => {
        img.onerror = function() {
            this.classList.add('error');
            this.style.backgroundImage = '';
        };

        const imgEl = new Image();
        imgEl.src = img.dataset.img;
        imgEl.onerror = () => {
            img.classList.add('error');
            img.style.backgroundImage = '';
        };
    });
}

function updateQuoteBar() {
    const count = Object.keys(selectedProducts).length;
    let total = 0;

    Object.values(selectedProducts).forEach(product => {
        const price = wholesaleUnlocked ? product.wholesalePrice : product.retailPrice;
        total += price * product.quantity;
    });

    selectedCountDom.textContent = count;
    totalAmountDom.textContent = `¥${total.toFixed(2)}`;

    if (count > 0) {
        quoteFloatBar.classList.add('show');
    } else {
        quoteFloatBar.classList.remove('show');
    }
}

function bindCategoryEvent() {
    const categoryTabs = document.querySelectorAll('.category-tab');

    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            activeCategory = tab.innerText;

            const filteredList = activeCategory === "全部商品"
                ? productList
                : productList.filter(product => product.category === activeCategory);

            renderProduct(filteredList);
        });
    });
}

function bindSearchEvent() {
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

function performSearch() {
    const keyword = searchInput.value.trim().toLowerCase();

    if (!keyword) {
        const filteredList = activeCategory === "全部商品"
            ? productList
            : productList.filter(product => product.category === activeCategory);
        renderProduct(filteredList);
        return;
    }

    const searchResult = productList.filter(product => 
        product.name.toLowerCase().includes(keyword) ||
        product.category.toLowerCase().includes(keyword)
    );

    document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
    renderProduct(searchResult);
}

function bindPasswordModalEvent() {
    passwordSubmit.addEventListener('click', () => {
        if (passwordInput.value === CORRECT_PASSWORD) {
            wholesaleUnlocked = true;
            passwordModal.classList.remove('show');
            passwordInput.value = '';

            const filteredList = activeCategory === "全部商品"
                ? productList
                : productList.filter(product => product.category === activeCategory);
            renderProduct(filteredList);

            updateQuoteBar();
            alert('批发价已解锁！');
        } else {
            alert('密码错误，请重试！');
            passwordInput.value = '';
            passwordInput.focus();
        }
    });

    passwordCancel.addEventListener('click', () => {
        passwordModal.classList.remove('show');
        passwordInput.value = '';
    });

    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            passwordSubmit.click();
        }
    });
}

function bindQuoteModalEvent() {
    clearQuoteBtn.addEventListener('click', () => {
        selectedProducts = {};
        updateQuoteBar();

        const filteredList = activeCategory === "全部商品"
            ? productList
            : productList.filter(product => product.category === activeCategory);
        renderProduct(filteredList);
    });

    exportQuoteBtn.addEventListener('click', generateQuote);

    printQuoteBtn.addEventListener('click', () => {
        window.print();
    });

    closeQuoteModal.addEventListener('click', () => {
        quoteModal.classList.remove('show');
    });

    exportExcelBtn.addEventListener('click', exportToExcel);
}

function generateQuote() {
    const products = Object.values(selectedProducts);

    if (products.length === 0) {
        alert('请先选择商品！');
        return;
    }

    let tableRows = '';
    let totalRetail = 0;
    let totalWholesale = 0;

    products.forEach((product, index) => {
        const retailSubtotal = product.retailPrice * product.quantity;
        const wholesaleSubtotal = product.wholesalePrice * product.quantity;
        totalRetail += retailSubtotal;
        totalWholesale += wholesaleSubtotal;

        tableRows += `
            <tr>
                <td>${index + 1}</td>
                <td>${product.name}</td>
                <td>${product.category}</td>
                <td>¥${product.retailPrice.toFixed(2)}</td>
                <td>${wholesaleUnlocked ? '¥' + product.wholesalePrice.toFixed(2) : '***'}</td>
                <td>${product.quantity}</td>
                <td>¥${retailSubtotal.toFixed(2)}</td>
                <td>${wholesaleUnlocked ? '¥' + wholesaleSubtotal.toFixed(2) : '***'}</td>
            </tr>
        `;
    });

    const now = new Date();
    const dateStr = `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日`;

    quotePreview.innerHTML = `
        <div class="quote-header">
            <h2>荣明达商行报价单</h2>
            <p>报价日期：${dateStr} | 联系电话：138XXXX1234</p>
        </div>
        <table>
            <thead>
                <tr>
                    <th>序号</th>
                    <th>商品名称</th>
                    <th>分类</th>
                    <th>零售单价</th>
                    <th>批发单价</th>
                    <th>数量</th>
                    <th>零售小计</th>
                    <th>批发小计</th>
                </tr>
            </thead>
            <tbody>
                ${tableRows}
                <tr class="total-row">
                    <td colspan="6">合计</td>
                    <td>¥${totalRetail.toFixed(2)}</td>
                    <td>${wholesaleUnlocked ? '¥' + totalWholesale.toFixed(2) : '***'}</td>
                </tr>
            </tbody>
        </table>
        <p style="margin-top:15px;color:#666;font-size:12px;">
            注：批发价需授权查看。本报价单仅供参考，实际价格以商行确认为准。
        </p>
    `;

    quoteModal.classList.add('show');
}

function exportToExcel() {
    const products = Object.values(selectedProducts);

    if (products.length === 0) {
        alert('请先选择商品！');
        return;
    }

    let totalRetail = 0;
    let totalWholesale = 0;

    let csvContent = '\uFEFF'; // BOM for UTF-8
    csvContent += '荣明达商行报价单\n';
    csvContent += '报价日期,' + new Date().toLocaleDateString('zh-CN') + '\n';
    csvContent += '联系电话,138XXXX1234\n\n';
    csvContent += '序号,商品名称,分类,零售单价,批发单价,数量,零售小计,批发小计\n';

    products.forEach((product, index) => {
        const retailSubtotal = product.retailPrice * product.quantity;
        const wholesaleSubtotal = product.wholesalePrice * product.quantity;
        totalRetail += retailSubtotal;
        totalWholesale += wholesaleSubtotal;

        const wholesalePriceStr = wholesaleUnlocked ? product.wholesalePrice.toFixed(2) : '***';
        const wholesaleSubtotalStr = wholesaleUnlocked ? wholesaleSubtotal.toFixed(2) : '***';

        csvContent += `${index + 1},${product.name},${product.category},${product.retailPrice.toFixed(2)},${wholesalePriceStr},${product.quantity},${retailSubtotal.toFixed(2)},${wholesaleSubtotalStr}\n`;
    });

    csvContent += `合计,,,,,,${totalRetail.toFixed(2)},${wholesaleUnlocked ? totalWholesale.toFixed(2) : '***'}\n`;
    csvContent += '\n注：批发价需授权查看。本报价单仅供参考，实际价格以商行确认为准。';

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `荣明达商行报价单_${new Date().toLocaleDateString('zh-CN').replace(/\//g, '-')}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function bindInfoModalEvent() {
    aboutLink.addEventListener('click', (e) => {
        e.preventDefault();
        aboutModal.classList.add('show');
    });

    contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        contactModal.classList.add('show');
    });

    closeAboutModal.addEventListener('click', () => {
        aboutModal.classList.remove('show');
    });

    closeContactModal.addEventListener('click', () => {
        contactModal.classList.remove('show');
    });

    aboutModal.addEventListener('click', (e) => {
        if (e.target === aboutModal) {
            aboutModal.classList.remove('show');
        }
    });

    contactModal.addEventListener('click', (e) => {
        if (e.target === contactModal) {
            contactModal.classList.remove('show');
        }
    });
}

window.onload = () => {
    renderProduct(productList);
    bindCategoryEvent();
    bindSearchEvent();
    bindPasswordModalEvent();
    bindQuoteModalEvent();
    bindInfoModalEvent();

    console.log("报价系统初始化完成，共加载" + productList.length + "个商品");
};
