'use strict';
{
    window.addEventListener('load', function() {
        const fieldsets = document.querySelectorAll('fieldset.collapse');
        for (const [i, elem] of fieldsets.entries()) {
            if (elem.querySelectorAll('div.errors, ul.errorlist').length === 0) {
                elem.classList.add('collapsed');
                const h2 = elem.querySelector('h2');
                const link = document.createElement('a');
                link.id = 'fieldsetcollapser' + i;
                link.className = 'collapse-toggle';
                link.href = '#';
                link.textContent = gettext('Show');
                h2.appendChild(document.createTextNode(' ('));
                h2.appendChild(link);
                h2.appendChild(document.createTextNode(')'));
            }
        }
        const toggleFunc = function(ev) {
            if (ev.target.matches('.collapse-toggle')) {
                ev.preventDefault();
                ev.stopPropagation();
                const fieldset = ev.target.closest('fieldset');
                if (fieldset.classList.contains('collapsed')) {
                    ev.target.textContent = gettext('Hide');
                    fieldset.classList.remove('collapsed');
                } else {
                    ev.target.textContent = gettext('Show');
                    fieldset.classList.add('collapsed');
                }
            }
        };
        document.querySelectorAll('fieldset.module').forEach(function(el) {
            el.addEventListener('click', toggleFunc);
        });
    });
}
