#include "FitnessSphere.h"

FitnessSphere::FitnessSphere() {}

float FitnessSphere::compute(VectorType x) const {
    return x.array().pow(2).sum();
}
