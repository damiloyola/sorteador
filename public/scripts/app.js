'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sorteador = function (_React$Component) {
    _inherits(Sorteador, _React$Component);

    function Sorteador(props) {
        _classCallCheck(this, Sorteador);

        var _this = _possibleConstructorReturn(this, (Sorteador.__proto__ || Object.getPrototypeOf(Sorteador)).call(this, props));

        _this.handleDelete = _this.handleDelete.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.handleSort = _this.handleSort.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);

        _this.state = {
            options: []
        };
        return _this;
    }

    _createClass(Sorteador, [{
        key: 'handleDelete',
        value: function handleDelete() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return option !== optionToRemove;
                    })
                };
            });
        }
    }, {
        key: 'handleSort',
        value: function handleSort() {
            var randNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randNum];
            alert(option);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Ingrese una opcion valida';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'Esa opcion ya existe';
            }

            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = 'Sorteador';
            var subtitle = 'Elije un ganador al azar!';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Options, { options: this.state.options, handleDeleteOption: this.handleDeleteOption }),
                React.createElement(AddOptions, { handleAddOption: this.handleAddOption }),
                React.createElement(Action, { hasOption: this.state.options.length > 0, handleSort: this.handleSort, handleDelete: this.handleDelete })
            );
        }
    }]);

    return Sorteador;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleSort, disabled: !props.hasOption },
            'Sortear!'
        ),
        React.createElement(
            'button',
            { onClick: props.handleDelete },
            'Borrar Todos'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        props.options.map(function (op) {
            return React.createElement(Option, {
                key: op,
                option: op,
                handleDeleteOption: props.handleDeleteOption
            });
        })
    );
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'li',
            null,
            props.option,
            React.createElement(
                'button',
                {
                    onClick: function onClick(e) {
                        props.handleDeleteOption(props.option);
                    }
                },
                'Borrar'
            )
        )
    );
};

var AddOptions = function (_React$Component2) {
    _inherits(AddOptions, _React$Component2);

    function AddOptions(props) {
        _classCallCheck(this, AddOptions);

        var _this2 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

        _this2.handleAdd = _this2.handleAdd.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOptions, [{
        key: 'handleAdd',
        value: function handleAdd(e) {
            e.preventDefault();

            var option = e.target.elements.option.value.trim();
            e.target.elements.option.value = '';
            var error = this.props.handleAddOption(option);
            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAdd },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        { type: 'submit' },
                        'Agregar'
                    )
                )
            );
        }
    }]);

    return AddOptions;
}(React.Component);

ReactDOM.render(React.createElement(Sorteador, null), document.getElementById('app'));
