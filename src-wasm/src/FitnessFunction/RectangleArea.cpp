#include "RectangleArea.h"

RectangleArea::RectangleArea() {}

float RectangleArea::compute(VectorType x) const {
    if (x.size() != 4) return 0.0;
    double x0 = x[0];
    double y0 = x[1];
    double x1 = x[2];
    double y1 = x[3];
    return x.array().pow(2).sum();
}