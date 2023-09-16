#include "BaseFitnessFn.h"

BaseFitnessFn::BaseFitnessFn() {}

float BaseFitnessFn::compute(VectorType x) const { return x.array().sum(); }
