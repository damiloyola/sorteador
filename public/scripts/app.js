'use strict';

var app = {
    title: 'Sorteador',
    subtitle: '',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderTemplate();
    }
};

var onDeleteAll = function onDeleteAll() {
    app.options = [];
    renderTemplate();
};

var appRoot = document.getElementById('app');

var renderTemplate = function renderTemplate() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Opciones: ' : 'Agrega una opcion'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (item) {
                return React.createElement(
                    'li',
                    { key: '{item}' },
                    item
                );
            })
        ),
        app.options.length > 0 && React.createElement(
            'button',
            { onClick: onDeleteAll },
            'Borrar Todos'
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Agregar'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};
renderTemplate();
