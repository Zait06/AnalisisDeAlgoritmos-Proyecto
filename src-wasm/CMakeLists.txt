cmake_minimum_required(VERSION 3.5)
project(PSO_Project)

find_package(Eigen3 REQUIRED NO_MODULE)

set(CMAKE_CXX_FLAGS ${CMAKE_CXX_FLAGS} -Werror)

if (DEFINED EMSCRIPTEN)
  add_executable(wasmFunc src/WasmFunc/wasmFunc.cpp src/WasmFunc/wasmFunc.h)

  #  set(CMAKE_EXECUTABLE_SUFFIX ".wasm")
  #  set_target_properties(wasmFunc PROPERTIES COMPILE_FLAGS "-sMODULARIZE -sEXPORTED_RUNTIME_METHODS=ccall")
  #  set_target_properties(wasmFunc PROPERTIES LINK_FLAGS    "-Os -s WASM=1 -s SIDE_MODULE=1 -s STANDALONE_WASM --no-entry")
endif()

add_executable(
    PSO_Project
    src/FitnessFunction/BaseFitnessFn.cpp
    src/FitnessFunction/FitnessSphere.cpp
    src/Particle/Particle.cpp
    src/PSO/PSO.cpp
    src/main.cpp
)
target_link_libraries(PSO_Project Eigen3::Eigen)
