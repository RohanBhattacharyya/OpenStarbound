const assetInput = document.getElementById('assetFile');
assetInput.addEventListener('change', async () => {
  const file = assetInput.files[0];
  if (!file) return;
  document.getElementById('status').textContent = 'Loading assets...';
  const buf = await file.arrayBuffer();
  Module.FS_createDataFile('/', 'assets.pak', new Uint8Array(buf), true, true);
  if (Module.callMain) Module.callMain([]);
});
