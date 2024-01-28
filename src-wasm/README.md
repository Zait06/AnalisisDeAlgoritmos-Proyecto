## Requirements

- Ninja
- emsdk

## Compilation

### cmake

```sh
mkdir build
cd build
cmake .. -GNinja -DCMAKE_PREFIX_PATH="path/Eigen/include/eigen3"
cmake --build .
```

### emscripten

```sh
mkdir build_em
cd build_em
emcmake cmake .. -GNinja -DEigen3_DIR="path/Eigen/share/eigen3/cmake"
cmake --build .
```