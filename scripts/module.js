Hooks.once('ready', async function() {
  Object.defineProperty(foundry.applications.apps.FilePicker.prototype, "canCreateFolder", {
    get: function() { return true; }
  });
  Object.defineProperty(foundry.applications.apps.FilePicker.prototype, "canUpload", {
    get: function() { return true; }
  });
});
