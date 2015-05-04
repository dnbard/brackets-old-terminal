define(function(require, exports, module){
    var ExtensionUtils = brackets.getModule('utils/ExtensionUtils'),
        Menus = brackets.getModule('command/Menus'),
        CommandManager = brackets.getModule('command/CommandManager'),
        lsKey = '__ot-state';

    var oldTerminalState = !JSON.parse(localStorage.getItem(lsKey) || 'true');
    var viewMenu = Menus.getMenu(Menus.AppMenuBar.VIEW_MENU);

    var command = CommandManager.register('Vintage Terminal effect', 'ot-toggle', function(){
        oldTerminalState = !oldTerminalState;

        if (oldTerminalState){
            ExtensionUtils.loadStyleSheet(module, 'old-terminal.css');
        } else {
            $('link[href*="old-terminal.css"]').remove();
        }

        command.setChecked(oldTerminalState);
        localStorage.setItem(lsKey, oldTerminalState);
    });

    viewMenu.addMenuItem('ot-toggle');
    command.execute();
});
