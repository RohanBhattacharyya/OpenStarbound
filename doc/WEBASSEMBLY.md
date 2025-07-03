# Building OpenStarbound for WebAssembly

This repository can be compiled with [Emscripten](https://emscripten.org/) to run in a web browser. The result is experimental and requires the original Starbound assets.

## Requirements

* Emscripten SDK (`emsdk`) installed and activated
* `cmake` 3.23 or newer and `ninja`
* [vcpkg](https://github.com/microsoft/vcpkg) with the `wasm32-web` triplet
* The Starbound `assets.pak` file (copy from your game installation)

## Steps

1. Ensure `emsdk` is active and `emcmake` is in your `PATH`.
2. Configure the project using the provided preset:

   ```bash
   cd source
   cmake --preset web-release
   ```

3. Build the project:

   ```bash
   cmake --build --preset web-release
   ```

4. The output will appear in `dist/web`. Copy `web/index.html` and `web/web.js` into this directory along with the generated `starbound.js` and `starbound.wasm` files.
5. Launch a web server to host the directory (e.g. `python3 -m http.server`) and open `index.html` in your browser.
6. When prompted, upload your `assets.pak` file to start the game.

Sound and input are handled via SDL in the browser. Settings and save data will be written to the browser's virtual file system.
