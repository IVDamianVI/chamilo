/**
 * Use it like chamiloIconToClass['eye'] to get the correct class for an icon
 *
 * Transform name of icons according to https://github.com/chamilo/chamilo-lms/wiki/Graphical-design-guide#default-icons-terminology
 * to the classes needed for represent every icon
 */
export const chamiloIconToClass = {
    "edit": "mdi mdi-pencil",
    "delete": "mdi mdi-delete",
    "back": "mdi mdi-arrow-left-bold-box",
    "close": "mdi mdi-close",
    "confirm": "mdi mdi-check",
    "select-all": "mdi mdi-select-group",
    "unselect-all": "mdi mdi-select-remove",
    "camera": "mdi mdi-camera",
    "record-generic": "mdi mdi-microphone",
    "record-add": "mdi mdi-microphone-plus",
    "download": "mdi mdi-download-box",
    "restart": "mdi mdi-restart",
    "hammer-wrench": "",
    "account-multiple-plus": "",
    "cursor-move": "",
    "chevron-left": "",
    "chevron-right": "",
    "arrow-up-bold": "",
    "arrow-down-bold": "",
    "arrow-right-bold": "",
    "magnify-plus-outline": "",
    "archive-arrow-up": "",
    "alert": "mdi mdi-alert",
    "checkbox-marked": "",
    "pencil-off": "",
    "eye-on": "mdi mdi-eye",
    "eye-off": "mdi mdi-eye-off",
    "checkbox-multiple-blank": "",
    "checkbox-multiple-blank-outline": "",
    "sync": "",
    "sync-circle": "",
    "fullscreen": "",
    "fullscreen-exit": "",
    "overscan": "",
    "play-box-outline": "",
    "fit-to-screen": "",
    "bug-check": "",
    "bug-outline": "",
    "package": "",
    "text-box-plus": "",
    "rocket-launch": "",
    "content-save": "",
    "dots-vertical": "",
    "information": "mdi mdi-information",
    "account-key": "",
    "cog": "mdi mdi-cog",
    "plus": "mdi mdi-plus",
    "file-generic": "mdi mdi-file",
    "file-image": "mdi mdi-file-image",
    "file-video": "mdi mdi-file-video",
    "file-pdf": "mdi mdi-file-pdf-box",
    "file-text": "mdi mdi-file-document",
    "file-add": "mdi mdi-file-plus",
    "file-upload": "mdi mdi-file-upload",
    "file-cloud-add": "mdi mdi-cloud-plus",
    "folder-generic": "mdi mdi-folder",
    "folder-multiple-plus": "mdi mdi-folder-multiple-plus",
    "folder-plus": "mdi mdi-folder-plus",
    "folder-open": "mdi mdi-folder-open",
    "drawing": "mdi mdi-drawing",
    "view-gallery": "mdi mdi-view-gallery",
    "usage": "mdi mdi-chart-donut",
    "email-plus": "mdi mdi-email-plus-outline",
    "refresh": "mdi mdi-refresh",
    "multiple-marked": "mdi mdi-checkbox-multiple-marked-outline",
    "email-unread": "mdi mdi-email-mark-as-unread",
    "inbox": "mdi mdi-inbox",
    "send": "mdi mdi-send",
    "sent": "mdi mdi-send-check",
    "tag-outline": "mdi mdi-tag-outline",
    "microphone": "mdi mdi-microphone",
    "stop": "mdi mdi-stop",
    "attachment": "mdi mdi-attachment",
};

export const validator = (value) => {
  if (typeof (value) !== "string") {
    return false;
  }

  return Object.keys(chamiloIconToClass).includes(value);
};
