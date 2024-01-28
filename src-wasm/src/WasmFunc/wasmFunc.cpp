#include "wasmFunc.h"

#ifdef __EMSCRIPTEN__
#include <emscripten/emscripten.h>
#else
#define EMSCRIPTEN_KEEPALIVE
#endif

extern "C" {
EMSCRIPTEN_KEEPALIVE void sayHi() { std::cout << "Hello :D" << std::endl; }
}
