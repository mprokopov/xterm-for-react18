var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import PropTypes from 'prop-types';
import 'xterm/css/xterm.css';
// We are using these as types.
// eslint-disable-next-line no-unused-vars
import { Terminal } from 'xterm';
var Xterm = /** @class */ (function (_super) {
    __extends(Xterm, _super);
    function Xterm(props) {
        var _this = _super.call(this, props) || this;
        _this.terminalRef = React.createRef();
        // Bind Methods
        _this.onData = _this.onData.bind(_this);
        _this.onCursorMove = _this.onCursorMove.bind(_this);
        _this.onKey = _this.onKey.bind(_this);
        _this.onBinary = _this.onBinary.bind(_this);
        _this.onLineFeed = _this.onLineFeed.bind(_this);
        _this.onScroll = _this.onScroll.bind(_this);
        _this.onSelectionChange = _this.onSelectionChange.bind(_this);
        _this.onRender = _this.onRender.bind(_this);
        _this.onResize = _this.onResize.bind(_this);
        _this.onTitleChange = _this.onTitleChange.bind(_this);
        _this.setupTerminal();
        return _this;
    }
    Xterm.prototype.setupTerminal = function () {
        var _this = this;
        // Setup the XTerm terminal.
        this.terminal = new Terminal(this.props.options);
        // Load addons if the prop exists.
        if (this.props.addons) {
            this.props.addons.forEach(function (addon) {
                _this.terminal.loadAddon(addon);
            });
        }
        // Create Listeners
        this.terminal.onBinary(this.onBinary);
        this.terminal.onCursorMove(this.onCursorMove);
        this.terminal.onData(this.onData);
        this.terminal.onKey(this.onKey);
        this.terminal.onLineFeed(this.onLineFeed);
        this.terminal.onScroll(this.onScroll);
        this.terminal.onSelectionChange(this.onSelectionChange);
        this.terminal.onRender(this.onRender);
        this.terminal.onResize(this.onResize);
        this.terminal.onTitleChange(this.onTitleChange);
        // Add Custom Key Event Handler
        if (this.props.customKeyEventHandler) {
            this.terminal.attachCustomKeyEventHandler(this.props.customKeyEventHandler);
        }
    };
    Xterm.prototype.componentDidMount = function () {
        if (this.terminalRef.current) {
            // Creates the terminal within the container element.
            this.terminal.open(this.terminalRef.current);
        }
    };
    Xterm.prototype.componentWillUnmount = function () {
        // When the component unmounts dispose of the terminal and all of its listeners.
        this.terminal.dispose();
    };
    Xterm.prototype.onBinary = function (data) {
        if (this.props.onBinary)
            this.props.onBinary(data);
    };
    Xterm.prototype.onCursorMove = function () {
        if (this.props.onCursorMove)
            this.props.onCursorMove();
    };
    Xterm.prototype.onData = function (data) {
        if (this.props.onData)
            this.props.onData(data);
    };
    Xterm.prototype.onKey = function (event) {
        if (this.props.onKey)
            this.props.onKey(event);
    };
    Xterm.prototype.onLineFeed = function () {
        if (this.props.onLineFeed)
            this.props.onLineFeed();
    };
    Xterm.prototype.onScroll = function (newPosition) {
        if (this.props.onScroll)
            this.props.onScroll(newPosition);
    };
    Xterm.prototype.onSelectionChange = function () {
        if (this.props.onSelectionChange)
            this.props.onSelectionChange();
    };
    Xterm.prototype.onRender = function (event) {
        if (this.props.onRender)
            this.props.onRender(event);
    };
    Xterm.prototype.onResize = function (event) {
        if (this.props.onResize)
            this.props.onResize(event);
    };
    Xterm.prototype.onTitleChange = function (newTitle) {
        if (this.props.onTitleChange)
            this.props.onTitleChange(newTitle);
    };
    Xterm.prototype.render = function () {
        return React.createElement("div", { className: this.props.className, ref: this.terminalRef });
    };
    Xterm.propTypes = {
        className: PropTypes.string,
        options: PropTypes.object,
        addons: PropTypes.array,
        onBinary: PropTypes.func,
        onCursorMove: PropTypes.func,
        onData: PropTypes.func,
        onKey: PropTypes.func,
        onLineFeed: PropTypes.func,
        onScroll: PropTypes.func,
        onSelectionChange: PropTypes.func,
        onRender: PropTypes.func,
        onResize: PropTypes.func,
        onTitleChange: PropTypes.func,
        customKeyEventHandler: PropTypes.func,
    };
    return Xterm;
}(React.Component));
export default Xterm;
//# sourceMappingURL=XTerm.js.map