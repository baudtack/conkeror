require("bindings/default/browser_buffer_normal.js");

var browser_buffer_text_keymap = new keymap($parent = browser_buffer_normal_keymap);

define_key(browser_buffer_text_keymap, "C-a", "cmd_beginLine");
define_key(browser_buffer_text_keymap, "C-e", "cmd_endLine");
define_key(browser_buffer_text_keymap, "back_space", "cmd_deleteCharBackward");
define_key(browser_buffer_text_keymap, "M-back_space", "cmd_deleteWordBackward");
define_key(browser_buffer_text_keymap, "C-d", "cmd_deleteCharForward");
define_key(browser_buffer_text_keymap, "M-d", "cmd_deleteWordForward");
define_key(browser_buffer_text_keymap, "C-b", "cmd_charPrevious");
define_key(browser_buffer_text_keymap, "left", "cmd_charPrevious");
define_key(browser_buffer_text_keymap, "M-b", "cmd_wordPrevious");
define_key(browser_buffer_text_keymap, "C-f", "cmd_charNext");
define_key(browser_buffer_text_keymap, "right", "cmd_charNext");
define_key(browser_buffer_text_keymap, "M-f", "cmd_wordNext");
define_key(browser_buffer_text_keymap, "M-w", "cmd_copy");
define_key(browser_buffer_text_keymap, "C-k", "cmd_deleteToEndOfLine");

// 101 keys
define_key(browser_buffer_text_keymap, "S-home", "cmd_selectBeginLine");
define_key(browser_buffer_text_keymap, "S-end", "cmd_selectEndLine");
define_key(browser_buffer_text_keymap, "C-back_space", "cmd_deleteWordBackward");
define_key(browser_buffer_text_keymap, "C-S-left", "cmd_selectWordPrevious");
define_key(browser_buffer_text_keymap, "C-S-right", "cmd_selectWordNext");

// Nasty keys
define_key(browser_buffer_text_keymap, "C-r","cmd_redo");


define_key(browser_buffer_text_keymap, "C-S-subtract", "cmd_undo");
define_key(browser_buffer_text_keymap, "C-x u", "cmd_undo");

define_key(browser_buffer_text_keymap, "C-y", "cmd_paste");
define_key(browser_buffer_text_keymap, "C-w", "cmd_cut");
define_key(browser_buffer_text_keymap, "S-delete", "cmd_cut");

define_key(browser_buffer_text_keymap, "escape", "unfocus"); // leave text input mode

// This must be at the end of browser_buffer_text_keymap defs so it's matched last.
define_key(browser_buffer_text_keymap, match_any_unmodified_key, null, $fallthrough);
