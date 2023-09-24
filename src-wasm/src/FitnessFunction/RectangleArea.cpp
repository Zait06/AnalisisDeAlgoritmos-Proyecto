#include "RectangleArea.h"

#include <cmath>
#include <math.h>

RectangleArea::RectangleArea() {}

float RectangleArea::compute(VectorType x) const {
    if (x.size() != 4) return 0.0;
    VectorType p00 = x.head(2);
    VectorType p01 = x.tail(2);
    float width = sqrt(pow(p01[0] - p00[0], 2));
    float heigth = sqrt(pow(p01[1] - p00[1], 2));
    return width * heigth;
}
